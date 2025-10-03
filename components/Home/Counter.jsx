"use client";
import React from "react";

export default function Counter() {
  return (
    <section className="bg-[#11b719] py-12 px-4 sm:px-6 md:px-8  mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Text */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
            Want to become a successful Employer?
          </h3>
          <p className="text-white text-base font-medium">
            Gain insights and attract top talent.
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="https://portal.hijr.in/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#11b719] font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition w-full md:w-auto flex justify-center"
          >
            Signup Today
          </a>
        </div>
      </div>
    </section>
  );
}
