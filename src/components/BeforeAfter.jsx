import React from "react";

// Import your images from src/assets
import client1 from "../assets/client1.webp";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";

const clients = [
  {
    name: "Rahul, 21",
    image: client1,
    story: "I followed the ebook steps for 3 months and saw amazing changes."
  },
  {
    name: "Priya, 19",
    image: client2,
    story: "I was insecure about my height, but this guide helped me."
  },
  {
    name: "Amit, 23",
    image: client3,
    story: "The routines improved my posture and confidence. Gained 1.5 inches!"
  },
  {
    name: "Sneha, 20",
    image: client4,
    story: "Natural methods, simple exercises, and great results."
  },
  {
    name: "Arjun, 18",
    image: client5,
    story: "I can finally stand tall without feeling insecure. Thank you!"
  }
];

const BeforeAfter = () => {
  return (
    <section id="before-after" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Real Stories, Real Results ✨
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our clients have experienced amazing transformations.  
          See their journey from struggle to success.
        </p>

        {/* Grid of Clients */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-64 h-80 object-cover rounded-lg shadow"
              />
              <h3 className="text-xl font-semibold mt-4">{client.name}</h3>
              <p className="mt-2 text-gray-600 italic">“{client.story}”</p>
            </div>
          ))}
        </div>

        {/* 🎥 Video Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Watch Their Journey 🎥</h3>
          <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
  <video
    controls
    className="w-full h-full"
    poster="/video-thumbnail.jpg"  // optional thumbnail in /public/
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
