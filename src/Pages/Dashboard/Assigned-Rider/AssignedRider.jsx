import React from 'react';
import { useRef } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AssignedRider = () => {
    const axiosSecure = useAxiosSecure()
    const rideModalRef = useRef()
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
            return res.data
        }
    })

    const assignedRiderModal = parcel => {
        rideModalRef.current.showModal()
    }
    return (
        <div>
            <h1>Assigned Riders:{parcels.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>CreatedAt</th>
                            <th>Picup District</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {parcels.map((parcel, i) => <tr key={parcel._id}>
                            <th>{i + 1}</th>
                            <td>{parcel.senderName}</td>
                            <td>{parcel.cost}</td>
                            <td>{parcel.createdAt}</td>
                            <td>{parcel.senderDistrict}</td>
                            <td><button onClick={() => assignedRiderModal(parcel)} className="btn btn-secondary text-black btn-sm">Assign Rider</button></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
            {/* Open the modal using riderModaRef method */}
            <dialog ref={rideModalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AssignedRider;