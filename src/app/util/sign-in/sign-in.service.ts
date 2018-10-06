import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_JSON } from "../util.config";
import { SignIn } from "./sign-in";

@Injectable()
export class SignInService {
	readonly db_api: string = `${ API_JSON }/sign-in`;

	constructor(
		private http: HttpClient
	) {}

	getCredentialRecord(params: any): Observable<SignIn[]> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json'
			})
		};

		// const body = new HttpParams()
		// .set('client_id', 'casac')
		// .set('client_secret', 'ascas@wasd')
		// .set('grant_type', 'password')
		// .set('scope', 'sadscoa')
		// .set('username', 'skyrise')
		// .set('password', '12345');

		// let headers = new HttpHeaders();
		// headers = headers.append("Authorization", "Basic " + btoa("joel:joel-secret"));
		// headers = headers.append("Content-Type", 'application/x-www-form-urlencoded;charset=UTF-8');

		console.log("param signin :", params);
		return this.http.post<SignIn[]>(this.db_api, {
			params: {
				userId: params.userId === undefined ? "" : params.userId,
				password: params.password === undefined ? "" : params.password,
				activated: params.activated === undefined ? "" : params.activated,
				markStatus: params.markStatus === undefined ? "" : params.markStatus
			}
		}, httpOptions)
		.catch((error: any) => Observable.throw(error || 'Server error'));
	}

}
