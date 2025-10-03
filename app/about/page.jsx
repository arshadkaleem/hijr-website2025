"use client";
import React from "react";
import Image from "next/image";

const accentGreen = "#1FAE48";

const iconCards = [
  {
    title: "Job Seekers",
    desc: "Find the right healthcare job with career support and growth.",
    icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/user-plus.svg",
    bg: "bg-[#E6F9ED]",
    color: "text-[#1FAE48]",
    border: "border-[#1FAE48]",
    shadow: "shadow-[0_2px_8px_rgba(31,174,72,0.2)]",
  },
  {
    title: "Employers",
    desc: "Build strong healthcare teams globally.",
    icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/users.svg",
    bg: "bg-[#E6F9ED]",
    color: "text-[#1FAE48]",
    border: "border-[#1FAE48]",
    shadow: "shadow-[0_2px_8px_rgba(31,174,72,0.2)]",
    },
 {
  title: "Partners",
  desc: "Collaborate and expand your healthcare reach.",
  icon: "https://api.iconify.design/lucide:handshake.svg", // or Font Awesome alternative
  bg: "bg-[#E6F9ED]",
  color: "text-[#1FAE48]",
  border: "border-[#1FAE48]",
  shadow: "shadow-[0_2px_8px_rgba(31,174,72,0.2)]",
}

];

export default function AboutUs() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full mt-16">
        <div className="relative w-full h-[250px] md:h-[320px] lg:h-[380px] overflow-hidden">
          <Image
            src="/images/job-banner.jpeg"
            alt="Jobs Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wide">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* About HIJR Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#1FAE48] mb-4">About HIJR</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              HIJR (Healthcare International Jobs Recruitment) connects healthcare professionals with global opportunities through a transparent and effective platform.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/About01.jpg"
              alt="Healthcare professional"
              width={500}
              height={300}
              className="rounded-2xl shadow-lg object-cover w-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="grid gap-10 md:grid-cols-1 mb-16">
          {/* Vision */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl text-[#1FAE48] font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To empower healthcare professionals and institutions by unlocking access to global talent and career growth.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/About02.jpg"
                alt="Vision"
                width={500}
                height={300}
                className="rounded-xl shadow-md object-cover w-full"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl text-[#1FAE48] font-semibold mb-2">Our Mission</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide reliable and cost-effective recruitment services.</li>
                <li>Bridge the gap between job seekers and institutions.</li>
                <li>Support hospitals and clinics with talent globally.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/About03.png"
                alt="Mission"
                width={500}
                height={300}
                className="rounded-xl shadow-md object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* Why HIJR Stands Out */}
        <section className="bg-[#1FAE48] text-white rounded-2xl shadow-lg p-8 text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">Why HIJR Stands Out</h3>
          <ul className="space-y-3 text-lg">
            <li><strong>Built by Experts:</strong> Real healthcare professionals who truly understand recruitment.</li>
            <li><strong>Ethical Standards:</strong> No spam, no scams, only real jobs.</li>
            <li><strong>Career Growth:</strong> Free training and upskilling for job seekers.</li>
          </ul>
        </section>

        {/* Icon Cards Section */}
        <section className="flex flex-wrap justify-center gap-6">
          {iconCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 text-center transition transform hover:scale-105 cursor-pointer shadow-md ${card.bg} ${card.shadow} max-w-xs w-full`}
            >
              <div
                className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full border-2 ${card.border}`}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
              </div>
              <h4 className={`text-xl font-bold mb-2 ${card.color}`}>{card.title}</h4>
              <p className="text-gray-800 text-base">{card.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
