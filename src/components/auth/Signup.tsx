import { Link } from "react-router-dom";
import { Typography, Link as MUILink, Stack } from "@mui/material";

import { useCreateUser } from "../../services/user/create";

import AuthForm from "./AuthForm";

export default function Signup() {
  const [createUser] = useCreateUser();

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
        submitLabel="Register"
        onSubmit={async ({ email, password }) => {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
        }}
      />

      <Typography alignSelf="center">
        Already have an account?{" "}
        <MUILink component={Link} to="/login">
          Login
        </MUILink>
      </Typography>
    </Stack>
  );
}
