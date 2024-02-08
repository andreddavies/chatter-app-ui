import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Stack,
  TextField,
  Typography,
  Link as MUILink,
} from "@mui/material";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <TextField
        variant="outlined"
        type="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button variant="contained">Signup</Button>

      <Typography alignSelf="center">
        Already have an account?{" "}
        <MUILink component={Link} to="/login">
          Login
        </MUILink>
      </Typography>
    </Stack>
  );
}
