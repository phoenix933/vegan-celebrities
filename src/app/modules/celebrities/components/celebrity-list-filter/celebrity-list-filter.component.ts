import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';

import { Subject, combineLatest, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import countries from './../../../../../assets/data/countries.json';
import { Sex } from './../../../../enums';
import { Category } from './../../../../models';
import { CelebrityListFilter } from './../../models';

@Component({
    selector: 'app-celebrity-list-filter',
    templateUrl: './celebrity-list-filter.component.html',
    styleUrls: ['./celebrity-list-filter.component.scss'],
})
export class CelebrityListFilterComponent implements OnInit, OnDestroy {
    @Input()
    categories: Category[];

    @Output()
    changed = new EventEmitter<CelebrityListFilter>();

    Sex = Sex;
    countries = countries;

    filterForm = this._formBuilder.group({
        search: [''],
        category: [''],
        sex: [''],
        country: ['']
    });

    showOptions = false;

    private _unsubscribeAll$ = new Subject<void>();

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        merge(
            this.filterForm.get('category').valueChanges,
            this.filterForm.get('sex').valueChanges,
            this.filterForm.get('country').valueChanges
        )
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe(() => this.changed.emit(this.filterForm.value));
    }

    ngOnDestroy() {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }

    submit(): void {
        this.changed.emit(this.filterForm.value);
    }

    toggleOptions(): void {
        this.showOptions = !this.showOptions;
    }
}
