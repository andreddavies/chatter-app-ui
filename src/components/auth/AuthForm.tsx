import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

type TFormData = {
  email: string;
  password: string;
};

type TComponentProps = {
  submitLabel: string;
  onSubmit: (data: TFormData) => Promise<void>;
};

const AuthForm = ({ onSubmit, submitLabel }: TComponentProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack spacing={3}>
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

      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
    </Stack>
  );
};

export default AuthForm;
