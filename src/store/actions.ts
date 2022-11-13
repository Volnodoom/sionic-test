import { createAction } from '@reduxjs/toolkit';
import { NonApiAction } from 'constants/store.const';
import {
  CategoryType,
  ImageServerType,
  ProductServerType,
  ProductVarListServerType,
  ProductVarPropertyListServerType,
  ProductVarPropertyType,
  StockPricesServerType
} from 'types/global-types';

export const withPayloadType = <T>() => {
  return (t: T) => ({ payload: t })
};

export const addCategories = createAction (
  NonApiAction.CreateCategories,
  withPayloadType<CategoryType[]>()
);

export const addProducts = createAction (
  NonApiAction.CreateProducts,
  withPayloadType<ProductServerType[]>()
);

export const addImages = createAction (
  NonApiAction.CreateImages,
  withPayloadType<ImageServerType[]>()
);

export const addStockPrices = createAction (
  NonApiAction.CreateStockPrice,
  withPayloadType<StockPricesServerType[]>()
);

export const addProductVarList = createAction (
  NonApiAction.CreateProductVarList,
  withPayloadType<ProductVarListServerType[]>()
);

export const addProductVarPropertyList = createAction (
  NonApiAction.CreateProductVarPropertyList,
  withPayloadType<ProductVarPropertyListServerType[]>()
);

export const addProductVarProperty = createAction (
  NonApiAction.CreateProductVarProperty,
  withPayloadType<ProductVarPropertyType[]>()
);
