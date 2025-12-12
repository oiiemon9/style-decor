import React, { use } from 'react';
import { AuthContext } from '../../../Context/FirebaseProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';
import { format } from 'date-fns';

const AllServices = () => {
  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosSecure();

  const { data: allServices = [], refetch } = useQuery({
    queryKey: ['allServices', loginUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/all-services?email=${loginUser?.email}`
      );
      return res.data;
    },
  });

  const handelUpdate = async (id, isActive) => {
    try {
      const res = await axiosInstance.patch(
        `/services-active-update/${id}?email=${loginUser?.email}`,
        {
          isActive,
        }
      );
      if (res.data.modifiedCount) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   {
  //     "_id": "693a44e845b0fbcd8bfc0744",
  //     "serviceTitle": "Gate & Entrance Decoration",
  //     "price": 40,
  //     "category": "wedding",
  //     "unit": "per-meter",
  //     "location": "Chattogram, Bangladesh",
  //     "serviceImage": "https://i.ibb.co/8gdLNXBp/download-50.png",
  //     "description": "Gate & Entrance Decoration is one of the most important elements of any wedding or ceremony, as it creates the first impression for your guests the moment they arrive. This service focuses on designing a beautiful, welcoming, and visually captivating entrance that sets the tone for the entire event.\n\nOur expert decorators craft custom-designed entrances using floral arrangements, thematic props, elegant lighting, fabric drapes, arches, welcome boards, and creative structures that match your event's theme. Whether you want a traditional Bangladeshi wedding ambiance, a modern minimalist entrance, a floral archway, a royal-style gate, or a luxurious LED-lit pathway—we bring your vision to life with precision and creativity.\n\nWe carefully select premium materials such as artificial or fresh flowers, wooden or metal frames, fairy lights, lanterns, chandeliers, customized signboards, and vibrant fabric draperies to build a grand and photogenic entrance. Every detail is arranged to create a smooth, harmonious, and aesthetically pleasing entry point that feels warm, inviting, and stylish.\n\nOur Gate & Entrance Decoration service includes:\n\nCustom gate/arch structure design\n\nFresh or artificial floral arrangements\n\nLED/Fairy light decorations\n\nFabric drapery & backdrop design\n\nWelcome signboard or couple name signage\n\nPathway lighting & side décor\n\nThematic props and color coordination\n\nOn-site setup and post-event teardown\n\nWe ensure the entrance is not only visually stunning but also durable and safe for the entire event duration. Our team arrives early to assemble the setup and performs final detailing to maintain symmetry, balance, and elegance.\n\nA beautifully decorated entrance creates excitement among guests, enhances event photography, and elevates the overall ambiance of the ceremony. Whether it’s a wedding, holud night, reception, anniversary, birthday event, or corporate function—our Gate & Entrance Decoration service adds a touch of charm, beauty, and grandness to your celebration.",
  //     "createdByEmail": "oiiemon9@gmail.com",
  //     "status": "published",
  //     "createdAt": "2025-12-11T04:13:28.760Z",
  //     "isActive": true
  // }

  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            All Services
          </h1>
        </header>
      </div>

      <div className="overflow-x-auto border rounded-2xl border-gray-300">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service</th>
              <th>Active</th>

              <th>Create At</th>
              <th>Location</th>
              <th>Price</th>
              <th>Created By Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allServices.map((service) => (
              <tr key={service?._id}>
                <td className="text-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={service?.serviceImage} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.serviceTitle}</div>
                      <div className="text-sm opacity-50">
                        {service?.category}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handelUpdate(service?._id, e.target.checked)
                      }
                      defaultChecked={service?.isActive}
                      className="toggle toggle-primary"
                    />
                  </div>
                </td>
                <td>
                  <p> {format(new Date(service?.createdAt), 'dd MMMM yyyy')}</p>
                </td>
                <td>
                  <p>{service?.location}</p>
                </td>
                <td className="text-nowrap">
                  {' '}
                  {service?.unit}: $
                  <span className="font-bold text-lg">{service?.price}</span>
                </td>
                <td>{service?.createdByEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllServices;
