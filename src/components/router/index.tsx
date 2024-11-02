import { createBrowserRouter } from "react-router-dom";
import { Grid, Link } from "@mui/material";

import Login from "@components/auth/Login";
import Signup from "@components/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Grid
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Link
          p={3}
          href="login"
          color="white"
          fontSize={20}
          fontWeight="700"
          variant="button"
          underline="none"
          borderRadius={1}
          bgcolor="success.dark"
        >
          Go to login
        </Link>
      </Grid>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
