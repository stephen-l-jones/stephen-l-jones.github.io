# article-audio

Narration pipeline that turns my course articles (Markdown) into podcast-ready MP3s using the ElevenLabs API. Written in R. This repo is separate from my site (SPA) repo on purpose: it reads the site's Markdown but never writes to the site repo.

## Context

- Articles live in the site repo: `C:\Users\sjones1\OneDrive - UW\Documents\GitHub\stephen-l-jones.github.io\static\markdown\`
- First three articles (series *Critical Thinking in the Age of AI*):
  - `acer-critical-thinking-skills.md`
  - `critical-thinking-dispositions.md`
  - `deliberate-delegation-to-ai.md`
- Finished MP3s go to: `C:\Users\sjones1\OneDrive - UW\Teaching\Digital library\audio\`
- Audio is distributed to Spotify and other podcast platforms, which I upload to by hand.
- The SPA already handles audio. Its setup is in `site-pages.csv` in the site repo. **Read that file first** and follow its conventions for audio file names and any metadata it expects. Do not modify the site repo.
- Articles will be revised over time. Re-narrating after an edit must be cheap and low-effort. This is the main design requirement.

## Decisions already made

- ElevenLabs stock voice (no cloning), free account with pay-as-you-go credit, API (not Studio).
- Model: `eleven_multilingual_v2` (supports `<break time="…"/>` pause tags).
- API key comes from the environment variable `ELEVENLABS_API_KEY`. Never write it to a file.
- Spoken opening for each article: the title, then "By Stephen Jones."
- Skip Article 1's appendix. The narration says the skills are listed in the appendix of the written article.
- Article 3's roles table is read as two short spoken paragraphs, one per class of roles, in the third person ("users," not "you").
- Strip links (keep the link text), images, figure references, and the footer after the final `---`.
- Put all-caps opening words in normal case, so the voice doesn't spell them out.
- Add a short pause around section headings.

## Design principles

1. **The Markdown is the single source of truth.** The read-aloud script is generated from it and never hand-edited.
2. **Editorial decisions live in config, not code.** Per-article YAML holds the title, sections to skip, and block replacements (for example, the spoken version of a table). A global lexicon holds pronunciation and substitution fixes.
3. **Generated scripts are committed** (`scripts/<slug>.txt`), so `git diff` shows what will be spoken differently before any money is spent.
4. **Stable chunking.** Chunk by paragraph, combining short adjacent paragraphs only within a section, so an edit doesn't shift later chunk boundaries. Max about 2,500 characters per request.
5. **Content-hash cache.** Cache key = hash of (chunk text + voice ID + model + voice settings). Unchanged chunks are never re-billed. Pass `previous_text`/`next_text` for continuity, but leave them out of the key.
6. **Staleness is visible.** A manifest records, for each article, the Markdown source hash it was built from. A status command reports which articles changed since their last build.

## Proposed layout

```
article-audio/
├── CLAUDE.md
├── config.yml              # site markdown path, output dir, voice_id, model, voice settings, output format
├── lexicon.yml             # global spoken substitutions
├── articles/<slug>.yml     # per-article overrides
├── R/                      # functions: convert, chunk, narrate, assemble, status
├── run.R                   # CLI entry: Rscript run.R <command> [slugs]
├── scripts/<slug>.txt      # generated, committed
├── cache/                  # per-chunk MP3s, gitignored
└── manifest.json           # slug → source hash, script hash, voice, model, date, duration, characters
```

## Commands

- `status`: list articles whose Markdown changed since the last build.
- `scripts [slugs]`: regenerate read-aloud scripts.
- `estimate [slugs]`: characters and cost for the chunks that aren't cached (about $0.08 per 1,000 characters).
- `voices`: list available voices.
- `narrate [slugs]`: synthesize uncached chunks, assemble the final MP3, and update the manifest.

## Podcast output

- Join the chunks with ffmpeg rather than concatenating raw bytes.
- Normalize loudness to the podcast standard (about −16 LUFS, −1 dBTP).
- Write ID3 tags: title, artist (Stephen Jones), album (series name), track number, year, and cover art if one is configured.
- Output MP3 at 44.1 kHz and 128 kbps or higher.
- Write a sidecar `<slug>.txt` (or `.md`) episode description next to each MP3, for pasting into the podcast platform.

## R stack

`httr2` (API), `yaml`, `jsonlite`, `digest` (hashing), `commonmark` (parse Markdown to XML for reliable stripping) or careful regex, and `processx`/`system2` for ffmpeg.

## ElevenLabs API notes

- `POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}?output_format=mp3_44100_128`
- Header: `xi-api-key`. JSON body: `text`, `model_id`, `voice_settings`, `previous_text`, `next_text`.
- Check the current ElevenLabs docs before relying on any detail here.

## Workflow

1. Edit the article in the site repo.
2. Run `status`.
3. Run `scripts`.
4. Review `git diff scripts/` and adjust the lexicon or overrides.
5. Run `estimate`, then `narrate`.
6. Listen to the result.
7. Upload or replace the episode on the podcast platform.

## Build order

1. Read `site-pages.csv` and summarize its audio conventions before writing code.
2. Write `convert` with the article YAMLs, and generate the three scripts for my review.
3. Write `chunk`, the cache, and `estimate`.
4. Write `narrate` and pilot it on `deliberate-delegation-to-ai` only.
5. Write the assembly, loudness, tagging, and manifest steps.
6. Write `status`.
