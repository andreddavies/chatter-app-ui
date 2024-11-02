import { Link } from "react-router-dom";
import { Stack, Typography, Link as MUILink } from "@mui/material";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        margin: "0 auto",
        justifyContent: "center",
        maxWidth: { xs: "70%", md: "30%" },
      }}
    >
      <AuthForm
        submitLabel="Login"
        onSubmit={async (data) => console.log(data)}
      />

      <Typography alignSelf="center">
        Don't have an account yet?{" "}
        <MUILink component={Link} to="/signup">
          Signup
        </MUILink>
      </Typography>
    </Stack>
  );
}
