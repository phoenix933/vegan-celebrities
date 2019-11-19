import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { User } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class AuthDataService {
    constructor(
        private _fireAuth: AngularFireAuth
    ) {}

    getUser(): Observable<any> {
        return this._fireAuth.authState
            .pipe(
                switchMap((user) => from(user.getIdTokenResult())),
                map((result) => {
                    const user: User = {
                        id: result.claims.user_id,
                        email: result.claims.email,
                        token: result.token,
                        role: result.claims.role
                    };

                    return user;
                })
            );
    }

    signInWithEmailAndPassword(email: string, password: string) {
        return from(this._fireAuth.auth.signInWithEmailAndPassword(email, password));
    }

    signOut(): Observable<void> {
        return from(this._fireAuth.auth.signOut());
    }
}
