import React, { useState } from "react";

const faqs = [
  {
    question: "How fast will I see results?",
    answer:
      "Most people start noticing improvements in posture and growth potential within 3–4 weeks of consistently following the guide.",
  },
  {
    question: "Is this eBook safe for teenagers?",
    answer:
      "Yes! The methods are natural, safe, and designed for both teenagers and adults.",
  },
  {
    question: "Do I need special equipment?",
    answer:
      "No special equipment is required. The exercises and nutrition tips can be followed at home.",
  },
  {
    question: "Will I get lifetime access?",
    answer:
      "Yes, once you purchase, you’ll get lifetime access to the eBook and any future updates.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl p-6 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-blue-700"
              >
                {faq.question}
                <span className="ml-2 text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
