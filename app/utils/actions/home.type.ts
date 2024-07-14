export interface HomeProps {
    object: {
        slug: string;
        title: string;
        metadata: {
            banner: {
                url: string;
            }
            heading: string;
        }
    }
}