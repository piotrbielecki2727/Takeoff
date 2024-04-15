import { Outlet, Navigate } from "react-router-dom";
import { getRole } from "../Utils/AuthUtils";
import TryGetRole from "./TryGetRole";


const AdminRoutes: React.FC = () => {

    const role = TryGetRole();


    return (
        role === 'ADMIN' ? <Outlet /> : <Navigate to="/" />
    )


}



export default AdminRoutes;