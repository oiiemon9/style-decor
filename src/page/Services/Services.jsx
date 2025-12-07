import React, { useEffect, useState } from 'react';
import useAxios from '../../CustomHook/useAxios';
import ServiceItem from './ServiceItem';

const Services = () => {
  const axiosInstance = useAxios();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axiosInstance.get('/services');
        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="container mx-auto p-4">
      services page
      <div className="grid grid-cols-4 gap-5">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
