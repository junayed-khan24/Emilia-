import React from "react";

import user1 from "../../src/assets/download.jfif";
import user2 from "../../src/assets/download (1).jfif";
import user3 from "../../src/assets/download (2).jfif";

const testimonials = [
  {
    text: "The way you captured our day is beyond words. Every photo is a treasure.",
    name: "Rachael and Tim",
    img: user1,
  },
  {
    text: "Professional, patient, and incredibly talented.",
    name: "Agency Lead, Numa Studio",
    img: user2,
  },
  {
    text: "My portraits always come out stunning when it's handled by you.",
    name: "Mary Jane",
    img: user3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Hear from my past clients
          </h2>

          <p className="text-gray-500 max-w-md mx-auto">
            Real people, real stories. Spreading excellence with every shot.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between min-h-[200px]"
            >
              {/* Quote */}
              <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                />
                <span className="text-sm font-medium text-gray-600">
                  {item.name}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
