import * as fromActions from '../actions';
import { CategoriesActionTypes } from '../actions';

import { Category } from '../../models';

export interface CategoriesState {
    categories: Category[];
    getCategoriesLoading: boolean;
}

export const initialState: CategoriesState = {
    categories: [],
    getCategoriesLoading: false,
};

export function reducer(state = initialState, action: fromActions.CategoriesAction): CategoriesState {
    switch (action.type) {
        // Get Categories
        case CategoriesActionTypes.GetCategories: {
            return {
                ...state,
                getCategoriesLoading: true
            };
        }

        case CategoriesActionTypes.GetCategoriesSuccess: {
            const categories = action.payload;
            return {
                ...state,
                categories,
                getCategoriesLoading: false
            };
        }

        case CategoriesActionTypes.GetCategoriesFailure: {
            return {
                ...state,
                getCategoriesLoading: false
            };
        }
    }

    return state;
}
