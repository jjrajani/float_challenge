"use client";
import { createTheme } from "@mui/material/styles";

export const floatBlue = "rgb(29, 78, 216)";
export const floatBlackText = "rgb(2, 6, 23)";
export const secondaryColor = "rgb(220, 220, 220)";
export const borderGrey = "rgba(0, 0, 0, 0.23)";

const theme = createTheme({
  palette: {
    primary: {
      main: floatBlue,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    fontFamily: "var(--font-kanit)",
    allVariants: {
      color: floatBlackText,
    },
    button: {
      textTransform: "none",
    },
    h2: {
      fontSize: 24,
      fontWeight: 400,
    },
    h3: {
      fontSize: 20,
      fontWeight: 400,
    },
    h4: {
      fontSize: 18,
      fontWeight: 400,
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `solid ${borderGrey} 1px`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
