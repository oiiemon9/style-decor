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
import DecoratorPrivateRoute from '../PrivateRoute/Decorator/DecoratorPrivateRoute';
import AdminPrivateRoute from '../PrivateRoute/Admin/AdminPrivateRoute';
import MyBookings from '../page/MyBookings/MyBookings';
import About from '../page/About/About';
import Contact from '../page/Contact/Contact';
import Profile from '../page/Profile/Profile';
import BookingHistory from '../page/BookingHistory/BookingHistory';
import AllServices from '../components/Dashboard/AllServices/AllServices';

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
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
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
        path: 'profile',
        element: (
          <UserPrivateRoute>
            <Profile />
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
        path: 'my-bookings',
        element: (
          <UserPrivateRoute>
            <MyBookings></MyBookings>
          </UserPrivateRoute>
        ),
      },
      {
        path: 'booking-history',
        element: (
          <UserPrivateRoute>
            <BookingHistory></BookingHistory>
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
        element: (
          <AdminPrivateRoute>
            <Users></Users>
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'service-upload',
        element: (
          <AdminPrivateRoute>
            <ServiceUpload></ServiceUpload>
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'booking-list',
        element: (
          <AdminPrivateRoute>
            <BookingList></BookingList>
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'all-services',
        element: (
          <AdminPrivateRoute>
            <AllServices></AllServices>
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'decorator-services',
        element: (
          <DecoratorPrivateRoute>
            <DecoratorServices></DecoratorServices>
          </DecoratorPrivateRoute>
        ),
      },
      {
        path: 'compete-services',
        element: (
          <DecoratorPrivateRoute>
            <CompleteService></CompleteService>
          </DecoratorPrivateRoute>
        ),
      },
    ],
  },
]);
