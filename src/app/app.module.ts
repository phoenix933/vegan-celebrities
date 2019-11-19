import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomSerializer, reducers, effects } from './store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthInterceptor } from './modules/auth/interceptors';

import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,

        IonicModule.forRoot(),

        // Firebase
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,

        // Store
        StoreModule.forRoot(reducers, {
            // metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),

        AppRoutingModule,
        AuthModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        {
            provide: RouterStateSerializer,
            useClass: CustomSerializer
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
