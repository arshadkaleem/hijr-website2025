"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Services = () => {
  const cardRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50, rotateY: -45 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      gsap.fromTo(
        cardRefs.current,
        { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
  }, []);

  const cards = [
    {
      title: "Verified Profiles & Listings",
      desc: "Rigorous 3-step verification for employers (GST, license, and address checks).",
      img: "/images/service01.jpg",
    },
    {
      title: "Smart Communication Tools",
      desc: "In-App Chat, Secure Calls, Instant Notifications.",
      img: "/images/ser02.jpg",
    },
    {
      title: "Real-Time Analytics",
      desc:
        "Candidates: Track profile views and market demand.\nEmployers: Monitor engagement, cost-per-hire, and diversity metrics.",
      img: "/images/ser03.jpg",
    },
    {
      title: "Customizable Branding",
      desc: "Employers can design career pages with logos, galleries, and employee success stories.",
      img: "/images/ser04.jpg",
    },
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative w-full mt-[64px]">
        <div className="relative w-full h-[250px] md:h-[320px] lg:h-[400px] overflow-hidden">
          <Image
            src="/images/job-banner.jpeg"
            alt="Jobs Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 py-6">
            <h1
              ref={textRef}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wide"
            >
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* Add overflow-x-hidden here to prevent horizontal scroll */}
      <div className="min-h-screen bg-gray-50 font-sans pt-24 pb-16 px-4 md:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Offer</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md 
                         hover:border-[#11b719] hover:shadow-xl hover:scale-105 
                         transition-all duration-300 ease-in-out text-center"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800  text-[#11b719]">{card.title}</h3>
              <p className="text-gray-600 mt-2 whitespace-pre-line">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
