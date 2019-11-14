import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CelebrityDetailComponent, CelebrityListComponent, CreateCelebrityComponent } from './containers';

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
    },
    {
        path: 'add',
        component: CreateCelebrityComponent
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
