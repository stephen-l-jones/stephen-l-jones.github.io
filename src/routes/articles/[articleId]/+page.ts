import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async ({ params, parent, fetch }) => {
    let navPages = (await parent()).navPages;
    let navPage = navPages.find(navPage => navPage.slug === params.articleId) || {
        slug: '' as string,
        folder: '' as string,
        strap: '' as string,
        title: '' as string,
        subtitle: '' as string,
        iref: '' as string
    } as NavPage;

    let md = await fetch(`${base}/markdown/${params.articleId}.md`).catch(() => {
        throw error(404, 'Not found');
    });

    return {
        mdArticle: await md.text(),
        navPage: navPage
    };
};