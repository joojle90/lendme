import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/material-module';
import { SitePagesRoutingModule } from './site-pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LendComponent } from './lend/lend.component';
import { LogComponent } from './log/log.component';
import { RentComponent } from './rent/rent.component';
import { StatusComponent } from './status/status.component';

@NgModule ({
    imports: [
		CommonModule,
		RouterModule.forChild(SitePagesRoutingModule),
		MaterialModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		CdkTableModule
    ],
	providers: [],
    declarations: [
        DashboardComponent,
        LendComponent,
        LogComponent,
        RentComponent,
        StatusComponent
    ]
})
export class SitePagesModule {
}
