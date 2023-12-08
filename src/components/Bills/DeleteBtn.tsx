import React from "react";

import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { type GridRenderCellParams } from "@mui/x-data-grid";

import { useAppDispatch } from "@/hooks/redux-hooks";
import { removeFavourite } from "@/store/bills";
import { Bill } from "@/types/Bills";

export const DeleteBtn = ({ row }: GridRenderCellParams<Bill>) => {
  const dispatch = useAppDispatch();

  const onClick = (e: React.SyntheticEvent) => {
    dispatch(removeFavourite(row.billNo));
    e.stopPropagation();
  };

  return (
    <IconButton
      data-testid="delete-btn"
      title="Remove from favourite bills"
      aria-label="Remove from favourite bills"
      onClick={onClick}
    >
      <Delete />
    </IconButton>
  );
};
