import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_JSON } from '../../../util/util.config';
import { AppStyle } from './app-style';

@Injectable()
export class AppStyleService {
    readonly db_api: string = `${ API_JSON }/style`;

    constructor(
        private http: HttpClient
    ) {}

    getStyleRecord(styleItem: string): Observable<AppStyle[]> {
        return this.http.get<AppStyle[]>(this.db_api, {
            params: {
                styleItem: styleItem === undefined ? "" : styleItem
            }
        }).catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
