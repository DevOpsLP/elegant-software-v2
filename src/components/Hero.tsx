import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

interface Hero {
  title: string;
  sub_title: string;
}

interface HeroProps {
  hero: Hero;
}
const Hero: React.FC<HeroProps> = ({ hero }) => {
  // Split the title into two halves
  const words = hero.title.split(" ");
  const midIndex = Math.ceil(words.length / 2); // Find the middle index
  const firstHalf = words.slice(0, midIndex).join(" ");
  const secondHalf = words.slice(midIndex).join(" ");

  return (
    <ParallaxProvider>
      <div className="relative h-full flex items-center justify-center overflow-hidden parallax-effect">
        <ParticlesBackground />

        {/* Text Content */}
        <Parallax translateY={[0, 0]}>
          <div className="relative z-10 flex flex-col items-start justify-center text-start px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {firstHalf} <span className="text-primary-500">{secondHalf}</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              {hero.sub_title}
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
