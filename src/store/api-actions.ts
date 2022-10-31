import { createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosResponseHeaders } from 'axios';
import { ApiRoutes, LoadingStatus, QueryRoutes, QueryValues, ServerEntities } from 'constants/general.const';
import { ApiAction, NameSpace } from 'constants/store.const';
import { CategoryType, FetchProductType, ImageServerType, ProductIdRange, ProductServerType, StockPricesServerType } from 'types/global-types';
import { GeneralApiConfig } from 'types/store.type';
import GeneralUtils from 'utils/general-utils';
import { addCategories, addImages, addProducts, addStockPrices } from './actions';
import { setImageQueryRange, setImageStatus, setProductStatus, setStockPriceQueryRange, setStockPriceStatus } from './status-data/status-data';

export const fetchCategories = createAsyncThunk<void, void, GeneralApiConfig>(
  ApiAction.FetchCategories,
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<CategoryType[]>(ApiRoutes.Categories);
      console.log()
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

// export const fetchCombinedData = createAsyncThunk<void, ProductIdRange, GeneralApiConfig>(
//   ApiAction.FetchCombinedData,
//   async (arg, {dispatch, extra: api}) => {
//     const {idList, isExtraFetchCall} = arg;
//     try{
//       if(idList.length === 0) {
//         return;
//       }

//       let imagesData;
//       let stockPriceData;

//       const [rangeStart, rangeEnd] = [idList[0], idList.at(-1)]

//       if(rangeEnd && !isExtraFetchCall) {
//         imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
//           params: {[QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList)}
//         });

//         stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
//           params: {[QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList)}
//         });
//       } else {
//         imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
//           params: {[QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart)}
//         });

//         stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
//           params: {[QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart)}
//         });
//       }

//       if(rangeEnd && isExtraFetchCall) {
//         imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
//           params: {
//             [QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList),
//             [QueryRoutes.Range]: QueryValues.Range(ExtraFetchValues.rangeStart, ExtraFetchValues.rangeEnd),
//           }
//         });

//         stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
//           params: {
//             [QueryRoutes.Filter]: QueryValues.FilterByMany(ServerEntities.ProductId, idList),
//             [QueryRoutes.Range]: QueryValues.Range(ExtraFetchValues.rangeStart, ExtraFetchValues.rangeEnd),
//           }
//         });
//       } else if(isExtraFetchCall) {
//         imagesData =  api.get<ImageServerType[]>(ApiRoutes.Images, {
//           params: {
//             [QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart),
//             [QueryRoutes.Range]: QueryValues.Range(ExtraFetchValues.rangeStart, ExtraFetchValues.rangeEnd),
//           }
//         });

//         stockPriceData =  api.get<StockPricesServerType[]>(ApiRoutes.StockPrices, {
//           params: {
//             [QueryRoutes.Filter]: QueryValues.FilterByOne(ServerEntities.ProductId, rangeStart),
//             [QueryRoutes.Range]: QueryValues.Range(ExtraFetchValues.rangeStart, ExtraFetchValues.rangeEnd),
//           }
//         });
//       }

//       const [responseImages, responseStockPrice] = await Promise.all([imagesData, stockPriceData]);

//       const contentRangeImage = GeneralUtils.setupNextFetch(responseImages.headers as unknown as AxiosResponseHeaders);
//       const contentRangeStock = GeneralUtils.setupNextFetch(responseStockPrice.headers as unknown as AxiosResponseHeaders);

//       dispatch(addImages(responseImages.data));
//       dispatch(addStockPrices(responseStockPrice.data));

//       if(contentRangeImage) {
//         dispatch(setImageQueryRange(contentRangeImage));
//         dispatch(fetchImages({idList, isExtraFetchCall: true}));

//       } else if (contentRangeStock) {
//         dispatch(setStockPriceQueryRange(contentRangeStock));
//         dispatch(fetchStockPrices({idList, isExtraFetchCall: true}));

//       } else if (contentRangeImage && contentRangeStock) {
//         dispatch(setImageQueryRange(contentRangeImage));
//         dispatch(setStockPriceQueryRange(contentRangeStock));

//         dispatch(fetchCombinedData({idList, isExtraFetchCall: true}));
//       }
//     } catch (error) {
//       throw error;
//     }
//   }
// );
