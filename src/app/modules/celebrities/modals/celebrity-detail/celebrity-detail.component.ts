import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-celebrity-detail',
    templateUrl: './celebrity-detail.component.html',
    styleUrls: ['./celebrity-detail.component.scss'],
})
export class CelebrityDetailComponent implements OnInit {
    celebrity: any;

    constructor(
        private _navParams: NavParams,
        private _modalController: ModalController
    ) {
        this.celebrity = this._navParams.get('ceelbrity');
    }

    ngOnInit(): void {}

    close(): void {
        this._modalController.dismiss();
    }
}
