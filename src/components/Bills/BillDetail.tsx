import React, { useState } from "react";

import { Tab, Tabs, Typography } from "@mui/material";

import { TabPanel } from "../TabPanel";
import { useAppSelector } from "@/hooks/redux-hooks";

export const BillDetail = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  const onTabChange = (_event: React.SyntheticEvent, tabIndex: number) => {
    setTabIndex(tabIndex);
  };

  const bill = useAppSelector((state) => state.billsReducer.selectedBill);

  return (
    <>
      <Tabs value={tabIndex} onChange={onTabChange} aria-label="Bill Titles">
        <Tab value={1} label="Irish Title" />
        <Tab value={2} label="English Title" />
      </Tabs>
      <TabPanel index={1} value={tabIndex}>
        <Typography variant="subtitle1">{bill?.shortTitleGa}</Typography>
      </TabPanel>
      <TabPanel index={2} value={tabIndex}>
        <Typography variant="subtitle1">{bill?.shortTitleEn}</Typography>
      </TabPanel>
    </>
  );
};
