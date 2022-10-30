import { createAction } from '@reduxjs/toolkit';
import { NonApiAction } from 'constants/store.const';
import { CategoryType } from 'types/global-types';

export const withPayloadType = <T>() => {
  return (t: T) => ({ payload: t })
}

export const addCategories = createAction (
  NonApiAction.CreateCategories,
  withPayloadType<CategoryType>()
)
