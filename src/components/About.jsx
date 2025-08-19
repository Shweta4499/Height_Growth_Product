import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-gray-800 py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/book.png"
          alt="Height Growth Formula eBook Preview"
          className="w-72 md:w-96 rounded-lg shadow-xl"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-700">
          About the Height Growth Formula eBook
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Inside this digital guide, you’ll discover a proven step-by-step
          formula to maximize your height naturally. From daily posture
          exercises and growth-boosting foods to essential lifestyle habits –
          this book is designed to help you grow taller in a safe and natural
          way.
        </p>

        {/* Highlighted Points */}
        <ul className="space-y-3 text-gray-700">
          <li>✅ Easy-to-follow daily routine</li>
          <li>✅ Natural diet & nutrition plan</li>
          <li>✅ Growth-focused exercises</li>
          <li>✅ Safe for all age groups</li>
        </ul>

        {/* CTA */}
        <a
          href="#pricing"
          className="inline-block mt-6 bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition"
        >
          Get Your Copy Now
        </a>
      </div>
    </section>
  );
};

export default About;
