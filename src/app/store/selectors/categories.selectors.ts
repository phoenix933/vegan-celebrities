
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoriesState } from '../reducers/categories.reducer';

export const getCategoriesState = createFeatureSelector<CategoriesState>('categories');

export const getCategories = createSelector(getCategoriesState, (state: CategoriesState) => state.categories);
export const getGetCategoriesLoading = createSelector(getCategoriesState, (state: CategoriesState) => state.getCategoriesLoading);
