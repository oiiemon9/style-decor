import React, { use } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';
import { Navigate, useLocation } from 'react-router';

const UserPrivateRoute = ({ children }) => {
  const { loginUser, loading } = use(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div className=" flex items-center justify-center mt-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
    );
  }

  if (loginUser) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default UserPrivateRoute;
