import { AUTH_STATE_NAME } from './../auth/state/auth.selector';
import { SharedState } from './Shared/shared.state';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedReducer } from './Shared/shared.reducer';
import { AuthReducer } from './../auth/state/auth.reducer';
import { AuthState } from '../auth/state/auth.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
