import React, { useState } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';

const slides = [
  {
    title: 'Secure Solutions',
    description: 'We prioritize security in all our products to protect your data.',
    imgSrc: 'assets/secure.svg',
    heroImage: 'assets/hero-image.jpg',
  },
  {
    title: 'Scalable Growth',
    description: 'Our solutions are designed to grow with your business needs.',
    imgSrc: 'assets/scalable.svg',
    heroImage: 'assets/hero-image.jpg',
  },
  {
    title: 'Custom Development',
    description: 'Tailored solutions to meet your specific business challenges.',
    imgSrc: 'assets/code.svg',
    heroImage: 'assets/hero-image.jpg',
  },
  {
    title: 'Fast pace for fast grow',
    description: 'Tailored solutions to meet your specific business challenges.',
    imgSrc: 'assets/clock.svg',
    heroImage: 'assets/hero-image.jpg',
  },
];

const WhyUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Calculate previous, current, and next slides
  const previousIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;


  // Handle the drag end event to change the slide
  const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo): void => {
    if (info.offset.x > 100) {
      // Dragged far enough to the right, go to the previous slide
      handlePrevious(); // Call your previous slide handler
    } else if (info.offset.x < -100) {
      // Dragged far enough to the left, go to the next slide
      handleNext(); // Call your next slide handler
    }
  };


  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className='absolute inset-0 top-28'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1800 240"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-auto rotate-12 -translate-x-4 top-24 scale-105"
        >
          <path
            d="M-240 20c120 40 240 80 360 40s240-40 360 0 240 80 360 40 240-40 360 0 240 80 360 40 240-40 360 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 "
            fill="none"
            stroke="white"
            strokeDasharray="5,15"
            strokeWidth="2"
            className='animate-wave'
          />
        </svg>

      </div>
      <div className='absolute inset-0 top-3/4'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1800 240"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-auto -rotate-12 -translate-x-4 scale-105"
        >
          <path
            d="M-240 20c120 40 240 80 360 40s240-40 360 0 240 80 360 40 240-40 360 0 240 80 360 40 240-40 360 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 0 240 80 360 40 "
            fill="none"
            stroke="white"
            strokeDasharray="5,15"
            strokeWidth="2"
            className='animate-wave'
          />
        </svg>
      </div>
      <div className="mx-auto px-4 md:px-12 lg:px-20 w-full relative">

        <p className='font-mono text-center mb-2'>ELEGANT SOFTWARE</p>
        <h2 className="md:text-7xl text-4xl font-bold text-center text-accent-300 mb-12">
          Why choose us?
        </h2>
        <div className="relative w-full h-[600px] flex justify-center items-center">
          <AnimatePresence initial={false} custom={direction}>
            {/* Previous Slide */}
            <motion.div
              key={previousIndex}
              className="absolute max-w-[350px] w-full p-4 bg-white rounded-xl shadow-lg border border-gray-200 opacity-50 scale-75 z-0"
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              animate={{ opacity: 0.5, x: '-100%' }}
              exit={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-40 bg-primary-500 rounded-t-xl overflow-hidden">
                <img
                  src={slides[previousIndex].heroImage}
                  alt={slides[previousIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <img
                  src={slides[previousIndex].imgSrc}
                  alt={slides[previousIndex].title}
                  className="h-16 w-16 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{slides[previousIndex].title}</h3>
                <p className="mt-2 text-gray-600">{slides[previousIndex].description}</p>
              </div>
            </motion.div>

            {/* Current Slide */}
            <motion.div
              key={currentIndex}
              className="absolute max-w-[400px] h-[500px] flex flex-col justify-center w-full p-4 bg-white rounded-xl shadow-lg border border-gray-200 z-10"
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{
                opacity: { duration: 0.4 }, // Faster opacity transition
                x: { type: 'spring', stiffness: 300, damping: 30 }, // Spring-based transition for x (smoother movement)
              }}
              drag="x"  // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }}  // Prevent vertical drag
              dragElastic={0.2}  // Adds elastic drag effect, the lower the value, the more elastic it is
              dragTransition={{
                bounceStiffness: 500,  // Adds more springiness to the drag
                bounceDamping: 30,     // Controls the damping for a smoother stop
              }}
              onDragEnd={handleDragEnd}  // Handle the drag end to transition
            >
              <div className="relative w-full h-60 bg-primary-500 rounded-t-xl overflow-hidden">
                <img
                  src={slides[currentIndex].heroImage}
                  alt={slides[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <img
                  src={slides[currentIndex].imgSrc}
                  alt={slides[currentIndex].title}
                  className="h-24 w-24 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{slides[currentIndex].title}</h3>
                <p className="mt-2 text-gray-600">{slides[currentIndex].description}</p>
              </div>
            </motion.div>

            {/* Next Slide */}
            <motion.div
              key={nextIndex}
              className="absolute max-w-[350px] w-full p-4 bg-white rounded-xl shadow-lg border border-gray-200 opacity-50 scale-75 z-0"
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 0.5, x: '100%' }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-40 bg-primary-500 rounded-t-xl overflow-hidden">
                <img
                  src={slides[nextIndex].heroImage}
                  alt={slides[nextIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <img
                  src={slides[nextIndex].imgSrc}
                  alt={slides[nextIndex].title}
                  className="h-16 w-16 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{slides[nextIndex].title}</h3>
                <p className="mt-2 text-gray-600">{slides[nextIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex justify-between items-center px-6">
            <button
              onClick={handlePrevious}
              className="p-2 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600"
            >
              <img src="assets/arrow.svg" alt="Next" className='w-6 h-6 md:w-12 md:h-12 -rotate-45 transform -scale-x-100' />

            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600"
            >
              <img src="assets/arrow.svg" alt="Next" className='w-6 h-6 md:w-12 md:h-12 rotate-45' />
            </button>

          </div>
        </div>
      </div>

    </>
  );
};

export default WhyUs;
