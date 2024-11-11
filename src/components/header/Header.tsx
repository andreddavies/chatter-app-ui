import { Box, AppBar, Toolbar, Container } from "@mui/material";

import Settings from "./Settings";
import Navigation from "./Navigation";
import MobileNav from "./mobile/MobileNav";

import Logo from "@components/logo";

const pages: string[] = [];

export default function Header() {
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

          <MobileNav pages={pages} />

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

          <Navigation pages={pages} />

          <Settings />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
