import { Injectable, OnInit } from '@angular/core';
import { EncryptionService } from 'angular-encryption-service';

import { PROJECT_APP, DATE_QUERY_FORMAT } from '../../../util/util.config';

import { AppProject } from './app-project';
import { AppProjectService } from './app-project.service';

declare let moment: any;

@Injectable()
export class AppProjectConfig implements OnInit {
    dataProject: Array<AppProject>;

    constructor(
        private encryptionService: EncryptionService,
        private projectService: AppProjectService
    ) {}

    ngOnInit() {
        // this.appEncrypt();
    }

    /*appEncrypt(): Promise<string> {
        let text_encrypt = "2018-10-06;1;LEND_ME;2019-10-05";

        return this.encryptionService.generateKey(PROJECT_APP).then(key => {
            console.log("dad", this.encryptionService.encrypt(text_encrypt, key));
            return this.encryptionService.encrypt(text_encrypt, key);
            //z4aFleWPSAksysla0UkdIQ==:kedAxMV82Ig2JK8YlIkcRADahM0zzPryr49c98kJhZE=
        });
    }*/

    appDecrypt(token: string, passkey: string): Promise<string> {
        return this.encryptionService.generateKey(passkey).then(key => {
            return this.encryptionService.decrypt(token, key);
        });
    }

    fetchProject(item: string) {
        return new Promise<AppProject[]>((resolve, reject) => {
            let params = { projectCode: item, markStatus: "Y" };

            this.projectService.getProjectRecord(params).subscribe((data) => {
                this.dataProject = [];

                if(data.length) {
                    data.map((record) => {
                        const raw_data = new AppProject(
                            record["project_code"],
                            moment(record["insert_date"]).format(DATE_QUERY_FORMAT),
                            record["project_name"],
                            record["project_desc"],
                            record["project_image"],
                            record["system_token"],
                            record["duration"],
                            record["mark_status"],
                            record["remark"]
                        );

                        this.dataProject.push(raw_data);

                        let expire_date = new Date(raw_data.insert_date);
                        expire_date.setFullYear(expire_date.getFullYear() + raw_data.duration);
                        expire_date.setDate(expire_date.getDate() - 1);

                        expire_date = moment(expire_date).format(DATE_QUERY_FORMAT);

                        const db_token = raw_data.insert_date+";"+raw_data.duration+";"+raw_data.project_code+";"+expire_date;

                        this.appDecrypt(raw_data.system_token, raw_data.project_code).then((data) => {
                            if(data && data === db_token && (new Date() < new Date(expire_date))) {
                                console.log("record1");
                                resolve(this.dataProject);
                                return true;
                            }
                            console.log("record2");
                            resolve(null);
                            return false;
                        }, (error) => {
                            console.log("record3");
                            resolve(undefined);
                        });
                    });
                    return true;
                }
                resolve(null);
                return false;
            }, (error) => {
                reject(error);
            });
        });
    }
}