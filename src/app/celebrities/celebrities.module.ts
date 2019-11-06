import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebritiesRoutingModule } from './celebrities-routing.module';
import { containers } from './containers';

@NgModule({
    declarations: [
        ...containers
    ],
    imports: [
        CommonModule,
        CelebritiesRoutingModule
    ]
})
export class CelebritiesModule { }
