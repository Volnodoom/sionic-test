export enum OrmNameSpace {
  Categories = 'CATEGORIES',
  Products = 'PRODUCTS',
  Images = 'IMAGES',
  StockPrices = 'STOCK_PRICES',
  ProductVarList = 'PRODUCT_VAR_LIST',
  ProductVarPropertyList = 'PRODUCT_VAR_PROPERTY_LIST',
  ProductVarProperty = 'PRODUCT_VAR_PROPERTY',
}

export enum NameSpace {
  StatusData = 'STATUS_DATA',
  UserShopData = 'USER_SHOP_DATA',
}

export enum ApiAction {
  FetchCategories = 'general/fetchCategories',
  FetchProducts = 'general/fetchProducts',
  FetchImages = 'general/fetchImages',
  FetchStockPrice = 'general/fetchStockPrice',
  FetchCombinedData = 'general/fetchCombinedData',
  FetchProductVarList = 'details/fetchProductVarList',
  FetchProductVarPropList = 'details/fetchProductVarPropertyList',
  FetchProductVarProperty = 'details/fetchProductVarProperty',
}

export enum NonApiAction {
  CreateCategories = 'CREATE_CATEGORIES',
  CreateProducts = 'CREATE_PRODUCTS',
  CreateImages = 'CREATE_IMAGES',
  CreateStockPrice = 'CREATE_STOCK_PRICES',
  CreateProductVarList = 'CREATE_PRODUCT_VAR_LIST',
  CreateProductVarPropertyList = 'CREATE_PRODUCT_VAR_PROPERTY_LIST',
  CreateProductVarProperty = 'CREATE_PRODUCT_VAR_PROPERTY',
}
