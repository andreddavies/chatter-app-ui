import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import {
  Grid,
  Snackbar,
  Container,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import { darkTheme } from "./theme";
import { usePath } from "@hooks/usePath";
import client from "./constants/apollo-client";

import router from "./components/router";
import ChatList from "@components/chat-list";
import Header from "@components/header/Header";
import RouteGuard from "@components/auth/RouteGuard";

export default function App() {
  const { path } = usePath();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />

        <RouteGuard>
          {path === "/" ? (
            <Grid container>
              <Grid item md={3}>
                <ChatList />
              </Grid>

              <Grid item md={9}>
                <Routes />
              </Grid>
            </Grid>
          ) : (
            <Routes />
          )}
        </RouteGuard>

        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
}

const Routes = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>
);
