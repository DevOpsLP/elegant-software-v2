// ValueProposition.tsx

import React from 'react';

interface SvgProps {
    name: string;
    url: string;
}

interface ValuePropositionProps {
    title: string;
    sub_title: string;
    header1: string;
    header2: string;
    header3: string;
    header4: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    svg1: SvgProps;
    svg2: SvgProps;
    svg3: SvgProps;
    svg4: SvgProps;
}

interface Props {
    valueProposition: ValuePropositionProps;
}


const ValueProposition: React.FC<Props> = ({ valueProposition }) => {
    return (
        <div className="max-w-lg md:max-w-7xl mx-auto pb-12">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold uppercase text-accent-300">{valueProposition.title}</h2>
                <p className="text-xl text-slate-300 mt-4">
                    {valueProposition.sub_title}
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-24 gap-10 z-50">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center">
                    <img 
                        src={`${import.meta.env.STRAPI_URL}${valueProposition.svg1.url}`} 
                        alt={valueProposition.svg1.name} 
                        className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" 
                    />
                    <h3 className="text-2xl font-semibold text-white">{valueProposition.header1}</h3>
                    <p className="text-slate-300 mt-2">
                        {valueProposition.description1}
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center">
                    <img 
                        src={`${import.meta.env.STRAPI_URL}${valueProposition.svg2.url}`} 
                        alt={valueProposition.svg2.name} 
                        className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" 
                    />
                    <h3 className="text-2xl font-semibold text-white">{valueProposition.header2}</h3>
                    <p className="text-slate-300 mt-2">
                        {valueProposition.description2}
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center">
                    <img 
                        src={`${import.meta.env.STRAPI_URL}${valueProposition.svg3.url}`} 
                        alt={valueProposition.svg3.name} 
                        className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" 
                    />
                    <h3 className="text-2xl font-semibold text-white">{valueProposition.header3}</h3>
                    <p className="text-slate-300 mt-2">
                        {valueProposition.description3}
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center">
                    <img 
                        src={`${import.meta.env.STRAPI_URL}${valueProposition.svg4.url}`} 
                        alt={valueProposition.svg4.name} 
                        className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" 
                    />
                    <h3 className="text-2xl font-semibold text-white">{valueProposition.header4}</h3>
                    <p className="text-slate-300 mt-2">
                        {valueProposition.description4}
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 relative z-10">
                <a href="#services" className="bg-accent-500 text-white py-4 px-8 text-lg rounded-lg hover:bg-accent-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Our Services
                </a>
            </div>
        </div>
    );
};

export default ValueProposition;
