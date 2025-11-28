import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';

const ParcelTrack = () => {
    const { trackingId } = useParams();
    const { axios: axiosInstance } = useAxios();
    const { data: trackings = [] } = useQuery({
        queryKey: ['tracking', trackingId],
        queryFn: async () => {
            const res = await axiosInstance.get(`/trackings/${trackingId}/logs`)
            return res.data;
        }
    })
    console.log(trackings);

    return (
        <div>
            parcel track :{trackingId}
            <p>tracking so far: {trackings.length}</p>
        </div>
    );
};

export default ParcelTrack;