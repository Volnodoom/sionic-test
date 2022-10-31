import { AxiosInstance } from 'axios';
import { LoadingStatus } from 'constants/general.const';
import { ModelType } from 'redux-orm';
import { IndexedModelClasses, OrmState } from 'redux-orm/ORM';
import { store } from "store";
import { SetupNextFetchType } from './global-types';

export type RootState = ReturnType<typeof store.getState>;
export type EntityState = ModelType<any> | OrmState<IndexedModelClasses<any, string | number | symbol>>;
export type AppDispatch = typeof store.dispatch;

export type GeneralApiConfig = {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
};

export type StatusDataType = {
  imageQueryRange: SetupNextFetchType,
  stockPriceQueryRange: SetupNextFetchType,
  productStatus: LoadingStatus,
  imageStatus: LoadingStatus,
  stockPriceStatus: LoadingStatus,
}
