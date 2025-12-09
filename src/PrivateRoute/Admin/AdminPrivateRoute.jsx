import React, { use } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';

const AdminPrivateRoute = ({ children }) => {
  const { loading, role } = use(AuthContext);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (role === 'admin') {
    return children;
  }

  return;
};

export default AdminPrivateRoute;
