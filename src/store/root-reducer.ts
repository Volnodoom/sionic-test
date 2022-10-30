import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import orm from './orm';

export const rootReducer = combineReducers ({
  entities: createReducer(orm)
})
