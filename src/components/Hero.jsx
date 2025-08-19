import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-blue-600 text-white min-h-screen px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-full mx-auto"
    >
      {/* Left Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 mt-3">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Grow Taller Naturally – Discover the Proven Formula! ✅
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
          A step-by-step guide to maximize your height safely at any age.
          <br className="hidden sm:block" />
          Simple routines, diet tips, and exercises to help you grow taller
          naturally.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300"
        >
          Buy eBook Now
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/book.png"
          alt="Height Growth Formula eBook"
          className="w-48 sm:w-64 md:w-80 lg:w-96 max-w-full rounded-xl shadow-2xl object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
