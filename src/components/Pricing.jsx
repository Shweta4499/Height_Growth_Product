import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-blue-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700">
            Get Instant Access
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Unlock your natural height growth potential with our trusted
            formula. Download the eBook instantly after purchase.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md mx-auto border border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Height Growth Formula eBook
          </h3>
          <p className="text-gray-600 mb-6">
            Includes daily routines, posture correction, and nutrition guide.
          </p>

          <div className="text-5xl font-bold text-blue-700 mb-6">
            ₹499 <span className="text-lg text-gray-500">/ one-time</span>
          </div>

          <ul className="text-gray-600 mb-6 space-y-3 text-left">
            <li>✅ Scientifically backed methods</li>
            <li>✅ Simple exercises & posture tips</li>
            <li>✅ Nutrition guide for height growth</li>
            <li>✅ Lifetime access & updates</li>
          </ul>

          {/* Buy Button */}
          <button
            onClick={() => alert("Razorpay Integration Coming Soon!")}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-xl shadow-md transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
