import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async ({ params, fetch }) => {
    let md = await fetch(`${base}/markdown/${params.articleId}.md`).catch(() => {
        throw error(404, 'Not found');
    });

    return {
        mdArticle: await md.text()
    };
};