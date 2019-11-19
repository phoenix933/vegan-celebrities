import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavigationExtras, Params } from '@angular/router';

import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../store';

@Injectable({
    providedIn: 'root'
})
export class RouterService {
    constructor(
        private _store: Store<fromRoot.State>
    ) {}

    // Actions
    go(route: { path: any[]; query?: object; extras?: NavigationExtras; }): void {
        this._store.dispatch(new fromRoot.Go(route));
    }

    back(): void {
        this._store.dispatch(new fromRoot.Back());
    }

    forward(): void {
        this._store.dispatch(new fromRoot.Forward());
    }

    // Selectors
    get params$(): Observable<Params> {
        return this._store.pipe(select(fromRoot.getParams));
    }
}
