import React from "react";

const benefits = [
  {
    title: "Natural Growth Formula",
    desc: "Proven routines that boost height without harmful supplements.",
    icon: "📘",
  },
  {
    title: "Daily Exercises",
    desc: "Simple posture & stretching routines designed to maximize growth.",
    icon: "🏋️",
  },
  {
    title: "Nutrition Guide",
    desc: "Height-friendly diet plan with essential vitamins and minerals.",
    icon: "🥗",
  },
  {
    title: "Safe For All Ages",
    desc: "Effective methods for teens, young adults, and beyond.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="bg-blue-50 text-gray-800 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700">
            Why Choose This eBook?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Unlock your natural height potential with trusted, science-backed
            strategies.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-blue-700">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
