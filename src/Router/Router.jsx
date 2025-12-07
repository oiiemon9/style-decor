import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../page/Home/Home';
import Login from '../page/login/Login';
import Register from '../page/Register/Register';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardRoot from '../Layouts/DashboardRoot';
import Users from '../components/Dashboard/Users/Users';
import ServiceUpload from '../components/Dashboard/ServiceUpload/ServiceUpload';
import Services from '../page/Services/Services';
import ServiceInfo from '../page/ServiceInfo/ServiceInfo';
import BookNow from '../page/BookNow/BookNow';

export const Router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'services',
        Component: Services,
      },
      {
        path: 'services/:serviceId',
        Component: ServiceInfo,
      },
      {
        path: 'services/:serviceId/book-now',
        Component: BookNow,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardRoot,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'users',
        Component: Users,
      },
      {
        path: 'service-upload',
        Component: ServiceUpload,
      },
    ],
  },
]);
