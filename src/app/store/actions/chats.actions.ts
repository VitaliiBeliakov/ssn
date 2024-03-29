import { Chat } from './../../model/chat';
import { createAction, props } from '@ngrx/store';

export const loadChats = createAction('load chats', props<{ uid: string }>());
export const loadChatsSuccess = createAction(
  'load chats success',
  props<{ chats: Chat[]; unviewedMessagesNumber: number }>()
);

export const clearChats = createAction(' clear chats');
