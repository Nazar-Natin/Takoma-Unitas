import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import LegalServicesSection from "./LegalServicesSection/LegalServicesSection";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import BusTransportSection from "./BusTransportSection/BusTransportSection";
import ContactUsSection from "./ContactUsSection/ContactUsSection";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ServicesSection />
      <LegalServicesSection />
      <AboutUsSection />
      <BusTransportSection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
