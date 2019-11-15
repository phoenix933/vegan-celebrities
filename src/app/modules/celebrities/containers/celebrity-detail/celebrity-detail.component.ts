import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { CelebritiesService } from './../../services';
import { Celebrity } from '../../models';

@Component({
    selector: 'app-celebrity-detail',
    templateUrl: './celebrity-detail.component.html',
    styleUrls: ['./celebrity-detail.component.scss'],
})
export class CelebrityDetailComponent implements OnInit {
    celebrity$: Observable<Celebrity>;

    constructor(
        private _route: ActivatedRoute,
        private _celebritiesService: CelebritiesService
    ) {
    }

    ngOnInit(): void {
        this.celebrity$ = this._celebritiesService.selectedCelebrity$;

        this._route.paramMap
            .subscribe(paramMap => {
                const slug = paramMap.get('celebritySlug');
                // this.celebrity$ = this._firestore.doc(`celebrities/${id}`).valueChanges();
                this._celebritiesService.getCelebrity(slug);
            });
    }
}
