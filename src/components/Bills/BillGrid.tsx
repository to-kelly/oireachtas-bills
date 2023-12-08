import React, { useState } from "react";

import styled from "@emotion/styled";
import { Alert, Box, CircularProgress, Dialog, Tab, Tabs } from "@mui/material";
import { DataGrid, type GridEventListener } from "@mui/x-data-grid";

import { BillDetail } from "./BillDetail";
import { billColumns, favouriteBillColumns } from "./columns";
import { CustomToolbar } from "./CustomToolbar";
import { TabPanel } from "@/components/TabPanel";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { useGetBillsQuery } from "@/services/bills";
import { setSelectedBill } from "@/store/bills";
import { Bill } from "@/types/Bills";

export const BillGrid = () => {
  const favouriteBills = useAppSelector((state) => state.billsReducer.favouriteBills);

  const { data: bills, error, isLoading } = useGetBillsQuery("");

  const [tabIndex, setTabIndex] = useState(1);

  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const onRowClick: GridEventListener<"rowClick"> = ({ row: bill }) => {
    dispatch(setSelectedBill(bill));
    setOpen(true);
  };

  const onTabChange = (_event: React.SyntheticEvent, tabIndex: number) => {
    setTabIndex(tabIndex);
  };

  const commonProps = {
    onRowClick,
    getRowId: ({ billNo }: Bill) => billNo,
    pageSizeOptions: [5, 10],
    initialState: {
      pagination: {
        paginationModel: { page: 0, pageSize: 10 },
      },
    },
  };

  if (isLoading) {
    return <CircularProgress />;
  } else if (error) {
    return <Alert severity="error">Error getting bill data</Alert>;
  }

  return (
    <>
      <Tabs value={tabIndex} onChange={onTabChange} aria-label="Bill Titles">
        <Tab value={1} label="Bills" />
        <Tab value={2} label="Favourite Bills" />
      </Tabs>
      <TabPanel index={1} value={tabIndex}>
        {bills && (
          <StyledGrid>
            <DataGrid
              {...commonProps}
              rows={bills}
              slots={{ toolbar: CustomToolbar }}
              columns={billColumns}
            />
          </StyledGrid>
        )}
      </TabPanel>
      <TabPanel index={2} value={tabIndex}>
        {favouriteBills && (
          <StyledGrid>
            <DataGrid {...commonProps} rows={favouriteBills} columns={favouriteBillColumns} />
          </StyledGrid>
        )}
      </TabPanel>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <Box>
          <BillDetail />
        </Box>
      </Dialog>
    </>
  );
};

const StyledGrid = styled.div`
  height: 670px;
  width: 850px;
`;
