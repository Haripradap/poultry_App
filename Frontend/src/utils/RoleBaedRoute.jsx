import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RoleBasedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user doesn't have the required role
  if (!requiredRole?.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  // If everything is fine, render the children
  return children;
};

export default RoleBasedRoute;
