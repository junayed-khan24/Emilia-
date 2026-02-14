import React from 'react';
import img from "../../src/assets/aboutimg7.png"
import port1 from "../../src/assets/Portrait1.jpg"
import port2 from "../../src/assets/Portrait2.jpg"  
import port3 from "../../src/assets/Portrait3.jpg"
import wedd from "../../src/assets/wedding1.jfif"
import wedd2 from "../../src/assets/wedding2.jfif"
import wedd3 from "../../src/assets/wedding3.jfif"
import wedd4 from "../../src/assets/wedding4.jfif"
import wedd5 from "../../src/assets/wedding5.jfif"
import wedd6 from "../../src/assets/wedding6.jfif"
import nature from "../../src/assets/Nature.jfif"
import nature1 from "../../src/assets/Nature1.png"


const Portfolio = () => {
    return (
        <div className=" bg-base-200  items-center justify-center px-4 py-12 pt-20 md:pt-24">
            <h2 className="text-3xl font-normal text-center py-16">Portfolio</h2>
            <p className="text-center font-normal font-regular mb-8">A showcase of my recent photography work.</p>


              {/* Portrait photography */}
              <h2 className="text-2xl font-normal text-center py-8">Portrait Photography</h2>
             <div>
            <div className='md:flex  gap-3 items-center justify-center'>
                <div className="overflow-hidden rounded-2xl">
                     <img src={port1} alt="Portfolio 1" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>
               
                <div className="overflow-hidden rounded-2xl">
                     <img src={port2} alt="Portfolio 2" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>        
                <div className="overflow-hidden rounded-2xl">
                    <img src={port3} alt="Portfolio 3" className="rounded-lg shadow-md w-full  md:w-[288px] h-full md:h-[412px] object-cover hover:scale-110 transition duration-300" />
                </div>

            </div>
            <div className='flex gap-3 mt-3 items-center justify-center'>
                <div className="overflow-hidden rounded-2xl">
                <img src={port2} alt="Portfolio 4" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] h-full object-cover hover:scale-110 transition duration-300" />
                </div>

                <div className="overflow-hidden rounded-2xl">
                     <img src={port2} alt="Portfolio 5" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] h-full object-cover md:block hidden hover:scale-110 transition duration-300" />
                </div>
            </div>
            <div>

            </div>
          </div>

               {/* Event and wedding coverage */}
               <h2 className="text-2xl font-normal text-center py-8">Event and Wedding Coverage</h2>
          <div>
            <div className='md:flex  gap-3 items-center justify-center'>
                <div className="overflow-hidden rounded-2xl">
                     <img src={wedd} alt="Portfolio 2" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>
               
                <div className="overflow-hidden rounded-2xl">
                     <img src={wedd2} alt="Portfolio 2" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>        
                <div className="overflow-hidden rounded-2xl">
                    <img src={wedd3} alt="Portfolio 3" className="rounded-lg shadow-md w-full  md:w-[288px] h-full md:h-[412px] object-cover hover:scale-110 transition duration-300" />
                </div>

            </div>
            <div className='flex gap-3 mt-3 items-center justify-center'>
                <div className="overflow-hidden rounded-2xl">
                <img src={wedd4} alt="Portfolio 4" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] h-full object-cover hover:scale-110 transition duration-300" />
                </div>

                <div className="overflow-hidden rounded-2xl">
                     <img src={wedd5} alt="Portfolio 5" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] h-full object-cover md:block hidden hover:scale-110 transition duration-300" />
                </div>
            </div>
            <div>

            </div>
          </div>

          {/* Nature Photography */}
               <h2 className="text-2xl font-normal text-center py-8">Nature Photography</h2>
          <div>
            <div className='md:flex  gap-3 items-center justify-center'>
                <div className="overflow-hidden rounded-2xl">
                     <img src={nature} alt="Portfolio 2" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>
               
                <div className="overflow-hidden rounded-2xl">
                     <img src={nature1} alt="Portfolio 2" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] h-full object-cover hidden   md:block hover:scale-110 transition duration-300" />
                </div>        
                <div className="overflow-hidden rounded-2xl">
                    <img src={wedd3} alt="Portfolio 3" className="rounded-lg shadow-md w-full  md:w-[288px] h-full md:h-[412px] object-cover hover:scale-110 transition duration-300" />
                </div>

            </div>
            <div className='flex gap-3 mt-3 items-center justify-center'>
                <div className="overflow-hidden rounded-2xl">
                <img src={wedd4} alt="Portfolio 4" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] h-full object-cover hover:scale-110 transition duration-300" />
                </div>

                <div className="overflow-hidden rounded-2xl">
                     <img src={wedd5} alt="Portfolio 5" className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] h-full object-cover md:block hidden hover:scale-110 transition duration-300" />
                </div>
            </div>
            <div>

            </div>
          </div>

        </div>
    );
};

export default Portfolio; 