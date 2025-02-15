import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";

import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import UserDumps from "./pages/user-dumps";

import DashboardComponent from "./components/dashboard-component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <LoginPage />
        )
      },
      {
        path: "/register",
        element: (
          <RegisterPage />
        )
      },
      {
        path: "/dashboard",
        element: (
          <Dashboard />
        ),
        children: [
          {
            path: "",
            element: <DashboardComponent />
          },
          {
            path: "dumps",
            element: <UserDumps />
          }
        ]
      },
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
