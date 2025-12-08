import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', users: 400, sales: 2400, revenue: 2400 },
  { name: 'Feb', users: 300, sales: 1398, revenue: 2210 },
  { name: 'Mar', users: 200, sales: 9800, revenue: 2290 },
  { name: 'Apr', users: 278, sales: 3908, revenue: 2000 },
  { name: 'May', users: 189, sales: 4800, revenue: 2181 },
  { name: 'Jun', users: 239, sales: 3800, revenue: 2500 },
  { name: 'Jul', users: 349, sales: 4300, revenue: 2100 },
];

const pieData = [
  { name: 'Decorators', value: 400 },
  { name: 'Customers', value: 300 },
  { name: 'Orders', value: 300 },
  { name: 'Services', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Dashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Bar Chart */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          User Growth & Sales (Bar Chart)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#8884d8" />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Line Chart */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Revenue Over Time (Line Chart)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Pie Chart */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          User Distribution (Pie Chart)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Area Chart */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          User & Sales Trend (Area Chart)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUsers)"
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Dashboard;
