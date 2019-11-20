import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './modules/auth/services/auth/auth.service';
import { CategoriesService, OccupationsService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private _categoriesService: CategoriesService,
        private _occupationsService: OccupationsService,
        private _authService: AuthService
    ) {
        this.initializeApp();

        this._authService.getUser();
        this._categoriesService.getCategories();

        setTimeout(() => {
            this._occupationsService.getOccupations();
        }, 500);
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
