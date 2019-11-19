import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError, mapTo, filter, tap} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromRootActions from '../../../../store/actions';
import { ToastService } from './../../../../services';
import { AuthDataService } from './../../services/auth-data/auth-data.service';
import { User } from './../../models';
import * as fromActions from '../actions';
import { AuthActionTypes } from '../actions';

@Injectable()
export class AuthEffects {
    constructor(
        private _actions$: Actions,
        private _authDataService: AuthDataService,
        private _toastService: ToastService
    ) {}

    @Effect()
    getUser$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.GetUser),
            switchMap(() => {
                return this._authDataService
                    .getUser()
                    .pipe(
                        map((user: User) => new fromActions.GetUserSuccess(user)),
                        catchError(() => of(new fromActions.GetUserFailure()))
                    );
            })
        );

    @Effect()
    signInWithEmailAndPassword$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.SignInWithEmailAndPassword),
            map((action: fromActions.SignInWithEmailAndPassword) => action.payload),
            switchMap(({ email, password }) => {
                return this._authDataService
                    .signInWithEmailAndPassword(email, password)
                    .pipe(
                        mapTo(new fromActions.SignInWithEmailAndPasswordSuccess(email)),
                        catchError(() => of(new fromActions.SignInWithEmailAndPasswordFailure()))
                    );
            })
        );

    @Effect()
    signInWithEmailAndPasswordSuccess$ =  this._actions$
        .pipe(
            ofType(AuthActionTypes.SignInWithEmailAndPasswordSuccess),
            map((action: fromActions.SignInWithEmailAndPasswordSuccess) => action.payload),
            tap((email: string) => this._toastService.showToast(`Logged in as ${email}`, 'Yay')),
            switchMap(() => {
                return [
                    new fromActions.GetUser(),
                    new fromRootActions.Go({ path: ['/celebrities'] })
                ];
            })
        );

    @Effect()
    signOut$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.SignOut),
            switchMap(() => {
                return this._authDataService
                    .signOut()
                    .pipe(
                        map(() => new fromActions.SignOutSuccess()),
                        catchError(() => of(new fromActions.SignOutFailure()))
                    );
            })
        );

    @Effect()
    signOutSuccess$ =  this._actions$
        .pipe(
            ofType(AuthActionTypes.SignOutSuccess),
            tap(() => this._toastService.showToast(`You have logged out successfully.`, 'Alright')),
            switchMap(() => {
                return [
                    new fromActions.GetUser(),
                    new fromRootActions.Go({ path: ['/auth/login'] })
                ];
            })
        );
}
