import { NameSpace } from "constants/store.const";
import { RootState } from "types/store.type";

export const getCurrentProductVarId = (state: RootState) => state[NameSpace.UserShopData].currentProductVarId;
export const getCurrentProductVarPropertyId = (state: RootState) => state[NameSpace.UserShopData].currentProductVarPropertyId;
export const getCurrentProductVarPropertyListId = (state: RootState) => state[NameSpace.UserShopData].currentProductVarPropertyListId;
