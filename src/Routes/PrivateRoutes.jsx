import { Navigate, useLocation } from "react-router";
import Spinner from "../pages/shared/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Spinner />;
    }

    if (!user) {
        return <Navigate state={location?.pathname} to='/login' />;
    }

    return children;
};

export default PrivateRoutes;