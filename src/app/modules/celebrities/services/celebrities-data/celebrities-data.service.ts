import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from } from 'rxjs';

import { Celebrity } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class CelebritiesDataService {
    private readonly _celebritiesCollection = this._firestore.collection<Celebrity>('celebrities');

    constructor(
        private _firestore: AngularFirestore
    ) {

    }

    getCelebrities(): Observable<Celebrity[]> {
        return this._celebritiesCollection.valueChanges();
    }

    createCelebrity(celebrity: Celebrity): Observable<any> {
        return from(this._celebritiesCollection.add(celebrity));
    }
}
