import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { emptyNavPage } from '$lib/constants';

export const load: PageLoad = async ({ params, parent, fetch }) => {
    let md = await fetch(`/markdown/${params.caseId}.md`).catch(() => {
        throw error(404, 'Not found');
    });
    let navPages = (await parent()).navPages;
    let navPage = navPages.find(navPage => navPage.slug === params.caseId) || emptyNavPage;

    return {
        mdScenario: await md.text(),
        navPage: navPage
    };
};