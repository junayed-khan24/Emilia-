import React, { useEffect } from "react";
import Header from "./Header";
import Services from "./Services";
import FeaturedShots from "./FeaturedShots";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>

      {/* Hero Section */}
      <div data-aos="fade-up">
        <Header />
      </div>

      {/* Services */}
      <div data-aos="fade-right">
        <Services />
      </div>

      {/* Stats */}
      <div data-aos="zoom-in">
        <Stats />
      </div>

      {/* Featured Shots */}
      <div data-aos="fade-left">
        <FeaturedShots />
      </div>

      {/* Testimonials */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Testimonials />
      </div>

    </div>
  );
};

export default Home;
