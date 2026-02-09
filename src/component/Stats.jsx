import React from "react";

const Stats = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          My stats
        </h2>

        <p className="text-gray-500 mb-14 max-w-md mx-auto">
          Every photo tells a story. These numbers show my commitment to
          capturing them well.
        </p>

        {/* Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT BIG CARD */}
          <div className="bg-base-100 rounded-2xl shadow-md flex flex-col justify-center items-center p-14 hover:shadow-xl transition">
            <h3 className="text-5xl md:text-6xl font-bold mb-4">
              200+
            </h3>
            <p className="text-gray-500 text-sm">
              Projects <br /> Completed
            </p>
          </div>

          {/* RIGHT SIDE (2 stacked cards) */}
          <div className="flex flex-col gap-6">

            {/* TOP DARK */}
            <div className="bg-neutral text-neutral-content rounded-2xl p-12 shadow-lg flex flex-col justify-center items-center hover:scale-105 transition">
              <h3 className="text-5xl font-bold mb-2">
                6+ yrs
              </h3>
              <p className="text-sm opacity-80">
                Behind the lens
              </p>
            </div>

            {/* BOTTOM LIGHT */}
            <div className="bg-base-100 rounded-2xl shadow-md p-12 flex flex-col justify-center items-center hover:shadow-xl transition">
              <h3 className="text-5xl font-bold mb-2">
                100%
              </h3>
              <p className="text-gray-500 text-sm">
                Client satisfaction
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
