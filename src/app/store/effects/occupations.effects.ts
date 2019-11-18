import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { OccupationsDataService } from '../../services/occupations-data/occupations-data.service';
import { Occupation } from '../../models';

import * as fromActions from '../actions';
import { OccupationsActionTypes } from '../actions';

@Injectable()
export class OccupationsEffects {
    constructor(
        private _actions$: Actions,
        private _occupationsDataService: OccupationsDataService
    ) {}

    // Get Occupations
    @Effect()
    getOccupations$ = this._actions$
        .pipe(
            ofType(OccupationsActionTypes.GetOccupations),
            switchMap(() => {
                return this._occupationsDataService
                    .getOccupations()
                    .pipe(
                        map((occupations: Occupation[]) => new fromActions.GetOccupationsSuccess(occupations)),
                        catchError(() => of(new fromActions.GetOccupationsFailure()))
                    );
            })
        );
}
