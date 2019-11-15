import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromCelebrities from '../../store';
import { Celebrity } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class CelebritiesService {
    constructor(
        private _store: Store<fromCelebrities.CelebritiesState>
    ) {}

    // Actions
    getCelebrities(): void {
        this._store.dispatch(new fromCelebrities.GetCelebrities());
    }

    createCelebrity(celebrity: Celebrity): void {
        this._store.dispatch(new fromCelebrities.CreateCelebrity(celebrity));
    }

    // Selectors
    get celebrities$(): Observable<Celebrity[]> {
        return this._store.pipe(select(fromCelebrities.getCelebrities));
    }

    get getCelebritiesLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromCelebrities.getGetCelebritiesLoading));
    }

    get createCelebrityLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromCelebrities.getCreateCelebrityLoading));
    }
}
