export type DefaultParamsForTheme = {
  font: {[x: string]: string},
  color: {[x: string]: string},
  width: {[x: string]: string},
  padding: {[x: string]: string},
};

export type ThemeParameters = {
  theme: DefaultParamsForTheme
};

export type ActionType <T> = {
  type: string,
  payload: T,
};

export type CategoryType = {
  id: number,
  name: string,
};

export type FetchProductType = {
  rangeStart: number,
  rangeEnd: number,
};

export type ProductServerType = {
  id: number,
  name: string,
  description: string,
  'category_id': number,
};

export type ProductClientType = {
  id: number,
  name: string,
  description: string,
  categoryId: number,
};

export type ProductIdRange = {
  idList: number[];
  isExtraFetchCall: boolean;
};

export type ImageServerType = {
  id: number,
  'image_name': string,
  'image_url': string,
  'product_id': number,
};

export type ImageClientType = {
  id: number,
  name: string,
  imageUrl: string,
  productId: number,
};

export type StockPricesServerType = {
  id: number,
  stock: number,
  price: number,
  'product_id': number,
};

export type StockPricesClientType = {
  id: number,
  stock: number,
  price: number,
  productId: number,
};

export type SetupNextFetchType = {
  contentRangeStart: number,
  contentRangeEnd: number,
} | null;
