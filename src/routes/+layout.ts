import type { LayoutLoad } from './$types';
import Papa from 'papaparse';
import caseSources from '$lib/case-sources.csv?raw';
import sitePages from '$lib/site-pages.csv?raw';
import { tagNames } from '$lib/constants';

export const prerender = true;
export const ssr = false;


export const load: LayoutLoad = () => {

    const sourcesUnprocessed: any[] = Papa.parse(caseSources, { header: true }).data as any;
    const pagesUnprocessed: any[] = Papa.parse(sitePages, { header: true }).data as any;

    let navPages: NavPage[] = pagesUnprocessed.map((navPage): NavPage => {
        return {
            slug: navPage.slug,
            folder: navPage.folder,
            name: navPage.name,
            title: navPage.title,
            subtitle: navPage.subtitle,
            iref: navPage.iref
        }
    })

    let sources: Source[] = sourcesUnprocessed.map((source): Source => {
        let tags: string[] = [];

        for (let tag of tagNames) {
            if (!!(source as any)[tag]) {
                tags.push(tag);
            }
        }

        return {
            slug: source.slug,
            media: source.media,
            headline: source.headline,
            subhead: source.subhead,
            date: new Date(source.date),
            publisher: source.publisher,
            href: source.href,
            iref:
                source.iref || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
            tags: tags
        };
    });

    return {
        sources,
        navPages
    };
};
