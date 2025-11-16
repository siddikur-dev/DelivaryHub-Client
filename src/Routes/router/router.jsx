import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Register from "../../Component/AuthRegLogin/Register/Register";
import Login from "../../Component/AuthRegLogin/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ToyCardDetails from "../../Component/Toys/ToyCardDetails/ToyCardDetails";
import Feature from "../../Pages/Feature/Feature";
import ResetPass from "../../Component/AuthRegLogin/ResetPass/ResetPass";
import About from "../../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <ToyCardDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/reset-password",
        Component: ResetPass,
      },
      {
        path: "/feature",
        element: (
          <PrivateRoute>
            <Feature />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
