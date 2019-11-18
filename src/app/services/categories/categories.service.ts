import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromActions from '../../store/actions';
import * as fromReducers from '../../store/reducers/categories.reducer';
import * as fromSelectors from '../../store/selectors';
import { Category } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    constructor(
        private _store: Store<fromReducers.CategoriesState>
    ) {}

    // Actions
    getCategories(): void {
        this._store.dispatch(new fromActions.GetCategories());
    }

    // Selectors
    get categories$(): Observable<Category[]> {
        return this._store.pipe(select(fromSelectors.getCategories));
    }

    get getCategoriesLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getGetCategoriesLoading));
    }
}
