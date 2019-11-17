import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Celebrity } from './../../models';
import { CelebritiesService } from './../../services';

@Component({
    selector: 'app-celebrity-list',
    templateUrl: './celebrity-list.component.html',
    styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit {
    celebrities$: Observable<Celebrity[]>;
    count$: Observable<number>;

    viewMode: 'grid' | 'list' = 'grid';

    constructor(
        private _celebritiesService: CelebritiesService
    ) { }

    ngOnInit(): void {
        this._celebritiesService.getCelebrities();
        this.celebrities$ = this._celebritiesService.celebrities$;
        this.count$ = this._celebritiesService.count$;
    }
}
