import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-celebrity-detail-modal',
    templateUrl: './celebrity-detail-modal.component.html',
    styleUrls: ['./celebrity-detail-modal.component.scss'],
})
export class CelebrityDetailModalComponent implements OnInit {
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
