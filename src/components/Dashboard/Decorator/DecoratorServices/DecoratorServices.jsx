import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../../../../Context/FirebaseProvider';
import useAxiosSecure from '../../../../CustomHook/useAxiosSecure';
import { data } from 'react-router';
import { format } from 'date-fns';

const DecoratorServices = () => {
  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosSecure();

  const { data: decoratorItem = [], error } = useQuery({
    queryKey: ['decoratorEmail', loginUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/decorator-services?email=${loginUser.email}`
      );
      return res.data;
    },
  });

  console.log(error);

  console.log(decoratorItem);

  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Booking List
          </h1>
        </header>
      </div>

      <div className="overflow-x-auto border rounded-2xl border-gray-300">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User Name</th>
              <th>Service</th>
              <th>Payment Status</th>
              <th>location</th>

              <th>Service Date</th>
              <th>Total Price</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {decoratorItem.map((service, i) => (
              <tr key={i}>
                <td>
                  <div>
                    <div className="font-bold">
                      {service?.bookingInfo?.name}
                    </div>
                    <div className="text-sm opacity-50">
                      {service?.bookingInfo?.email}
                    </div>
                    <div className="text-sm opacity-50">
                      {service?.bookingInfo?.phone}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={service?.bookingInfo?.serviceImage} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {service?.bookingInfo?.serviceTitle}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="text-sm opacity-50">
                    {service?.bookingInfo?.paymentStatus}
                  </div>
                </td>

                <td>
                  <div className="text-sm opacity-50">
                    {service?.bookingInfo?.location}
                  </div>
                </td>

                <td>
                  <p>
                    {' '}
                    {format(
                      new Date(service?.bookingInfo?.serviceDate),
                      'dd MMMM yyyy'
                    )}
                  </p>
                </td>
                <td>
                  <p>${service?.bookingInfo?.totalPrice}</p>
                </td>
                <td>
                  {service?.status === 'pending' && (
                    <button className="btn">Accept booking</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DecoratorServices;

// {
//     "_id": "69356b2e21ba93942ede467e",
//     "name": "lalu",
//     "email": "lalu@g.com",
//     "photoURL": "https://i.ibb.co/XxtrQxTK/Chat-GPT-Image-Jun-23-2025-10-11-06-AM.png",
//     "role": "decorator",
//     "bookingId": "6936c039d3a11bde130e8033",
//     "status": "pending",
//     "bookingObjId": "6936c039d3a11bde130e8033",
//     "bookingInfo": {
//         "_id": "6936c039d3a11bde130e8033",
//         "decorator": "pending",
//         "email": "lalu@g.com",
//         "location": "Chattogram, Bangladesh",
//         "name": "lalu",
//         "note": "dfgfdgd",
//         "payment": "online",
//         "paymentStatus": "paid",
//         "phone": "01865557807",
//         "quantity": "5",
//         "serviceDate": "2025-12-18",
//         "serviceId": "6934fd554975e2cb41747c96",
//         "serviceImage": "https://i.ibb.co/hF3Dk5M5/unnamed-24.png",
//         "serviceTitle": "wadding plan",
//         "totalPrice": "250",
//         "createAt": "2025-12-08T12:10:33.836Z",
//         "transactionId": "pi_3Sc3GrPLLkEVYqWg02v8Ltfv"
//     }
// }
