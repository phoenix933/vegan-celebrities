import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

import * as fromCelebrities from '../../store';
import { Celebrity, CelebrityListFilter } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class CelebritiesService {
    private _getCelebritiesSuccess$ = new Subject<void>();

    constructor(
        private _store: Store<fromCelebrities.CelebritiesState>,
        private _actions$: Actions
    ) {
        this._actions$
            .pipe(ofType(fromCelebrities.CelebritiesActionTypes.GetCelebritiesSuccess))
            .subscribe(() => this._getCelebritiesSuccess$.next());
    }

    // Actions
    getCelebrities(listFilter?: CelebrityListFilter): void {
        this._store.dispatch(new fromCelebrities.GetCelebrities(listFilter));
    }

    getCelebrity(slug: string): void {
        this._store.dispatch(new fromCelebrities.GetCelebrity(slug));
    }

    createCelebrity(celebrity: Celebrity): void {
        this._store.dispatch(new fromCelebrities.CreateCelebrity(celebrity));
    }

    updateCelebrity(slug: string, celebrity: Celebrity): void {
        this._store.dispatch(new fromCelebrities.UpdateCelebrity({ slug, celebrity }));
    }

    // Selectors
    get celebrities$(): Observable<Celebrity[]> {
        return this._store.pipe(select(fromCelebrities.getCelebrities));
    }

    get count$(): Observable<number> {
        return this._store.pipe(select(fromCelebrities.getCelebritiesCount));
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

    // Events
    get getCelebritiesSuccess$(): Observable<void> {
        return this._getCelebritiesSuccess$.asObservable();
    }
}
