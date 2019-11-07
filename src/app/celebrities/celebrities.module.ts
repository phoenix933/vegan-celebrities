import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CelebritiesRoutingModule } from './celebrities-routing.module';
import { containers } from './containers';

@NgModule({
    declarations: [
        ...containers
    ],
    imports: [
        CommonModule,

        IonicModule,

        CelebritiesRoutingModule
    ]
})
export class CelebritiesModule { }
