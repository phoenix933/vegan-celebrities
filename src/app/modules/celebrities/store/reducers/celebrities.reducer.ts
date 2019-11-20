import * as fromActions from '../actions';
import { CelebritiesActionTypes } from '../actions';

import { Celebrity } from '../../models';

export interface CelebritiesState {
    celebrities: Celebrity[];
    count: number;
    selectedCelebrity: Celebrity;

    getCelebritiesLoading: boolean;
    getCelebrityLoading: boolean;
    createCelebrityLoading: boolean;
    updateCelebrityLoading: boolean;
    deleteCelebrityLoading: boolean;
}

export const initialState: CelebritiesState = {
    celebrities: [],
    count: 0,
    selectedCelebrity: null,

    getCelebritiesLoading: false,
    getCelebrityLoading: false,
    createCelebrityLoading: false,
    updateCelebrityLoading: false,
    deleteCelebrityLoading: false,
};

export function reducer(state = initialState, action: fromActions.CelebritiesAction): CelebritiesState {
    switch (action.type) {
        // Get Celebrities
        case CelebritiesActionTypes.GetCelebrities: {
            return {
                ...state,
                getCelebritiesLoading: true
            };
        }

        case CelebritiesActionTypes.GetCelebritiesSuccess: {
            const { celebrities, count, append } = action.payload;
            return {
                ...state,
                celebrities: append ? [ ...state.celebrities, ...celebrities ] : celebrities,
                count,
                getCelebritiesLoading: false
            };
        }

        case CelebritiesActionTypes.GetCelebritiesFailure: {
            return {
                ...state,
                getCelebritiesLoading: false
            };
        }

        // Get Celebrity
        case CelebritiesActionTypes.GetCelebrity: {
            return {
                ...state,
                selectedCelebrity: null,
                getCelebrityLoading: true
            };
        }

        case CelebritiesActionTypes.GetCelebritySuccess: {
            const selectedCelebrity = action.payload;
            return {
                ...state,
                selectedCelebrity,
                getCelebrityLoading: false
            };
        }

        case CelebritiesActionTypes.GetCelebrityFailure: {
            return {
                ...state,
                getCelebrityLoading: false
            };
        }

        // Create Celebrity
        case CelebritiesActionTypes.CreateCelebrity: {
            return {
                ...state,
                createCelebrityLoading: true
            };
        }

        case CelebritiesActionTypes.CreateCelebritySuccess:
        case CelebritiesActionTypes.CreateCelebrityFailure: {
            return {
                ...state,
                createCelebrityLoading: false
            };
        }

        case CelebritiesActionTypes.UpdateCelebrity: {
            return {
                ...state,
                updateCelebrityLoading: true
            };
        }

        case CelebritiesActionTypes.UpdateCelebritySuccess:
        case CelebritiesActionTypes.UpdateCelebrityFailure: {
            return {
                ...state,
                updateCelebrityLoading: false
            };
        }

        // case CelebritiesActionTypes.DeleteCelebrity: {
        //     return {
        //         ...state,
        //         deleteCelebrityLoading: true
        //     };
        // }

        // case CelebritiesActionTypes.DeleteCelebritySuccess:
        // case CelebritiesActionTypes.DeleteCelebrityFailure: {
        //     return {
        //         ...state,
        //         deleteCelebrityLoading: false
        //     };
        // }
    }

    return state;
}
