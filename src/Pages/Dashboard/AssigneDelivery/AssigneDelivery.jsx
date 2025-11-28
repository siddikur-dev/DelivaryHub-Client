import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssigneDelivery = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user?.email, "driver_assigned"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver_assigned`);
            return res.data;
        }
    })

    const handleAcceptDelivery = (parcel) => {
        const statusInfo = { deliveryStatus: "rider_arriving" };

        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: "Thanks for accepting the parcel",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            assgined delivery {parcels.length}
            <table className="table table-zebra w-full">
                <thead className="bg-base-200 text-base font-semibold">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Confirm</th>
                    </tr>
                </thead>

                <tbody>
                    {parcels.map((parcel, index) => (
                        <tr key={parcel._id}>
                            <td>{index + 1}</td>
                            <td className="max-w-[180px] truncate">{parcel.parcelName}</td>
                            <td>
                                parcel.deliveryStatus === "driver_assigned" && (

                                <button
                                    className="btn btn-sm btn-success text-white"
                                    onClick={() => handleAcceptDelivery(parcel)}
                                >
                                    Accept
                                </button>

                                <button className="btn btn-sm btn-error text-white">
                                    Reject
                                </button>
                                )


                            </td>



                        </tr>
                    ))}

                    {parcels.length === 0 && (
                        <tr>
                            <td colSpan="6" className="text-center text-gray-500 py-6">
                                No parcels found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AssigneDelivery;