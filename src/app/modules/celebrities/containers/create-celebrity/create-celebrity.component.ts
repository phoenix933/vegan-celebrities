import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Occupation } from './../../../../models';
import { OccupationsService } from './../../../../services';
import { CelebritiesService } from './../../services';
import { Celebrity } from './../../models';

@Component({
    selector: 'app-create-celebrity',
    templateUrl: './create-celebrity.component.html',
    styleUrls: ['./create-celebrity.component.scss'],
})
export class CreateCelebrityComponent implements OnInit {
    createCelebrityLoading$: Observable<boolean>;
    occupations$: Observable<Occupation[]>;

    constructor(
        private _celebritiesService: CelebritiesService,
        private _occupationsService: OccupationsService
    ) { }

    ngOnInit(): void {
        this.createCelebrityLoading$ = this._celebritiesService.createCelebrityLoading$;
        this.occupations$ = this._occupationsService.occupations$;
    }

    createCelebrity(celebrity: Celebrity): void {
        this._celebritiesService.createCelebrity(celebrity);
    }
}
