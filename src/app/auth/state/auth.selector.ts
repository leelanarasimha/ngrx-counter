import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return state.user ? true : false;
});

export const getToken = createSelector(getAuthState, (state) => {
  return state.user ? state.user.userToken : null;
});
