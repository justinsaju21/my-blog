// Sanity configuration
// You'll need to create a project at https://www.sanity.io/manage and get your project ID

export const sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
};
