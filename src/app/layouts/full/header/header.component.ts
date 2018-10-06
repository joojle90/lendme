import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class AppHeaderComponent implements OnInit { 

    constructor(
        private router: Router
    ) {}
    
    ngOnInit() {

    }

    logout() {
        localStorage.removeItem("is_signIn");
        this.router.navigate(["/app/sign-in"]);
    }
}
