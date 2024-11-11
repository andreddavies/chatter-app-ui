import { useReactiveVar } from "@apollo/client";
import {
  Alert,
  SnackbarCloseReason,
  Snackbar as MUISnackbar,
} from "@mui/material";

import { snackVar } from "@constants/snack";

export default function Snackbar() {
  const snack = useReactiveVar(snackVar);

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    snackVar(undefined);
  };

  return (
    <>
      {snack && (
        <MUISnackbar
          open={!!snack}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            severity={snack.type}
            onClose={handleClose}
            sx={{ width: "100%" }}
          >
            {snack.message}
          </Alert>
        </MUISnackbar>
      )}
    </>
  );
}
