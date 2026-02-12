interface NavPage {
    slug: string;
    folder: string;
    strap: string;
    title: string;
    subtitle: string;
    iref: string;
    rss: string;
    spotify: string;
    apple: string;
    amazon: string;
}

interface Source {
    slug: string;
    media: string;
    headline: string;
    subhead: string;
    date: Date;
    publisher: string;
    href: string;
    iref: string;
    tags: string[];
}

interface ImgSource {
    media: string;
    srcset: string;
}

