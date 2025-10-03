"use client";
import React from "react";

export default function Candidate() {
  return (
    <div className="max-w-4xl mx-auto py-25 px-4 bg-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-[#1FAE48] text-center">Terms & Conditions for Candidates</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">Please read these terms and conditions carefully before registering or using the Hijr Job Portal as a candidate.</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">By registering on Hijr (hereinafter referred to as “the Platform”), you agree to the following Terms and Conditions. If you do not agree, you should not use this Platform.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">2. Candidate Registration & Account Security</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You must be at least 18 years old to create an account.</li>
            <li>You agree to provide accurate and up-to-date information during registration.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>Multiple accounts for the same individual are prohibited.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">3. Usage Policy</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The Platform only facilitates job opportunities; it does not guarantee employment.</li>
            <li>You agree not to use the Platform for fraudulent, misleading, or unlawful activities.</li>
            <li>You must not upload false qualifications, experience, or any misleading data.</li>
            <li>Any attempt to spam recruiters, misuse the messaging system, or harass employers may lead to account suspension.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">4. Privacy & Data Protection</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Your personal data will be stored securely and shared only with authorized employers.</li>
            <li>The Platform does not sell user data to third parties for marketing purposes.</li>
            <li>Employers may contact you for job opportunities only through Hijr's messaging system unless you provide explicit consent.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">5. Profile Visibility & Job Applications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>By default, your profile will be visible to registered employers.</li>
            <li>You can choose to make your profile private or restrict visibility to selected employers.</li>
            <li>Once you apply for a job, your details are shared with the respective employer, and Hijr is not responsible for their decision-making.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">6. Job Scams & Third-Party Interactions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hijr does not guarantee the authenticity of every employer; candidates must conduct due diligence before accepting offers.</li>
            <li>Do not pay any fees to recruiters or agencies for job placements through Hijr.</li>
            <li>If you suspect fraudulent activities, report them immediately to Hijr support.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">7. Account Suspension & Termination</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hijr reserves the right to suspend or terminate your account without notice if:</li>
            <li className="ml-6">You provide false or misleading information.</li>
            <li className="ml-6">You engage in spam, abuse, harassment, or fraudulent activities.</li>
            <li className="ml-6">You violate any terms of use or applicable laws.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">8. Limitation of Liability</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hijr is not responsible for disputes between candidates and employers.</li>
            <li>The Platform does not assume liability for unsuccessful job applications, employer misconduct, or external hiring decisions.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
