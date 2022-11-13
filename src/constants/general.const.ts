export const BACKEND_URL = 'https://test2.sionic.ru/api/';
export const MAIN_URL = 'https://test2.sionic.ru/';
export const REQUEST_TIMEOUT = 5000;
export const UPLOADING_STEP = 16;
export const SERVER_MAX_OUTPUT = 50;
export const CONTENT_RANGE = 'content-range';
export const ONE = 1;
export const EMPTY = 'EMPTY';
export const LOCAL_RU = 'ru-RU';


export const TypeOfData = {
  STRING: 'string',
  NUMBER: 'number',
}

export const AppRoutes = {
  Root: '/',
  Catalog: 'catalog',
  Basket: 'basket',
  Delivery: 'delivery',
  HistoryOrder: 'history-order',
} as const;

export const ApiRoutes = {
  Categories: 'categories',
  ProductsRange: (rangeStart: number, rangeEnd: number) => `products?range=[${rangeStart},${rangeEnd}]`,
  ProductsSpecific: (data: number[]) => `products?range=[${data}]`,
  Images: 'productImages',
  OneImage: (id: number) => `productImages/${id}`,
  StockPrices: 'productVariations',
  OneStockPrice: (id: number) => `ProductVariations/${id}`,
  ProdVarList: 'productVariationPropertyValues',
  OneProdVarList: (id: number) => `productVariationPropertyValues/${id}`,
  ProdVarPropList: 'ProductVariationPropertyListValues',
  ProdVarProp: 'ProductVariationProperties',
} as const;

export enum QueryRoutes {
  Filter = 'filter',
  Sort = 'sort',
  Range = 'range'
}

export const QueryValues = {
  // accepts object like follow: filter={"category_id":20} or filter={"category_id":[20,21,22]}
  FilterByOne: (serverEntity: string, id: number) => `{"${serverEntity}":${id}}`,
  FilterByMany: (serverEntity: string, ids: number[]) => `{"${serverEntity}":[${ids}]}`,

  // accepts array like follow:  sort=["name","ASC"]
  SortIncrease: (serverEntity: string) => `[${serverEntity}, ASC]`,
  SortDecrease: (serverEntity: string) => `[${serverEntity}, DESC]`,

  // accepts array like follow: range=[0,24] first it must use Utile for general request
  Range: (rangeStart: number, rangeEnd: number) => `[${rangeStart},${rangeEnd}]`,
} as const;

export enum ServerEntities {
  Id = 'id',
  Name = 'name',
  CategoryId = 'category_id',
  ProductId = 'product_id',
  ImageUrl = 'image_url',
  Description = 'description',
  Stock = 'stock',
  Price = 'price',
  ProdVarId = 'product_variation_id',
  ProdVarPropId = 'product_variation_property_id',
  ProdVarPropList = 'product_variation_property_list_value_id',
}

export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum ResponseHeaders {
  Images = 'ProductImages',
  StockPrices = 'ProductVariations',
}
