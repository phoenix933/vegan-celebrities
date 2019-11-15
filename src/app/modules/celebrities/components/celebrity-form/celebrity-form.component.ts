import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Celebrity } from './../../models';

@Component({
    selector: 'app-celebrity-form',
    templateUrl: './celebrity-form.component.html',
    styleUrls: ['./celebrity-form.component.scss'],
})
export class CelebrityFormComponent implements OnInit {
    celebrityForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        about: ['', [Validators.required]],
        category: ['', [Validators.required]],
        occupation: ['', [Validators.required]],
        birthdate: ['', []],
        birthplace: ['', []],
        height: ['', []],
        partner: ['', []],
        imageUrl: ['', [Validators.required]],
        wikiUrl: ['', []],
        social: this._formBuilder.group({
            facebook: ['', []],
            instagram: ['', []],
            twitter: ['', []],
            youtube: ['', []],
        })
    });

    @Input() loading = false;
    @Output() submitted = new EventEmitter<Celebrity>();

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {}

    saveCelebrity(): void {
        const { valid } = this.celebrityForm;

        if (valid) {
            const { value } = this.celebrityForm;
            this.submitted.emit(value);
        }
    }
}
