import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { components } from './components';
import { containers } from './containers';
import { pipes } from './pipes';
import { reducer, effects } from './store';

import { CelebritiesRoutingModule } from './celebrities-routing.module';

@NgModule({
    declarations: [
        ...components,
        ...containers,
        ...pipes,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        IonicModule,

        // Store
        StoreModule.forFeature('celebrities', reducer),
        EffectsModule.forFeature(effects),

        CelebritiesRoutingModule
    ]
})
export class CelebritiesModule { }
