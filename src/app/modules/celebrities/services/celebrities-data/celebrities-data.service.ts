import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { environment } from './../../../../../environments/environment';
import { Celebrity, CelebrityListFilter } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class CelebritiesDataService {
    private _celebritiesUrl = `${environment.apiUrl}/celebrities`;

    constructor(
        private _http: HttpClient
    ) {}

    getCelebrities(listFilter: CelebrityListFilter = {}): Observable<{ celebrities: Celebrity[], count: number }> {
        const params = Object.keys(listFilter)
            .reduce((res, key) => listFilter[key] ? { ...res, [key]: `${listFilter[key]}` } : res, {});

        return this._http.get<{ celebrities: Celebrity[], count: number }>(this._celebritiesUrl, { params })
            .pipe(
                delay(3000)
            )
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
