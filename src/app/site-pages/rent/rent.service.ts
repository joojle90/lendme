import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_JSON } from "../../util/util.config";
import { Rent } from "./rent";

@Injectable()
export class RentService {
	readonly db_api: string = `${ API_JSON }/audit`;

	constructor(
		private http: HttpClient
	) {}

	getRentRecord(params: any): Observable<Rent[]> {
		return this.http.get<Rent[]>(this.db_api, {
			params: {
				dateStart: params.dateStart === undefined ? "" : params.dateStart,
				dateEnd: params.dateEnd === undefined ? "" : params.dateEnd,
				bankinType: params.bankinType === undefined ? "" : params.bankinType
			}
		})
		.catch((error: any) => Observable.throw(error || 'Server error'));
	}

}
