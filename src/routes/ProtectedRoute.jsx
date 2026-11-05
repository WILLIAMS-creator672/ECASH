import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const isLoggedin = false
    return isLoggedin ? <Outlet/> : <Navigate to="/login" replace/>
}