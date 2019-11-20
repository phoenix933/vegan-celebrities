import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

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
export class CelebrityDetailComponent implements OnInit {
    celebrity$: Observable<Celebrity>;
    userRole$: Observable<UserRole>;

    UserRole = UserRole;
    private readonly _countries: { name: string; code: string }[] = countries;

    constructor(
        private _route: ActivatedRoute,
        private _celebritiesService: CelebritiesService,
        private _authService: AuthService
    ) {
    }

    ngOnInit(): void {
        this.celebrity$ = this._celebritiesService.selectedCelebrity$;
        this.userRole$ = this._authService.userRole$;

        this._route.paramMap
            .subscribe(paramMap => {
                const slug = paramMap.get('celebritySlug');
                this._celebritiesService.getCelebrity(slug);
            });
    }

    getCountryName(countryCode: string): string {
        return this._countries.find(c => c.code === countryCode).name;
    }
}
