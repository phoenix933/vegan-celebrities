import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Celebrity } from './../../models';

@Component({
    selector: 'app-celebrity-form',
    templateUrl: './celebrity-form.component.html',
    styleUrls: ['./celebrity-form.component.scss'],
})
export class CelebrityFormComponent implements OnChanges, OnInit {
    celebrityForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        slug: ['', [Validators.required]],
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

    @Input() celebrity: Celebrity;
    @Input() loading = false;
    @Output() submitted = new EventEmitter<Celebrity>();

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.celebrity && changes.celebrity.currentValue) {
            const celebrity = changes.celebrity.currentValue as Celebrity;
            const { birthdate } = celebrity;

            this.celebrityForm.patchValue({ ...celebrity, birthdate: birthdate ? birthdate.toDate().toISOString() : null });
        }
    }

    ngOnInit(): void {}

    saveCelebrity(): void {
        const { valid } = this.celebrityForm;

        if (valid) {
            const { value } = this.celebrityForm;
            const { birthdate } = value;
            this.submitted.emit({ ...value, birthdate: birthdate ? new Date(birthdate) : null });
        }
    }
}
