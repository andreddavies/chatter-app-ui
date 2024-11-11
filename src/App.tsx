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
import client from "./constants/apollo-client";

import router from "./components/router";
import ChatList from "@components/chat-list";
import Header from "@components/header/Header";
import RouteGuard from "@components/auth/RouteGuard";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />

        <Grid container>
          <Grid item md={3}>
            <ChatList />
          </Grid>

          <Grid item md={9}>
            <Container>
              <RouteGuard>
                <RouterProvider router={router} />
              </RouteGuard>
            </Container>
          </Grid>
        </Grid>

        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
}
