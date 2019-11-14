import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Celebrity } from './../../models';

@Component({
    selector: 'app-create-celebrity',
    templateUrl: './create-celebrity.component.html',
    styleUrls: ['./create-celebrity.component.scss'],
})
export class CreateCelebrityComponent implements OnInit {
    constructor(
        private _firestore: AngularFirestore
    ) { }

    ngOnInit() {}

    async createCelebrity(celebrity: Celebrity): Promise<void> {
        console.log(celebrity);
        await this._firestore.collection('celebrities').add(celebrity);
        console.log('yay')
    }
}
