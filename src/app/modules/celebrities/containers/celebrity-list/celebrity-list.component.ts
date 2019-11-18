import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { takeUntil, skip, map } from 'rxjs/operators';

import { CelebrityListFilter, Celebrity } from './../../models';
import { CelebritiesService } from './../../services';

@Component({
    selector: 'app-celebrity-list',
    templateUrl: './celebrity-list.component.html',
    styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit, OnDestroy {
    celebrities: Celebrity[];
    count$: Observable<number>;
    getCelebritiesLoading$: Observable<boolean>;

    firstLoaded = false;

    private _infiniteScrollEvent: any;

    private readonly _defaultFilter: CelebrityListFilter = { limit: 12, offset: 0 };
    private _filter$ = new BehaviorSubject<CelebrityListFilter>(this._defaultFilter);

    private _unsubscribeAll$ = new Subject<void>();

    constructor(
        private _celebritiesService: CelebritiesService
    ) { }

    get loading$(): Observable<boolean> {
        return combineLatest([
            this.getCelebritiesLoading$,
            this._filter$.pipe(map((filter: CelebrityListFilter) => !filter.offset))
        ])
        .pipe(map(([getCelebritiesLoading, isOffsetZero]) => getCelebritiesLoading && isOffsetZero));
    }

    ngOnInit(): void {
        this.count$ = this._celebritiesService.count$;
        this.getCelebritiesLoading$ = this._celebritiesService.getCelebritiesLoading$;

        this._celebritiesService
            .celebrities$
            .pipe(
                skip(1),
                takeUntil(this._unsubscribeAll$)
            )
            .subscribe((celebrities: Celebrity[]) => {
                this.firstLoaded = true;
                this.celebrities = celebrities;
            });

        this._filter$
            .asObservable()
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe((listFilter: CelebrityListFilter) => this._celebritiesService.getCelebrities(listFilter));

        this._celebritiesService
            .getCelebritiesSuccess$
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe(() => {
                if (this._infiniteScrollEvent) {
                    this._infiniteScrollEvent.target.complete();
                }
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }

    refresh(event: any): void {
        this._infiniteScrollEvent = event;

        const currentValue = this._filter$.getValue();
        this._filter$.next({ ...currentValue, offset: 0 });
    }

    onFilterChanged(filter: CelebrityListFilter): void {
        this._filter$.next({ ...this._defaultFilter, ...filter });
    }

    onInfiniteScroll(event: any): void {
        this._infiniteScrollEvent = event;

        const offset = this.celebrities.length;
        const currentValue = this._filter$.getValue();

        this._filter$.next({ ...currentValue, offset });
    }
}
