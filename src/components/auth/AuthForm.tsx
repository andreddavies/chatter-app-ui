import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

import { ICreateUserInput } from "../../services/user/create";

type TComponentProps = {
  error?: string;
  submitLabel: string;
  onSubmit: (data: ICreateUserInput) => Promise<void>;
};

const AuthForm = ({ error, onSubmit, submitLabel }: TComponentProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack spacing={3}>
      <TextField
        variant="outlined"
        type="email"
        label="Email"
        value={email}
        error={!!error}
        helperText={error}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        variant="outlined"
        type="password"
        label="Password"
        value={password}
        error={!!error}
        helperText={error}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button
        variant="contained"
        onClick={() => onSubmit({ createUserInput: { email, password } })}
      >
        {submitLabel}
      </Button>
    </Stack>
  );
};

export default AuthForm;
