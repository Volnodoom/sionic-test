export enum StoreNameSpace {
  Categories = 'CATEGORIES',
  Products = 'PRODUCTS',
  Images = 'IMAGES',
  StockPrices = 'STOCK_PRICES',
}

export enum NameSpace {
  StatusData = 'STATUS_DATA',
}

export enum ApiAction {
  FetchCategories = 'general/fetchCategories',
  FetchProducts = 'general/fetchProducts',
  FetchImages = 'general/fetchImages',
  FetchStockPrice = 'general/fetchStockPrice',
  FetchCombinedData = 'general/fetchCombinedData',
}


export enum NonApiAction {
  CreateCategories = 'CREATE_CATEGORIES',
  CreateProducts = 'CREATE_PRODUCTS',
  CreateImages = 'CREATE_IMAGES',
  CreateStockPrice = 'CREATE_STOCK_PRICES',
}
