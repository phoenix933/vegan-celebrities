import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CelebrityDetailComponent, CelebrityListComponent, CreateCelebrityComponent, EditCelebrityComponent } from './containers';

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
        path: 'add',
        component: CreateCelebrityComponent
    },
    {
        path: 'edit/:celebritySlug',
        component: EditCelebrityComponent
    },
    {
        path: 'view/:celebritySlug',
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
