import { createBrowserRouter } from "react-router-dom";

import Home from "@components/home/Home";
import Login from "@components/auth/Login";
import Signup from "@components/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
