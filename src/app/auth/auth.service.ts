import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private router: Router) {
    }

    logout() {
        localStorage.removeItem('token');

    }

    loginService() {
        localStorage.setItem('token', '123');
        const token = localStorage.getItem('token');
        this.router.navigateByUrl('/menu');
    }
}