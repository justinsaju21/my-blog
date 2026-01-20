// Post type definition for TypeScript
export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any[]; // Portable Text
    publishedAt: string;
    readTime: string;
    category: string;
    categorySlug?: string;
    mainImage?: {
        asset: {
            _ref: string;
        };
        alt?: string;
    };
    author?: {
        name: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image?: any;
        bio?: string;
    };
}

// Category type
export interface Category {
    _id: string;
    title: string;
    slug: string;
    description?: string;
}
