import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppConfigRoutingModule } from './app-config-routing.module';

import { AppProjectService } from './app-project/app-project.service';
import { AppProjectConfig } from './app-project/app-project-config';
import { AppStyleService } from './app-style/app-style.service';
import { AppStyleConfig } from './app-style/app-style-config';

@NgModule({
    imports: [
        CommonModule,
        AppConfigRoutingModule
    ],
    declarations: [],
    providers: [
        AppProjectService,
        AppProjectConfig,
        AppStyleService,
        AppStyleConfig
    ]
})
export class AppConfigModule {
}
