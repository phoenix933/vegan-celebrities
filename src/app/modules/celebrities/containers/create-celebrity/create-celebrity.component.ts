import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CelebritiesService } from './../../services';
import { Celebrity } from './../../models';

@Component({
    selector: 'app-create-celebrity',
    templateUrl: './create-celebrity.component.html',
    styleUrls: ['./create-celebrity.component.scss'],
})
export class CreateCelebrityComponent implements OnInit {
    createCelebrityLoading$: Observable<boolean>;

    constructor(
        private _celebritiesService: CelebritiesService
    ) { }

    ngOnInit(): void {
        this.createCelebrityLoading$ = this._celebritiesService.createCelebrityLoading$;
    }

    createCelebrity(celebrity: Celebrity): void {
        this._celebritiesService.createCelebrity(celebrity);
    }
}
