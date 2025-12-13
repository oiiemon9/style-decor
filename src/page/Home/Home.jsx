import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import FeaturedServicesSection from './FeaturedServicesSection/FeaturedServicesSection';
import useAxios from '../../CustomHook/useAxios';
import WhyCooseUs from './WhyCooseUs/WhyCooseUs';
import BeforeAfterGellery from './BeforeAfterGellery/BeforeAfterGellery';
import CustomerTestimonials from './CustomerTestimonials/CustomerTestimonials';
import AboutPreview from './AboutPreview/AboutPreview';
import ContactBookingCTA from './ContactBookingCTA/ContactBookingCTA';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();
  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get('/resent-service');
        setServices(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);
  return (
    <div>
      <Hero></Hero>
      <FeaturedServicesSection
        services={services}
        loading={loading}
      ></FeaturedServicesSection>
      <WhyCooseUs></WhyCooseUs>
      <BeforeAfterGellery></BeforeAfterGellery>
      <CustomerTestimonials></CustomerTestimonials>
      <AboutPreview></AboutPreview>
      <ContactBookingCTA></ContactBookingCTA>
    </div>
  );
};

export default Home;
