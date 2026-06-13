import React, { useEffect } from "react";
import AOS from "aos";

const BookingForm = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Photography Booking Form
        </h2>
        <p className="text-gray-500">Please fill all required fields *</p>
      </div>

      {/* Form */}
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10"
        data-aos="fade-up"
      >
        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Name *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input-style"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-style"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">Phone Number *</label>
            <input
              type="text"
              placeholder="Your phone number"
              className="input-style w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email *</label>
            <input
              type="email"
              placeholder="Your email"
              className="input-style w-full"
            />
          </div>

          {/* Social */}
          <div>
            <label className="block mb-2 font-medium">
              Facebook / Instagram Handle
            </label>
            <input
              type="text"
              placeholder="@username"
              className="input-style w-full"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium">Address *</label>
            <input
              type="text"
              placeholder="Street Address"
              className="input-style w-full mb-3"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input type="text" placeholder="City" className="input-style" />
              <input type="text" placeholder="State" className="input-style" />
              <input type="text" placeholder="Zip Code" className="input-style" />
            </div>
          </div>

          {/* Session Date */}
          <div>
            <label className="block mb-2 font-medium">
              The Session Date *
            </label>
            <p className="text-sm text-gray-500 mb-2">
              If we have not already agreed on a date, please contact me first.
            </p>
            <input
              type="date"
              className="input-style w-full md:w-1/2"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
              Submit Booking
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingForm;