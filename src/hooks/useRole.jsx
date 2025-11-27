import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { isLoading: roleLoading, data: role = 'user' } = useQuery({
        queryKey: ["user-role", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}/role`)
            return res.data.role
        }
    })
    return { role, roleLoading }
};

export default useRole;