import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { components } from './components';
import { containers } from './containers';
import { pipes } from './pipes';

import { CelebritiesRoutingModule } from './celebrities-routing.module';

@NgModule({
    declarations: [
        ...components,
        ...containers,
        ...pipes,
    ],
    imports: [
        CommonModule,

        IonicModule,

        CelebritiesRoutingModule
    ]
})
export class CelebritiesModule { }
