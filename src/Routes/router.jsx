import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../Pages/Authentication/Login";
import MyProfile from "../pages/MyProfile";
import Gallery from "../pages/Gallery/Gallery";
import PrivateRoutes from "./PrivateRoutes";
import OrdersFromApi from "../pages/MyOrders/OrdersFromApi";
import MyFoodsFromApi from "../pages/MyFoods/MyFoodsFromApi";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import BeARider from "../Pages/BeARider/BeARider";
import SignUp from "../Pages/SignUp";
import SendParcel from "../Pages/SendParcel/SendParcel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },

      {
        path: "my-profile",
        element: (
          <PrivateRoutes>
            {" "}
            <MyProfile />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/coverage",
        loader: () => fetch("/data/serviceCenter.json"),
        Component: Coverage,
      },

      {
        path: "my-orders",
        element: (
          <PrivateRoutes>
            {" "}
            <OrdersFromApi />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoutes>
            <SendParcel></SendParcel>
          </PrivateRoutes>
        ),
      },
      {
        path: "/be-a-rider",
        element: (
          <PrivateRoutes>
            <BeARider></BeARider>
          </PrivateRoutes>
        ),
      },

      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/terms-and-conditions",
        Component: TermsAndConditions,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
