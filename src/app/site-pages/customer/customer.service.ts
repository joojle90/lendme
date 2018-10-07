import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_JSON } from "../../util/util.config";
import { Customer } from "./customer";

@Injectable()
export class CustomerService {
	readonly db_api: string = `${ API_JSON }/customer`;

	constructor(
		private http: HttpClient
	) {}

	getCustomerRecord(params: any): Observable<Customer[]> {
		return this.http.get<Customer[]>(this.db_api, {
			params: {
				dateStart: params.dateStart === undefined ? "" : params.dateStart,
				dateEnd: params.dateEnd === undefined ? "" : params.dateEnd,
				customerId: params.customerId === undefined ? "" : params.customerId
			}
		})
		.catch((error: any) => Observable.throw(error || 'Server error'));
	}

}
