import React from 'react';

interface CTAContent {
    title: string;
    sub_title: string;
}

interface CTAProps {
    cta: CTAContent;
}

export const CTA: React.FC<CTAProps> = ({ cta }) => {
    // Function to split the title after the fourth word
    const renderTitle = (title: string) => {
        const words = title.split(' ');
        if (words.length <= 4) {
            return title;
        }
        const firstPart = words.slice(0, 4).join(' ');
        const secondPart = words.slice(4).join(' ');
        return (
            <>
                {firstPart} <span className='text-primary-500'>{secondPart}</span>
            </>
        );
    };

    return (
        <div className='py-24 md:py-44 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:justify-stretch md:items-center justify-center items-center'>
            <div className='max-w-5xl my-12'>
                <h2 className="md:text-7xl text-5xl font-bold text-gray-900 mb-6">
                    {renderTitle(cta.title)}
                </h2>
                <p className="md:text-2xl text-lg text-gray-600 max-w-7xl">
                    {cta.sub_title}
                </p>
            </div>
            <div className='mx-auto'>
                <a href='#contact' className='rounded-xl text-xl hover:bg-primary-700 bg-primary-500 text-white py-6 px-12'>
                    Contact us
                </a>
            </div>
        </div>
    );
};
