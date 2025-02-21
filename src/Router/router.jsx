import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Tasks from "../Layout/Tasks";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Tasks></Tasks>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
