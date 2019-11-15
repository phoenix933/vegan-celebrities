import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { CelebritiesService } from '../../services';
import { Celebrity } from './../../models';
import { filter, take } from 'rxjs/operators';

@Component({
    selector: 'app-edit-celebrity',
    templateUrl: './edit-celebrity.component.html',
    styleUrls: ['./edit-celebrity.component.scss'],
})
export class EditCelebrityComponent implements OnInit {
    celebrity: Celebrity;
    updateCelebrityLoading$: Observable<boolean>;

    constructor(
        private _route: ActivatedRoute,
        private _celebritiesService: CelebritiesService
    ) {}

    ngOnInit(): void {
        this.updateCelebrityLoading$ = this._celebritiesService.updateCelebrityLoading$;

        this._celebritiesService
            .selectedCelebrity$
            .pipe(
                filter(celebrity => !!celebrity),
                take(1)
            )
            .subscribe((celebrity: Celebrity) => this.celebrity = celebrity);

        this._route.paramMap
            .subscribe(paramMap => {
                const slug = paramMap.get('celebritySlug');
                this._celebritiesService.getCelebrity(slug);
            });
    }

    updateCelebrity(celebrity: Celebrity): void {
        this._celebritiesService.updateCelebrity(this.celebrity.id, celebrity);
    }
}
