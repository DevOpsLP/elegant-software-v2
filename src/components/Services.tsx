import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Stain } from './Stain';

// Define the types for the services and props
interface Service {
  title: string;
  description: string;
  features: string; // Long string where features are separated by newline characters
  image: {
    name: string;
    url: string;
  };
}

interface ServicesSectionProps {
  services: Service[];
}

// Main Services Section Component
const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <>
      <div className="absolute top-10 md:top-1/3 left-0 scale-[3] md:scale-[7] md:translate-y-1/2 md:translate-x-1/2">
        <Stain />
      </div>
      <div className="container mx-auto text-start relative z-10">
        {/* Services Grid */}
        <h2 className="md:text-6xl text-4xl md:text-start text-center my-24 md:mb-12 font-bold max-w-lg text-white uppercase">
          What we offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features.split('\n')} // Convert the features string into an array
              image={service.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
