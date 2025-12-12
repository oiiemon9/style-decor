import React, { use, useEffect, useRef, useState } from 'react';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/FirebaseProvider';

const BookingList = () => {
  const axiosInstance = useAxiosSecure();
  const { loginUser } = use(AuthContext);
  const [decorators, setDecorators] = useState([]);
  const [selectBookingId, setSelectBookingId] = useState('');
  const modalRef = useRef();

  const { data: bookingItem = [], refetch } = useQuery({
    queryKey: ['bookingData'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/bookings?email=${loginUser.email}`);
      return res.data;
    },
  });

  const handelModal = async (id) => {
    try {
      const res = await axiosInstance.get('/available-decorator');
      setDecorators(res.data);
    } catch (error) {
      console.log(error);
    }

    setSelectBookingId(id);

    modalRef.current.showModal();
  };

  const handelDecorator = async (id) => {
    const bookingId = selectBookingId;
    console.log(bookingId);
    try {
      const res = await axiosInstance.patch(`/bookings-request/${id}`, {
        bookingId,
        status: 'pending',
      });

      refetch();

      modalRef.current.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Booking List
          </h1>
        </header>
      </div>

      {bookingItem.length ? (
        <div className="overflow-x-auto border rounded-2xl border-gray-300">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service</th>
                <th>User</th>

                <th>Service Date</th>
                <th>Total Price</th>
                <th>Payment Status</th>
                <th>Decorator</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookingItem.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item?.serviceImage} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.serviceTitle}</div>
                        <div className="text-sm opacity-50">{item?.email}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                      <div className="text-sm opacity-50">{item?.location}</div>
                    </div>
                  </td>
                  <td>
                    <p> {format(new Date(item.serviceDate), 'dd MMMM yyyy')}</p>
                  </td>
                  <td>
                    <p>${item?.totalPrice}</p>
                  </td>
                  <td>{item?.paymentStatus}</td>
                  <td>
                    {item?.decorator ? (
                      item?.decorator === 'pending' ? (
                        <p>Pending</p>
                      ) : (
                        <>
                          {' '}
                          <p>{item?.decorator.name}</p>
                          <p>{item?.decorator.email}</p>
                        </>
                      )
                    ) : (
                      <button
                        onClick={() => handelModal(item._id)}
                        className="btn"
                      >
                        Select
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <dialog ref={modalRef} className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Available Decorator</h3>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {decorators.map((decorator) => (
                    <tr key={decorator._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={decorator?.photoURL} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{decorator?.name}</div>
                            <div className="text-sm opacity-50">
                              {decorator?.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{decorator?.role}</td>
                      <td>
                        <button
                          onClick={() => handelDecorator(decorator._id)}
                          className="btn btn-sm"
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </dialog>
        </div>
      ) : (
        <p className="text-center text-xl font-semibold text-gray-600">
          Booking List not Found
        </p>
      )}
    </div>
  );
};

export default BookingList;
