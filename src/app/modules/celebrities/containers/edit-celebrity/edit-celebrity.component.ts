import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { Occupation } from './../../../../models';
import { OccupationsService } from './../../../../services';
import { CelebritiesService } from '../../services';
import { Celebrity } from './../../models';

@Component({
    selector: 'app-edit-celebrity',
    templateUrl: './edit-celebrity.component.html',
    styleUrls: ['./edit-celebrity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCelebrityComponent implements OnInit, OnDestroy {
    updateCelebrityLoading$: Observable<boolean>;
    getCelebrityLoading$: Observable<boolean>;
    occupations$: Observable<Occupation[]>;

    celebrity: Celebrity;

    private _slug: string;
    private _unsubscribeAll$ = new Subject<void>();

    constructor(
        private _route: ActivatedRoute,
        private _celebritiesService: CelebritiesService,
        private _occupationsService: OccupationsService
    ) {}

    ngOnInit(): void {
        this.updateCelebrityLoading$ = this._celebritiesService.updateCelebrityLoading$;
        this.getCelebrityLoading$ = this._celebritiesService.getCelebrityLoading$;
        this.occupations$ = this._occupationsService.occupations$;

        this._celebritiesService.selectedCelebrity$
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe((celebrity: Celebrity) => this.celebrity = celebrity);

        this._route.paramMap
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe(paramMap => {
                this._slug = paramMap.get('celebritySlug');
                this._celebritiesService.getCelebrity(this._slug);
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }

    updateCelebrity(celebrity: Celebrity): void {
        this._celebritiesService.updateCelebrity(this._slug, celebrity);
    }
}
