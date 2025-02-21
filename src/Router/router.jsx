import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Tasks from "../Layout/Tasks";
import Login from "../Pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <Tasks></Tasks>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
