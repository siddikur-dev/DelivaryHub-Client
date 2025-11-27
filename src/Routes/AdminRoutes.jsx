import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Spinner from '../Pages/shared/Spinner';
import Forbidden from '../Pages/Dashboard/Forbidden/Forbidden';

const AdminRoutes = ({ children }) => {
    const { loading } = useAuth()
    const { role, roleLoading } = useRole()


    if (loading || roleLoading || role === undefined) {
        return <Spinner />
    }
    if (role !== 'admin') {
        return <Forbidden />
    }
    return children
};

export default AdminRoutes;