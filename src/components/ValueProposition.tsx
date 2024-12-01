import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition: React.FC = () => {
    return (
        <div className=" max-w-lg md:max-w-7xl  mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold uppercase text-accent-300">Why Choose Elegant Software?</h2>
                <p className="text-xl text-slate-300 mt-4">
                    From automating tasks to optimizing growth, we build software that scales seamlessly.
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-24 gap-10 z-50">
                {/* Feature 1 */}
                <div
                    className="flex flex-col items-center text-center"
                >
                    <img src="assets/powerful.svg" alt="Powerful Yet Elegant" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white">Powerful Yet Elegant</h3>
                    <p className="text-slate-300 mt-2">
                        Harness cutting-edge technology while keeping interfaces intuitive and user-friendly.
                    </p>
                </div>

                {/* Feature 2 */}
                <div
                    className="flex flex-col items-center text-center"
                >
                    <img src="assets/secure.svg" alt="Secure Yet Easy" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white">Secure Yet Easy</h3>
                    <p className="text-slate-300 mt-2">
                        We prioritize security without compromising the ease of use for end users.
                    </p>
                </div>

                {/* Feature 3 */}
                <div
                    className="flex flex-col items-center text-center"
                >
                    <img src="assets/complex.svg" alt="Complex Yet Seamless" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white">Complex Yet Seamless</h3>
                    <p className="text-slate-300 mt-2">
                        Manage complexity under the hood while keeping workflows seamless and smooth.
                    </p>
                </div>

                {/* Feature 4 */}
                <div
                    className="flex flex-col items-center text-center"
                >
                    <img src="assets/scalable.svg" alt="Scalable for Growth" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white">Scalable for Growth</h3>
                    <p className="text-slate-300 mt-2">
                        Solutions designed to grow with your business and handle millions of users.
                    </p>
                </div>
            </div>

            <div
                className="text-center mt-16 relative z-10"
            >
                <a href='#services' className="bg-accent-500 text-white py-4 px-8 text-lg rounded-lg hover:bg-accent-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Our Services
                </a>
            </div>


        </div>
    );
};

export default ValueProposition;
