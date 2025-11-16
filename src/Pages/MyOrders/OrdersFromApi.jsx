import React, { Suspense } from "react";
import useMyOrdersApi from "../../api/useMyOrdersApi";
import useAuth from "../../hooks/useAuth";
import Spinner from "../shared/Spinner";
import MyOrders from "./MyOrders";

const OrdersFromApi = () => {
  const { myOrdersPromise } = useMyOrdersApi();
  const {user} = useAuth();
  return <div>
    <Suspense fallback={<Spinner/>}>
        <MyOrders myOrdersPromise={myOrdersPromise(user?.email)} />
    </Suspense>
  </div>;
};

export default OrdersFromApi;
