import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12 pt-20 md:pt-24">
      <div className="w-full max-w-xl bg-base-100 shadow-xl rounded-3xl p-8 md:p-12">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Contact me
        </h2>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name here"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="5"
              placeholder="Write your message here"
              className="textarea textarea-bordered w-full rounded-xl resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              btn w-full rounded-full
              bg-black text-white border-none
              hover:bg-neutral hover:scale-105
              transition-all duration-300
            "
          >
            Send Message
          </button>
        </form>

        {/* Footer Email */}
        <p className="text-left mt-8 text-sm text-gray-500">
          Or you can mail me at
          <br />
          <span className="font-semibold text-2xl text-black underline">
            hello@templateemail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
