import { Box, Typography } from "@mui/material";

import logo from "@assets/logo.png";

import router from "@components/router";

type TComponentProps = {
  size?: number;
  renderName?: boolean;
};

export default function Logo({
  size = 30,
  renderName = true,
}: TComponentProps) {
  return (
    <>
      <Box sx={{ mr: 1 }}>
        <img src={logo} width={size} height={size} />
      </Box>

      {renderName && (
        <Typography
          variant="h6"
          noWrap
          component="a"
          onClick={() => router.navigate("/")}
          sx={{
            mr: 2,
            fontFamily: "monospace",
            cursor: "pointer",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Chatter App
        </Typography>
      )}
    </>
  );
}
