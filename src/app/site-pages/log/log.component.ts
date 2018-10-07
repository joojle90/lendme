import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataTable, DataTableParams } from 'angular5-data-table';

import { LogService } from './log.service';
import { Log } from './log';

declare let moment: any;

@Component({
	selector: 'app-log',
	templateUrl: './log.component.html',
	styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit{
	tableLogData: Array<Log>;
	dataCount = 0;

	@ViewChild('customerTable') customerTable: DataTable;

	constructor(public logService: LogService) {

	} 

	ngOnInit() {
		let paramsTable = {
			limit: 10,
			offset: 0,
			sortAsc: false,
			sortBy: "insert_date"
		}
		this.getLogData(paramsTable);
	}

	getLogData(paramsTable: DataTableParams) {
		let params = {};
		this.logService.getLogRecord(params).subscribe((data) => {
			if(data) {
				this.tableLogData = [];

				data.map((record) => {
					this.dataCount = data.length;
					const rawData = new Log(
						record["log_id"],
						moment(record["insert_date"]).format("DD MMM YYYY"),
						record["customer_id"],
						record["customer_status"],
						record["credit_score"],
						record["number_of_lend"],
						record["number_of_rent"],
						record["mark_status"],
						record["remark"]
					);
					this.tableLogData.push(rawData);
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