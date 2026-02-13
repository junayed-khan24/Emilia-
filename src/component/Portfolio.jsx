import React from 'react';
import img from "../../src/assets/aboutimg7.png"

const Portfolio = () => {
    return (
        <div className=" bg-base-200  items-center justify-center px-4 py-12 pt-20 md:pt-24">
            <h2 className="text-3xl font-normal text-center py-16">Portfolio</h2>
            <p className="text-center font-normal font-regular mb-8">A showcase of my recent photography work.</p>
          <div>
            <div className='md:flex  gap-3 items-center justify-center'>
                <div className="overflow-hidden rounded-2xl">
                     <img src={img} alt="Portfolio 2" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>
               
                <div className="overflow-hidden rounded-2xl">
                     <img src={img} alt="Portfolio 2" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>        
                <div className="overflow-hidden rounded-2xl">
                    <img src={img} alt="Portfolio 3" className="rounded-lg shadow-md w-full  md:w-[288px] h-full md:h-[412px] object-cover hover:scale-110 transition duration-300" />
                </div>

            </div>
            <div className='flex gap-3 mt-3 items-center justify-center'>
                <img src={img} alt="Portfolio 4" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] h-full object-cover hover:scale-110 transition duration-300" />
                <img src={img} alt="Portfolio 5" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] h-full object-cover md:block hidden hover:scale-110 transition duration-300" />
            </div>
            <div>

            </div>
          </div>
        </div>
    );
};

export default Portfolio; 