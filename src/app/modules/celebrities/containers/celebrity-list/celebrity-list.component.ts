import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CelebrityListFilter, Celebrity } from './../../models';
import { CelebritiesService } from './../../services';

@Component({
    selector: 'app-celebrity-list',
    templateUrl: './celebrity-list.component.html',
    styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit, OnDestroy {
    celebrities$: Observable<Celebrity[]>;
    count$: Observable<number>;

    viewMode: 'grid' | 'list' = 'grid';

    private readonly _defaultFilter: CelebrityListFilter = { limit: 5, offset: 0 };
    private _filter$ = new BehaviorSubject<CelebrityListFilter>(this._defaultFilter);
    private _unsubscribeAll$ = new Subject<void>();

    constructor(
        private _celebritiesService: CelebritiesService
    ) { }

    ngOnInit(): void {
        this.celebrities$ = this._celebritiesService.celebrities$;
        this.count$ = this._celebritiesService.count$;

        this._filter$
            .asObservable()
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe((listFilter: CelebrityListFilter) => this._celebritiesService.getCelebrities(listFilter));
    }

    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }

    onFilterChanged(filter: CelebrityListFilter): void {
        this._filter$.next({ ...this._defaultFilter, ...filter });
    }

    onListBottomScroll(): void {
        const offset = 10;
        const currentValue = this._filter$.getValue();
        this._filter$.next({ ...currentValue, offset });
    }
}
