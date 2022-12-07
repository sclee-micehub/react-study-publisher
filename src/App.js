import React from "react";
// import StyleCard from "./components/StyleCard";
// import CssModuleCard from "./components/CssModuleCard";
import { ThemeProvider } from "styled-components";
import MaterialCard from "./components/MaterialCard";
import StyledCard from "./components/StyledCard";

const blueTheme = {
  colors: {
    primary: "#228be6",
  },
};

const orangeTheme = {
  colors: {
    primary: "#ef891c",
  },
};

const App = function () {
  return (
    <div>
      {/* <StyleCard />
      <CssModuleCard /> */}
      <MaterialCard />
      <ThemeProvider theme={blueTheme}>
        <StyledCard />
      </ThemeProvider>
      <ThemeProvider theme={orangeTheme}>
        <StyledCard />
      </ThemeProvider>
    </div>
  );
};

export default App;
