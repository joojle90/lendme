import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataTable, DataTableParams } from 'angular5-data-table';

import { RentService } from './rent.service';
import { Rent } from './rent';

declare let moment: any;

@Component({
	selector: 'app-rent',
	templateUrl: './rent.component.html',
	styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit{
	tableRentData: Array<Rent>;
	dataCount = 0;

	@ViewChild('customerTable') customerTable: DataTable;

	constructor(public rentService: RentService) {

	} 

	ngOnInit() {
		let paramsTable = {
			limit: 10,
			offset: 0,
			sortAsc: false,
			sortBy: "insert_date"
		}
		this.getRentData(paramsTable);
	}

	getRentData(paramsTable: DataTableParams) {
		let params = {
			bankinType: "RENT"
		};
		this.rentService.getRentRecord(params).subscribe((data) => {
			if(data) {
				this.tableRentData = [];

				data.map((record) => {
					this.dataCount = data.length;
					const rawData = new Rent(
						record["audit_id"],
						moment(record["insert_date"]).format("DD MMM YYYY"),
						record["from_customer_id"],
						record["to_customer_id"],
						record["bankin_type"],
						record["amount"],
						record["point_of_interest"],
						record["status"],
						record["number_of_month"],
						record["mark_status"],
						record["remark"]
					);
					this.tableRentData.push(rawData);
				})
			}
		})
	}

	getCustomerDetails(detailId) {
		if(detailId === "CID001") {
			alert("Customer name : Ahmad bi Ismail");
		} else if(detailId === "CID002") {
			alert("Customer name : Mark Anthony");
		} else if(detailId === "CID003") {
			alert("Customer name : Siti Jamal");
		} else if(detailId === "CID004") {
			alert("Customer name : Sri Rahman");
		} else if(detailId === "CID005") {
			alert("Customer name : Muhammad Abrar");
		}
	}

}
 