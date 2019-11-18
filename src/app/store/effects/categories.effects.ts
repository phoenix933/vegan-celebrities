import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { CategoriesDataService } from '../../services/categories-data/categories-data.service';
import { Category } from '../../models';

import * as fromActions from '../actions';
import { CategoriesActionTypes } from '../actions';

@Injectable()
export class CategoriesEffects {
    constructor(
        private _actions$: Actions,
        private _categoriesDataService: CategoriesDataService
    ) {}

    // Get Categories
    @Effect()
    getCategories$ = this._actions$
        .pipe(
            ofType(CategoriesActionTypes.GetCategories),
            switchMap(() => {
                return this._categoriesDataService
                    .getCategories()
                    .pipe(
                        map((categories: Category[]) => new fromActions.GetCategoriesSuccess(categories)),
                        catchError(() => of(new fromActions.GetCategoriesFailure()))
                    );
            })
        );
}
