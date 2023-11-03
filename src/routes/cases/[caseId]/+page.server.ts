import Papa from 'papaparse';
import type { EntryGenerator } from './$types';
import fs from 'fs';


export const entries: EntryGenerator = () => {
    let pages = Papa.parse(fs.readFileSync("./src/lib/site-pages.csv").toString(), { header: true });
    let caseNames = pages.data.filter(x => (x as any).folder === "cases").map(x => (x as any).slug as string);

    return caseNames.map(x => ({ caseId: x }));
};

export const prerender = true;