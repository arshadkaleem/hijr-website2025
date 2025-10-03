"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function CategoryDetails() {
  const params = useSearchParams();
  const router = useRouter();
  const title = params.get("title");
  const positions = params.get("positions");
  const [search, setSearch] = React.useState("");
  const [profiles, setProfiles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/job/publicjobs");
        const data = await res.json();
        if (data?.success) {
          const jobs = data.data.jobs.filter((job) =>
            job.jobRole?.toLowerCase().includes(title?.toLowerCase())
          );
          setProfiles(jobs);
        } else {
          setProfiles([]);
        }
      } catch (err) {
        setProfiles([]);
      }
      setLoading(false);
    };
    if (title) fetchProfiles();
  }, [title]);

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.jobRole?.toLowerCase().includes(search.toLowerCase()) ||
      profile.companyName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Top Banner */}
      <section className="relative w-full mt-[64px]">
        <div className="relative w-full h-[220px] md:h-[300px] lg:h-[360px] overflow-hidden">
          <Image
            src="/images/job-banner.jpeg"
            alt="Category Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 py-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wide">
              {title} Jobs
            </h1>
          </div>
        </div>
      </section>

      {/* Profiles List */}
      <section
        className="bg-white py-12 w-full font-sans pt-10 min-h-screen"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 pt-10">
          <div className="flex-1">
            <div className="grid gap-6">
              {loading ? (
                <div className="text-center py-10 text-gray-500">
                  Loading...
                </div>
              ) : filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile, idx) => (
                  <div
                    key={profile._id || idx}
                    className="bg-[#ffffff] rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between transform hover:-translate-y-2 hover:scale-[1.03] transition duration-300"
                    style={{
                      boxShadow:
                        "0 8px 24px rgba(34,196,95,0.12), 0 1.5px 6px rgba(26,35,44,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {profile.logoUrl ? (
                        <Image
                          unoptimized
                          src={profile.logoUrl}
                          alt={
                            profile.companyName ||
                            profile.jobRole ||
                            "Unknown Company"
                          }
                          width={64}
                          height={64}
                          className="rounded-md object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center rounded-md bg-gray-100 text-xl font-bold text-[#11b719]">
                          {(profile.jobRole || profile.companyName || "?")
                            .split(" ")
                            .map((word) => word.charAt(0))
                            .join("")
                            .toUpperCase()}
                        </div>
                      )}

                      <div>
                        <div className="font-semibold text-xl text-[#1a232c]">
                          {profile.jobRole}
                        </div>
                        <div className="text-gray-600">
                          Company: {profile.companyName}
                        </div>
                        <div className="text-gray-600">
                          Type: {profile.jobType}
                        </div>
                        <div className="text-gray-600">
                          Salary:{" "}
                          {profile.salary
                            ? `₹${profile.salary}`
                            : "Not specified"}
                        </div>
                        <div className="text-gray-600">
                          Location: {profile.location}
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://portal.hijr.in/"
                      className="mt-4 md:mt-0 bg-[#11b719] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-[#1a232c] transition inline-block text-center cursor-pointer"
                    >
                      Apply Now
                    </a>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="text-gray-400 text-xl font-semibold mb-2">
                    No jobs found for this category.
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Search Box Right Side */}
          <div className="w-full md:w-80">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-[#1a232c]">
                Search by Job Role{" "}
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search by job role or company..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-[#11b719] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#11b719]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 flex justify-center mt-8 mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-green-500   0 text-white px-6 py-2 rounded-full font-medium shadow transition-colors duration-300 hover:bg-white hover:text-green-600"
        >
          {/* Left arrow */}
          <svg
            className="w-5 h-5 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>

          <h3 className="font-semibold ">Back</h3>
        </button>
      </div>
    </>
  );
}
