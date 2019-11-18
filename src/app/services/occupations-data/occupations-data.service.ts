import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Occupation } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class OccupationsDataService {
    private _occupationsUrl = `${environment.apiUrl}/occupations`;

    constructor(
        private _http: HttpClient
    ) {}

    getOccupations(): Observable<Occupation[]> {
        return this._http.get<Occupation[]>(this._occupationsUrl);
    }
}
