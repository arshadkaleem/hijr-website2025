"use client";
import React from "react";

export default function EmployerTerms() {
  return (
    <div className="max-w-4xl mx-auto py-25 px-4 bg-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-[#1FAE48] text-center">Terms of Service for Employers</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">Please read these terms and conditions carefully before registering or using the Hijr Job Portal as an employer.</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">By registering as an Employer on Hijr, you agree to abide by these Terms & Conditions.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">2. Employer Registration & Account Security</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Only legally registered businesses, companies, or hiring agencies can create employer accounts.</li>
            <li>Employers must provide valid business credentials, including GSTIN, company registration number, and official email ID.</li>
            <li>Employers are responsible for maintaining account security and ensuring accurate job postings.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">3. Job Posting Guidelines</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>All job listings must be genuine and lawful.</li>
            <li>Employers must clearly mention salary, job role, eligibility criteria, and work location.</li>
            <li>Fake, misleading, or scam job listings are strictly prohibited.</li>
            <li>Job postings must not discriminate based on gender, race, religion, disability, or any other protected category.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">4. Candidate Interaction & Hiring Policies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Employers can only contact candidates through the Hijr platform unless explicit consent is obtained.</li>
            <li>Spamming candidates with repeated job offers or unsolicited messages is not allowed.</li>
            <li>Employers must not demand money, fees, or deposits from candidates for job placements.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">5. Data Usage & Privacy</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Employers must not misuse candidate information for marketing, sales, or unauthorized purposes.</li>
            <li>Candidate data must be used only for recruitment purposes.</li>
            <li>If a candidate reports misuse of their information, Hijr reserves the right to suspend the employer’s account.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">6. Third-Party Recruiters & Agencies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Recruitment agencies must clearly disclose their identity and not misrepresent job roles.</li>
            <li>Job postings must be directly from authorized companies, and agencies must have the necessary hiring rights.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">7. Fraud Prevention & Compliance</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hijr strictly prohibits:</li>
            <li className="ml-6">Multi-level marketing (MLM), Ponzi schemes, and referral-based jobs.</li>
            <li className="ml-6">Job postings that require candidates to pay for interviews, training, or placement guarantees.</li>
            <li className="ml-6">Any form of data scraping, bulk candidate data downloads, or unauthorized profile access.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">8. Account Suspension & Legal Action</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hijr reserves the right to suspend or terminate an employer’s account without notice if:</li>
            <li className="ml-6">Job postings are fraudulent, misleading, or discriminatory.</li>
            <li className="ml-6">Employers harass or exploit candidates.</li>
            <li className="ml-6">Employers violate platform policies or applicable labor laws.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">9. General Privacy Policy (Applicable to Both Candidates & Employers)</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hijr collects basic user information such as name, email, contact number, resume, and job preferences for recruitment purposes.</li>
            <li>Employers must provide business registration details, tax information, and hiring credentials.</li>
            <li>All data is securely stored with encryption measures.</li>
            <li>Hijr does not share, sell, or misuse user data for third-party marketing.</li>
            <li>Candidates’ profiles are shared only with registered employers.</li>
            <li>Employers are permitted to access only relevant candidate data.</li>
            <li>Hijr does not take responsibility for third-party data handling outside the platform.</li>
            <li>Candidates can delete their profiles at any time.</li>
            <li>Employers can close their accounts upon request.</li>
            <li>Users have the right to access, edit, or remove personal information stored on the platform.</li>
            <li>Hijr uses cookies for website analytics, improving user experience, and fraud detection.</li>
            <li>Users can choose to opt out of cookie tracking in browser settings.</li>
            <li>The Platform abides by Indian labor laws, GDPR (where applicable), and IT Act 2000.</li>
            <li>Any legal disputes will be handled under the jurisdiction of Indian courts.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#1FAE48] mb-2">10. Disclaimer & Limitation of Liability</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hijr is not liable for disputes between candidates and employers.</li>
            <li>The Platform does not guarantee job placement or hiring success.</li>
            <li>Hijr does not take responsibility for third-party fraud, unauthorized hiring practices, or misrepresentation by users.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
