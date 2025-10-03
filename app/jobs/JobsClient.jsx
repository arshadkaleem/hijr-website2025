"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";

export default function JobsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50, rotateY: -45 },
        { opacity: 1, y: 0, rotateY: 0, duration: 1.5, ease: "power3.out" }
      );
    }
  }, []);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [page, setPage] = useState(1);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
    setLocation(searchParams.get("location") || "");
    setJobType(searchParams.get("jobType") || "");
    setJobRole(searchParams.get("jobRole") || "");
    setExperience(searchParams.get("experience") || "");
    setPage(Number(searchParams.get("page")) || 1);
  }, [searchParams]);

  // Fetch jobs
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        keyword,
        location,
        jobType,
        jobRole,
        experience,
        page: String(page),
      }).toString();

      const res = await fetch(`/api/job/publicjobs?${query}`);
      const data = await res.json();
      if (data?.success) setJobs(data.data.jobs || []);
      else setJobs([]);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setJobs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [keyword, location, jobType, jobRole, experience, page]);

  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (location) params.set("location", location);
    if (jobType) params.set("jobType", jobType);
    if (jobRole) params.set("jobRole", jobRole);
    if (experience) params.set("experience", experience);
    params.set("page", "1");

    router.push(`/jobs?${params.toString()}`);
    setPage(1);
  };

  // Clear filters
  const clearFilters = () => {
    setKeyword("");
    setLocation("");
    setJobType("");
    setJobRole("");
    setExperience("");
    setPage(1);
    router.push("/jobs");
  };

  // Pagination
  const updatePage = (newPage) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("page", String(newPage));
    setPage(newPage);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div>
      {/* Banner */}
      <section className="relative w-full mt-[64px]">
        <div className="relative w-full h-[250px] md:h-[320px] lg:h-[380px] overflow-hidden">
          <Image
            src="/images/job-banner.jpeg"
            alt="Jobs Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div
            ref={textRef}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 py-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wide">
              Jobs
            </h1>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-gray-50 px-5 md:px-12">
        <div className="max-w-7xl mx-auto rounded-lg flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search by job title"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location (e.g. Delhi, Mumbai)"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="Job Role (e.g. Nurse, Pharmacist)"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">Select Experience</option>
              <option value="fresher">Fresher</option>
              <option value="1-2">1-2 Years</option>
              <option value="2-5">2-5 Years</option>
              <option value="5-10">5-10 Years</option>
              <option value="10+">10+ Years</option>
            </select>
            <div className="flex gap-3 col-span-2 md:col-span-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  applyFilters();
                }}
                className="bg-[#11B719] hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow w-full md:w-auto inline-block text-center cursor-pointer"
              >
                Apply Filters
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  clearFilters();
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold shadow w-full md:w-auto inline-block text-center cursor-pointer"
              >
                Clear
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="w-full py-16 bg-white px-8">
        <div className="max-w-7xl mx-auto font-sans">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Healthcare Jobs
            </h2>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p className="text-center text-gray-500">No jobs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <a
                  key={job._id}
                  href="https://portal.hijr.in/"
                  className="block rounded-xl shadow-md p-6 bg-white relative transition duration-200 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
                >
                  <span className="absolute top-3 right-3 bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {job.jobType}
                  </span>
                  <div className="flex justify-center mb-4">
                    {job.logoUrl ? (
                      <Image
                        unoptimized
                        src={job.logoUrl}
                        alt={job.companyName || "Company Logo"}
                        width={80}
                        height={80}
                        className="object-contain rounded-full border border-gray-200 bg-gray-50"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-3xl font-bold text-[#11b719]">
                        {job.jobRole
                          ? job.jobRole
                              .split(" ")
                              .map((word) => word.charAt(0)) 
                              .join("") 
                              .toUpperCase()
                          : "?"}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {job.jobRole}
                    </h3>
                    <p className="text-[#11b719] font-medium">
                      {job.companyName || "Unknown"}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    {job.location || "Location not specified"}
                  </p>
                </a>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              disabled={page === 1}
              onClick={() => updatePage(Math.max(page - 1, 1))}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-4 py-2 font-medium">Page {page}</span>
            <button
              onClick={() => updatePage(page + 1)}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
