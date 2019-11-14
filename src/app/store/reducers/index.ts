import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import * as fromRouterStore from '@ngrx/router-store';

import { RouterStateUrl } from './router.reducer';

export interface State {
    routerReducer: fromRouterStore.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouterStore.routerReducer,
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
