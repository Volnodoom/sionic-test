// @ts-nocheck
import { ONE } from 'constants/general.const';
import { NameSpace, OrmNameSpace } from 'constants/store.const';
import { createSelector } from 'redux-orm';
import orm from 'store/orm';

export const getCategory = createSelector(orm[OrmNameSpace.Categories]);

export const getProducts = createSelector(orm[OrmNameSpace.Products]);

export const getImages = createSelector(orm[OrmNameSpace.Images]);

export const getStockPrices = createSelector(orm[OrmNameSpace.StockPrices]);

export const getCurrentStockPrice = createSelector(
  orm[OrmNameSpace.StockPrices],
  state => state[NameSpace.UserShopData].currentProductVarId,
  (stockPriceList, currentId) => stockPriceList.find((line) => line.id === currentId),
)

export const getProductVarList = createSelector(
  orm[OrmNameSpace.ProductVarList],
  state => state[NameSpace.UserShopData].currentProductVarId,
  (productVarList, productVarId) => {
    if(productVarId && productVarList && productVarList.length > 0) {
      return productVarList.filter((line) => line.prodVarId === productVarId);
    } else {
      return [];
    }
  },
);

export const getProductVarPropertyIds = createSelector(
  orm[OrmNameSpace.ProductVarList],
  state => state[NameSpace.UserShopData].currentProductVarId,
  (productVarList, productVarId) => {
    if(productVarId) {
      const filteredData =  productVarList.filter((line) => line.prodVarId === productVarId);
      return filteredData.map((line) => line.prodVarPropId);
    }
  },
);

export const getProductVarProperty = createSelector(orm[OrmNameSpace.ProductVarProperty]);

export const getProductVarPropertyList = createSelector(orm[OrmNameSpace.ProductVarPropertyList]);

export const getFullProductInfo = createSelector(
  orm[OrmNameSpace.Products],
  orm[OrmNameSpace.Images],
  orm[OrmNameSpace.StockPrices],
  state => state[NameSpace.StatusData].selectedProduct,
  ( products, images, stock, id) => {
    if(!id) {
      return;
    }
    const oneProductInfo = products.at(id - ONE);

    const imgList = images
      .filter((imgInfo) => imgInfo.productId === id)
      .reduce((prevValue, currentValue) => prevValue.concat(currentValue.imageUrl), []);

      const stockPriceList = stock
      .filter((stockInfo) => stockInfo.productId === id);

    return {
      product: oneProductInfo,
      images: imgList,
      stockPrise: stockPriceList,
    };
  }

);

export const getProductsId = createSelector(
  orm[OrmNameSpace.Products].id,
  orm[OrmNameSpace.Images].productInfo.id,
  ( idList, listImgRelateToProduct) => {

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


