import { Box } from "@mui/material";
import React from "react";
import Portfolio from "../components/Portfolio";

const PortfolioPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pt={4}>
      <Portfolio />
    </Box>
  );
};

export default PortfolioPage;
