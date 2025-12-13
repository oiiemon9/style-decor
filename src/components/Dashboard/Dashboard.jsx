import React, { use } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import DecoratorDashboard from './DecoratorDashboard/DecoratorDashboard';

const Dashboard = () => {
  const { role } = use(AuthContext);
  return (
    <div className="container mx-auto">
      {role === 'admin' && <AdminDashboard></AdminDashboard>}
      {role === 'decorator' && <DecoratorDashboard></DecoratorDashboard>}
    </div>
  );
};

export default Dashboard;
