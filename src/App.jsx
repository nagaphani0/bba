import React, { Suspense } from "react";
import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./themes/themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline />
      <Suspense fallback={<div> loading... </div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
