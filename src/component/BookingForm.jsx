import React, { useEffect } from "react";
import AOS from "aos";

const BookingForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      
      <div
        className="card w-full max-w-4xl bg-base-100 shadow-2xl"
        data-aos="zoom-in"
      >
        <div className="card-body">

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">
              📸 Photography Booking
            </h2>
            <p className="text-gray-500">
              Fill the form to book your session
            </p>
          </div>

          <form className="space-y-5">

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="input input-bordered w-full"
              />
            </div>

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number *"
              className="input input-bordered w-full"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address *"
              className="input input-bordered w-full"
            />

            {/* Social */}
            <input
              type="text"
              placeholder="Facebook / Instagram (optional)"
              className="input input-bordered w-full"
            />

            {/* Address */}
            <div>
              <input
                type="text"
                placeholder="Street Address *"
                className="input input-bordered w-full mb-3"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Session Date *
                </span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full md:w-1/2"
              />
            </div>

            {/* Button */}
            <div className="pt-4">
              <button className="btn btn-primary w-full text-lg">
                🚀 Book Now
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingForm;