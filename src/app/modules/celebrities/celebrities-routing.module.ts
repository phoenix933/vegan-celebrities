import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, RolesGuard } from '../auth/guards';
import { UserRole } from '../auth/enums';
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
        component: CreateCelebrityComponent,
        canActivate: [AuthGuard, RolesGuard],
        data: {
            roles: [UserRole.Admin],
            redirectTo: '/celebrities/list'
        }
    },
    {
        path: 'edit/:celebritySlug',
        component: EditCelebrityComponent,
        canActivate: [AuthGuard, RolesGuard],
        data: {
            roles: [UserRole.Admin],
            redirectTo: '/celebrities/list'
        }
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
