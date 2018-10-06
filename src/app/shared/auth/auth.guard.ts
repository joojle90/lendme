import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PROJECT_APP } from '../../util/util.config';

import { AppProjectConfig } from '../app-config/app-project/app-project-config';
import { AppStyleConfig } from '../app-config/app-style/app-style-config';

declare let moment: any;

@Injectable()
export class AuthGuard implements OnInit, AfterViewInit, CanActivate {
    constructor(
        private router: Router,
        private projectConfig: AppProjectConfig,
        private styleConfig: AppStyleConfig
    ) {
        localStorage.removeItem('attr_style');
        this.fetchStyle('background');
    }

    ngAfterViewInit() {
    }

    ngOnInit (){
    }

    canActivate() {
        return this.projectConfig.fetchProject(PROJECT_APP).then((data) => {
            if(data) {
                data.map ((record) =>{
                    localStorage.removeItem('attr_data');
                    const attr_data = {
                        title: record.project_name,
                        desc: record.project_desc,
                        image: record.project_image
                    };

                    localStorage.setItem("attr_data", JSON.stringify(attr_data));

	                if (localStorage.getItem ('is_signIn')) {
		                return true;
	                }
	                this.router.navigate (['/app/sign-in']);
					return false;
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