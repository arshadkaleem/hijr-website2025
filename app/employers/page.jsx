"use client";
import React from "react";
import { FaUserMd, FaHospital } from "react-icons/fa";
import Image from "next/image";

const Employers = () => {
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
              Home <span className="mx-2">{">"}</span> Employers
            </p>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold"></h1>
          </div>
        </div>
      </section>

      {/* Healthcare Jobs Grid */}
      <section className="w-full px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Mayo Clinic",
                industry: "Healthcare / Hospital",
                jobsOpen: 5,
                featured: true,
                logo: "https://img.icons8.com/color/96/hospital-room.png"
              },
              {
                name: "Johns Hopkins Hospital",
                industry: "Healthcare / Hospital",
                jobsOpen: 3,
                featured: true,
                logo: "https://img.icons8.com/color/96/clinic.png"
              },
              {
                name: "Cleveland Clinic",
                industry: "Healthcare / Hospital",
                jobsOpen: 2,
                featured: false,
                logo: "https://img.icons8.com/color/96/stethoscope.png"
              },
              {
                name: "Mount Sinai",
                industry: "Healthcare / Hospital",
                jobsOpen: 1,
                featured: false,
                logo: "https://img.icons8.com/color/96/first-aid-kit.png"
              },
              {
                name: "Stanford Health Care",
                industry: "Healthcare / Hospital",
                jobsOpen: 4,
                featured: true,
                logo: "https://img.icons8.com/color/96/heart-health.png"
              },
              {
                name: "Mass General Hospital",
                industry: "Healthcare / Hospital",
                jobsOpen: 0,
                featured: false,
                logo: "https://img.icons8.com/color/96/hospital.png"
              },
              {
                name: "Cedars-Sinai",
                industry: "Healthcare / Hospital",
                jobsOpen: 2,
                featured: false,
                logo: "https://img.icons8.com/color/96/medical-doctor.png"
              },
              {
                name: "NewYork-Presbyterian",
                industry: "Healthcare / Hospital",
                jobsOpen: 3,
                featured: true,
                logo: "https://img.icons8.com/color/96/hospital-bed.png"
              }
            ].map((job, index) => (
              <div
                key={index}
                className="rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                {job.featured && (
                  <span className="bg-[#11b719] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    FEATURED
                  </span>
                )}
                <FaHospital className="w-10 h-10 mb-4 text-[#11b719]" />
                <h3 className="text-lg font-bold text-gray-800">{job.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{job.industry}</p>
                <p className="text-sm mt-2">
                  Jobs Open: <span className="font-semibold text-[#11b719]">{job.jobsOpen}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Employers;
