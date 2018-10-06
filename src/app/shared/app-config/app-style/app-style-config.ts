import { Injectable, OnInit } from '@angular/core';

import { AppStyle } from './app-style';
import { AppStyleService } from './app-style.service';

declare let moment: any;

@Injectable()
export class AppStyleConfig implements OnInit {
    styleData: Array<AppStyle>;

    constructor(
            private styleService: AppStyleService
    ) {}

    ngOnInit() {

    }

    fetchStyle(item: string) {
        return new Promise<AppStyle[]>((resolve, reject) => {
            this.styleService.getStyleRecord(item).subscribe((data) => {
                this.styleData = [];

                if(data) {
                    data.map((record) => {
                        const raw_data = new AppStyle(
                                record["style_item"],
                                record["item1"],
                                record["item2"],
                                record["item3"],
                                record["item4"],
                                record["item5"],
                                record["mark_status"],
                                record["remark"]
                        );

                        this.styleData.push(raw_data);

                        resolve(this.styleData);
                    })
                }
            }, (error) => {
                reject(error);
            });
        });
    }
}