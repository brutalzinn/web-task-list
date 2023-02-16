import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);