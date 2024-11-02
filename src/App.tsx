import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "./theme";
import client from "./constants/apollo-client";

import router from "./components/router";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}
