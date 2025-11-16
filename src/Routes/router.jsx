import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

import Login from "../pages/Login";
import AllFoods from "../pages/AllFoods/AllFoods";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import AddFoodsForm from "../pages/AddFoods/AddFoodsForm";
import FoodDetails from "../pages/FoodDetails";
import Spinner from "../pages/shared/Spinner";
// import MyFoods from "../pages/MyFoods/MyFoods";
import EditFood from "../pages/EditFood/EditFood";
import Gallery from "../pages/Gallery/Gallery";
import PrivateRoutes from "./PrivateRoutes";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
// import MyOrders from "../pages/MyOrders/MyOrders";
import OrdersFromApi from "../pages/MyOrders/OrdersFromApi";
import MyFoodsFromApi from "../pages/MyFoods/MyFoodsFromApi";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
import Home from "../Pages/Home/Home";

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
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
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
        path: "/all-foods",
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/foods`),
        Component: AllFoods,
      },
      {
        path: "/item-details/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
        Component: FoodDetails,
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
        path: "my-foods",
        element: (
          <PrivateRoutes>
            {" "}
            <MyFoodsFromApi />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "add-foods",
        element: (
          <PrivateRoutes>
            {" "}
            <AddFoodsForm />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit-food/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
        element: (
          <PrivateRoutes>
            {" "}
            <EditFood />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/food-purchase/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
        element: (
          <PrivateRoutes>
            {" "}
            <FoodPurchase />{" "}
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
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
