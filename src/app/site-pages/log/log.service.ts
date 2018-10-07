import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_JSON } from "../../util/util.config";
import { Log } from "./log";

@Injectable()
export class LogService {
	readonly db_api: string = `${ API_JSON }/log`;

	constructor(
		private http: HttpClient
	) {}

	getLogRecord(params: any): Observable<Log[]> {
		return this.http.get<Log[]>(this.db_api, {
			params: {
				dateStart: params.dateStart === undefined ? "" : params.dateStart,
				dateEnd: params.dateEnd === undefined ? "" : params.dateEnd,
				logId: params.logId === undefined ? "" : params.logId
			}
		})
		.catch((error: any) => Observable.throw(error || 'Server error'));
	}

}
