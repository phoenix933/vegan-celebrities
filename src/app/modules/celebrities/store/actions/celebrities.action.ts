import { Action } from '@ngrx/store';

import { CelebrityListFilter, Celebrity } from '../../models';

export enum CelebritiesActionTypes {
    GetCelebrities = '[Celebrities] Get Celebrities',
    GetCelebritiesSuccess = '[Celebrities] Get Celebrities Success',
    GetCelebritiesFailure = '[Celebrities] Get Celebrities Failure',

    GetCelebrity = '[Celebrities] Get Celebrity',
    GetCelebritySuccess = '[Celebrities] Get Celebrity Success',
    GetCelebrityFailure = '[Celebrities] Get Celebrity Failure',

    CreateCelebrity = '[Celebrities] Create Celebrity',
    CreateCelebritySuccess = '[Celebrities] Create Celebrity Success',
    CreateCelebrityFailure = '[Celebrities] Create Celebrity Failure',

    UpdateCelebrity = '[Celebrities] Update Celebrity',
    UpdateCelebritySuccess = '[Celebrities] Update Celebrity Success',
    UpdateCelebrityFailure = '[Celebrities] Update Celebrity Failure',

    // DeleteCelebrity = '[Celebrities] Delete Celebrity',
    // DeleteCelebritiesuccess = '[Celebrities] Delete Celebrity Success',
    // DeleteCelebrityFailure = '[Celebrities] Delete Celebrity Failure',
}

export class GetCelebrities implements Action {
    readonly type = CelebritiesActionTypes.GetCelebrities;
    constructor(public payload: CelebrityListFilter) {}
}

export class GetCelebritiesSuccess implements Action {
    readonly type = CelebritiesActionTypes.GetCelebritiesSuccess;
    constructor(public payload: { celebrities: Celebrity[]; count: number; append: boolean }) {}
}

export class GetCelebritiesFailure implements Action {
    readonly type = CelebritiesActionTypes.GetCelebritiesFailure;
}

export class GetCelebrity implements Action {
    readonly type = CelebritiesActionTypes.GetCelebrity;
    constructor(public payload: string) {}
}

export class GetCelebritySuccess implements Action {
    readonly type = CelebritiesActionTypes.GetCelebritySuccess;
    constructor(public payload: Celebrity) {}
}

export class GetCelebrityFailure implements Action {
    readonly type = CelebritiesActionTypes.GetCelebrityFailure;
}

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

export class UpdateCelebrity implements Action {
    readonly type = CelebritiesActionTypes.UpdateCelebrity;
    constructor(public payload: { slug: string; celebrity: Celebrity; }) {}
}

export class UpdateCelebritySuccess implements Action {
    readonly type = CelebritiesActionTypes.UpdateCelebritySuccess;
    constructor(public payload: string) {}
}

export class UpdateCelebrityFailure implements Action {
    readonly type = CelebritiesActionTypes.UpdateCelebrityFailure;
}

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

    | GetCelebrity
    | GetCelebritySuccess
    | GetCelebrityFailure

    | CreateCelebrity
    | CreateCelebritySuccess
    | CreateCelebrityFailure

    | UpdateCelebrity
    | UpdateCelebritySuccess
    | UpdateCelebrityFailure

    // | DeleteCelebrity
    // | DeleteCelebritiesuccess
    // | DeleteCelebrityFailure
;
