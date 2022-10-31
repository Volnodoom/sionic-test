import { createAction } from '@reduxjs/toolkit';
import { NonApiAction } from 'constants/store.const';
import { CategoryType, ImageServerType, ProductServerType, StockPricesServerType } from 'types/global-types';

export const withPayloadType = <T>() => {
  return (t: T) => ({ payload: t })
}

export const addCategories = createAction (
  NonApiAction.CreateCategories,
  withPayloadType<CategoryType[]>()
)

export const addProducts = createAction (
  NonApiAction.CreateProducts,
  withPayloadType<ProductServerType[]>()
)

export const addImages = createAction (
  NonApiAction.CreateImages,
  withPayloadType<ImageServerType[]>()
)

export const addStockPrices = createAction (
  NonApiAction.CreateStockPrice,
  withPayloadType<StockPricesServerType[]>()
)
