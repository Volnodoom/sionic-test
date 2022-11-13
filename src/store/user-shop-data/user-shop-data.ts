import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NameSpace } from "constants/store.const"
import { FullUserProductInfoType } from "types/global-types";
import { UserCardInfoType } from "types/store.type";

const initialState: UserCardInfoType = {
  userCardInfo: [],
  currentProductVarId: 1,
  currentProductVarPropertyId: null,
  currentProductVarPropertyListId: null,
}

export const userShopData = createSlice({
  name: NameSpace.UserShopData,
  initialState,
  reducers: {
    addProductToBasket: (state, action: PayloadAction<FullUserProductInfoType>) => {
      console.log(action.payload);
      state.userCardInfo = [
        ...state.userCardInfo,
        action.payload,
      ];
    },
    setCurrentProductVarId: (state, action: PayloadAction<number>) => {
      state.currentProductVarId = action.payload;
    },
    setCurrentProductVarPropertyId: (state, action: PayloadAction<number | null>) => {
      state.currentProductVarPropertyId = action.payload;
    },
    setCurrentProductVarPropertyListId: (state, action: PayloadAction<number | null>) => {
      state.currentProductVarPropertyListId = action.payload;
    },
  }
})

export const {
  addProductToBasket,
  setCurrentProductVarId,
  setCurrentProductVarPropertyId,
  setCurrentProductVarPropertyListId,
} = userShopData.actions;
