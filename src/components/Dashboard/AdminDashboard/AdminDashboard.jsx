import React, { use, useEffect, useState } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { DollarSign, Calendar, Users, CheckCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/FirebaseProvider';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';

const AdminDashboard = () => {
  const monthlyRevenue = [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 112000 },
    { month: 'Mar', revenue: 98000 },
    { month: 'Apr', revenue: 145000 },
    { month: 'May', revenue: 168000 },
    { month: 'Jun', revenue: 210000 },
    { month: 'Jul', revenue: 258000 },
    { month: 'Aug', revenue: 295000 },
    { month: 'Sep', revenue: 312000 },
    { month: 'Oct', revenue: 348000 },
    { month: 'Nov', revenue: 415000 },
    { month: 'Dec', revenue: 489000 },
  ];

  const COLORS = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'];

  const [demand, setDemand] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [completedServices, setCompletedServices] = useState(0);
  const [onlinePayments, setOnlinePayments] = useState(0);

  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosSecure();

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', loginUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/bookings-dashboard-admin?email=${loginUser?.email}`
      );

      return res.data;
    },
  });

  useEffect(() => {
    if (!bookings.length) return;

    const allCategories = bookings.map(
      (booking) => booking?.serviceDetails?.category
    );

    const uniqueCategories = [...new Set(allCategories)];

    const serviceDemandData = uniqueCategories.map((category) => {
      const count = allCategories.filter((c) => c === category).length;

      return {
        category,
        count,
        percentage: Math.round((count / bookings.length) * 100),
      };
    });

    setTotalBookings(bookings.length);

    const completedCount = bookings.filter((b) =>
      b?.bookingStatus?.some((s) => s.status === 'Completed')
    ).length;
    setCompletedServices(completedCount);

    const online = bookings.filter(
      (booking) => booking?.payment === 'online'
    ).length;
    setOnlinePayments(online);

    const revenue = bookings.reduce(
      (sum, b) => sum + Number(b.totalPrice || 0),
      0
    );
    setTotalRevenue(revenue);

    setDemand(serviceDemandData);
  }, [bookings]);

  //   {
  //     "_id": "6936ed6f81a234ee24280f40",
  //     "decorator": {
  //         "name": "Emon Mollah",
  //         "email": "oiiemon9@gmail.com"
  //     },
  //     "email": "lalu@g.com",
  //     "location": "Chattogram, Bangladesh",
  //     "name": "lalu",
  //     "note": "gfdfgr",
  //     "payment": "online",
  //     "paymentStatus": "paid",
  //     "phone": "01865557807",
  //     "quantity": "5",
  //     "serviceDate": "2025-12-20",
  //     "serviceId": "6934fb1d37fcde5a207544b5",
  //     "serviceTitle": "sdf",
  //     "totalPrice": "75",
  //     "createAt": "2025-12-08T15:23:27.748Z",
  //     "transactionId": "pi_3Sc6HYPLLkEVYqWg1tSHN2b3",
  //     "bookingStatus": [
  //         {
  //             "status": "Assigned",
  //             "time": "2025-12-08T15:27:35.528Z"
  //         },
  //         {
  //             "status": "Planning Phase",
  //             "time": "2025-12-08T15:27:41.595Z"
  //         },
  //         {
  //             "status": "Materials Prepared",
  //             "time": "2025-12-08T15:27:45.329Z"
  //         },
  //         {
  //             "status": "On the Way to Venue",
  //             "time": "2025-12-08T15:27:47.473Z"
  //         },
  //         {
  //             "status": "Setup in Progress",
  //             "time": "2025-12-08T15:27:51.190Z"
  //         },
  //         {
  //             "status": "Completed",
  //             "time": "2025-12-08T15:27:52.809Z"
  //         }
  //     ],
  //     "serviceObjId": "6934fb1d37fcde5a207544b5",
  //     "serviceDetails": {
  //         "_id": "6934fb1d37fcde5a207544b5",
  //         "serviceTitle": "sdf",
  //         "price": 15,
  //         "category": "office",
  //         "unit": "per-floor",
  //         "serviceImage": {
  //             "0": {}
  //         },
  //         "description": "sdfsdfsdf",
  //         "createdAt": "2025-12-07T03:57:17.430Z"
  //     }
  // }

  return (
    <div className="container mx-auto p-6 space-y-12">
      <div className="">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Real-time business insights for StyleDecor
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Revenue
                </p>
                <p className="text-3xl font-bold text-purple-600 mt-2">
                  ${totalRevenue.toLocaleString('en-BD')}
                </p>
              </div>
              <DollarSign className="w-12 h-12 text-purple-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Bookings
                </p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {totalBookings}
                </p>
              </div>
              <Calendar className="w-12 h-12 text-blue-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Online Payments
                </p>
                <p className="text-3xl font-bold text-orange-600 mt-2">
                  {onlinePayments}
                </p>
              </div>
              <Users className="w-12 h-12 text-orange-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Completed Services
                </p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {completedServices}
                </p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-600 opacity-20" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Monthly Revenue (2025)
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="revenue" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Service Demand by Category
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={demand}
                  dataKey="count"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ category, percentage }) =>
                    `${category} (${percentage}%)`
                  }
                >
                  {demand?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} bookings`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold">StyleDecor is Growing Fast!</h2>
          <p className="text-xl mt-3 opacity-90">
            287+ bookings, 18+ lakhs in revenue, 198+ successful services — all
            for your project!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
