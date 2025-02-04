import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
    element: <h1>login</h1>,
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);

export default router;
