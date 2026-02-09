import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
              Moses Blake
            </h2>
            <p className="text-gray-400 mt-2 text-lg">
              Digital Photographer
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-12">

            {/* Pages */}
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition">Home</li>
                <li className="hover:text-white cursor-pointer transition">Portfolio</li>
                <li className="hover:text-white cursor-pointer transition">About</li>
                <li className="hover:text-white cursor-pointer transition">Blog</li>
                <li className="hover:text-white cursor-pointer transition">Contact</li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition">X (Twitter)</li>
                <li className="hover:text-white cursor-pointer transition">Facebook</li>
                <li className="hover:text-white cursor-pointer transition">Instagram</li>
                <li className="hover:text-white cursor-pointer transition">Snapchat</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-14 pt-6 text-center text-gray-500 text-sm">
          Copyright © 2024. All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
