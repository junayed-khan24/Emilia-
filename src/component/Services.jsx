import React from "react";
import img from "../../src/assets/service.jpg";
import img1 from "../../src/assets/download.jfif";
import img2 from "../../src/assets/download (1).jfif";
import img3 from "../../src/assets/download (2).jfif";

const services = [
  {
    title: "Portrait Photography",
    img: img1,
    rotate: "-rotate-3",
  },
  {
    title: "Event & Wedding Coverage",
    img: img,
    rotate: "rotate-1",
  },
  {
    title: "Editorial & Brand Shoots",
    img: img2,
    rotate: "-rotate-2",
  },
  {
    title: "Image Retouching & Editing",
    img: img3,
    rotate: "rotate-3",
  },
];

const Services = () => {
  return (
    <section className="bg-base-200 md:py-16 -pt-12 px-4">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal font-regular">What I do</h2>
          <p className="mb-14 max-w-2xl mx-auto  text-1xl md:text-2xl font-normal text-neutral mt-0 md:mt-4">
            Turning everyday moments into lasting art. One frame at a time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 
              ${service.rotate} hover:rotate-0 
              ${index >= 2 ? "hidden sm:block" : ""}`}
            >
              <figure className="h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </figure>

              <div className="card-body p-4 text-center text-secondary">
                <h3 className="font-medium text-sm md:text-base">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
