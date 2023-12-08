import { Box, Chip, Stack } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

import { Bill } from "@/types/Bills";

export const Sponsors = ({ row: bill }: GridRenderCellParams<Bill>) => {
  return (
    <Box component="div" sx={{ overflow: "auto" }}>
      <Stack direction="row" spacing={1}>
        {bill.sponsors.map((sponsor, index) => (
          <Chip
            size="small"
            color="info"
            label={sponsor.sponsor?.as?.showAs || sponsor.sponsor?.by?.showAs}
            variant="outlined"
            key={`${sponsor}${index}`}
          />
        ))}
      </Stack>
    </Box>
  );
};
