"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

const Candidates = () => {
  const candidates = [
    {
      name: "23thb194",
      specialization: "Nursing",
      image: "/images/profile1.png",
    },
    {
      name: "Sssss",
      specialization: "Pharmacy",
      image: "/images/profile2.png",
    },
    {
      name: "Aaaa",
      specialization: "Surgery",
      image: "/images/profile3.png",
    },
    {
      name: "Peconclaire",
      specialization: "Lab Support",
      image: "/images/profile4.png",
    },
    {
      name: "Oussama Khh",
      specialization: "Emergency Care",
      image: "/images/profile5.png",
    },
    {
      name: "105w2",
      specialization: "Pediatrics",
      image: "/images/profile6.png",
    },
    {
      name: "Mileco",
      specialization: "Medicine",
      image: "/images/profile7.png",
    },
  ];

  return (
    <>
      <section className="relative w-full ">
        {/* Background Banner */}
        <div className="relative w-full h-[250px] md:h-[320px] lg:h-[380px]">
          <Image
            src="/images/job-banner.jpeg"
            alt="Jobs Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 text-white">
            {/* Breadcrumb */}
            <p className="text-sm md:text-base mb-2">
              Home <span className="mx-2">{">"}</span> Candidates
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold"></h1>
          </div>
        </div>
      </section>
  <section className="min-h-screen pt-20 pb-16 px-8">
  <div className="max-w-6xl mx-auto font-sans" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
          <h1 className="text-4xl font-bold text-center text-black mb-8">Browse Healthcare Candidates</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {candidates.map((c, i) => (
              <div key={c.name} className="bg-[#fffff] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between min-h-[220px] transition duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="w-20 h-20  rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  <FaUser className="text-4xl text-gray-300" />
                </div>
                <h2 className="text-lg font-bold text-white mb-2 text-center">{c.name}</h2>
                <p className="text-sm font-bold text-gray-500 text-center mb-4">Specialization: {c.specialization}</p>
                <button className="mt-auto px-4 py-2 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition-all">
                  <span className="font-bold">View Profile</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Candidates;
