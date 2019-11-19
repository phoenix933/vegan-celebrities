import { Action } from '@ngrx/store';

import { User } from '../../models';

export enum AuthActionTypes {
    GetUser = '[Auth] Get User',
    GetUserSuccess = '[Auth] Get User Success',
    GetUserFailure = '[Auth] Get User Failure',

    SignInWithEmailAndPassword = '[Auth] Sign In With Email And Password',
    SignInWithEmailAndPasswordSuccess = '[Auth] Sign In With Email And Password Success',
    SignInWithEmailAndPasswordFailure = '[Auth] Sign In With Email And Password Failure',

    SignOut = '[Auth] Sign Out',
    SignOutSuccess = '[Auth] Sign Out Success',
    SignOutFailure = '[Auth] Sign Out Failure',
}

export class GetUser implements Action {
    readonly type = AuthActionTypes.GetUser;
}

export class GetUserSuccess implements Action {
    readonly type = AuthActionTypes.GetUserSuccess;
    constructor(public payload: User | null) {}
}

export class GetUserFailure implements Action {
    readonly type = AuthActionTypes.GetUserFailure;
}

export class SignInWithEmailAndPassword implements Action {
    readonly type = AuthActionTypes.SignInWithEmailAndPassword;
    constructor(public payload: { email: string; password: string }) {}
}

export class SignInWithEmailAndPasswordSuccess implements Action {
    readonly type = AuthActionTypes.SignInWithEmailAndPasswordSuccess;
    constructor(public payload: string) {}
}

export class SignInWithEmailAndPasswordFailure implements Action {
    readonly type = AuthActionTypes.SignInWithEmailAndPasswordFailure;
}

export class SignOut implements Action {
    readonly type = AuthActionTypes.SignOut;
}

export class SignOutSuccess implements Action {
    readonly type = AuthActionTypes.SignOutSuccess;
}

export class SignOutFailure implements Action {
    readonly type = AuthActionTypes.SignOutFailure;
}

export type AuthAction =
    | GetUser
    | GetUserSuccess
    | GetUserFailure

    | SignInWithEmailAndPassword
    | SignInWithEmailAndPasswordSuccess
    | SignInWithEmailAndPasswordFailure

    | SignOut
    | SignOutSuccess
    | SignOutFailure;
