import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Height Growth Formula</h2>
          <p className="text-blue-100">
            A proven digital eBook that helps you unlock your natural height
            growth potential with safe, scientific methods.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-yellow-400">
                Benefits
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-yellow-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-yellow-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:support@heightgrowth.com" className="hover:text-yellow-400">support@heightgrowth.com</a></p>
          <p>Phone: <a href="tel:+919999999999" className="hover:text-yellow-400">+91 99999 99999</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">🌐</a>
            <a href="#" className="hover:text-yellow-400">📘</a>
            <a href="#" className="hover:text-yellow-400">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-blue-200 mt-10 border-t border-blue-500 pt-6">
        © {new Date().getFullYear()} Height Growth Formula. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
