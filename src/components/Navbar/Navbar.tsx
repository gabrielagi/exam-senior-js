import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { CustomDialog, dialogOpenSubject$ } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import FavoriteIcon from "@mui/icons-material/Favorite";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentleman Programming React TEST
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
