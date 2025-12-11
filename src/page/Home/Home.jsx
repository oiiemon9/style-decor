import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import FeaturedServicesSection from './FeaturedServicesSection/FeaturedServicesSection';
import useAxios from '../../CustomHook/useAxios';
import WhyCooseUs from './WhyCooseUs/WhyCooseUs';
import BeforeAfterGellery from './BeforeAfterGellery/BeforeAfterGellery';
import CustomerTestimonials from './CustomerTestimonials/CustomerTestimonials';

const Home = () => {
  const [services, setServices] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axiosInstance.get('/resent-service');
        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);
  return (
    <div>
      <Hero></Hero>
      <FeaturedServicesSection services={services}></FeaturedServicesSection>
      <WhyCooseUs></WhyCooseUs>
      <BeforeAfterGellery></BeforeAfterGellery>
      <CustomerTestimonials></CustomerTestimonials>
    </div>
  );
};

export default Home;
