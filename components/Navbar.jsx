"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const navRef = useRef(null);
  const drawerRef = useRef(null);
  const desktopMenuRef = useRef([]);
  const mobileMenuRef = useRef([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname(); 
  const router = useRouter();

  const menuItems = useMemo(() => [
    { label: "Home", href: "/" },
    { label: "Jobs", href: "/jobs" },
    { label: "Organizations", href: "/organizations" },
    { label: "Services", href: "/services" },
  ], []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      if (!navRef.current) return;
      gsap.to(navRef.current, {
        height: window.scrollY > 30 ? 60 : 80,
        paddingTop: window.scrollY > 30 ? 10 : 16,
        paddingBottom: window.scrollY > 30 ? 10 : 16,
        duration: 0.35,
        ease: "power2.out",
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);
  useEffect(() => {
    if (!mounted) return;
    if (desktopMenuRef.current.length > 0) {
      gsap.fromTo(
        desktopMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [mounted]);
  useEffect(() => {
    if (!mounted || !drawerRef.current) return;
    if (mobileOpen) {
      gsap.fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        mobileMenuRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, delay: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.to(drawerRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [mobileOpen, mounted]);

  if (!mounted) return null;

  return (
    <nav
      ref={navRef}
      className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-10 backdrop-blur-lg bg-[#11b719] shadow-md transition-all"
      style={{ height: 80, paddingTop: 16, paddingBottom: 16 }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 pt-5  p-5">
        <Link href="/" onClick={(e) => { if (pathname === "/") { e.preventDefault(); gsap.to(window, { duration: 0.6, scrollTo: { y: 0, autoKill: true }, ease: "power2.out" }); } }}>
         <Image
  src="/images/logo02.png"
  alt="Workio Logo"
  width={100}
  height={52}
  style={{ width: "auto", height: "auto"  ,paddingTop:10}} 
/>

        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-1 justify-center items-center gap-5 text-white text-base font-medium">
        {menuItems.map((item, idx) => (
          <li
            key={item.label}
            ref={(el) => (desktopMenuRef.current[idx] = el)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-center ${
              pathname === item.href ? "underline underline-offset-6 decoration-2" : "hover:bg-white/10"
            }`}
            onClick={() => router.push(item.href)}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="https://portal.hijr.in/"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/40 text-white text-sm font-medium hover:bg-white hover:text-[#11b719] transition-all"
        >
          <FaSignInAlt className="text-lg" />
          Login
        </Link>
      </div>
       <div className="hidden md:flex items-center gap-3 px-3">
        <Link
          href="https://portal.hijr.in/register"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/40 text-white text-sm font-medium hover:bg-white hover:text-[#11b719] transition-all"
        >
          <FaSignInAlt className="text-lg" />
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white text-4xl">
          {mobileOpen ? <IoClose /> : <IoMenu size={25} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full bg-[#11b719] z-50 flex flex-col"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex justify-between items-center py-2 px-4">
          <Link href="/" onClick={(e) => { if (pathname === "/") { e.preventDefault(); gsap.to(window, { duration: 0.6, scrollTo: { y: 0, autoKill: true }, ease: "power2.out" }); } }}>
            <Image src="/images/logo02.png" alt="HIRJ" width={90} height={30} style={{ width: "auto", height: "auto" }} />
          </Link>
          <IoClose className="text-3xl cursor-pointer text-white" onClick={() => setMobileOpen(false)} />
        </div>

        <ul className="bg-[#11b719] flex flex-col gap-6 text-white text-xl font-medium px-6 py-5">
          {menuItems.map((item, idx) => (
            <li key={item.label} ref={(el) => (mobileMenuRef.current[idx] = el)}>
              <span
                className={`block py-2 px-3 rounded-lg transition-all ${
                  pathname === item.href ? "bg-white/20 underline underline-offset-5 decoration-1" : "hover:bg-white/10"
                }`}
                onClick={() => { setMobileOpen(false); router.push(item.href); }}
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </span>
            </li>
          ))}

          <div className="flex flex-col gap-4 mt-auto p-6">
            <Link
              href="https://portal.hijr.in/"
              target="_blank"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/40 text-white text-base font-medium hover:bg-white hover:text-[#11b719] transition-all"
            >
              <FaSignInAlt className="text-lg" />
              Login
            </Link>
            <Link
              href="https://portal.hijr.in/register"
              target="_blank"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/40 text-white text-base font-medium hover:bg-white hover:text-[#11b719] transition-all"
            >
              <FaSignInAlt className="text-lg" />
              Sign Up
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
