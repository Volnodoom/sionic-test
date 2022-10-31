// @ts-nocheck
import { StoreNameSpace } from 'constants/store.const';
import { createSelector } from 'redux-orm';
import orm from 'store/orm';

export const getCategory = createSelector(orm[StoreNameSpace.Categories]);

export const getProducts = createSelector(orm[StoreNameSpace.Products]);

export const getImages = createSelector(orm[StoreNameSpace.Images]);

export const getStockPrices = createSelector(orm[StoreNameSpace.StockPrices]);


export const getProductsId = createSelector(
  orm,
  state => state.orm,
  orm[StoreNameSpace.Products].id,
  orm[StoreNameSpace.Images].productInfo.id,
  ( {IMAGES} , _, idList, listImgRelateToProduct) => {

    return listImgRelateToProduct.length > 0
    ?
      idList
      .filter((productInfo) => {
        const hasImage = listImgRelateToProduct.some((id) => id === productInfo);
        return !hasImage;
      })
    :
      idList;
  },
);


