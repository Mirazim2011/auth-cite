import React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <Box
      alignItems="center"
      minHeight="100vh"
      justifyContent="center"
      display="flex"
      gap={2}
    >
      <Button variant="outlined" component={Link} to="/login">
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/register"
      >
        Register
      </Button>
    </Box>
  );
}
