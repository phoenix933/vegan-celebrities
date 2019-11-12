import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CelebrityDetailComponent, CelebrityListComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: CelebrityListComponent
    },
    {
        path: 'view/:id',
        component: CelebrityDetailComponent
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
