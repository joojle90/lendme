import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataTable, DataTableParams } from 'angular5-data-table';
import { MatDialog } from '@angular/material';

import { LendService } from './lend.service';
import { Lend } from './lend';

declare let moment: any;

@Component({
	selector: 'app-lend',
	templateUrl: './lend.component.html',
	styleUrls: ['./lend.component.scss']
})
export class LendComponent implements OnInit{
	tableLendData: Array<Lend>;
	dataCount = 0;

	@ViewChild('customerTable') customerTable: DataTable;

	constructor(public lendService: LendService, public dialog: MatDialog) {

	} 

	ngOnInit() {
		let paramsTable = {
			limit: 10,
			offset: 0,
			sortAsc: false,
			sortBy: "insert_date"
		}
		this.getLendData(paramsTable);
	}

	getLendData(paramsTable: DataTableParams) {
		let params = {
			bankinType: "LEND"
		};
		this.lendService.getLendRecord(params).subscribe((data) => {
			if(data) {
				this.tableLendData = [];

				data.map((record) => {
					this.dataCount = data.length;
					const rawData = new Lend(
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
					this.tableLendData.push(rawData);
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
 