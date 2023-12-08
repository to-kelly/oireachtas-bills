import { Grid } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { RouterMenu } from "./RouterMenu";
import { Bills } from "@/pages/Bills";
import { Home } from "@/pages/Home";
import { FullPageError } from "@/pages/NotFound";
import { routes } from "@/router/routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <RouterMenu />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            {["", "/", routes.home].map((path) => (
              <Route path={path} key={path} element={<Home />} />
            ))}
            <Route path={routes.bills} element={<Bills />} />
            <Route path="*" element={<FullPageError />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};
