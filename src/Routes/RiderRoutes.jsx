import React from 'react';
import Spinner from '../Pages/shared/Spinner';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Forbidden from '../Pages/Dashboard/Forbidden/Forbidden';

const RiderRoutes = ({children}) => {
    const { loading } = useAuth()
    const { role, roleLoading } = useRole()
    if (loading || roleLoading) {
        return <Spinner />
    }
    if (role !== 'rider') {
        return <Forbidden />
    }
    return children
};

export default RiderRoutes;