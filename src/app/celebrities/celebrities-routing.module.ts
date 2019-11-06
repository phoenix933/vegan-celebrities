import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CelebrityListComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: CelebrityListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CelebritiesRoutingModule { }
