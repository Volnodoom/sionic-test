import { NameSpace } from 'constants/store.const';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import orm from './orm';
import { statusData } from './status-data/status-data';
import { userShopData } from './user-shop-data/user-shop-data';

export const rootReducer = combineReducers ({
  entities: createReducer(orm),
  [NameSpace.StatusData]: statusData.reducer,
  [NameSpace.UserShopData]: userShopData.reducer,
})
