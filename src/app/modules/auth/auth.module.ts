import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';

import { containers } from './containers';
import { reducer, effects } from './store';

@NgModule({
    declarations: [
        ...containers
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        IonicModule,

        StoreModule.forFeature('auth', reducer),
        EffectsModule.forFeature(effects),

        AuthRoutingModule,
    ]
})
export class AuthModule { }
