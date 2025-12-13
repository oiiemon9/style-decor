import React, { use } from 'react';
import { AuthContext } from '../../../../Context/FirebaseProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../CustomHook/useAxiosSecure';
import { format } from 'date-fns';
import Loading from '../../../Loading/Loading';

const CompleteService = () => {
  const axiosInstance = useAxiosSecure();
  const { loginUser } = use(AuthContext);

  const { data: serviceComplete = [], isPending } = useQuery({
    queryKey: ['completeData', loginUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/complete-service?email=${loginUser?.email}`
      );
      return res.data;
    },
  });

  console.log(serviceComplete);

  return (
    <div className="container mx-auto py-10 ">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Complete Services
          </h1>
        </header>
      </div>

      {isPending ? (
        <Loading></Loading>
      ) : serviceComplete.length ? (
        <div className="overflow-x-auto border rounded-2xl border-gray-300">
          <table className="table text-nowrap">
            {/* head */}
            <thead>
              <tr>
                <th>User Name</th>
                <th>Service</th>
                <th>Payment Status</th>
                <th>location</th>

                <th>Service Date</th>
                <th>Total Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {serviceComplete.map((service) => (
                <tr>
                  <td>
                    <div>
                      <div className="font-bold">{service?.name}</div>
                      <div className="text-sm opacity-50">{service?.email}</div>
                      <div className="text-sm opacity-50">{service?.phone}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={service?.serviceImage} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{service?.serviceTitle}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="text-sm opacity-50">
                      {service?.paymentStatus}
                    </div>
                  </td>

                  <td>
                    <div className="text-sm opacity-50">
                      {service?.location}
                    </div>
                  </td>

                  <td>
                    <p>
                      {' '}
                      {format(new Date(service.serviceDate), 'dd MMMM yyyy')}
                    </p>
                  </td>
                  <td>
                    <p>${service?.totalPrice}</p>
                  </td>
                  <td>
                    <p>Complete</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-xl font-semibold text-gray-600">
          Services not Found
        </p>
      )}
    </div>
  );
};

export default CompleteService;

// {
//     "_id": "6936f15a1f13f63d8ce26bdf",
//     "decorator": {
//         "name": "Emon Mollah",
//         "email": "oiiemon9@gmail.com"
//     },
//     "email": "oiiemon9@gmail.com",
//     "location": "dfg",
//     "name": "Emon Mollah",
//     "note": "dfgdgrg",
//     "payment": "online",
//     "paymentStatus": "paid",
//     "phone": "01865557807",
//     "quantity": "5",
//     "serviceDate": "2026-01-01",
//     "serviceId": "6934fd554975e2cb41747c96",
//     "serviceImage": "https://i.ibb.co/hF3Dk5M5/unnamed-24.png",
//     "serviceTitle": "wadding plan",
//     "totalPrice": "250",
//     "createAt": "2025-12-08T15:40:10.987Z",
//     "transactionId": "pi_3Sc6XjPLLkEVYqWg0yIwJafh",
//     "bookingStatus": [
//         {
//             "status": "Assigned",
//             "time": "2025-12-08T15:40:43.296Z"
//         },
//         {
//             "status": "Planning Phase",
//             "time": "2025-12-08T15:40:44.969Z"
//         },
//         {
//             "status": "Materials Prepared",
//             "time": "2025-12-08T15:40:45.462Z"
//         },
//         {
//             "status": "On the Way to Venue",
//             "time": "2025-12-08T15:40:45.886Z"
//         },
//         {
//             "status": "Setup in Progress",
//             "time": "2025-12-08T15:40:46.341Z"
//         },
//         {
//             "status": "Completed",
//             "time": "2025-12-08T15:40:46.861Z"
//         }
//     ]
// }
