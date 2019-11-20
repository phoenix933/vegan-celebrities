import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import countries from './../../../../../assets/data/countries.json';
import { UserRole } from './../../../auth/enums';
import { AuthService } from './../../../auth/services';
import { CelebritiesService } from './../../services';
import { Celebrity } from '../../models';

@Component({
    selector: 'app-celebrity-detail',
    templateUrl: './celebrity-detail.component.html',
    styleUrls: ['./celebrity-detail.component.scss'],
})
export class CelebrityDetailComponent implements OnInit, OnDestroy {
    userRole$: Observable<UserRole>;

    celebrity: Celebrity;
    loading: boolean;

    UserRole = UserRole;

    private readonly _countries: { name: string; code: string }[] = countries;
    private _unsubscribeAll = new Subject<void>();

    constructor(
        private _route: ActivatedRoute,
        private _celebritiesService: CelebritiesService,
        private _authService: AuthService
    ) {
    }

    ngOnInit(): void {
        this.userRole$ = this._authService.userRole$;

        this._celebritiesService.selectedCelebrity$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((celebrity: Celebrity) => this.celebrity = celebrity);

        this._celebritiesService.getCelebrityLoading$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((loading: boolean) => this.loading = loading);

        this._route.paramMap
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(paramMap => {
                const slug = paramMap.get('celebritySlug');
                this._celebritiesService.getCelebrity(slug);
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getCountryName(countryCode: string): string {
        return this._countries.find(c => c.code === countryCode).name;
    }
}
