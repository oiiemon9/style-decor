import React, { use } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';

const DecoratorPrivateRoute = ({ children }) => {
  const { loading, role } = use(AuthContext);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (role === 'decorator') {
    return children;
  }

  return;
};

export default DecoratorPrivateRoute;
