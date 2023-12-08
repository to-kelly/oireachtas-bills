import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { Bill } from "@/types/Bills";

export interface BillsState {
  favouriteBills: Bill[];
  selectedBill?: Bill;
}

const initialState: BillsState = {
  favouriteBills: [],
  selectedBill: undefined,
};

const slice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Bill>) => {
      return {
        ...state,
        favouriteBills: [action.payload, ...state.favouriteBills],
      };
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        favouriteBills: [...state.favouriteBills].filter((bill) => action.payload !== bill.billNo),
      };
    },
    setSelectedBill: (state, action: PayloadAction<Bill>) => {
      return {
        ...state,
        selectedBill: action.payload,
      };
    },
  },
});

export const { addFavourite, removeFavourite, setSelectedBill } = slice.actions;

export const billsReducer = slice.reducer;
