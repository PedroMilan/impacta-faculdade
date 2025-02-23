import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Routers from "./router";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans"].join(","),
  },

  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "#000 !important",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#000 !important",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: "20px",
          padding: "10px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "15px 0",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "15px 0",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          marginTop: "20px",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          maxWidth: "1048px !important",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans, sans-serif",
          backgroundColor: "white",
          paddingRight: "5px",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans, sans-serif",
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers />
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
