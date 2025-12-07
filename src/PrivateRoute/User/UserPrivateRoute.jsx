import React, { use } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';
import { Navigate, useLocation } from 'react-router';

const UserPrivateRoute = ({ children }) => {
  const { loginUser, loading } = use(AuthContext);

  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (loginUser) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default UserPrivateRoute;
