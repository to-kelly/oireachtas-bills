import React from "react";

import { Star } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { type GridRenderCellParams } from "@mui/x-data-grid";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { addFavourite, removeFavourite } from "@/store/bills";
import { Bill } from "@/types/Bills";

export const FavouriteBtn = ({ row: bill }: GridRenderCellParams<Bill>) => {
  const dispatch = useAppDispatch();

  const favouriteBills = useAppSelector(({ billsReducer }) => billsReducer.favouriteBills);

  const isFavourite = favouriteBills.find(({ billNo }) => bill.billNo === billNo);

  const onClick = (e: React.SyntheticEvent) => {
    console.info(`${isFavourite ? "Removing" : "Saving"} bill as favourite: `, bill.billNo);
    dispatch(isFavourite ? removeFavourite(bill.billNo) : addFavourite(bill));
    e.stopPropagation();
  };

  return (
    <IconButton data-testid="favourite-btn" aria-label="favourite" onClick={onClick}>
      <Star color={isFavourite ? "success" : "inherit"} />
    </IconButton>
  );
};
