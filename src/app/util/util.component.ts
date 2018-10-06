import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AppProjectConfig } from '../shared/app-config/app-project/app-project-config';
import { AppStyleConfig } from '../shared/app-config/app-style/app-style-config';
import { PROJECT_APP, DEFAULT_STYLE } from './util.config';

@Component ({
    selector: 'app-util',
    templateUrl: './util.component.html',
    styleUrls: ['./util.component.scss']
})
export class UtilComponent implements OnInit, AfterViewInit, CanActivate {
	default_style: any = {};
	attr_style: any = {};

    constructor (
        private router: Router,
        private projectConfig: AppProjectConfig,
        private styleConfig: AppStyleConfig
    ){
        this.fetchStyle('background');
    }

    ngAfterViewInit() {
    }

    ngOnInit (){
	    this.default_style = DEFAULT_STYLE;
    }

    canActivate() {
        return this.projectConfig.fetchProject(PROJECT_APP).then((data) => {
            if(data) {
                data.map((record) => {
                    localStorage.removeItem('attr_data');
                    const attr_data = {
                        title: record.project_name,
                        desc: record.project_desc,
                        image: record.project_image
                    };

                    localStorage.setItem("attr_data", JSON.stringify(attr_data));

	                if(localStorage.getItem('is_signIn')) {
		                this.router.navigate(['/dashboard']);
		                return false;
	                }
	                return true;
                });
                return true;
            }
            console.log("ERROR DATA");
            this.router.navigate(["/app/access-denied"]);
            return false;
        }, (error) => {
            console.log("ERROR LINK");
            this.router.navigate(["/app/error"]);
            return false;
        });
    }

    fetchStyle(item: string) {
        this.styleConfig.fetchStyle(item).then((data) => {
            if(data) {
                data.map((record) => {
	                localStorage.removeItem('attr_style');

                    this.attr_style = record;
                    const attr_style = {
                        theme1: record.item1,
                        theme2: record.item2,
                        theme3: record.item3,
                        color1: record.item4,
                        color2: record.item5,
                        color3: '#607d8b'
                    };
                    localStorage.setItem("attr_style", JSON.stringify(attr_style));
                })
            }
        }, (error) => {
            console.log("Error style", error);
        });
    }
}
