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
    celebrity$: Observable<Celebrity>;
    updateCelebrityLoading$: Observable<boolean>;

    private _slug: string;

    constructor(
        private _route: ActivatedRoute,
        private _celebritiesService: CelebritiesService
    ) {}

    ngOnInit(): void {
        this.celebrity$ = this._celebritiesService.selectedCelebrity$;
        this.updateCelebrityLoading$ = this._celebritiesService.updateCelebrityLoading$;

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
