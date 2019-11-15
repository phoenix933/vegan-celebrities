
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CelebritiesState } from '../reducers/celebrities.reducer';

export const getCelebritiesState = createFeatureSelector<CelebritiesState>('celebrities');

export const getCelebrities = createSelector(getCelebritiesState, (state: CelebritiesState) => state.celebrities);
export const getCelebritiesCount = createSelector(getCelebritiesState, (state: CelebritiesState) => state.count);
export const getSelectedCelebrity = createSelector(getCelebritiesState, (state: CelebritiesState) => state.selectedCelebrity);

export const getGetCelebritiesLoading = createSelector(getCelebritiesState, (state: CelebritiesState) => state.getCelebritiesLoading);
export const getGetCelebrityLoading = createSelector(getCelebritiesState, (state: CelebritiesState) => state.getCelebrityLoading);
export const getCreateCelebrityLoading = createSelector(getCelebritiesState, (state: CelebritiesState) => state.createCelebrityLoading);
export const getUpdateCelebrityLoading = createSelector(getCelebritiesState, (state: CelebritiesState) => state.updateCelebrityLoading);
export const getDeleteCelebrityLoading = createSelector(getCelebritiesState, (state: CelebritiesState) => state.deleteCelebrityLoading);
