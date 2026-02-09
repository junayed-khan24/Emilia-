import React from "react";
import img from "../../src/assets/Hero.jpg";
import img1 from "../../src/assets/Heroo.jpg";

const About = () => {
  return (
   <div className="bg-base-200 w-full min-h-screen pt-12">

    <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        <h2 className="text-6xl font-bold mb-4">I’M MOSES BLAKE</h2>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">
             A passionate photographer with an eye for honest, powerful moments
        </p>

        <div className="flex gap-2">
          <img src={img1} alt="Moses Blake" className="w-1/2 rounded-lg shadow-lg" />
          <div>
            <img src={img} alt="Moses Blake" className="w-full rounded-lg shadow-lg" />
            <img src={img} alt="Moses Blake" className="w-full rounded-lg shadow-lg mt-4" />
          </div>
        </div>
    </div>
   </div>
  );
};

export default About;
