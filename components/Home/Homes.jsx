'use client';
import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Homes() {
	const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 }, // start: invisible & slightly down
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // animate to visible & original position
      );
    }
  }, []);
	const [keyword, setKeyword] = useState("");
	const [location, setLocation] = useState("");
	const [jobType, setJobType] = useState("");

	const handleSearch = () => {
		alert(`Searching jobs for:\nKeyword: ${keyword}\nLocation: ${location}\nJob Type: ${jobType}`);
	};

	return (
		<div className="pt-20 flex flex-col items-center h-screen justify-center">
  {/* Background Section */}
  <div
    className="w-full bg-cover bg-center min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: "url('/images/bg-02.jpg')", // replace with your background image path
    }}
  >
    <div className="text-center px-4 ">
      <h1 className="text-5xl md:text-5xl font-extrabold text-black">
        5,000+ JOBS{" "}
        <span className="text-green-600">AVAILABLE</span>
      </h1>
      <p className="mt-2 text-black font-bold text-lg">
        Join us & Explore thousands of Jobs
      </p>

      {/* Download App Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
      {/* Play Store Button */}
      <a
        ref={buttonRef}
        href="https://play.google.com/store/apps/details?id=com.hijrjobs"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#11b719] flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/40 text-white text-base font-medium hover:bg-white hover:text-[#11b719] transition-all"
      >
        Download on Google Play
      </a>
    </div>
    </div>
  </div>
</div>

	);
}
