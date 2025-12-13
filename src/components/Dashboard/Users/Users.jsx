import React, { use, useRef, useState } from 'react';
import useAxios from '../../../CustomHook/useAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/FirebaseProvider';
import Loading from '../../Loading/Loading';

const Users = () => {
  const axiosInstance = useAxios();
  const { loginUser } = use(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);
  const modalRef = useRef();
  const roleSelectRef = useRef();
  const {
    data: users = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users?email=${loginUser.email}`);
      return res.data;
    },
  });

  const handelModal = (id) => {
    const updatedUser = users.find((user) => user._id === id);
    setUpdatedUser(updatedUser);
    modalRef.current.showModal();
  };

  const handleUpdate = async (id) => {
    const selectedRole = roleSelectRef.current.value;
    console.log('Selected Role:', selectedRole);
    try {
      const res = await axiosInstance.patch(`/users/${id}`, {
        role: selectedRole,
      });
      if (res.data.modifiedCount) {
        Swal.fire({
          title: 'Updated!',
          text: 'User role has been updated.',
          icon: 'success',
        });
      }

      refetch();
      console.log('User role updated successfully:', res.data);
    } catch (error) {
      console.error('Error updating user role:', error);
    }

    modalRef.current.close();
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosInstance.delete(`/users/${id}`);
          if (res.data.deletedCount) {
            Swal.fire({
              title: 'Deleted!',
              text: 'User has been deleted.',
              icon: 'success',
            });
          }
          refetch();
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      }
    });
  };

  return (
    <div className="container mx-auto py-10 ">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Users List
          </h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                  <span className="material-icons-outlined text-2xl text-text-light dark:text-text-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-users-round-icon lucide-users-round"
                    >
                      <path d="M18 21a8 8 0 0 0-16 0" />
                      <circle cx="10" cy="8" r="5" />
                      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
                    Total Users
                  </p>
                  <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-1">
                    {users.length}
                  </p>
                  <p className="text-xs text-green-500 mt-2">
                    +12.3% from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPending ? (
        <Loading></Loading>
      ) : users.length ? (
        <div className="overflow-x-auto border rounded-2xl border-gray-300">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Users</th>
                <th>Role</th>
                <th>User Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                        <div className="text-sm opacity-50">{user?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <p>{user?.role}</p>
                      <button
                        onClick={() => handelModal(user._id)}
                        className="btn btn-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                  <td>{user._id}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </th>
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
              <h3 className="font-bold text-lg">User {updatedUser?.name}</h3>
              <div>
                <p className="py-4">Select Role</p>
                <select
                  ref={roleSelectRef}
                  key={updatedUser?.role}
                  defaultValue={updatedUser?.role}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="decorator">Decorator</option>
                </select>
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => handleUpdate(updatedUser._id)}
                    className="btn rounded-full bg-primary text-white"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      ) : (
        <p className="text-center text-xl font-semibold text-gray-600">
          Users List not Found
        </p>
      )}
    </div>
  );
};

export default Users;
