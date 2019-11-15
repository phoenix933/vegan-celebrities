import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CelebritiesService } from './../../services';

@Component({
    selector: 'app-celebrity-list',
    templateUrl: './celebrity-list.component.html',
    styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit {
    celebrities$: Observable<any>;

    constructor(
        private _celebritiesService: CelebritiesService
    ) { }

    ngOnInit(): void {
        this._celebritiesService.getCelebrities();
        this.celebrities$ = this._celebritiesService.celebrities$;
    }
}
