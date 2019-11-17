import { firestore } from 'firebase';

export interface Celebrity {
    id: string;
    name: string;
    about: string;
    category: string;
    occupation: string;
    slug: string;
    birthdate?: Date;
    birthplace?: string;
    height?: number;
    partner?: string;
    imageUrl: string;
    wikiUrl?: string;
    social?: {
        facebook?: string,
        instagram?: string,
        twitter?: string,
        youtube?: string,
    };
}
