import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 min-h-screen max-w-full mx-auto py-16"
    >
      {/* Left Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-12 sm:mt-16 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
          Grow Taller Naturally –{" "}
          <br className="hidden sm:block" />
          Discover the Proven Formula! ✅
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-md mx-auto md:mx-0">
          A step-by-step guide to maximize your height safely at any age.  
          Simple routines, diet tips, and exercises to help you grow taller naturally.
        </p>

        {/* CTA */}
        <a
          href="#pricing"
          className="inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition duration-300"
        >
          Buy eBook Now
        </a>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/book.png"
          alt="Height Growth Formula eBook"
          className="w-48 sm:w-64 md:w-80 lg:w-[24rem] max-w-full rounded-xl shadow-2xl object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
