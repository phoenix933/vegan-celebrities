import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import countries from './../../../../../assets/data/countries.json';
import { Sex } from './../../../../enums';
import { Occupation } from './../../../../models';
import { Celebrity } from './../../models';

@Component({
    selector: 'app-celebrity-form',
    templateUrl: './celebrity-form.component.html',
    styleUrls: ['./celebrity-form.component.scss'],
})
export class CelebrityFormComponent implements OnChanges, OnInit {
    @Input() celebrity: Celebrity;
    @Input() loading = false;
    @Input() occupations: Occupation[];
    @Output() submitted = new EventEmitter<Celebrity>();

    Sex = Sex;
    countries = countries;

    celebrityForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        slug: ['', [Validators.required]],
        about: ['', [Validators.required]],
        sex: ['', [Validators.required]],
        country: ['', []],
        occupationId: ['', [Validators.required]],
        birthdate: ['', []],
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

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.celebrity && changes.celebrity.currentValue) {
            const celebrity = changes.celebrity.currentValue as Celebrity;
            this.celebrityForm.patchValue({ ...celebrity, occupationId: celebrity.occupation.id });
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
