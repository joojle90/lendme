import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LendComponent } from './lend/lend.component';
import { LogComponent } from './log/log.component';
import { RentComponent } from './rent/rent.component';
import { CustomerComponent } from './customer/customer.component';

export const SitePagesRoutingModule: Routes = [
    {
		path: 'dashboard',
		component: DashboardComponent
	}, {
		path: 'lend',
		component: LendComponent
	}, {
		path: 'log',
		component: LogComponent
	}, {
		path: 'rent',
		component: RentComponent
	}, {
		path: 'customer',
		component: CustomerComponent
	}
];