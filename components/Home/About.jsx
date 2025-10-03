'use client';
import Link from "next/link";
import { FaUserShield, FaSearch, FaPiggyBank } from "react-icons/fa";

const steps = [
	{
		icon: <FaUserShield className="text-green-500 text-4xl" />,
		title: "CREATE AN ACCOUNT",
		desc: "Sign up today — your dream healthcare job could be one click away.",
		link: "https://portal.hijr.in/register",
	},
	{
		icon: <FaSearch className="text-green-500 text-4xl" />,
		title: "SEARCH JOBS",
		desc: "Discover roles that match your skills, location, and passion",
		link: "jobs",
	},
	{
		icon: <FaPiggyBank className="text-green-500 text-4xl" />,
		title: "SAVE & APPLY",
		desc: "Keep track of opportunities and apply faster than ever.",
		link: "jobs",
	},
];

export default function About() {
	 return (
	 	<section className="w-full py-16 bg-white border-t border-green-400 font-sans" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-4xl font-bold text-gray-900">
						How <span className="text-green-500">It Works</span>
					</h2>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-10">
					{steps.map((step, idx) => {
						const StepContent = (
							<div className="flex flex-col items-center text-center max-w-xs cursor-pointer">
								<div className="bg-green-50 rounded-full p-6 mb-4 flex items-center justify-center">
									{step.icon}
								</div>
								<h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
								<p className="text-gray-500 text-base leading-relaxed">{step.desc}</p>
							</div>
						);
						return step.link ? (
							<Link key={idx} href={step.link} target="_blank" rel="noopener noreferrer">
								{StepContent}
							</Link>
						) : (
							<div key={idx}>{StepContent}</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
