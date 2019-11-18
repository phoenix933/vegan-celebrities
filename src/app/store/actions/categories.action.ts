import { Action } from '@ngrx/store';

import { Category } from './../../models';

export enum CategoriesActionTypes {
    GetCategories = '[Categories] Get Categories',
    GetCategoriesSuccess = '[Categories] Get Categories Success',
    GetCategoriesFailure = '[Categories] Get Categories Failure',
}

export class GetCategories implements Action {
    readonly type = CategoriesActionTypes.GetCategories;
}

export class GetCategoriesSuccess implements Action {
    readonly type = CategoriesActionTypes.GetCategoriesSuccess;
    constructor(public payload: Category[]) {}
}

export class GetCategoriesFailure implements Action {
    readonly type = CategoriesActionTypes.GetCategoriesFailure;
}

export type CategoriesAction =
    | GetCategories
    | GetCategoriesSuccess
    | GetCategoriesFailure
;
