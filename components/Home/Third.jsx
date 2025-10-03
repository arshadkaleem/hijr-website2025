"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaUser, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Link from "next/link";

export default function Third() {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.from(leftTextRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power2.out",
    });
    gsap.from(rightTextRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[350px]">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center bg-[#1a232c] text-white w-full md:w-1/2 py-12 px-4 md:px-12 gap-6">
        <h2
          ref={leftTextRef}
          className="text-2xl md:text-4xl font-bold mb-3 text-center justify-center"
        >
          Make a Difference with
          <br /> Your Online Resume!
        </h2>

        <Link href="https://portal.hijr.in/register" target="_blank">
  <button className="flex items-center gap-2 bg-white text-[#1a232c] px-6 py-2 rounded-full font-medium shadow hover:bg-[#11b719] hover:text-white transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer">
    <FaUser className="text-lg" />
    Create Account
  </button>
</Link>

      </div>

    {/* Right Section */}
<div className="flex flex-col justify-center items-center bg-[#11b719] text-white w-full md:w-1/2 py-12 px-6 md:px-12 gap-4">
  <h2
    ref={rightTextRef}
    className="text-2xl md:text-4xl font-bold mb-3 text-center"
  >
    Make the most of
    <br /> growth Opportunities
  </h2>

  <Link href="https://portal.hijr.in/register" target="_blank">
  <button
  className="flex items-center gap-2 bg-white text-[#11b719] px-6 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
>
  <FaThumbsUp className="text-lg" />
  Get Started
</button>

  </Link>
</div>

    </div>
  );
}
