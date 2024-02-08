import { RouterProvider } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "./theme";

import router from "./components/router";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}
