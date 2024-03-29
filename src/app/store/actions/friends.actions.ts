import { Friend } from './../../model/friend';
import { createAction, props } from '@ngrx/store';

export const loadFriends = createAction(
  'load friends',
  props<{ uid: string }>()
);
export const loadFriendsSuccess = createAction(
  'load friend success',
  props<{ friends: Friend[] }>()
);

export const clearFriends = createAction('clear friends');
