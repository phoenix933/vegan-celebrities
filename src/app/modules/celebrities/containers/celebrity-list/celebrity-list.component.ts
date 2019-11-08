import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { ModalController } from '@ionic/angular';

import { CelebrityDetailComponent } from './../../modals';

@Component({
    selector: 'app-celebrity-list',
    templateUrl: './celebrity-list.component.html',
    styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit {
    celebrities$: Observable<any>;

    constructor(
        private _firestore: AngularFirestore,
        private _modalController: ModalController
    ) { }

    ngOnInit(): void {
        this.celebrities$ = this._firestore
            .collection('celebrities')
            .valueChanges();
    }

    async showCelebrityDetails(celebrity: any): Promise<void> {
        const modal = await this._modalController
            .create({
                component: CelebrityDetailComponent,
                componentProps: {
                    celebrity
                }
            });

        await modal.present();
    }
}
