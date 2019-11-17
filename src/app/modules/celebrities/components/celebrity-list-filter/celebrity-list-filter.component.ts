import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CelebrityListFilter } from './../../models';

@Component({
    selector: 'app-celebrity-list-filter',
    templateUrl: './celebrity-list-filter.component.html',
    styleUrls: ['./celebrity-list-filter.component.scss'],
})
export class CelebrityListFilterComponent implements OnInit {
    @Output()
    changed = new EventEmitter<CelebrityListFilter>();

    filterForm = this._formBuilder.group({
        search: ['']
    });

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {}

    changeFilter(): void {
        this.changed.emit(this.filterForm.value);
    }
}
