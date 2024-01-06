import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({children}) => {  
    const token = localStorage.getItem("token")
    const location = useLocation();
    return token ? children : <Navigate to="/" state={{from: location}} replace/>
}

export default RequiresAuth;
