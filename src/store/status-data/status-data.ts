import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoadingStatus } from "constants/general.const"
import { NameSpace } from "constants/store.const"
import { SetupNextFetchType } from "types/global-types"
import { StatusDataType } from "types/store.type"

const initialState: StatusDataType  = {
  imageQueryRange: null,
  stockPriceQueryRange: null,
  productStatus: LoadingStatus.Idle,
  imageStatus: LoadingStatus.Idle,
  stockPriceStatus: LoadingStatus.Idle,
}

export const statusData = createSlice({
  name: NameSpace.StatusData,
  initialState,
  reducers: {
    setProductStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.productStatus = action.payload;
    },
    setImageStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.imageStatus = action.payload;
    },
    setStockPriceStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.stockPriceStatus = action.payload;
    },
    setImageQueryRange: (state, action: PayloadAction<SetupNextFetchType>) => {
      state.imageQueryRange = action.payload;
    },
    setStockPriceQueryRange: (state, action: PayloadAction<SetupNextFetchType>) => {
      state.stockPriceQueryRange = action.payload;
    },
  }
})

export const {
  setProductStatus,
  setImageStatus,
  setStockPriceStatus,
  setImageQueryRange,
  setStockPriceQueryRange,
} = statusData.actions;
