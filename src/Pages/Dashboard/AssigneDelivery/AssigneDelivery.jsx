import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssigneDelivery = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', user?.email, "driver_assigned"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver_assigned`);
            return res.data;
        }
    })
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
                            <td className='gap-4'><button className='text-black btn btn-secondary'>Accept</button>
                                <button className='text-black btn btn-secondary'>Reject</button></td>


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