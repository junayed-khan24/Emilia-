import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import port1 from "../../src/assets/Portrait1.jpg";
import port2 from "../../src/assets/Portrait2.jpg";
import port3 from "../../src/assets/Portrait3.jpg";
import port4 from "../../src/assets/Portrait4.jfif";
import port5 from "../../src/assets/Portrait5.jfif";
import wedd from "../../src/assets/wedding1.jfif";
import wedd2 from "../../src/assets/wedding2.jfif";
import wedd3 from "../../src/assets/wedding3.jfif";
import wedd4 from "../../src/assets/wedding4.jfif";
import wedd5 from "../../src/assets/wedding5.jfif";
import wedd6 from "../../src/assets/wedding6.jfif";
import nature from "../../src/assets/Nature.jfif";
import nature1 from "../../src/assets/Nature1.png";
import nature2 from "../../src/assets/Nature2.jfif";
import nature3 from "../../src/assets/Nature4.jfif";
import nature4 from "../../src/assets/Nature3.jfif";
import Pet from "../../src/assets/Pet.jfif";
import Pet1 from "../../src/assets/Pet1.jfif";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-200 items-center justify-center px-4 py-12 pt-20 md:pt-24">
    

      {/* Portrait Photography */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8">Portrait Photography</h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-right">
          <img
            src={port1}
            alt="Portfolio 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={port2}
            alt="Portfolio 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="fade-left">
          <img
            src={port3}
            alt="Portfolio 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-up">
          <img
            src={port4}
            alt="Portfolio 4"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] object-cover hover:scale-110 transition duration-300"
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={port5}
            alt="Portfolio 5"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      {/* Event & Wedding */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8 mt-12">
        Event and Wedding Coverage
      </h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-right">
          <img
            src={wedd}
            alt="Wedding 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={wedd2}
            alt="Wedding 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="fade-left">
          <img
            src={wedd3}
            alt="Wedding 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-up">
          <img
            src={wedd4}
            alt="Wedding 4"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] object-cover hover:scale-110 transition duration-300"
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={wedd5}
            alt="Wedding 5"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      {/* Nature Photography */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8 mt-12">Nature Photography</h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="flip-left">
          <img
            src={nature}
            alt="Nature 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={nature4}
            alt="Nature 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="flip-right">
          <img
            src={nature3}
            alt="Nature 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-up">
          <img
            src={nature1}
            alt="Nature 4"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] object-cover hover:scale-110 transition duration-300"
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={nature2}
            alt="Nature 5"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      {/* Animal Photography */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8 mt-12">Animal Photography</h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in-up">
          <img
            src={Pet}
            alt="Animal 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={Pet1}
            alt="Animal 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in-down">
          <img
            src={Pet}
            alt="Animal 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
