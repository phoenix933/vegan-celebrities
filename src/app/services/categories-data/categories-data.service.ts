import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Category } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class CategoriesDataService {
    private _categoriesUrl = `${environment.apiUrl}/categories`;

    constructor(
        private _http: HttpClient
    ) {}

    getCategories(): Observable<Category[]> {
        return this._http.get<Category[]>(this._categoriesUrl);
    }
}
