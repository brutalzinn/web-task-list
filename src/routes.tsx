import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);