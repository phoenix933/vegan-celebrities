import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromActions from '../../store/actions';
import * as fromReducers from '../../store/reducers/occupations.reducer';
import * as fromSelectors from '../../store/selectors';
import { Occupation } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class OccupationsService {
    constructor(
        private _store: Store<fromReducers.OccupationsState>
    ) {}

    // Actions
    getOccupations(): void {
        this._store.dispatch(new fromActions.GetOccupations());
    }

    // Selectors
    get occupations$(): Observable<Occupation[]> {
        return this._store.pipe(select(fromSelectors.getOccupations));
    }

    get getOccupationsLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getGetOccupationsLoading));
    }
}
