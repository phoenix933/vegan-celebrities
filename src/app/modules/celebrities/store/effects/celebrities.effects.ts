import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError, mapTo, tap, pluck} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromRootActions from '../../../../store/actions';
import { CelebritiesDataService } from '../../services/celebrities-data/celebrities-data.service';
import { Celebrity } from '../../models';

import * as fromActions from '../actions';
import { CelebritiesActionTypes } from '../actions';

@Injectable()
export class CelebritiesEffects {
    constructor(
        private _actions$: Actions,
        private _celebritiesDataService: CelebritiesDataService,
    ) {}

    // Get Celebrities
    @Effect()
    getCelebrities$ = this._actions$
        .pipe(
            ofType(CelebritiesActionTypes.GetCelebrities),
            switchMap(() => {
                return this._celebritiesDataService
                    .getCelebrities()
                    .pipe(
                        map((celebrities: Celebrity[]) => new fromActions.GetCelebritiesSuccess(celebrities)),
                        catchError(() => of(new fromActions.GetCelebritiesFailure()))
                    );
            })
        );

    // // Get Celebrity
    // @Effect()
    // getCelebrity$ = this._actions$
    //     .pipe(
    //         ofType(CelebritiesActionTypes.GetCelebrity),
    //         map((action: fromActions.GetCelebrity) => action.payload),
    //         switchMap((id: number) => {
    //             return this._celebritiesDataService
    //                 .getCelebrity(id)
    //                 .pipe(
    //                     map((celebrity: Celebrity) => new fromActions.GetCelebritySuccess(celebrity)),
    //                     catchError(() => of(new fromActions.GetCelebrityFailure()))
    //                 );
    //         })
    //     );

    // Create Celebrity
    @Effect()
    createCelebrity$ = this._actions$
        .pipe(
            ofType(CelebritiesActionTypes.CreateCelebrity),
            map((action: fromActions.CreateCelebrity) => action.payload),
            switchMap((celebrity: Celebrity) => {
                return this._celebritiesDataService
                    .createCelebrity(celebrity)
                    .pipe(
                        mapTo(new fromActions.CreateCelebritySuccess()),
                        catchError(() => of(new fromActions.CreateCelebrityFailure()))
                    );
            })
        );

    // @Effect()
    // createCelebritySuccess$ = this._actions$
    //     .pipe(
    //         ofType(CelebritiesActionTypes.CreateCelebritySuccess),
    //         tap(() => this._snackBar.open(`Celebrity created successfully`, 'Yay')),
    //         mapTo(new fromRootActions.Go({ path: ['/celebrities/list'] }))
    //     );

    // @Effect({ dispatch: false })
    // createCelebrityFailure$ = this._createSnackBarEffect(
    //     CelebritiesActionTypes.CreateCelebrityFailure,
    //     'Uh oh! Something wrong happened and we couldn\'t create the celebrity. Please, try again later!',
    //     'Sure'
    // );

    // // Update Celebrity
    // @Effect()
    // updateCelebrity$ = this._actions$
    //     .pipe(
    //         ofType(CelebritiesActionTypes.UpdateCelebrity),
    //         map((action: fromActions.UpdateCelebrity) => action.payload),
    //         switchMap(({ id, celebrity }) => {
    //             return this._celebritiesDataService
    //                 .updateCelebrity(id, celebrity)
    //                 .pipe(
    //                     mapTo(new fromActions.UpdateCelebritySuccess()),
    //                     catchError(() => of(new fromActions.UpdateCelebrityFailure()))
    //                 );
    //         })
    //     );

    // @Effect()
    // updateCelebritySuccess$ = this._actions$
    //     .pipe(
    //         ofType(CelebritiesActionTypes.UpdateCelebritySuccess),
    //         tap(() => this._snackBar.open(`Celebrity updated successfully`, 'Yay')),
    //         mapTo(new fromRootActions.Go({ path: ['/celebrities/list'] }))
    //     );

    // @Effect({ dispatch: false })
    // updateCelebrityFailure$ = this._createSnackBarEffect(
    //     CelebritiesActionTypes.UpdateCelebrityFailure,
    //     'Uh oh! Something wrong happened and we couldn\'t update this celebrity. Please, try again later!',
    //     'Sure'
    // );

    // // Delete Celebrity
    // @Effect()
    // deleteCelebrity$ = this._actions$
    //     .pipe(
    //         ofType(CelebritiesActionTypes.DeleteCelebrity),
    //         map((action: fromActions.DeleteCelebrity) => action.payload),
    //         switchMap((id: number) => {
    //             return this._celebritiesDataService
    //                 .deleteCelebrity(id)
    //                 .pipe(
    //                     mapTo(new fromActions.DeleteCelebritySuccess()),
    //                     catchError(() => of(new fromActions.DeleteCelebrityFailure()))
    //                 );
    //         })
    //     );

    // @Effect({ dispatch: false })
    // deleteCelebritySuccess$ = this._createSnackBarEffect(
    //     CelebritiesActionTypes.DeleteCelebritySuccess,
    //     'Celebrity deleted forever!',
    //     'Alright'
    // );

    // @Effect({ dispatch: false })
    // deleteCelebrityFailure$ = this._createSnackBarEffect(
    //     CelebritiesActionTypes.DeleteCelebrityFailure,
    //     'Uh oh! Something wrong happened and we couldn\'t delete this celebrity. Please, try again later!',
    //     'No worires'
    // );

    // private _createSnackBarEffect(actionType: string, message: string, buttonText: string) {
    //     return this._actions$
    //         .pipe(
    //             ofType(actionType),
    //             pluck('payload'),
    //             tap(() => this._snackBar.open(message, buttonText))
    //         );
    // }
}
