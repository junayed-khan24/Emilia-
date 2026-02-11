import React from "react";

import leftImg from "../../src/assets/download.jfif";
import middleImg from "../../src/assets/download (1).jfif";
import rightImg from "../../src/assets/download (2).jfif";

const FeaturedShots = () => {
  return (
    <section className="bg-base-200 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-regular font-normal mb-2">
          Featured shots
        </h2>

        <p className="mb-14 max-w-2xl mx-auto  text-1xl md:text-2xl font-normal text-neutral mt-0 md:mt-4">
          A quick glance at some of my best works.
        </p>

        {/* Gallery */}
        <div className="relative flex items-center justify-center">

          {/* LEFT */}
          <div
            className="
              hidden md:block
              absolute left-1/2 -translate-x-[150%]
              w-48 lg:w-64
              rotate-[-6deg]
              transition-all duration-500
              hover:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-20
            "
          >
            <img
              src={leftImg}
              alt="left"
              className="rounded-2xl shadow-xl object-cover w-full h-72"
            />
          </div>

          {/* CENTER (BIG) */}
          <div
            className="
              w-72 md:w-96 lg:w-[420px]
              z-10
              transition-all duration-500
              hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
            "
          >
            <img
              src={middleImg}
              alt="center"
              className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
            />
          </div>

          {/* RIGHT */}
          <div
            className="
              hidden md:block
              absolute left-1/2 translate-x-[70%]
              w-48 lg:w-64
              rotate-[6deg]
              transition-all duration-500
              hover:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-20
            "
          >
            <img
              src={rightImg}
              alt="right"
              className="rounded-2xl shadow-xl object-cover w-full h-72"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-14">
          <button className="btn btn-neutral bg-black text-white rounded-xl px-10">
            View my portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShots;
