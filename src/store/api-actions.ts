import { createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosResponseHeaders } from 'axios';
import { ApiRoutes, LoadingStatus, ONE, QueryRoutes, QueryValues, ServerEntities } from 'constants/general.const';
import { ApiAction, NameSpace } from 'constants/store.const';
import { CategoryType, FetchProductType, ImageServerType, ProductIdRange, ProductServerType, ProductVarListServerType, ProductVarPropertyListServerType, ProductVarPropertyType, StockPricesServerType } from 'types/global-types';
import { GeneralApiConfig } from 'types/store.type';
import GeneralUtils from 'utils/general-utils';
import { addCategories, addImages, addProducts, addProductVarList, addProductVarProperty, addProductVarPropertyList, addStockPrices } from './actions';
import { setImageQueryRange, setImageStatus, setProductStatus, setProductVarPropertyListStatus, setProductVarPropertyStatus, setStockPriceQueryRange, setStockPriceStatus } from './status-data/status-data';

export const fetchCategories = createAsyncThunk<void, void, GeneralApiConfig>(
  ApiAction.FetchCategories,
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<CategoryType[]>(ApiRoutes.Categories);
      dispatch(addCategories(data));
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProducts = createAsyncThunk<void, FetchProductType, GeneralApiConfig>(
  ApiAction.FetchProducts,
  async ({rangeStart, rangeEnd}, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<ProductServerType[]>(ApiRoutes.ProductsRange(rangeStart, rangeEnd));

      dispatch(addProducts(data));
      dispatch(setProductStatus(LoadingStatus.Succeeded));
    } catch (error) {
      throw error;
    }
  }
);

export const fetchImages = createAsyncThunk<void, ProductIdRange, GeneralApiConfig>(
  ApiAction.FetchImages,
  async (arg, {dispatch, getState, extra: api}) => {
    const {idList, isExtraFetchCall} = arg;

    try{
      let imagesData;

      const [rangeStart, rangeEnd] = [idList[0], idList.at(-1)]

      if (!isExtraFetchCall) {
        if(rangeEnd) {
          imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
            params: {[QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList)}
          });
        } else {
          imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
            params: {[QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart)}
          });
        }
      }

      else

      {
        const queryRangeStart = getState()[NameSpace.StatusData].imageQueryRange?.contentRangeStart as number;
        const queryRangeEnd = getState()[NameSpace.StatusData].imageQueryRange?.contentRangeEnd as number;
        if(rangeEnd) {
          imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
            params: {
              [QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList),
              [QueryRoutes.Range]: QueryValues.Range(queryRangeStart, queryRangeEnd),
            }
          });
        } else {
          imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
            params: {
              [QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart),
              [QueryRoutes.Range]: QueryValues.Range(queryRangeStart, queryRangeEnd),
            }
          });
        }
      }

      const responseImages = await imagesData;
      const contentRangeImage = GeneralUtils.setupNextFetch(responseImages.headers as unknown as AxiosResponseHeaders);

      dispatch(addImages(responseImages.data));

      if(contentRangeImage) {
        dispatch(setImageQueryRange(contentRangeImage));
        dispatch(fetchImages({idList, isExtraFetchCall: true}));
        return;
      }

      //clear store if no more data available from server
      if(!contentRangeImage && getState()[NameSpace.StatusData].imageQueryRange) {
        dispatch(setImageQueryRange(null));
      }

      dispatch(setImageStatus(LoadingStatus.Succeeded));
    } catch (error) {
      throw error;
    }
  }
);

export const fetchStockPrices = createAsyncThunk<void, ProductIdRange, GeneralApiConfig>(
  ApiAction.FetchStockPrice,
  async (arg, {dispatch, getState, extra: api}) => {
    const {idList, isExtraFetchCall} = arg;

    try{
      let stockPriceData;

      const [rangeStart, rangeEnd] = [idList[0], idList.at(-1)]

      if(!isExtraFetchCall) {
        if(rangeEnd) {
          stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
            params: {
              [QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList),
            }
          });
        } else {
          stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
            params: {
              [QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart),
            }
          });
        }
      }

      else

      {
        const queryRangeStart = getState()[NameSpace.StatusData].stockPriceQueryRange?.contentRangeStart as number;
        const queryRangeEnd = getState()[NameSpace.StatusData].stockPriceQueryRange?.contentRangeEnd as number;

        if(rangeEnd) {
          stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
            params: {
              [QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList),
              [QueryRoutes.Range]: QueryValues.Range(queryRangeStart, queryRangeEnd),
            }
          });
        } else {
          stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
            params: {
              [QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart),
              [QueryRoutes.Range]: QueryValues.Range(queryRangeStart, queryRangeEnd),
            }
          });
        }
      }

      const responseStockPrice = await stockPriceData;
      const contentRangeStock = GeneralUtils.setupNextFetch(responseStockPrice.headers as unknown as AxiosResponseHeaders);

      dispatch(addStockPrices(responseStockPrice.data));

      if (contentRangeStock) {
        dispatch(setStockPriceQueryRange(contentRangeStock));
        dispatch(fetchStockPrices({idList, isExtraFetchCall: true}));
        return;
      }

      //clear store if no more data available from server
      if(!contentRangeStock && getState()[NameSpace.StatusData].stockPriceQueryRange) {
        dispatch(setImageQueryRange(null));
      }

      dispatch(setStockPriceStatus(LoadingStatus.Succeeded));
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductVarList = createAsyncThunk<void, number, GeneralApiConfig>(
  ApiAction.FetchProductVarList,
  async (prodVarId, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<ProductVarListServerType[]>(ApiRoutes.ProdVarList, {
        params: {[QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProdVarId, prodVarId)},
      });

      dispatch(addProductVarList(data));
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductVarProperty = createAsyncThunk<void, number[], GeneralApiConfig>(
  ApiAction.FetchProductVarProperty,
  async (prodVarIds, {dispatch, extra: api}) => {
    try{
      const sortedIds = prodVarIds.slice().sort((valueA, valueB) => valueA - valueB);
      const {data} = await api.get<ProductVarPropertyType[]>(ApiRoutes.ProdVarProp, {
        params: {[QueryRoutes.Range]: GeneralUtils.correctRangeForRangeFetch(sortedIds[0], sortedIds.at(-ONE))},
      });

      dispatch(addProductVarProperty(data));
      dispatch(setProductVarPropertyStatus(LoadingStatus.Succeeded));
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductVarPropertyList = createAsyncThunk<void, number, GeneralApiConfig>(
  ApiAction.FetchProductVarPropList,
  async (prodVarPropListId, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<ProductVarPropertyListServerType[]>(ApiRoutes.ProdVarPropList, {
        params: {[QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProdVarPropId, prodVarPropListId)},
      });

      dispatch(addProductVarPropertyList(data));
      dispatch(setProductVarPropertyListStatus(LoadingStatus.Succeeded));

    } catch (error) {
      throw error;
    }
  }
);
