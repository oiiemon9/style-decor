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
import UserPrivateRoute from '../PrivateRoute/User/UserPrivateRoute';
import PaymentSuccess from '../page/PaymentSuccess/PaymentSuccess';
import PaymentCancel from '../page/PaymentCancel/PaymentCancel';
import BookingList from '../components/Dashboard/BookingList/BookingList';
import DecoratorServices from '../components/Dashboard/Decorator/DecoratorServices/DecoratorServices';
import CompleteService from '../components/Dashboard/Decorator/CompleteService/CompleteService';

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
        element: (
          <UserPrivateRoute>
            <BookNow />
          </UserPrivateRoute>
        ),
      },
      {
        path: 'payment-success',
        element: (
          <UserPrivateRoute>
            <PaymentSuccess />
          </UserPrivateRoute>
        ),
      },
      {
        path: 'payment-failed',
        element: (
          <UserPrivateRoute>
            <PaymentCancel></PaymentCancel>
          </UserPrivateRoute>
        ),
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
    element: (
      <UserPrivateRoute>
        <DashboardRoot></DashboardRoot>
      </UserPrivateRoute>
    ),
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
      {
        path: 'booking-list',
        Component: BookingList,
      },
      {
        path: 'decorator-services',
        Component: DecoratorServices,
      },
      {
        path: 'compete-services',
        Component: CompleteService,
      },
    ],
  },
]);
