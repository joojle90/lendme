import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_JSON } from "../../util/util.config";
import { Lend } from "./lend";

@Injectable()
export class LendService {
	readonly db_api: string = `${ API_JSON }/audit`;

	constructor(
		private http: HttpClient
	) {}

	getLendRecord(params: any): Observable<Lend[]> {
		return this.http.get<Lend[]>(this.db_api, {
			params: {
				dateStart: params.dateStart === undefined ? "" : params.dateStart,
				dateEnd: params.dateEnd === undefined ? "" : params.dateEnd,
				bankinType: params.bankinType === undefined ? "" : params.bankinType
			}
		})
		.catch((error: any) => Observable.throw(error || 'Server error'));
	}

}
