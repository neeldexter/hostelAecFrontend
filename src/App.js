import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import IctRouter from "./ictRouter.js";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Router>
            <IctRouter />
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
