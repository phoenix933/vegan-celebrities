import { Action } from '@ngrx/store';

import { Occupation } from '../../models';

export enum OccupationsActionTypes {
    GetOccupations = '[Occupations] Get Occupations',
    GetOccupationsSuccess = '[Occupations] Get Occupations Success',
    GetOccupationsFailure = '[Occupations] Get Occupations Failure',
}

export class GetOccupations implements Action {
    readonly type = OccupationsActionTypes.GetOccupations;
}

export class GetOccupationsSuccess implements Action {
    readonly type = OccupationsActionTypes.GetOccupationsSuccess;
    constructor(public payload: Occupation[]) {}
}

export class GetOccupationsFailure implements Action {
    readonly type = OccupationsActionTypes.GetOccupationsFailure;
}

export type OccupationsAction =
    | GetOccupations
    | GetOccupationsSuccess
    | GetOccupationsFailure
;
