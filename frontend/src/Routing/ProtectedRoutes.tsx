import { Outlet, Navigate } from "react-router-dom";
import { getToken } from "../Utils/AuthUtils";
import TryGetToken from "./TryGetToken";


const ProtectedRoutes: React.FC = () => {

    const token = TryGetToken();
    return (
        token ? <Outlet /> : <Navigate to="/" />
    )


}



export default ProtectedRoutes;