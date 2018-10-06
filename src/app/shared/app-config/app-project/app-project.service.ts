import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_JSON } from '../../../util/util.config';
import { AppProject } from './app-project';

@Injectable()
export class AppProjectService {
    readonly db_api: string = `${ API_JSON }/project`;

    constructor(
        private http: HttpClient
    ) {}

    getProjectRecord(params: any): Observable<AppProject[]> {
        return this.http.get<AppProject[]>(this.db_api, {
            params: {
                projectCode: params.projectCode === undefined ? "" : params.projectCode,
                markStatus: params.markStatus === undefined ? "" : params.markStatus
            }
        })
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
