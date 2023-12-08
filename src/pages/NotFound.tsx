import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { routes } from "@/router/routes";

export const FullPageError = () => {
  const navigateTo = useNavigate();

  return (
    <StyledNotFound>
      <Typography variant="h4">You’ve found a page that does not exist.</Typography>
      <Typography variant="subtitle1">
        The page you were looking for does not exist, isn’t available or was loading incorrectly.
      </Typography>
      <Button variant="contained" onClick={() => navigateTo(routes.home)} size="large">
        Go Home
      </Button>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  max-width: 40vw;
  * {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;
