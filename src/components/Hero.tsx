import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Hero: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="relative h-full flex items-center justify-center overflow-hidden parallax-effect">
        <ParticlesBackground />

        {/* Text Content */}
        <Parallax translateY={[0, 0]}>
          <div className="relative z-10 flex flex-col items-start justify-center text-center px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Software <span className="text-primary-500">Reimagined</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Elegant solutions for complex problems. Scalable. Secure. Seamless.
            </p>
            <div className="mt-6">
              <a
                href="#services"
                className="inline-block bg-primary-500 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-primary-600 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Hero;
