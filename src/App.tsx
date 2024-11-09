import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "./theme";
import client from "./constants/apollo-client";

import router from "./components/router";
import RouteGuard from "@components/auth/RouteGuard";
import Header from "@components/header/Header";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />

        <Container>
          <RouteGuard>
            <RouterProvider router={router} />
          </RouteGuard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}
