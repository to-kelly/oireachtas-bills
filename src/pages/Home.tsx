import { Home as HomeIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";

import { StyledHeader } from "@/components/StyledHeader";

export const Home = () => {
  return (
    <StyledHeader>
      <HomeIcon fontSize="large" />
      <Typography variant="h4">Home</Typography>
    </StyledHeader>
  );
};
