import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    let md = await fetch(`/markdown/${params.caseId}.md`).catch(() => {
        throw error(404, 'Not found');
    });

    return {
        mdScenario: await md.text()
    };
};