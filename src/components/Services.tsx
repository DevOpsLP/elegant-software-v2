import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Stain } from './Stain';

// Main Services Section Component
const ServicesSection: React.FC = () => {
  // Array of services
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Build scalable, secure, and user-friendly software tailored to your business needs.',
      features: [
        'Tailored solutions to fit your business needs',
        'Built with scalability in mind',
        'Security-focused architecture',
      ],
    },
    {
      title: 'Automation Solutions',
      description: 'Automate your workflows to improve efficiency and reduce manual errors.',
      features: [
        'Automate repetitive tasks',
        'Increase productivity',
        'Custom workflows and integrations',
      ],
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure that ensures security, reliability, and growth.',
      features: [
        'Secure cloud environments',
        'Seamless legacy system integration',
        'Built for performance and reliability',
      ],
    },
  ];

  return (
    <>
      <div className="absolute top-10 md:top-1/3 left-0 scale-[3] md:scale-[7] md:translate-y-1/2 md:translate-x-1/2">
        <Stain />
      </div>
      <div className="container mx-auto text-start relative z-10">
        {/* Services Grid */}
        <h2 className="md:text-6xl text-4xl md:text-start text-center my-24 md:mb-12 font-bold max-w-lg text-white uppercase">What we offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
