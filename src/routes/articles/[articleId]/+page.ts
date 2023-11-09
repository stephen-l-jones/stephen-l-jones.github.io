import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { emptyNavPage } from '$lib/constants';

export const load: PageLoad = async ({ params, parent, fetch }) => {
    let navPages = (await parent()).navPages;
    let navPage = navPages.find(navPage => navPage.slug === params.articleId) || emptyNavPage;

    let md = await fetch(`${base}/markdown/${params.articleId}.md`).catch(() => {
        throw error(404, 'Not found');
    });

    return {
        mdArticle: await md.text(),
        navPage: navPage
    };
};