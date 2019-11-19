import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, filter, switchMap } from 'rxjs/operators';

import { UserRole } from '../enums';
import { RouterService } from '../../../services';
import { AuthService } from '../services';

@Injectable({
    providedIn: 'root'
})
export class RolesGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private _routerService: RouterService
    ) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const roles: UserRole[] = route.data.roles;
        const redirectTo: string = route.data.redirectTo;

        if (!roles || !roles.length) {
            throw new Error('RolesGuard is being used, but no roles have been provided for it.');
        }

        return this._authService
            .userRole$
            .pipe(
                filter(role => !!role),
                switchMap((role: UserRole) => {
                    return of(roles.some(r => r === role));
                }),
                tap((canActivate: boolean) => {
                    if (!canActivate && redirectTo) {
                        this._routerService.go({ path: [redirectTo] });
                    }
                })
            );
    }
}
