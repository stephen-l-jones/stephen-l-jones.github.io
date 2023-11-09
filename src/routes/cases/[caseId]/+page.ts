import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { emptyNavPage } from '$lib/constants';

export const load: PageLoad = async ({ params, parent }) => {
    let sources = (await parent()).sources;
    let pageSources = sources.filter(source => source.slug === params.caseId);
    let navPages = (await parent()).navPages;
    let navPage = navPages.find(navPage => navPage.slug === params.caseId) || emptyNavPage;

    if (pageSources.length > 0) {
        return {
            pageSources: pageSources,
            navPage: navPage
        };
    }

    throw error(404, 'Not found');
};