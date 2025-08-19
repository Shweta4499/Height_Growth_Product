import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-blue-600 text-white py-32 px-6 flex flex-col md:flex-row items-center justify-between max-w-full
 mx-auto"
    >
      {/* Left Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl font-bold">
          Grow Taller Naturally – Discover the Proven Formula! ✅
        </h1>
        <p className="text-lg md:text-xl text-blue-100">
          A step-by-step guide to maximize your height safely at any age.  
          Simple routines, diet tips, and exercises to help you grow taller naturally.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition"
        >
          Buy eBook Now
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/book.png"
          alt="Height Growth Formula eBook"
          className="w-64 md:w-96 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
