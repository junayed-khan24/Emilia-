import React from "react";
import img from "../../src/assets/Hero.jpg";
import img1 from "../../src/assets/Heroo.jpg";
import img2 from "../../src/assets/aboutimg1.png"
import img3 from "../../src/assets/aboutimg2.png"
import img4 from "../../src/assets/aboutimg3.png"
import img5 from "../../src/assets/aboutimg4.png"
import img6 from "../../src/assets/aboutimg6.webp"
import img7 from "../../src/assets/aboutimg7.png"
import img8 from "../../src/assets/aboutimg8.png"
import { Link } from "react-router";


const About = () => {
  return (
    <div className="bg-base-100 w-full min-h-screen pt-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
          <span className="text-primary">I’M</span> MOSES BLAKE
        </h2>

        <p className="text-secondary font-regular font-normal text-sm md:text-xl sm:text-lg mb-10 max-w-3xl">
          A passionate photographer with an eye for honest, powerful moments
        </p>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left Large Image */}
          <img
            src={img1}
            alt="Moses Blake"
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-2xl shadow-xl"
          />

          {/* Right Two Images */}
          <div className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:block hidden space-y-2">
            <img
              src={img2}
              alt="Moses Blake"
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
            <img
              src={img6}
              alt="Moses Blake"
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </div>

      <section className="py-20 px-4 md:px-10 lg:px-20">

  <div className="max-w-6xl mx-auto">

    {/* Top Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT TEXT */}
      <div className="text-center space-y-6 mx-0 md:mx-12">

        <h2 className="text-3xl text-[#000000] md:text-4xl font-normal font-regular">
          My story
        </h2>

        <p className="text-[#707070] font-normal font-regular text-xl leading-relaxed">
          My love for photography started with a borrowed camera and a sunset.
        </p>

        <p className="text-[#707070] font-normal font-regular text-xl leading-relaxed">
          Since then, I’ve chased light, laughter, and the in-between moments
          that make life feel real.
        </p>

        <p className="text-[#707070] font-normal font-regular text-xl leading-relaxed">
          I photograph to preserve stories—the ones you’re living right now.
        </p>

      </div>


      {/* RIGHT IMAGES (overlap style) */}
      <div className="relative flex justify-center md:justify-end">

        {/* Back image */}
        <img
          src={img8}
          alt=""
          className="
            w-52 md:w-60 lg:w-64
            rounded-2xl shadow-xl
            rotate-[-6deg]
            absolute top-6 left-6 md:left-0
            hover:scale-105 transition
            border-4 border-gray-300
          "
        />

        {/* Front image */}
        <img
          src={img8}
          alt=""
          className="
            w-52 md:w-60 lg:w-68
            rounded-2xl shadow-2xl
            rotate-[6deg]
            relative z-10
            hover:scale-105 transition
            border-4 border-white
          "
        />

      </div>

    </div>


    {/* Bottom Quote */}
    <div className="text-center mt-36 md:mt-48 px-0 md:px-36">
      <h3 className="text-xl text-[#000000] md:text-4xl font-normal font-regular max-w-3xl mx-auto leading-relaxed">
        I believe great photography happens when people feel seen, not posed.
      </h3>
    </div>

  </div>
</section>



      <section className="bg-base-100 py-16 px-4 md:px-10 lg:px-20">

  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-[#000000] text-3xl md:text-4xl font-normal font-regular">
      Behind the Lens
    </h2>

    <p className="text-secondary font-normal font-regular mt-3 max-w-xl mx-auto text-xl md:text-xl leading-relaxed">
      When I'm not behind the camera, I'm hiking,
      sipping coffee, or chasing sunsets.
    </p>
  </div>


  {/* Gallery */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

    {/* Left big image */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src={img7}
        alt=""
        className="h-full w-full md:h-[600px] object-cover hover:scale-110 transition duration-500"
      />
    </div>


    {/* Middle stacked images */}
    <div className="grid grid-rows-3 gap-5 md:h-[600px] ">

      <div className="overflow-hidden rounded-2xl">
        <img
          src={img6}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <img
          src={img4}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <img
          src={img3}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>
    </div>


    {/* Right big image */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src={img8}
        alt=""
        className="w-full h-full object-cover hover:scale-110 transition duration-500"
      />
    </div>

  </div>
</section>


<div className="text-center my-16">
    <h2 className="text-[#000000] text-2xl md:text-4xl font-normal font-regular">
      Made up your mind yet?
    </h2>

    <p className="text-secondary font-normal font-regular mt-3  mx-auto text-sm md:text-xl leading-relaxed">
      Let’s talk about your visions and how I can bring them to life.
    </p>
  </div>

  <div className="text-center">
    <Link to="/contact" className="btn btn-primary bg-black text-white rounded-xl px-8 mx-auto mb-8 md:mb-16">
    Book a session
  </Link>
  </div>

    </div>
  );
};

export default About;
