import { createAsyncThunk} from '@reduxjs/toolkit';
import { ApiAction, ApiRoutes } from 'constants/store.const';
import { CategoryType } from 'types/global-types';
import { GeneralApiConfig } from 'types/store.type';
import { addCategories } from './actions';

export const fetchCategories = createAsyncThunk<void, void, GeneralApiConfig>(
  ApiAction.FetchCategories,
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<CategoryType>(ApiRoutes.Categories);

      dispatch(addCategories(data));
    } catch (error) {
      throw error;
    }
  }
);
