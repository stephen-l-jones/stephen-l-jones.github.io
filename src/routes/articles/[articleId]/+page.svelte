<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="markdown">
	<div />
	<div class="markdown-styling"><SvelteMarkdown source={data.mdArticle} /></div>
	<div />
</div>

<style>
	:global(.markdown-styling) {
		font-family: 'PT Serif', Georgia, Times, serif;
		font-size: 1.2rem;
		color: black;
	}

	:global(.markdown-styling h1) {
		font-size: 2.4rem;
		line-height: 1.1;
		margin: 0.5rem 0;
	}
	:global(.markdown-styling h2) {
		font-size: 2rem;
		line-height: 1;
		margin: 2rem 0 0.5rem 0;
	}
	:global(.markdown-styling h3) {
		font-size: 1.4rem;
		line-height: 1;
		margin: 1.3rem 0 0.3rem 0;
	}
	:global(.markdown-styling h4) {
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue,
			Arial, Noto Sans, sans-serif;
		font-size: 1.1rem;
		font-weight: normal;
		color: black;
		margin: 0.5rem 0;
	}
	:global(.markdown-styling h5) {
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue,
			Arial, Noto Sans, sans-serif;
		font-size: 1.1rem;
		color: black;
		margin: 0;
	}
	:global(.markdown-styling h6) {
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue,
			Arial, Noto Sans, sans-serif;
		font-size: 1rem;
		font-weight: 300;
		color: black;
		margin: 0 0 0.5rem 0;
	}
	:global(.markdown-styling p) {
		margin: 0 0 1rem 0;
	}

	:global(.markdown-styling a) {
		text-decoration: none;
	}

	.markdown {
		display: grid;
		flex-direction: column;
		grid-template-columns: 1fr minmax(350px, 650px) 1fr;
	}
</style>
