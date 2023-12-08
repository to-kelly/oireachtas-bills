import { GridColDef } from "@mui/x-data-grid";

import { DeleteBtn } from "./DeleteBtn";
import { FavouriteBtn } from "./FavouriteBtn";
import { Sponsors } from "./Sponsors";
import { Bill, BillType } from "@/types/Bills";

const defaultColumns: GridColDef<Bill>[] = [
  {
    field: "billNo",
    headerName: "Bill Number",
    filterable: false,
    flex: 1,
  },
  {
    field: "billType",
    headerName: "Bill Type",
    filterable: true,
    type: "singleSelect",
    valueOptions: [BillType.Public, BillType.Private, BillType.Hybrid],
    flex: 1,
  },
  {
    field: "status",
    headerName: "Bill Status",
    filterable: false,
    flex: 1,
  },
  {
    field: "sponsors",
    width: 400,
    maxWidth: 400,
    headerName: "Sponsors",
    renderCell: Sponsors,
    filterable: false,
    flex: 3,
  },
];

const favouriteColumn: GridColDef<Bill> = {
  field: "-",
  headerName: "Favourite",
  renderCell: FavouriteBtn,
  filterable: false,
  flex: 1,
};

const deleteColumn: GridColDef<Bill> = {
  field: "-",
  headerName: "Remove",
  renderCell: DeleteBtn,
  filterable: false,
  flex: 1,
};

export const billColumns: GridColDef<Bill>[] = [...defaultColumns, favouriteColumn];

export const favouriteBillColumns: GridColDef<Bill>[] = [...defaultColumns, deleteColumn];
