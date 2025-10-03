"use client";
import { FaUserMd, FaUserNurse, FaPills, FaMicroscope, FaXRay, FaWheelchair, FaAmbulance, FaUserTie } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const baseCategories = [
	{ icon: <FaUserMd className="text-4xl text-[#11b719] mb-2" />, title: "Doctor / Physician" },
	{ icon: <FaUserNurse className="text-4xl text-[#11b719] mb-2" />, title: "Nurse" },
	{ icon: <FaPills className="text-4xl text-[#11b719] mb-2" />, title: "Pharmacist" },
	{ icon: <FaMicroscope className="text-4xl text-[#11b719] mb-2" />, title: "Medical Laboratory Technician" },
	{ icon: <FaXRay className="text-4xl text-[#11b719] mb-2" />, title: "Radiologic Technologist" },
	{ icon: <FaWheelchair className="text-4xl text-[#11b719] mb-2" />, title: "Physical Therapist" },
	{ icon: <FaAmbulance className="text-4xl text-[#11b719] mb-2" />, title: "Paramedic / EMT" },
	{ icon: <FaUserTie className="text-4xl text-[#11b719] mb-2" />, title: "Medical Administrative Staff" },
];

import React from "react";

export default function Services() {
	const [categories, setCategories] = React.useState(baseCategories.map(cat => ({ ...cat, positions: 0 })));
	React.useEffect(() => {
		const fetchJobs = async () => {
			try {
				const res = await fetch("/api/job/publicjobs");
				const data = await res.json();
				if (data?.success) {
					const jobs = data.data.jobs;
					const updated = baseCategories.map(cat => {
						const count = jobs.filter(job => job.jobRole?.toLowerCase().includes(cat.title.toLowerCase())).length;
						return { ...cat, positions: count };
					});
					setCategories(updated);
				}
			} catch (err) {
				setCategories(baseCategories.map(cat => ({ ...cat, positions: 0 })));
			}
		};
		fetchJobs();
	}, []);

	return (
		<section className="bg-[#f3f7fa] py-12 w-full font-sans" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
			<div className="max-w-6xl mx-auto px-4 md:px-0">
				<div className="text-center mb-8 md:mb-10">
					<h2 className="text-2xl md:text-4xl font-bold text-[#1a232c]">
						Browse Jobs By <span className="text-[#11b719]">Category</span>
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
					{categories.map((cat, idx) => (
						<Link
							key={cat.title}
							href={{
								pathname: "/category-details",
								query: { title: cat.title, positions: cat.positions }
							}}
							className="w-full"
						>
							<div
								className="flex flex-col items-center bg-white rounded-lg shadow-sm p-6 md:p-10 transition hover:shadow-lg hover:-translate-y-1 duration-200 w-full cursor-pointer"
								style={{ minHeight: '240px', height: '100%' }}
							>
								{cat.icon}
								<div className="font-semibold text-base md:text-lg text-[#1a232c] mb-1 text-center">{cat.title}</div>
								<div className={`text-sm font-medium ${cat.positions > 0 ? 'text-[#11b719]' : 'text-gray-400'} text-center`}>
									{cat.positions} Open Position{cat.positions !== 1 ? 's' : ''}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
