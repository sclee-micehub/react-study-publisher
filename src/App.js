import { alpha, Chip, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CardDisplay from "./components/CardDisplay";
import PaletteDisplay from "./components/PaletteDisplay";
import Portfolio from "./components/Portfolio";
import ButtonsPage from "./pages/ButtonsPage";
import CardPage from "./pages/CardPage";
import HomePage from "./pages/HomePage";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import PortfolioPage from "./pages/PortfolioPage";

const muiTheme = createTheme({
  palette: {
    primary: {
      light: "#F27289",
      main: "#F23D3D",
      dark: "#8C2323",
      contrastText: "#FFFFFF",
    },
    brand: {
      light: "#0041E6",
      main: "#00237F",
      dark: "#00071A",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    h6: {
      fontFamily: ["Jua", "sans-serif"].join(","),
      padding: "0.5rem 1rem",
      borderRadius: "0.25rem",
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiChip: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          transition: theme.transitions.create(["all"]),
          "&:hover": {
            transform: `translateY(${theme.spacing(-0.5)})`,
            backgroundColor: theme.palette[ownerState.color].main,
            boxShadow: `0 ${theme.spacing(0.5)} 0 0 ${theme.palette[ownerState.color].dark}`,
            transition: theme.transitions.create(["all"], { duration: 150 }),
            ...(ownerState.variant === "soft" && {
              color: "#ffffff",
            }),
          },
          "&:active": {
            transform: `translateY(0)`,
            backgroundColor: theme.palette[ownerState.color].light,
            boxShadow: `0 0 0 0 ${theme.palette[ownerState.color].dark}`,
          },
        }),
      },
      variants: [
        {
          props: { variant: "soft" },
          style: ({ ownerState, theme }) => ({
            backgroundColor: alpha(theme.palette[ownerState.color].main, 0.2),
            color: theme.palette[ownerState.color].dark,
            fontWeight: theme.typography.fontWeightBold,
          }),
        },
      ],
    },
  },
});
muiTheme.typography.h6 = {
  ...muiTheme.typography.h6,
  color: muiTheme.palette.primary.main,
  [`${muiTheme.breakpoints.up("laptop")}`]: {
    color: "#FFFFFF",
    backgroundColor: muiTheme.palette.primary.dark,
    "&:hover": {
      backgroundColor: muiTheme.palette.primary.main,
    },
  },
};
muiTheme.zIndex = {
  ...muiTheme.zIndex,
  snackbar: 1500,
};
const orangeTheme = {
  colors: {
    primary: "#ef891c",
  },
};

const App = () => (
  <StyledThemeProvider theme={orangeTheme}>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Typography variant="h3">홈페이지입니다.</Typography>} />
          <Route path="cards" element={<CardPage />}>
            <Route
              path=":name"
              element={
                <CardDisplay
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
              }
            />
          </Route>
          <Route path="buttons" element={<ButtonsPage />}>
            <Route path=":variant" element={<PaletteDisplay />} />
          </Route>
          <Route path="chip" element={<Chip label="React Router" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </ThemeProvider>
  </StyledThemeProvider>
);

export default App;
