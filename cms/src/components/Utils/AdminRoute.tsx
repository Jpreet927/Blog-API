import React, { ReactNode, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const AdminRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useContext(UserContext);

    if (!user || !user.isAdmin) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default AdminRoute;
