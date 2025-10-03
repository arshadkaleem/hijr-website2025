'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import gsap from "gsap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {

	const footerRef = useRef(null);

	useEffect(() => {
		if (footerRef.current) {
			gsap.fromTo(
				footerRef.current,
				{ opacity: 0, y: 40 },
				{ opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
			);
		}
	}, []);

	return (
		<footer ref={footerRef} className="w-full min-h-40 flex flex-col bg-[#1a232c] text-[#e6f0ea] pt-5 pb-6 px-8 md:px-8">

			<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 mt-10" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
				{/* Left: Logo and Info */}
				<div className="flex-1 min-w-[250px] flex flex-col gap-4">
					<div className="  flex items-center gap-3 mb-2">
						<Image
							src="/images/logo02.png"
							alt="Workio Logo"
							width={150}
							height={48}
							style={{ width: 'auto', height: 'auto' }}
						/>
					</div>
					<p className="text-[#b6c5c7] text-base leading-relaxed mb-2">
						HIJR is a dedicated recruitment platform connecting healthcare professionals with institutions across India and beyond—other countries, hospitals, and private practices.
					</p>
				</div>
				<div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
					<div>
						<h4 className="text-[#11b719] font-bold mb-3 text-xl md:text-xl">Our Policies</h4>
						<ul className="space-y-1 text-[#b6c5c7]">
							<li>
								<a href="/terms-and-conditions/candidate" className="text-white hover:text-[#11b719] transition-colors">
									Candidate Policy
								</a>
							</li>
							<li>
								<a href="/terms-and-conditions/employer" className="text-white hover:text-[#11b719] transition-colors">
									Employer Policy
								</a>
							</li>
							<li>
								<a href="/privacy-policy" className="text-white hover:text-[#11b719] transition-colors">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-[#11b719] font-bold mb-3 text-xl md:text-xl">Useful Link</h4>
						<ul className="space-y-1 text-[#b6c5c7]">
							<li>
								<a href="/about" className="text-white hover:text-[#11b719] transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a href="/jobs" className="text-white hover:text-[#11b719] transition-colors">
									Jobs
								</a>
							</li>
							<li>
								<a href="/organizations
" className="text-white hover:text-[#11b719] transition-colors">
									Organizations

								</a>
							</li>
							<li>
								<a href="/services" className="text-white hover:text-[#11b719] transition-colors">
									Services
								</a>
							</li>
						</ul>

					</div>
					<div>
						<h4 className="text-[#11b719] font-bold mb-3  text-xl md:text-xl">Contact Us</h4>
						<ul className="space-y-3 text-[#b6c5c7]">
							{/* Email */}
							<li>
								<a
									href="mailto:contact@hijr.in"
									className="text-white hover:text-[#11b719] transition-colors flex items-center gap-2"
								>
									<span className="font-medium">contact@hijr.in</span>
								</a>
							</li>

							{/* Social Icons */}
							<li className="flex items-center gap-5 " >
								<a
									href="https://facebook.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-[#11b719] transition-colors text-2xl"
								>
									<FaFacebookF size={20} />
								</a>
								<a
									href="https://twitter.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-[#11b719] transition-colors text-2xl"
								>
									<FaTwitter size={20} />
								</a>
								<a
									href="https://instagram.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-[#11b719] transition-colors text-2xl"
								>
									<FaInstagram size={20} />
								</a>
							</li>
						</ul>

					</div>
					<div>
						<h4 className="text-[#11b719] font-bold mb-3  text-xl md:text-xl">Download Apps</h4>
					<div className="flex flex-wrap gap-3">
  {/* Google Play */}
  <a
    href="https://play.google.com/store/apps/details?id=com.hijrjobs"
    className="flex flex-1 items-center gap-3 hover:bg-[#11b719]/10 rounded-lg px-4 py-3 transition-colors bg-white/5 sm:w-auto"
  >
    <FaGooglePlay size={40} color="#11b719" />
    <div>
      <div className="text-white font-semibold">Google Play</div>
      <div className="text-white text-xs">Get It Now</div>
    </div>
  </a>

  {/* App Store */}
  <a
    href="https://play.google.com/store/apps/details?id=com.hijrjobs"
    className="flex flex-1 items-center gap-3 hover:bg-[#11b719]/10 rounded-lg px-4 py-3 transition-colors bg-white/5 sm:w-auto"
  >
    <FaApple size={40} color="#11b719" />
    <div>
      <div className="text-white font-semibold">App Store</div>
      <div className="text-white text-xs">Now It Available</div>
    </div>
  </a>
</div>

					</div>
				</div>
			</div>

			<div className="border-t border-[#3b4851] mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[#b6c5c7] text-xs px-10">
				<div>Copyright HIJR 2025. All Rights Reserved</div>
				<div> Developed by{' '}
					<a
						href="https://mokshasolutions.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline hover:text-white transition-colors"
					>
						Moksha Solutions
					</a>
				</div>
			</div>

		</footer>
	);
};

export default Footer;
