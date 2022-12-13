import { React, useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Context from '../context';


const useAuth = (context) => {
    if (context.isLogged) {
        return true;
    } else {
        return false;
    }
}

export const ProtectedRoute = () => {
    const context = useContext(Context);
    const auth = useAuth(context)

    return auth ? <Outlet /> : <Navigate to="/login" />
}