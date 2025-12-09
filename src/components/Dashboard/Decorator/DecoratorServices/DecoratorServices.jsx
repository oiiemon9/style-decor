import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../../../../Context/FirebaseProvider';
import useAxiosSecure from '../../../../CustomHook/useAxiosSecure';
import { data } from 'react-router';
import { format } from 'date-fns';

const DecoratorServices = () => {
  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosSecure();

  const {
    data: decoratorItem = [],
    error,
    refetch,
  } = useQuery({
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

  const handelStatus = async (id) => {
    const info = {
      bookingStatus: [
        {
          status: 'Assigned',
          time: new Date(),
        },
      ],
      decoratorInfo: {
        name: loginUser?.displayName,
        email: loginUser?.email,
      },
    };
    try {
      const res = await axiosInstance.patch(`/booking-status/${id}`, info);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handelUpdate2 = async (id) => {
    try {
      const res = await axiosInstance.patch(`/booking-status-update/${id}`, {
        update: 2,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handelUpdate3 = async (id) => {
    try {
      const res = await axiosInstance.patch(`/booking-status-update/${id}`, {
        update: 3,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handelUpdate4 = async (id) => {
    try {
      const res = await axiosInstance.patch(`/booking-status-update/${id}`, {
        update: 4,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handelUpdate5 = async (id) => {
    try {
      const res = await axiosInstance.patch(`/booking-status-update/${id}`, {
        update: 5,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handelUpdate6 = async (id) => {
    try {
      const res = await axiosInstance.patch(`/booking-status-update/${id}`, {
        update: 6,
        decoratorEmail: loginUser?.email,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Decorator Services List
          </h1>
        </header>
      </div>

      <div className="overflow-x-auto border rounded-2xl border-gray-300">
        {decoratorItem.length > 0 && (
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
                    <p>
                      {service?.bookingInfo?.bookingStatus?.[
                        service?.bookingInfo?.bookingStatus?.length - 1
                      ]?.status || 'No Status'}
                    </p>
                  </td>

                  <td>
                    {service?.status === 'pending' && (
                      <button
                        onClick={() => handelStatus(service?.bookingInfo?._id)}
                        className="btn"
                      >
                        Accept booking
                      </button>
                    )}
                    {service?.bookingInfo?.bookingStatus?.length === 1 && (
                      <button
                        onClick={() => handelUpdate2(service?.bookingInfo?._id)}
                        className="btn text-nowrap"
                      >
                        Update (Planning Phase)
                      </button>
                    )}
                    {service?.bookingInfo?.bookingStatus?.length === 2 && (
                      <button
                        onClick={() => handelUpdate3(service?.bookingInfo?._id)}
                        className="btn text-nowrap"
                      >
                        Update (Materials Prepared)
                      </button>
                    )}
                    {service?.bookingInfo?.bookingStatus?.length === 3 && (
                      <button
                        onClick={() => handelUpdate4(service?.bookingInfo?._id)}
                        className="btn text-nowrap"
                      >
                        Update (On the Way to Venue)
                      </button>
                    )}
                    {service?.bookingInfo?.bookingStatus?.length === 4 && (
                      <button
                        onClick={() => handelUpdate5(service?.bookingInfo?._id)}
                        className="btn text-nowrap"
                      >
                        Update (Setup in Progress)
                      </button>
                    )}
                    {service?.bookingInfo?.bookingStatus?.length === 5 && (
                      <button
                        onClick={() => handelUpdate6(service?.bookingInfo?._id)}
                        className="btn text-nowrap"
                      >
                        Update (Completed)
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
