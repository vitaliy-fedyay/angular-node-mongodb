import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  REGISTRATION = '[Auth] Registration',
  REGISTRATION_SUCCESS = '[Auth] Registration Success',
  LOGOUT = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

export class Registration implements Action {
  readonly type = AuthActionTypes.REGISTRATION;
  constructor(public payload: any) { }
}

export class RegistrationSuccess implements Action {
  readonly type = AuthActionTypes.REGISTRATION_SUCCESS;
  constructor(public payload: any) { }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type All = Registration | RegistrationSuccess | LoginSuccess | Logout | Login;
