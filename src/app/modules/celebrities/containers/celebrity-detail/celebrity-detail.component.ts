import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-celebrity-detail',
    templateUrl: './celebrity-detail.component.html',
    styleUrls: ['./celebrity-detail.component.scss'],
})
export class CelebrityDetailComponent implements OnInit {
    celebrity$: Observable<any>;

    constructor(
        private _route: ActivatedRoute,
        private _firestore: AngularFirestore,
    ) {
    }

    ngOnInit(): void {
        this._route.paramMap
            .subscribe(paramMap => {
                const id = paramMap.get('id');
                this.celebrity$ = this._firestore.doc(`celebrities/${id}`).valueChanges();
            });
    }
}
