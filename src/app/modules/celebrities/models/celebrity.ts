export interface Celebrity {
    id: string;
    name: string;
    slug: string;
    about: string;
    sex: 'male' | 'female';
    country: string;
    category: { id: number; name: string; };
    occupation: { id: number; name: string; };
    occupationId?: number;
    birthdate?: Date;
    height?: number;
    partner?: string;
    imageUrl: string;
    wikiUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    twitterUrl?: string;
    youtubeUrl?: string;
}
