import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-celebrity-list',
    templateUrl: './celebrity-list.component.html',
    styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit {
    celebrities$: Observable<any>;

    constructor(
        private _firestore: AngularFirestore
    ) { }

    ngOnInit(): void {
        this.celebrities$ = this._firestore
            .collection('celebrities')
            .valueChanges();
    }
}
