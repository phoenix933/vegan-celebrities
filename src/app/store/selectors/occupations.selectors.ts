
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OccupationsState } from '../reducers/occupations.reducer';

export const getOccupationsState = createFeatureSelector<OccupationsState>('occupations');

export const getOccupations = createSelector(getOccupationsState, (state: OccupationsState) => state.occupations);
export const getGetOccupationsLoading = createSelector(getOccupationsState, (state: OccupationsState) => state.getOccupationsLoading);
