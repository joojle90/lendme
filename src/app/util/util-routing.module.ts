import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent} from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LimitedAccessComponent } from './limited-access/limited-access.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: 'sign-in',
        component: SignInComponent, //Change to SignInAComponent if you want see other login style
        // canActivate: [SignInComponent],
        pathMatch: 'full'
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'limited-access',
        component: LimitedAccessComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    }
];

@NgModule ({
    imports: [RouterModule.forChild (routes)],
    exports: [RouterModule]
})
export class UtilRoutingModule {
}
