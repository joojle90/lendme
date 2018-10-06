import { NgModule } from '@angular/core';
import { RoleMenu } from './role-menu/role-menu';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { AuthGuard } from './auth/auth.guard';
import { AppConfigModule } from './app-config/app-config.module';
import { UtilModule } from '../util/util.module';


@NgModule({
    imports: [
        AppConfigModule,
        UtilModule
    ],
	declarations: [
		AccordionAnchorDirective,
		AccordionLinkDirective,
		AccordionDirective
	],
	exports: [
		AccordionAnchorDirective,
		AccordionLinkDirective,
		AccordionDirective
	],
	providers: [AuthGuard, RoleMenu]
})
export class SharedModule {
}
