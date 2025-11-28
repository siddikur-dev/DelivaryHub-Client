import React from 'react';
import useRole from '../../../hooks/useRole';
import Spinner from '../../shared/Spinner';
import AdminDashboardHome from './AdminDashboardHome/AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome/RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome/UserDashboardHome';

const DashboardHome = () => {
    const { role, roleLoading } = useRole()
    if (roleLoading) {
        return <Spinner />
    }
    if (role === 'admin') {
        return <AdminDashboardHome />
    }
    else if (role === 'rider') {
        return <RiderDashboardHome />
    }
    else if (role === 'user') {
        return <UserDashboardHome />
    }
}
export default DashboardHome;