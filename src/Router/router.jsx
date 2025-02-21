import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Tasks from "../Layout/Tasks";

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
]);

export default router;
