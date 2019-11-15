import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(
        private _toastController: ToastController
    ) {}

    showToast(message: string, closeButtonText?: string): void {
        this._showToast(message, closeButtonText);
    }

    showErrorToast(message: string, closeButtonText?: string): void {
        this._showToast(message, closeButtonText, 'danger');
    }

    private async _showToast(message: string, closeButtonText: string = 'Dismiss', color?: 'danger' | 'success'): Promise<void> {
        const toast = await this._toastController.create({
            message,
            color,
            position: 'top',
            duration: 2000,
            showCloseButton: true,
            closeButtonText
        });

        toast.present();
    }
}
