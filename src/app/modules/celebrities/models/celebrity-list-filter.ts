import { Sex } from './../../../enums';

export interface CelebrityListFilter {
    search?: string;
    category?: number;
    sex?: Sex;
    country?: string;
    limit?: number;
    offset?: number;
}
