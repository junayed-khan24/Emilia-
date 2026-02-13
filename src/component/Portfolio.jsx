import React from 'react';
import img from "../../src/assets/aboutimg7.png"

const Portfolio = () => {
    return (
        <div className=" bg-base-200  items-center justify-center px-4 py-12 pt-20 md:pt-24">
            <h2 className="text-3xl font-normal text-center py-16">Portfolio</h2>
            <p className="text-center font-normal font-regular mb-8">A showcase of my recent photography work.</p>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <img src={img} alt="Portfolio 1" className="rounded-lg shadow-md" />
                <img src={img} alt="Portfolio 2" className="rounded-lg shadow-md" />
                <img src={img} alt="Portfolio 3" className="rounded-lg shadow-md" />

            </div>
            <div>

            </div>
          </div>
        </div>
    );
};

export default Portfolio; 