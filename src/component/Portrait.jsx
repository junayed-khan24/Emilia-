import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import hero from "../../src/assets/aboutimg3.png";
import couple1 from "../../src/assets/Portrait1.jpg";
import couple2 from "../../src/assets/Portrait2.jpg";
import couple3 from "../../src/assets/Portrait3.jpg";
import couple4 from "../../src/assets/Portrait4.jfif";
import couple5 from "../../src/assets/Portrait5.jfif";
import couple6 from "../../src/assets/Portrait4.jfif";

const Portrait = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f8f5f2] py-10 px-4 ">
      <div className="max-w-5xl mx-auto mt-12 md:mt-16">

        {/* Hero */}
        <div data-aos="fade-up">
          <img
            src={hero}
            alt="wedding"
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center mt-10" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-700">
            RACHEL & JONATHAN
          </h1>
          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            A beautiful love story captured through timeless moments and elegant
            photography.
          </p>
        </div>

        {/* Curtain Image */}
        <div className="mt-10" data-aos="zoom-in">
          <img
            src={couple1}
            alt="wedding"
            className="w-full rounded-xl"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2  gap-3 md:gap-6 mt-10">
          <img src={couple2} className="rounded-xl" data-aos="fade-right" />
          <img src={couple3} className="rounded-xl" data-aos="fade-left" />
          <img src={couple4} className="rounded-xl" data-aos="fade-right" />
          <img src={couple5} className="rounded-xl" data-aos="fade-left" />
        </div>

        {/* Large Image */}
        <div className="mt-10" data-aos="fade-up">
          <img
            src={couple6}
            alt="wedding"
            className="w-full rounded-xl"
          />
        </div>

        {/* More Works */}
        <div className="text-center mt-12" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-600 mb-6">
            More Works
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img src={couple2} className="rounded-lg" />
            <img src={couple3} className="rounded-lg" />
            <img src={couple4} className="rounded-lg" />
            <img src={couple5} className="rounded-lg" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portrait ;