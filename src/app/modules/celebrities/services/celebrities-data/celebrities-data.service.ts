import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from } from 'rxjs';

import { Celebrity } from '../../models';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CelebritiesDataService {
    constructor(
        private _firestore: AngularFirestore
    ) {}

    getCelebrities(): Observable<Celebrity[]> {
        return this._firestore.collection<Celebrity>('celebrities').valueChanges();
    }

    getCelebrity(slug: string): Observable<Celebrity> {
        return this._firestore
            .collection<Celebrity>('celebrities', (ref) => {
                return ref.where('slug', '==', slug).limit(1);
            })
            .valueChanges()
            .pipe(
                map((celebrities: Celebrity[]) => celebrities.length ? celebrities.pop() : null )
            );
    }

    createCelebrity(celebrity: Celebrity): Observable<any> {
        return from(
            this._firestore
                .collection<Celebrity>('celebrities')
                .add(celebrity)
            );
    }

    updateCelebrity(id: string, celebrity: Celebrity): Observable<void> {
        return from(this._firestore
            .collection<Celebrity>('celebrities')
            .doc(id)
            .update(celebrity));
    }
}
