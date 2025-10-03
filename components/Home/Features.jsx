"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaUserMd, FaUserNurse, FaPills, FaAngleRight } from "react-icons/fa";
import gsap from "gsap";

export default function Features() {
  const [jobs, setJobs] = useState([]);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true); 

   const fetchJobs = async () => {
  try {
    const res = await fetch("/api/jobs");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (data.success && data.data?.jobs) {
      let jobList = data.data.jobs;

      // Sort by latest created date
      jobList = jobList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      // Take only latest 3
      jobList = jobList.slice(0, 3);

      setJobs(jobList);
    } else {
      console.warn("No jobs found or invalid response structure:", data);
      setJobs([]);
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
    setJobs([]);
  }
};


    fetchJobs();
  }, []);
  useEffect(() => {
    if (!mounted || jobs.length === 0) return;

    gsap.fromTo(
      ".job-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: "power2.out" }
    );
  }, [jobs, mounted]);


  if (!mounted) return null;

  return (
    <section className="w-full pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a232c]">
            Hot & Featured <span className="text-[#11b719]">Jobs</span>
          </h2>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="job-card relative bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col items-center transition duration-300 hover:shadow-xl w-full cursor-pointer"
              onClick={() => router.push('/jobs')}
            >
              {/* Featured / Urgent Badges */}
              <div className="absolute left-4 top-4 flex flex-col gap-2 z-10">
                {job.featured && (
                  <span className="bg-[#11b719] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    FEATURED
                  </span>
                )}
                {job.urgent && (
                  <span className="bg-[#ff4d6d] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    URGENT
                  </span>
                )}
              </div>

              {/* Job Type */}
              <span className="absolute right-4 top-4 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                {job.type || job.jobType}
              </span>

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                {job.jobCategory?.toLowerCase().includes("nurse") ? (
                  <FaUserNurse className="text-5xl text-[#11b719]" />
                ) : job.jobCategory?.toLowerCase().includes("doctor") ? (
                  <FaUserMd className="text-5xl text-[#11b719]" />
                ) : (
                  <FaPills className="text-5xl text-[#11b719]" />
                )}
              </div>

              {/* Title & Company */}
              <div className="text-center mb-2">
                <div className="font-semibold text-lg text-[#1a232c]">{job.jobRole}</div>
                <div className="text-[#11b719] text-sm font-medium">{job.companyName}</div>
              </div>

              {/* Skills / Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                {job.skills?.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                <FaMapMarkerAlt className="mr-1" />
                {job.jobLocation || job.location || "Location not specified"}
              </div>

              {/* Browse Job Button */}
              {/* <a
                href={`/jobs/${job._id}`}
                className="mt-auto text-[#11b719] font-semibold flex items-center gap-1 hover:underline text-base"
              >
                Browse Job <FaAngleRight className="text-lg mt-0.5" />
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
