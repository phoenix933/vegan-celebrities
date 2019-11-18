import { CategoriesEffects } from './categories.effects';
import { OccupationsEffects } from './occupations.effects';
import { RouterEffects } from './router.effects';

export const effects = [
    CategoriesEffects,
    OccupationsEffects,
    RouterEffects
];

export * from './categories.effects';
export * from './occupations.effects';
export * from './router.effects';
