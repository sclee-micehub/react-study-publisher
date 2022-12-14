import React from "react";
// import StyleCard from "./components/StyleCard";
// import CssModuleCard from "./components/CssModuleCard";
import { ThemeProvider } from "styled-components";
//import MaterialCard from "./components/MaterialCard";
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
      <CssModuleCard />
      <MaterialCard /> */}
      <ThemeProvider theme={blueTheme}>
        <StyledCard
          image={
            <img
              src="https://googlefonts.github.io/korean/public/assets/og-img.png"
              alt="Google Fonts + 한국어"
            />
          }
          title="Google Fonts + 한국어"
          category="OSS"
          summary="좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할
            수 있는 공간이 될 수 있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스
            한글 폰트를 머신 러닝에 기반을 둔 최적화 기술을 통해 시범적으로 제공합니다."
          link="https://googlefonts.github.io/korean/"
        />
      </ThemeProvider>
      <ThemeProvider theme={orangeTheme}>
        <StyledCard
          image={
            <img
              src="https://googlefonts.github.io/korean/public/assets/og-img.png"
              alt="Google Fonts + 한국어"
            />
          }
          title="Google Fonts + 한국어"
          category="OSS"
          summary="좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할
            수 있는 공간이 될 수 있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스
            한글 폰트를 머신 러닝에 기반을 둔 최적화 기술을 통해 시범적으로 제공합니다."
          link="https://googlefonts.github.io/korean/"
        />
      </ThemeProvider>
    </div>
  );
};

export default App;
