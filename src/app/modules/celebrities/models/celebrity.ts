export interface Celebrity {
    name: string;
    about: string;
    category: string;
    occupation: string;
    birthdate?: Date | object;
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
