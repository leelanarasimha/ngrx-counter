import { createAction, props } from '@ngrx/store';
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login Success';
export const LOGIN_FAIL = '[auth page] login Fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(LOGIN_SUCCESS);
