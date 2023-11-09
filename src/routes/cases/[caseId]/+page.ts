import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
    let sources = (await parent()).sources;
    let navPages = (await parent()).navPages;

    let pageSources = sources.filter(source => source.slug === params.caseId);
    let navPage = navPages.find(navPage => navPage.slug === params.caseId) || {
        slug: '' as string,
        folder: '' as string,
        strap: '' as string,
        title: '' as string,
        subtitle: '' as string,
        iref: '' as string
    } as NavPage;

    if (pageSources.length > 0) {
        return {
            pageSources: pageSources,
            navPage: navPage
        };
    }

    throw error(404, 'Not found');
};