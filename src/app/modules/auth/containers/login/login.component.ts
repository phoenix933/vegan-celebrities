import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';

import { AuthService } from './../../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
    signInLoading$: Observable<boolean>;

    loginForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    });

    constructor(
        private _formBuilder: FormBuilder,
        private _authService: AuthService
    ) {}

    ngOnInit(): void {
        this.signInLoading$ = this._authService.signInLoading$;
    }

    ngOnDestroy(): void {
        // this._toolbarService.setConfig({
        //     showBackButton: false,
        //     showMenuButton: true
        // });
    }

    signIn(): void {
        const { valid } = this.loginForm;

        if (valid) {
            const { email, password } = this.loginForm.value;
            this._authService.signInWithEmailAndPassword(email, password);
        }
    }
}
