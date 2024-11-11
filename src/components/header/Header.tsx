import { useReactiveVar } from "@apollo/client";
import { authenticatedVar } from "@constants/authenticated";
import { Box, AppBar, Toolbar, Container } from "@mui/material";

import Settings from "./Settings";
import Navigation from "./Navigation";
import MobileNav from "./mobile/MobileNav";

import Logo from "@components/logo";
import { IPage } from "@interfaces/page.interface";

const pages: IPage[] = [
  {
    title: "Home",
    path: "/",
  },
];

const unauthenticatedPages: IPage[] = [
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Signup",
    path: "/signup",
  },
];

export default function Header() {
  const authenticated = useReactiveVar(authenticatedVar);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 2 }}>
          <Box
            sx={{
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo />
          </Box>

          <MobileNav pages={authenticated ? pages : unauthenticatedPages} />

          <Box
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo />
          </Box>

          <Navigation pages={authenticated ? pages : unauthenticatedPages} />

          {authenticated && <Settings />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
