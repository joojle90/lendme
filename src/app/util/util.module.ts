import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilRoutingModule } from './util-routing.module';
import { MaterialModule } from '../shared/material-module';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LimitedAccessComponent } from './limited-access/limited-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UtilComponent } from './util.component';
import { SignInService } from './sign-in/sign-in.service';

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UtilRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        CdkTableModule
    ],
    declarations: [
        AccessDeniedComponent,
        LimitedAccessComponent,
        NotFoundComponent,
        ServerErrorComponent,
        SignInComponent,
        SignUpComponent,
        UtilComponent
    ],
    providers: [SignInComponent, SignInService]
})
export class UtilModule {
}
