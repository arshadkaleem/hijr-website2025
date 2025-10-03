"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const sectors = [
  {
    title: "HOSPITALS & CLINICS",
    image: "/images/Or01.jpg",
    roles: ["Specialist doctors", "ICU Nurses", "Technicians", "Ward Managers"],
    challenges: ["Urgent hiring needs", "Skill-specific recruitment", "Staff burnout"],
    solutions: ["Real Time Jobs Alerts", "Specialty Filtering", "Employer Branding Tools"],
  },
  {
    title: "Pharma & Biotech",
    image: "/images/or02.jpg",
    roles: ["Medical Reps", "Clinical Research Associates", "QC Analysts"],
    challenges: ["High Time-to-Hire", "Compliance Driven Hiring", "Regulatory Pressures"],
    solutions: ["Candidate Verification", "Geo Targeted Job Posts", "360 Talent Pool"],
  },
  {
    title: "Diagnostics & Pathology Labs",
    image: "/images/Or03.jpg",
    roles: ["Pathologists", "Radiologists", "Lab Technicians"],
    challenges: ["High Vacancy Filling", "Talent Migration", "Turnover Reduction"],
    solutions: ["Skill Building Dashboard", "Skill Assessments", "Shift Scheduling Integration"],
  },
  {
    title: "Medical Education & Research",
    image: "/images/or04.jpg",
    roles: ["Professors", "Research Fellows", "Trainers & Advisors"],
    challenges: ["Credential Security", "Global Standard Recruitment", "Skill Development"],
    solutions: ["Academic Profiles Builder", "Global Talent Network", "Grant Alert Features"],
  },
  {
    title: "NGOs & Govt. Health Programs",
    image: "/images/Or05.jpg",
    roles: ["Public Health Officers", "Community Nurses", "Vaccination Managers"],
    challenges: ["Wide Geography Teams", "Cost-Effective Recruitment"],
    solutions: ["Job Scheduling Tool", "Smart Screening Tool", "Govt. Partnership Portal"],
  },
];

const Organizations = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <>
    {/* Banner */}
<section className="relative w-full mt-[64px]"> {/* Adjust if navbar is fixed */}
  <div className="relative w-full h-[250px] md:h-[320px] lg:h-[400px] overflow-hidden">
    <Image
      src="/images/job-banner.jpeg"
      alt="Jobs Banner"
      fill
      sizes="100vw"
      className="object-cover"
      priority
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

    {/* Text */}
    <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wide">
        Organizations
      </h1>
    </div>
  </div>
</section>

      {/* Content Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Healthcare & Life Sciences Sectors We Serve
        </h2>
<div className="max-w-7xl mx-auto ">
  <div className="space-y-12">
    {sectors.map((sector, index) => (
      <div
        key={index}
        ref={(el) => (cardsRef.current[index] = el)}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden grid md:grid-cols-2 gap-15 p-6"
      >
        {/* Image */}
        <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden">
          <Image
            src={sector.image}
            alt={sector.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h3 className="uppercase text-2xl font-semibold text-[#11b719] mb-2">{sector.title}</h3>

          <div className="mb-3">
            <h4 className="font-semibold text-gray-800">Roles We Fill</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {sector.roles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>

          <div className="mb-3">
            <h4 className="font-semibold text-gray-800">Challenges We Solve</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {sector.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">HuRis Solutions</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {sector.solutions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </section>
    </>
  );
};

export default Organizations;
