import { NewspaperSharp } from "@mui/icons-material";
import { Typography } from "@mui/material";

import { BillGrid } from "@/components/Bills/BillGrid";
import { StyledHeader } from "@/components/StyledHeader";

export const Bills = () => {
  return (
    <>
      <StyledHeader>
        <NewspaperSharp fontSize="large" />
        <Typography variant="h4">Bills</Typography>
      </StyledHeader>
      <BillGrid />
    </>
  );
};
