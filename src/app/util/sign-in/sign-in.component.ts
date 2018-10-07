import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LOGO_SRC, DEFAULT_STYLE } from '../util.config';
import { SignInService } from "./sign-in.service";

import { DomSanitizer } from '@angular/platform-browser';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-sign-in-b',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
    default_style: any = {};
    attr_style: any = {};
    attr_data: any = {};
    imagePath: any = "";

	userId: FormControl;
    password: FormControl;

    signInFormGroup: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private router: Router,
        private _sanitizer: DomSanitizer,
        private signInService: SignInService
    ) {
        // matcher = new MyErrorStateMatcher();
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.default_style = DEFAULT_STYLE;
        this.attr_style = JSON.parse(localStorage.getItem("attr_style"));
        this.attr_data = JSON.parse(localStorage.getItem("attr_data"));
        this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(LOGO_SRC + this.attr_data.image);

        console.log("sdas", this.attr_style);

        this.createFormControls();
        this.createFormGroup();
    }

    createFormControls(): void {
        this.userId = new FormControl('', [Validators.required]);
        this.password = new FormControl('', [Validators.required]);
    }

    createFormGroup(): void {
        this.signInFormGroup = this._fb.group({
	        userId: this.userId,
            password: this.password
        })
    }

    signInSubmit(): void {
        if(this.signInFormGroup.valid) {
            console.log("process sign in");
            /*let params = { userId: this.userId.value, password: this.password.value, activated: "1", markStatus: "Y" };

            this.signInService.getCredentialRecord(params).subscribe((data) => {
            	console.log("data", data);
            })*/

            if(this.userId.value === 'admin') {
                localStorage.setItem("is_signIn", "true");
                this.router.navigate(["/dashboard"]);
            } else {
                alert("Please try again");
            }
        }
    }

    getErrorMessage() {
        return 'This field is required';
    }

    ngOnDestroy() {

    }
}