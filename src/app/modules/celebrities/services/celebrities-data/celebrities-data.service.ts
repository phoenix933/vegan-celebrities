import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../../../environments/environment';
import { Celebrity } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class CelebritiesDataService {
    private _celebritiesUrl = `${environment.apiUrl}/celebrities`;

    constructor(
        private _firestore: AngularFirestore,
        private _http: HttpClient
    ) {}

    getCelebrities(): Observable<{ celebrities: Celebrity[], count: number }> {
        return this._http.get<{ celebrities: Celebrity[], count: number }>(this._celebritiesUrl);
    }

    getCelebrity(slug: string): Observable<Celebrity> {
        return this._http.get<Celebrity>(`${this._celebritiesUrl}/${slug}`);
    }

    createCelebrity(celebrity: Celebrity): Observable<any> {
        return this._http.post<Celebrity>(this._celebritiesUrl, celebrity);
    }

    updateCelebrity(slug: string, celebrity: Celebrity): Observable<Celebrity> {
        return this._http.put<Celebrity>(`${this._celebritiesUrl}/${slug}`, celebrity);
    }

    deleteCelebrity(slug: string): Observable<any> {
        return this._http.delete(`${this._celebritiesUrl}/${slug}`);
    }
}
