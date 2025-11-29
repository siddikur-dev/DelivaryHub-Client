import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const [mounted, setMounted] = useState(false);
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  // console.log(paymentInfo);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (sessionId && mounted) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, mounted,axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl">Payment successful</h2>
      <p>Your TransactionId: {paymentInfo.transactionId}</p>
      <p>Your Parcel Tracking id: {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
