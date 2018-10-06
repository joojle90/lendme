//import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AppConfigModule } from './shared/app-config/app-config.module';

import { CRYPT_CONFIG_PROVIDER, CryptConfigProvider, EncryptionService, EncryptionServiceModule } from 'angular-encryption-service';
import { UtilComponent } from './util/util.component';
import { ServerErrorComponent } from './util/server-error/server-error.component';

const AppCryptConfigProvider: CryptConfigProvider = {
    getSalt(): Promise<string> {
        // TODO: implement providing a salt, which should be unique per user and
        // base64-encoded.
        return Promise.resolve('saltsalt');
    }
};

export const firebase_config = {
    apiKey: "AIzaSyCl5UyQ4uj0xZUE0DiucbvX9i4_SmpSA5s",
    authDomain: "skyjuice-100418.firebaseapp.com",
    databaseURL: "https://skyjuice-100418.firebaseio.com",
    projectId: "skyjuice-100418",
    storageBucket: "skyjuice-100418.appspot.com",
    messagingSenderId: "302763336264"
};

@NgModule({
	declarations: [
		AppComponent,
		FullComponent,
		AppHeaderComponent,
		SpinnerComponent,
		AppSidebarComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		FlexLayoutModule,
		HttpClientModule,
		SharedModule,
        AppRoutingModule,
        AppConfigModule,
        AngularFireModule.initializeApp(firebase_config),
        EncryptionServiceModule.forRoot()
	],
	providers: [
        UtilComponent,
        ServerErrorComponent,
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
        EncryptionService,
        {
            provide: CRYPT_CONFIG_PROVIDER,
            useValue: AppCryptConfigProvider
        }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
