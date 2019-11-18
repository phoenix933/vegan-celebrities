import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
        this.filterForm
            .valueChanges
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe((value: CelebrityListFilter) => this.changed.emit(value));
    }

    ngOnDestroy() {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }

    toggleOptions(): void {
        this.showOptions = !this.showOptions;
    }
}
