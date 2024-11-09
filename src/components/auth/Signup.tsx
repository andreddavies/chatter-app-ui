import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Link as MUILink, Stack } from "@mui/material";

import { ICreateUserInput, useCreateUser } from "../../services/user/create";

import AuthForm from "./AuthForm";
import { extractErrorMessage } from "../../utils/errors";

export default function Signup() {
  const [createUser] = useCreateUser();

  const [error, setError] = useState("");

  const onSubmit = async ({
    createUserInput: { email, password },
  }: ICreateUserInput) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });

      setError("");
    } catch (err) {
      const errorMessage = extractErrorMessage(err);

      if (errorMessage) setError(errorMessage);
      else setError("Unknown error occured");
    }
  };

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
      <AuthForm error={error} onSubmit={onSubmit} submitLabel="Register" />

      <Typography alignSelf="center">
        Already have an account?{" "}
        <MUILink component={Link} to="/login">
          Login
        </MUILink>
      </Typography>
    </Stack>
  );
}
