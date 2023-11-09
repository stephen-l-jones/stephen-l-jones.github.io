const tagNames = [
    'Customer',
    'Product',
    'Finance',
    'Operations',
    'Partner',
    'Competitor',
    'Environment'
];

const emptyNavPage: NavPage = {
    slug: '' as string,
    folder: '' as string,
    strap: '' as string,
    title: '' as string,
    subtitle: '' as string,
    iref: '' as string
};

const markdownWidth = { min: 320, max: 640 };

export { tagNames, emptyNavPage, markdownWidth };