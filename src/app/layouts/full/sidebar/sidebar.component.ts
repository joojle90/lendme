import { ChangeDetectorRef, Component, NgZone, OnDestroy, ViewChild, HostListener, Directive, OnInit, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { RoleMenu } from '../../../shared/role-menu/role-menu';
import {DEFAULT_STYLE} from '../../../util/util.config';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: []
})
export class AppSidebarComponent implements OnInit{
    mobileQuery: MediaQueryList;

    default_style: any = {};
    attr_style: any = {};

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public menuItems: RoleMenu) {
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
        this.default_style = DEFAULT_STYLE;
        this.attr_style = JSON.parse(localStorage.getItem("attr_style"));
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    test() {
        console.log("teter");
    }

}
