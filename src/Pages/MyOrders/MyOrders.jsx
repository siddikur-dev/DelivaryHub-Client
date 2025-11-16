import notFoundLottie from "../../assets/lotties/food-not-found.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import moment from "moment";
import { use, useState } from "react";
import axios from "axios";

const MyOrders = ({ myOrdersPromise }) => {

  const initialOrders = use(myOrdersPromise);
 
  const [orders, setOrders] = useState(initialOrders || []);

  // Cancel an order by its ID (handles both string and {$oid: ...})
  const handleCancelOrder = (orderIdRaw) => {
      // Get the string ID, whether it's a string or an object
      const orderId = orderIdRaw?.$oid || orderIdRaw;
      if (!orderId) return;
      Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to cancel this order?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
          if (result.isConfirmed) {
              axios.delete(`${import.meta.env.VITE_API_URL}/my-orders/${orderId}`)
                  .then(res => {
                      if (res.data.deletedCount) {
                          setOrders(orders.filter(order => (order._id?.$oid || order._id) !== orderId));
                          Swal.fire({
                              title: 'Canceled!',
                              text: 'Your order has been canceled.',
                              icon: 'success',
                              showConfirmButton: false,
                              timer: 1500
                          });
                      }
                  })
                  .catch(err => {
                      console.error("Error canceling order:", err);
                      Swal.fire('Error', 'Failed to cancel the order.', 'error');
                  });
          }
      });
  };

  return (
    <div className="max-w-7xl mt-16 min-h-[calc(100vh-300px)] mx-auto px-4 py-8 md:py-16 lg:py-20">
      <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
        My <span className="text-secondary">Orders</span>
      </h2>
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <Lottie animationData={notFoundLottie} className="w-50 h-50"></Lottie>
          <h3 className="text-2xl md:text-3xl font-bold text-secondary/60 mt-8 mb-2 text-center">
            No Order Found
          </h3>
          <p className="text-accent text-lg mb-6 text-center max-w-md">
            You don't have any orders yet. Start by adding your first order!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-xl">
          <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
            <thead className="bg-secondary/10 text-secondary text-sm">
              <tr>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Photo
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Food Name
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Seller
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Date-Time
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Quantity
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Total Price
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const orderId =
                  typeof order._id === "object" && order._id?.$oid
                    ? order._id.$oid
                    : order._id;
                return (
                  <tr
                    key={orderId}
                    className="hover:bg-secondary/5 transition duration-200"
                  >
                    {/* <td className="px-4 py-3 border-b border-secondary/10">{idx + 1}</td> */}
                    <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden rounded-md bg-base-300">
                        <img
                          src={order.food_info?.food_img}
                          alt={order.food_info?.food_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                      {order.food_name}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      {order.food_info?.user_name}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      {moment(order.purchase_time).format("DD MMM - hh:mmA")}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      {order.order_quantity}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      ${order.total_price}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10">
                      <button
                        onClick={() => handleCancelOrder(order._id)}
                        className="btn btn-xs btn-outline btn-error"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
