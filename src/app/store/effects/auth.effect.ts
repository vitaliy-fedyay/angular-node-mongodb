import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActionTypes, LoginSuccess, RegistrationSuccess, Login, Registration } from '../actions/auth.action';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router,
    private cookie: CookieService
  ) { }

  @Effect()
  Login$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGIN),
      map((action: Login) => action.payload),
      switchMap(payload => {
        return this.authService.login(payload.email, payload.password)
          .pipe(
            map((user) => {
              return new LoginSuccess({ token: user.token });
            })
          );
      })
    );

  @Effect({ dispatch: false })
  LoginSuccess$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGIN_SUCCESS),
      tap((user) => {
        this.cookie.set('user', user.payload.token);
        this.router.navigateByUrl('/');
      })
    );

  @Effect()
  Registration$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.REGISTRATION),
      map((action: Registration) => action.payload),
      switchMap(payload => {
        return this.authService.registration(
          payload.name,
          payload.surname,
          payload.email,
          payload.phone,
          payload.password)
          .pipe(
            map((user) => {
              return new RegistrationSuccess({ token: user.token });
            })
          );
      })
    );

  @Effect({ dispatch: false })
  RegistrationSuccess$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.REGISTRATION_SUCCESS),
      tap((user) => {
        this.cookie.set('user', user.payload.token);
        this.router.navigateByUrl('/');
      })
    );

  @Effect({ dispatch: false })
  Logout$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGOUT),
      tap((user) => {
        this.cookie.delete('user');
        this.router.navigateByUrl('/login');
      })
    );
}

