import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

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
export class EditCelebrityComponent implements OnInit {
    celebrity$: Observable<Celebrity>;
    updateCelebrityLoading$: Observable<boolean>;
    occupations$: Observable<Occupation[]>;

    private _slug: string;

    constructor(
        private _route: ActivatedRoute,
        private _celebritiesService: CelebritiesService,
        private _occupationsService: OccupationsService
    ) {}

    ngOnInit(): void {
        this.celebrity$ = this._celebritiesService.selectedCelebrity$;
        this.updateCelebrityLoading$ = this._celebritiesService.updateCelebrityLoading$;
        this.occupations$ = this._occupationsService.occupations$;

        this._route.paramMap
            .subscribe(paramMap => {
                this._slug = paramMap.get('celebritySlug');
                this._celebritiesService.getCelebrity(this._slug);
            });
    }

    updateCelebrity(celebrity: Celebrity): void {
        this._celebritiesService.updateCelebrity(this._slug, celebrity);
    }
}
