import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataTable, DataTableParams } from 'angular5-data-table';

import { CustomerService } from './customer.service';
import { Customer } from './customer';

declare let moment: any;

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
	tableCustomerData: Array<Customer>;
	dataCount = 0;
	
	@ViewChild('customerTable') customerTable: DataTable;

	constructor(public customerService: CustomerService) {

	} 

	ngOnInit() {
		let paramsTable = {
			limit: 10,
			offset: 0,
			sortAsc: false,
			sortBy: "insert_date"
		}
		this.getCustomerData(paramsTable);
	}

	getCustomerData(paramsTable: DataTableParams) {
		let params = {};
		this.tableCustomerData = [];

		this.customerService.getCustomerRecord(params).subscribe((data) => {
			if(data) {
				this.dataCount = data.length;
				data.map((record) => {
					const rawData = new Customer(
						record["customer_id"],
						moment(record["insert_date"]).format("DD MMM YYYY"),
						record["first_name"],
						record["last_name"],
						record["ic_no"],
						moment(record["date_of_birth"]).format("DD MMM YYYY"),
						record["gender"],
						record["account_no"],
						record["profile_rate"],
						record["address1"],
						record["address2"],
						record["address3"],
						record["postal_code"],
						record["city"],
						record["state"],
						record["country"],
						record["mobile_no"],
						record["email"],
						record["image"],
						record["emergency_contact_no"],
						record["mark_status"],
						record["remark"]
					);
					this.tableCustomerData.push(rawData);
				})
			}
		})
	}

}