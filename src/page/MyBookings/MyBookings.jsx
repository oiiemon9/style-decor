import React, { use } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';
import useAxiosSecure from '../../CustomHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { MoveRight } from 'lucide-react';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading/Loading';

const MyBookings = () => {
  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosSecure();

  const {
    data: myBookings = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['myBookings', loginUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/my-bookings?email=${loginUser?.email}`
      );
      return res.data;
    },
  });

  const handelCancel = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Want to cancel your booking service?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosInstance.delete(`/my-bookings/${id}`);
          if (res.data.deletedCount) {
            Swal.fire({
              title: 'Cancel!',
              text: 'Your booking service has been cancel.',
              icon: 'success',
            });
            refetch();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
          My Bookings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Track every booking from start to finish.
        </p>

        {isPending ? (
          <Loading></Loading>
        ) : (
          <div className="space-y-6">
            {myBookings.map((booking) => (
              <div
                key={booking?._id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <img
                    className="w-28 h-32 object-cover rounded-md shadow-sm"
                    src={booking?.serviceImage}
                    alt="Booked service"
                  />

                  <div className="flex-1 space-y-2">
                    <p className="text-xs text-slate-400">ID: {booking?._id}</p>

                    <h2 className="font-bold text-xl text-slate-800 dark:text-white">
                      {booking?.serviceTitle}
                    </h2>

                    {booking?.decorator === 'pending' || !booking?.decorator ? (
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Decorator:{' '}
                        <span className="font-semibold">Pending</span>
                      </p>
                    ) : (
                      <div className="space-y-1">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Decorator:{' '}
                          <span className="font-semibold">
                            {booking?.decorator?.name}
                          </span>
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Email: {booking?.decorator?.email}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 text-left lg:text-right">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Service Date
                      </p>
                      <p className="font-bold text-slate-800 dark:text-white">
                        {format(new Date(booking?.serviceDate), 'dd MMMM yyyy')}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Total Cost
                      </p>
                      <p className="font-bold text-slate-800 dark:text-white">
                        ${booking?.totalPrice}
                      </p>
                    </div>
                    <div>
                      {booking?.bookingStatus?.length !== 6 && (
                        <button
                          onClick={() => handelCancel(booking?._id)}
                          className="btn btn-error btn-sm"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <hr className="my-4 border-slate-200 dark:border-slate-700" />

                <div>
                  <p className="mb-2 font-semibold text-slate-700 dark:text-slate-300">
                    Booking Progress
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {booking?.bookingStatus?.map((status, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                      >
                        <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {format(new Date(status?.time), 'dd MMM yyyy')}
                          </p>
                          <p className="font-bold text-primary">
                            {status?.status}
                          </p>
                        </div>

                        {index !== booking?.bookingStatus.length - 1 && (
                          <MoveRight className="mx-2 text-slate-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {myBookings.length === 0 && (
              <p className="text-center text-slate-500 dark:text-slate-400 text-lg pt-10">
                No bookings found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
