import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'celebrities',
        pathMatch: 'full'
    },
    {
        path: 'celebrities',
        loadChildren: () => import('./modules/celebrities/celebrities.module').then(m => m.CelebritiesModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
