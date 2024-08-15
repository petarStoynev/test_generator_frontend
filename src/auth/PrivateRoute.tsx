import { Navigate } from "react-router-dom";

interface Props {
    component: React.ComponentType
    path?: string
  }
  
  export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent}) => {

   const token = localStorage.getItem('user');
  
    if (token) {
      return <RouteComponent />
    }
  
    return <Navigate to="/login" />
  }