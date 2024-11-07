import { useContext } from "react";
import { AuthContext } from "../components/context/authService";
import { Navigate } from "react-router-dom";



export const PrivateRoute = ()=>{
    const{signed}= useContext(AuthContext);
    return signed ?<Outlet/>:<Navigate to='/login'/>
}