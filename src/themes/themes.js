import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: colors.divider,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          height: "42px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedPrimary: {
          backgroundColor: colors.black,
          "&:hover": {
            backgroundColor: colors.black,
          },
        },
        containedSecondary: {
          backgroundColor: colors.secondary.green,
          "&:hover": {
            backgroundColor: colors.secondary.green,
          },
        },
        outlinedPrimary: {
          borderColor: colors.primary.lightBlack,
          color: colors.primary.lightBlack,
          "&:hover": {
            borderColor: colors.primary.lightBlack,
            background: "transparent",
          },
        },
        outlinedSecondary: {
          borderColor: colors.secondary.green,
          color: colors.secondary.green,
          "&:hover": {
            borderColor: colors.secondary.green,
            background: "transparent",
          },
        },
        textSecondary: {
          color: colors.secondary.green,
          "&:hover": {
            background: "transparent",
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.tertiary.color7,
          fontSize: "12px",
        },
      },
    },
  },
});
