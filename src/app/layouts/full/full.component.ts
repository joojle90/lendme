import * as $ from 'jquery';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    AfterViewInit
} from '@angular/core';

import { RoleMenu } from '../../shared/role-menu/role-menu';
import { AppStyleConfig } from '../../shared/app-config/app-style/app-style-config';
import { DEFAULT_STYLE } from '../../util/util.config';

/** @title Responsive sidenav */
@Component({
    selector: 'app-full-layout',
    templateUrl: 'full.component.html',
    styleUrls: [],
})
export class FullComponent implements OnDestroy, OnInit, AfterViewInit {
    mobileQuery: MediaQueryList;

    default_style: any = {};
    attr_style: any = {};
    attr_data: any = {};

    private _mobileQueryListener: () => void;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.default_style = DEFAULT_STYLE;
        this.attr_style = JSON.parse(localStorage.getItem("attr_style"));
        this.attr_data = JSON.parse(localStorage.getItem("attr_data"));
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}
