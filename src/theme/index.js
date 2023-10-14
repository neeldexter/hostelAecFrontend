import { createTheme, Theme as AugmentedTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#6E7DAB",
        main: "#357C88",
        dark: "#24273c",
      },
      secondary: {
        light: "#f6f6f6",
        main: "#428F9C",
        dark: "#aaaaaa",
      },

      warning: {
        main: "#FFBA08",
      },
      error: {
        main: "#D00000",
      },
      success: {
        main: "#00FF00",
      },
    },

    notificationBackgroundColor: {
      warning: "#FFF9ED",
      primary: "#F1EFFD",
      success: "#EEFDFF",
    },

    notificationTextColor: {
      warning: "#F9B63F",
      primary: "#7561E7",
      success: "#2DC0CA",
    },

    textColor: {
      primary: "#14213D",
      white: "#FFFFFF",
      black: "#001219",
    },

    backgroundColor: {
      paper: "#FFFFFF",
      panels: "#EDF6F9",
    },
    overrides: {
      MuiTableCell: {
        root: {
          padding: 0,
          borderBottom: "none",
        },
      },
      MuiIconButton: {
        root: {
          "&:hover": {
            backgroundColor: "$labelcolor",
          },
        },
      },
      MuiTab: {
        root: {
          textTransform: "none",
          fontSize: "13px",
        },
      },
      MuiButton: {
        root: {
          textTransform: "none",
        },
      },
      MuiInputLabel: {
        root: {
          fontSize: "13px",
        },
      },
      MuiSwitch: {
        switchBase: {
          color: "#6E7DAB",
          "&$checked": {
            color: "#0E0A42",
          },
          "&$checked + $track": {
            backgroundColor: "#0E0A42",
          },
        },
      },
    },
    typography: {
      fontFamily: "IBM Plex Sans, sans-serif",
    },
  })
);
