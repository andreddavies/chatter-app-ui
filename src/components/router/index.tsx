import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/home";
import Login from "@pages/login";
import Signup from "@pages/signup";

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
