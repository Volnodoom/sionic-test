import { NameSpace } from "constants/store.const";
import { RootState } from "types/store.type";

export const getProductStatus = (state: RootState) => state[NameSpace.StatusData].productStatus;
export const getImageStatus = (state: RootState) => state[NameSpace.StatusData].imageStatus;
export const getStockPriceStatus = (state: RootState) => state[NameSpace.StatusData].stockPriceStatus;

export const getImageQueryRange = (state: RootState) => state[NameSpace.StatusData].imageQueryRange;
export const getSortPriceQueryRange = (state: RootState) => state[NameSpace.StatusData].stockPriceQueryRange;
