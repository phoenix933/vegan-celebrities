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

    getCelebrity(slug: string): void {
        this._store.dispatch(new fromCelebrities.GetCelebrity(slug));
    }

    createCelebrity(celebrity: Celebrity): void {
        this._store.dispatch(new fromCelebrities.CreateCelebrity(celebrity));
    }

    updateCelebrity(id: string, celebrity: Celebrity): void {
        this._store.dispatch(new fromCelebrities.UpdateCelebrity({ id, celebrity }));
    }

    // Selectors
    get celebrities$(): Observable<Celebrity[]> {
        return this._store.pipe(select(fromCelebrities.getCelebrities));
    }

    get selectedCelebrity$(): Observable<Celebrity> {
        return this._store.pipe(select(fromCelebrities.getSelectedCelebrity));
    }

    get getCelebritiesLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromCelebrities.getGetCelebritiesLoading));
    }

    get createCelebrityLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromCelebrities.getCreateCelebrityLoading));
    }

    get updateCelebrityLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromCelebrities.getUpdateCelebrityLoading));
    }
}
