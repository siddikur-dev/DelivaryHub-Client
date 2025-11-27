import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Spinner from '../Pages/shared/Spinner';
import Forbidden from '../Pages/Dashboard/Forbidden/Forbidden';

const AdminRoutes = () => {
    const { user, loading } = useAuth()
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        <Spinner />
    }
    if (role !== 'admin') {
        return <Forbidden />
    }
    return (
        <div>

        </div>
    );
};

export default AdminRoutes;