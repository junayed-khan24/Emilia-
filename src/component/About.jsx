import React from "react";
import img from "../../src/assets/Hero.jpg";
import img1 from "../../src/assets/Heroo.jpg";
import img2 from "../../src/assets/aboutimg1.png"
import img3 from "../../src/assets/aboutimg2.png"
import img4 from "../../src/assets/aboutimg3.png"
import img5 from "../../src/assets/aboutimg4.png"

const About = () => {
  return (
    <div className="bg-base-200 w-full min-h-screen pt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          I’M MOSES BLAKE
        </h2>

        <p className="text-gray-500 text-base sm:text-lg mb-10 max-w-2xl">
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
              src={img}
              alt="Moses Blake"
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
            <img
              src={img}
              alt="Moses Blake"
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </div>
      <section className="bg-base-200 py-16 px-4 md:px-10 lg:px-20">

  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Behind the Lens
    </h2>

    <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
      When I'm not behind the camera, I'm hiking,
      sipping coffee, or chasing sunsets.
    </p>
  </div>


  {/* Gallery */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

    {/* Left big image */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src={img2}
        alt=""
        className="w-full h-full object-cover hover:scale-110 transition duration-500"
      />
    </div>


    {/* Middle stacked images */}
    <div className="grid grid-rows-3 gap-5">

      <div className="overflow-hidden rounded-2xl">
        <img
          src={img3}
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
          src={img4}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>
    </div>


    {/* Right big image */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src={img5}
        alt=""
        className="w-full h-full object-cover hover:scale-110 transition duration-500"
      />
    </div>

  </div>
</section>

    </div>
  );
};

export default About;
