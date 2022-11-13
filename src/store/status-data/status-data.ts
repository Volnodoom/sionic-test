import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoadingStatus } from "constants/general.const"
import { NameSpace } from "constants/store.const"
import { SetupNextFetchType } from "types/global-types"
import { StatusDataType } from "types/store.type"

const initialState: StatusDataType  = {
  imageQueryRange: null,
  stockPriceQueryRange: null,
  categoryStatus: LoadingStatus.Idle,
  productStatus: LoadingStatus.Idle,
  imageStatus: LoadingStatus.Idle,
  stockPriceStatus: LoadingStatus.Idle,
  selectedProduct: null,
  productVarPropertyListStatus: LoadingStatus.Idle,
  productVarPropertyStatus: LoadingStatus.Idle,
}

export const statusData = createSlice({
  name: NameSpace.StatusData,
  initialState,
  reducers: {
    setCategoryStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.categoryStatus = action.payload;
    },
    setProductStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.productStatus = action.payload;
    },
    setImageStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.imageStatus = action.payload;
    },
    setStockPriceStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.stockPriceStatus = action.payload;
    },
    setProductVarPropertyListStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.productVarPropertyListStatus = action.payload;
    },
    setProductVarPropertyStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.productVarPropertyStatus = action.payload;
    },
    setImageQueryRange: (state, action: PayloadAction<SetupNextFetchType>) => {
      state.imageQueryRange = action.payload;
    },
    setStockPriceQueryRange: (state, action: PayloadAction<SetupNextFetchType>) => {
      state.stockPriceQueryRange = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<number | null> ) => {
      state.selectedProduct = action.payload;
    }
  }
})

export const {
  setProductStatus,
  setImageStatus,
  setStockPriceStatus,
  setImageQueryRange,
  setStockPriceQueryRange,
  setCategoryStatus,
  setSelectedProduct,
  setProductVarPropertyListStatus,
  setProductVarPropertyStatus,
} = statusData.actions;

