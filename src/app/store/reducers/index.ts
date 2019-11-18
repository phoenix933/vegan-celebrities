import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import * as fromRouterStore from '@ngrx/router-store';

import * as fromCategories from './categories.reducer';
import * as fromOccupations from './occupations.reducer';
import { RouterStateUrl } from './router.reducer';

export interface State {
    routerReducer: fromRouterStore.RouterReducerState<RouterStateUrl>;
    categories: fromCategories.CategoriesState;
    occupations: fromOccupations.OccupationsState;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouterStore.routerReducer,
    categories: fromCategories.reducer,
    occupations: fromOccupations.reducer
};

// export function clearState(reducer): any {
//     return (state, action): any => {
//         if (action.type === fromAuth.AuthActionTypes.SetNotAuthenticated) {
//             state = {
//                 ...state
//             };
//         }

//         return reducer(state, action);
//     };
// }

// export const metaReducers: MetaReducer<State>[] = [clearState];

export * from './router.reducer';
