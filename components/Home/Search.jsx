"use client";
import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams({
      keyword,
      location,
      jobType,
    }).toString();

    router.push(`/jobs?${query}`);
  };

  return (
    <div className="w-full font-sans">
      <div
        className="bg-[#11b719] w-full min-h-[200px] flex items-center justify-center pt-15 pb-5 px-5"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm w-full max-w-6xl md:h-14 gap-4 md:gap-0 mx-auto">
          {/* Keyword */}
          <div className="flex items-center px-3 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 h-14">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Job Title or Keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full outline-none text-sm h-full placeholder-gray-500"
            />
          </div>

          {/* Location */}
          <div className="flex items-center px-3 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 h-14">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="All Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-sm h-full placeholder-gray-500"
            />
          </div>

          {/* Job Type */}
          <div className="flex items-center px-3 w-full md:w-1/3 h-14">
            <FaFilter className="text-gray-500 mr-2" />
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full outline-none text-sm h-full text-gray-600 bg-transparent"
            >
              <option value="">All Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="internship">Internship</option>
              <option value="contract">Freelance</option>
            </select>
          </div>

          {/* Search Button */}
          <a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // prevent default if you want to handle click manually
    handleSearch();
  }}
  className="bg-[#000] text-white px-6 py-3 w-full md:w-auto text-base rounded-lg font-medium transition hover:bg-[#11b719] hover:text-white inline-block text-center"
  style={{ minWidth: "120px" }}
>
  Search Jobs
</a>

        </div>
      </div>
    </div>
  );
}
