import { Home, NewspaperSharp } from "@mui/icons-material";
import { MenuList, MenuItem, ListItemIcon, Paper, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { routes } from "@/router/routes";

export const RouterMenu = () => {
  const navigateTo = useNavigate();

  return (
    <Paper sx={{ width: 300, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem onClick={() => navigateTo(routes.home)}>
          <ListItemIcon>
            <Home fontSize="small" />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigateTo(routes.bills)}>
          <ListItemIcon>
            <NewspaperSharp fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bills</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
