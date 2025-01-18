"use client";
import { createTheme } from "@mui/material/styles";

const floatBlue = "rgb(29, 78, 216)";
const floatBlackText = "rgb(2, 6, 23)";
const secondaryColor = "rgb(220, 220, 220)";

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
      fontSize: 16,
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
  },
});

export default theme;
