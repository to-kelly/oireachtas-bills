import { describe, expect, it } from "vitest";

import {
  billsReducer,
  setSelectedBill,
  removeFavourite,
  addFavourite,
  BillsState,
} from "../bills";
import { Bill } from "@/types/Bills";

const bill: Bill = {
  billNo: "10",
  billType: "Public",
  sponsors: [],
  shortTitleEn: "",
  status: "",
  shortTitleGa: "",
};

describe("bill store", () => {
  it("should return initial state", () => {
    expect(billsReducer(undefined, { type: "undefined" })).toEqual({
      favouriteBills: [],
      selectedBill: undefined,
    });
  });

  it("should handle a bill being selected", () => {
    const previousState: BillsState = {
      selectedBill: undefined,
      favouriteBills: [],
    };

    expect(billsReducer(previousState, setSelectedBill(bill))).toEqual({
      selectedBill: bill,
      favouriteBills: [],
    });
  });

  it("should handle a bill being added to favourites", () => {
    const previousState: BillsState = {
      selectedBill: undefined,
      favouriteBills: [],
    };

    expect(billsReducer(previousState, addFavourite(bill))).toEqual({
      selectedBill: undefined,
      favouriteBills: [bill],
    });
  });

  it("should handle a bill being removed from favourites", () => {
    const previousState: BillsState = {
      selectedBill: undefined,
      favouriteBills: [bill],
    };

    expect(billsReducer(previousState, removeFavourite("10"))).toEqual({
      favouriteBills: [],
      selectedBill: undefined,
    });
  });
});
