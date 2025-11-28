import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../Pages/Authentication/Login";
import MyProfile from "../pages/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import BeARider from "../Pages/BeARider/BeARider";
import SignUp from "../Pages/SignUp";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import MyParcel from "../Pages/Dashboard/MyParcel/MyParcel";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentFailed from "../Pages/Dashboard/Payment/PaymentFailed";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import ApproveRider from "../Pages/Dashboard/ApproveRider/ApproveRider";
import UserManagement from "../Pages/Dashboard/UserManagement/UserManagement";
import AdminRoutes from "./AdminRoutes";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AssignedRider from "../Pages/Dashboard/Assigned-Rider/AssignedRider";
import AssigneDelivery from "../Pages/Dashboard/AssigneDelivery/AssigneDelivery";
import RiderRoutes from "./RiderRoutes";

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
        path: "/send-parcel",
        loader: () => fetch("/data/serviceCenter.json"),
        element: (
          <PrivateRoutes>
            <SendParcel></SendParcel>
          </PrivateRoutes>
        ),
      },
      {
        loader: () => fetch("/data/serviceCenter.json"),
        path: "/be-a-rider",
        element: (
          <PrivateRoutes>
            <BeARider></BeARider>
          </PrivateRoutes>
        ),
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
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "my-profile",
        Component: Profile,
      },
      {
        path: "my-parcels",
        Component: MyParcel,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },

      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentFailed,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },

      // rider only 
      {
        path: "assigned-delivery",
        element: <RiderRoutes>
          <AssigneDelivery />
        </RiderRoutes>
      },
      // admin only
      {
        path: "users-management",
        element: <AdminRoutes>
          <UserManagement />
        </AdminRoutes>
      },
      {
        path: "assigned-rider",
        element: <AdminRoutes>
          <AssignedRider />
        </AdminRoutes>
      },
      {
        path: "approve-rider",
        element: <AdminRoutes>
          <ApproveRider />
        </AdminRoutes>
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
