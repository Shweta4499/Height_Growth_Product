import React from "react";

// Import your testimonial images
import t1 from "../assets/1.jpg";
import t2 from "../assets/2.jpg";
import t3 from "../assets/3.jpg";
import t4 from "../assets/4.jpg";


const testimonials = [t1, t2, t3,t4];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700">
            What Readers Are Saying
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Real people, real results — here’s how the Height Growth Formula has
            helped others.
          </p>
        </div>

        {/* Testimonial Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={img}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
