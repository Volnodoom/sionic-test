export enum StoreNameSpace {
  Categories = 'CATEGORIES',
}

export enum ApiAction {
  FetchCategories = 'general/fetchCategories',
}

export const ApiRoutes = {
  Categories: 'categories',
} as const;

export enum NonApiAction {
  CreateCategories = 'CREATE_CATEGORIES',
}
