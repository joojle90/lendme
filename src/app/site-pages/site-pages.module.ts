import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTableModule } from 'angular5-data-table';

import { MaterialModule } from '../shared/material-module';
import { SitePagesRoutingModule } from './site-pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LendComponent } from './lend/lend.component';
import { LogComponent } from './log/log.component';
import { RentComponent } from './rent/rent.component';
import { CustomerComponent } from './customer/customer.component';

import { LendService } from '../site-pages/lend/lend.service';
import { RentService } from '../site-pages/rent/rent.service';
import { LogService } from './log/log.service';
import { CustomerService } from './customer/customer.service';

@NgModule ({
    imports: [
		CommonModule,
		RouterModule.forChild(SitePagesRoutingModule),
		MaterialModule,
		HttpModule,
        FormsModule,
        DataTableModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		CdkTableModule
    ],
	providers: [
        LendService,
        RentService,
        CustomerService,
        LogService
    ],
    declarations: [
        DashboardComponent,
        LendComponent,
        LogComponent,
        RentComponent,
        CustomerComponent
    ]
})
export class SitePagesModule {
}
