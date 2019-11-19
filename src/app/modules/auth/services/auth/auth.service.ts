import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromStore from './../../store';
import { UserRole } from './../../enums';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _store: Store<fromStore.AuthState>
    ) {}

    // Actions
    getUser(): void {
        this._store.dispatch(new fromStore.GetUser());
    }

    signInWithEmailAndPassword(email: string, password: string): void {
        this._store.dispatch(new fromStore.SignInWithEmailAndPassword({ email, password }));
    }

    signOut(): void {
        this._store.dispatch(new fromStore.SignOut());
    }

    // Selectors
    get isAuthenticated$(): Observable<boolean> {
        return this._store.pipe(select(fromStore.getIsAuthenticated));
    }

    get signInLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromStore.getSignInLoading));
    }

    get signOutLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromStore.getSignOutLoading));
    }

    get userRole$(): Observable<UserRole> {
        return this._store.pipe(select(fromStore.getUserRole));
    }

    get userToken$(): Observable<string> {
        return this._store.pipe(select(fromStore.getUserToken));
    }
}
