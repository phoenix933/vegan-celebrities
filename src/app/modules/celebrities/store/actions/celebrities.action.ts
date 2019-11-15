import { Action } from '@ngrx/store';

import { Celebrity } from '../../models';

export enum CelebritiesActionTypes {
    GetCelebrities = '[Celebrities] Get Celebrities',
    GetCelebritiesSuccess = '[Celebrities] Get Celebrities Success',
    GetCelebritiesFailure = '[Celebrities] Get Celebrities Failure',

    // GetCelebrity = '[Celebrities] Get Celebrity',
    // GetCelebritiesuccess = '[Celebrities] Get Celebrity Success',
    // GetCelebrityFailure = '[Celebrities] Get Celebrity Failure',

    CreateCelebrity = '[Celebrities] Create Celebrity',
    CreateCelebritySuccess = '[Celebrities] Create Celebrity Success',
    CreateCelebrityFailure = '[Celebrities] Create Celebrity Failure',

    // UpdateCelebrity = '[Celebrities] Update Celebrity',
    // UpdateCelebritiesuccess = '[Celebrities] Update Celebrity Success',
    // UpdateCelebrityFailure = '[Celebrities] Update Celebrity Failure',

    // DeleteCelebrity = '[Celebrities] Delete Celebrity',
    // DeleteCelebritiesuccess = '[Celebrities] Delete Celebrity Success',
    // DeleteCelebrityFailure = '[Celebrities] Delete Celebrity Failure',
}

export class GetCelebrities implements Action {
    readonly type = CelebritiesActionTypes.GetCelebrities;
}

export class GetCelebritiesSuccess implements Action {
    readonly type = CelebritiesActionTypes.GetCelebritiesSuccess;
    constructor(public payload: Celebrity[]) {}
}

export class GetCelebritiesFailure implements Action {
    readonly type = CelebritiesActionTypes.GetCelebritiesFailure;
}

// export class GetCelebrity implements Action {
//     readonly type = CelebritiesActionTypes.GetCelebrity;
//     constructor(public payload: number) {}
// }

// export class GetCelebritiesuccess implements Action {
//     readonly type = CelebritiesActionTypes.GetCelebritiesuccess;
//     constructor(public payload: Celebrity) {}
// }

// export class GetCelebrityFailure implements Action {
//     readonly type = CelebritiesActionTypes.GetCelebrityFailure;
// }

export class CreateCelebrity implements Action {
    readonly type = CelebritiesActionTypes.CreateCelebrity;
    constructor(public payload: Celebrity) {}
}

export class CreateCelebritySuccess implements Action {
    readonly type = CelebritiesActionTypes.CreateCelebritySuccess;
}

export class CreateCelebrityFailure implements Action {
    readonly type = CelebritiesActionTypes.CreateCelebrityFailure;
}

// export class UpdateCelebrity implements Action {
//     readonly type = CelebritiesActionTypes.UpdateCelebrity;
//     constructor(public payload: { id: number; Celebrity: Celebrity; }) {}
// }

// export class UpdateCelebritiesuccess implements Action {
//     readonly type = CelebritiesActionTypes.UpdateCelebritiesuccess;
// }

// export class UpdateCelebrityFailure implements Action {
//     readonly type = CelebritiesActionTypes.UpdateCelebrityFailure;
// }

// export class DeleteCelebrity implements Action {
//     readonly type = CelebritiesActionTypes.DeleteCelebrity;
//     constructor(public payload: number) {}
// }

// export class DeleteCelebritiesuccess implements Action {
//     readonly type = CelebritiesActionTypes.DeleteCelebritiesuccess;
// }

// export class DeleteCelebrityFailure implements Action {
//     readonly type = CelebritiesActionTypes.DeleteCelebrityFailure;
// }

export type CelebritiesAction =
    | GetCelebrities
    | GetCelebritiesSuccess
    | GetCelebritiesFailure

    // | GetCelebrity
    // | GetCelebritiesuccess
    // | GetCelebrityFailure

    | CreateCelebrity
    | CreateCelebritySuccess
    | CreateCelebrityFailure

    // | UpdateCelebrity
    // | UpdateCelebritiesuccess
    // | UpdateCelebrityFailure

    // | DeleteCelebrity
    // | DeleteCelebritiesuccess
    // | DeleteCelebrityFailure
;
