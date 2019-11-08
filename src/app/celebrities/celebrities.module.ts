import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { containers } from './containers';
import { modals } from './modals';
import { pipes } from './pipes';

import { CelebritiesRoutingModule } from './celebrities-routing.module';

@NgModule({
    declarations: [
        ...containers,
        ...modals,
        ...pipes,
    ],
    entryComponents: [
        ...modals
    ],
    imports: [
        CommonModule,

        IonicModule,

        CelebritiesRoutingModule
    ]
})
export class CelebritiesModule { }
