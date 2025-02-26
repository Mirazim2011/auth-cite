import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import store from "../../store";
import { authAction } from "../../store/AuthSlice";

export default function Header() {
  const handleClick = () => {
    store.dispatch(authAction.logOutFn());
  };
  return (
    <AppBar position="static" sx={{ mb: 4, boxShadow: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Redux Shopping Cart</Typography>
        <Box>
          <Button
            style={{ backgroundColor: "purple", color: "white" }}
            variant="outlined"
            color="primary"
            onClick={handleClick}
          >
            Log Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
