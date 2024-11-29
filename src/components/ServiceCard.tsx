import React from 'react'
// Define types for the service card props
interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
  }
  
  // Service Card Component
export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features }) => (
    <div className=" bg-primary-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src="assets/coding-on-laptop.jpg" alt="Image" />
      <div className="p-6 ">
        <h3 className="text-2xl font-semibold text-accent-400 mb-4">{title}</h3>
        <p className="text-slate-100 mb-4">{description}</p>
        <ul className="text-slate-100">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
