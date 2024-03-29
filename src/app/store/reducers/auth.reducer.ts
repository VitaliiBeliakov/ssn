import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { User } from '../../model/user';

import * as AuthActions from '../actions/auth.actions';
import { AppState } from '../app.reducer';

export interface State {
  user: User;
  loggingIn: boolean;
  email: string;
  password: string;
}

export const initialState: State = {
  user: new User({ uid: '', name: '', email: '' }),
  loggingIn: true,
  email: '',
  password: '',
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.auto_login, (state, action) => ({
    ...state,
    loggingIn: true,
  })),
  on(AuthActions.login, (state, action) => ({
    user: new User({ name: '', uid: '', email: '' }),
    email: action.email,
    password: action.password,
    loggingIn: true,
  })),
  on(AuthActions.login_success, (state, action) => ({
    user: new User({
      name: action.name,
      uid: action.uid,
      email: action.email,
      photo: action.photo,
    }),
    email: '',
    password: '',
    loggingIn: false,
  })),
  on(AuthActions.login_failed, (state, action) => ({
    ...state,
    loggingIn: false,
  })),
  on(AuthActions.logout, (state) => ({
    user: new User({ name: '', uid: '', email: '' }),
    email: '',
    password: '',
    loggingIn: false,
  })),
  on(AuthActions.registration, (state, action) => ({
    user: new User({ name: action.name, uid: '', email: action.email }),
    email: action.email,
    password: action.password,
    loggingIn: false,
  })),
  on(AuthActions.change_avatar_success, (state, action) => ({
    ...state,
    user: new User({ ...state.user, photo: action.ref }),
  })),
  on(AuthActions.change_name_success, (state, action) => ({
    ...state,
    user: new User({ ...state.user, name: action.name }),
  }))
);

export function reducer(state: State, action: Action) {
  return authReducer(state, action);
}

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthLoggingIn = createSelector(
  selectAuth,
  (state: State) => state.loggingIn
);

export const selectAuthUser = createSelector(
  selectAuth,
  (state: State) => state.user
);

export const selectAuthUserUid = createSelector(
  selectAuth,
  (state: State) => state.user.uid
);
