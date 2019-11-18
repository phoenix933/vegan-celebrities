import * as fromActions from '../actions';
import { OccupationsActionTypes } from '../actions';

import { Occupation } from '../../models';

export interface OccupationsState {
    occupations: Occupation[];
    getOccupationsLoading: boolean;
}

export const initialState: OccupationsState = {
    occupations: [],
    getOccupationsLoading: false,
};

export function reducer(state = initialState, action: fromActions.OccupationsAction): OccupationsState {
    switch (action.type) {
        // Get Occupations
        case OccupationsActionTypes.GetOccupations: {
            return {
                ...state,
                getOccupationsLoading: true
            };
        }

        case OccupationsActionTypes.GetOccupationsSuccess: {
            const occupations = action.payload;
            return {
                ...state,
                occupations,
                getOccupationsLoading: false
            };
        }

        case OccupationsActionTypes.GetOccupationsFailure: {
            return {
                ...state,
                getOccupationsLoading: false
            };
        }
    }

    return state;
}
