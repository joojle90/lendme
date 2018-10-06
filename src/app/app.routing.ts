import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth/auth.guard';
import { FullComponent } from './layouts/full/full.component';
import { UtilComponent } from './util/util.component';
import { ServerErrorComponent } from './util/server-error/server-error.component';
import { AccessDeniedComponent } from './util/access-denied/access-denied.component';

const routes: Routes = [
    // {
    //     path: '', component: FullComponent, children: [{
    //         path: '',
    //         redirectTo: '/starter',
    //         pathMatch: 'full'
    //     }, {
    //         path: '',
    //         loadChildren: './material-component/material.module#MaterialComponentsModule'
    //     }, {
    //         path: 'starter',
    //         loadChildren: './starter/starter.module#StarterModule'
    //     }]
    // },
    {
        path: '', component: FullComponent, children: [{
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }, {
            path: '',
            loadChildren: './site-pages/site-pages.module#SitePagesModule'
        }],
        canActivate: [AuthGuard]
    },
    {
        path: 'app',
        component: UtilComponent,
        children: [{
	        path: '',
	        redirectTo: '/dashboard',
	        pathMatch: 'full'
        },
        {
            path: '',
            loadChildren: './util/util.module#UtilModule'
        }],
        canActivate: [UtilComponent]
    },
    {
        path: 'app/access-denied',
        component: AccessDeniedComponent
    },
    {
        path: 'app/error',
        component: ServerErrorComponent
    },
    {
        path: '**', redirectTo: '/app/not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}