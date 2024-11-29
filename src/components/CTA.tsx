import React from 'react'

export const CTA: React.FC = () =>{
return(
    <div className='text-center py-24 md:py-44 md:text-left px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:justify-stretch md:items-center justify-center items-center'>
        <div className='max-w-5xl my-12'>
            <h2 className="md:text-7xl text-5xl font-bold text-gray-900 mb-6">Our Expertise in Building <span className='text-primary-500'> Powerful Solutions</span></h2>
            <p className="md:text-2xl text-lg text-gray-600 max-w-7xl">From concept to execution, we help scale ideas into global businesses with custom software solutions.</p>
        </div>
        <div className='mx-auto'>
            <button className='rounded-xl text-xl hover:bg-primary-700 bg-primary-500 text-white py-6 px-12'>Contact us</button>
        </div>
    </div>
)
}