import Papa from 'papaparse';
import type { EntryGenerator } from './$types';
import fs from 'fs';


export const entries: EntryGenerator = () => {
    let pages = Papa.parse(fs.readFileSync("./src/lib/site-pages.csv").toString(), { header: true });
    let articleNames = pages.data.filter(x => (x as any).folder === "articles").map(x => (x as any).slug as string);

    return articleNames.map(x => ({ articleId: x }));
};

export const prerender = true;