import { Link } from "react-router-dom";
import { Stack, Typography, Link as MUILink } from "@mui/material";

import { useLogin } from "@services/auth/login";

import AuthForm from "@components/auth/AuthForm";

export default function Login() {
  const { login, error } = useLogin();

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
        error={error}
        submitLabel="Login"
        onSubmit={({ createUserInput }) => login(createUserInput)}
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
