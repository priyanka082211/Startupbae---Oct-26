
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-block text-[#3B2347] hover:underline"
        >
          Back to Home
        </a>

        <h1 className="mb-3 text-4xl font-bold text-[#3B2347]">
          Privacy Policy
        </h1>

        <p className="mb-8 text-sm text-gray-600">
          Effective Date: January 1, 2026
        </p>

        <div className="space-y-6 leading-7 text-gray-700">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              1. Introduction
            </h2>
            <p>
              StartupBae respects your privacy and is committed
              to handling personal information responsibly.
              This policy explains how we collect, use, share,
              and protect information when you visit our website
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              2. Information We Collect
            </h2>
            <p>
              We may collect your name, email address, phone
              number, business details, enquiry information,
              and website usage data, including information
              collected through cookies and analytics tools.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              3. How We Use Your Information
            </h2>
            <p>
              We use information to respond to enquiries,
              provide AI automation and CRM services, manage
              projects, process payments, improve our website,
              and send permitted business communications.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              4. Third-Party Services and AI
            </h2>
            <p>
              Depending on the service, information may be
              processed by third-party providers such as
              GoHighLevel, Google Analytics, Calendly, Twilio,
              OpenAI, n8n, Make, Zapier, and payment providers.
              Their own terms and privacy policies may apply.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              5. Cookies and Marketing
            </h2>
            <p>
              We may use cookies and similar technologies for
              website functionality, analytics, and advertising.
              Where required, we will seek consent. You may
              opt out of promotional communications using the
              available unsubscribe options or by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              6. Data Security and Retention
            </h2>
            <p>
              We take reasonable measures to protect personal
              information and retain it only as long as
              necessary for legitimate business purposes,
              contractual obligations, and applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              7. Your Privacy Rights
            </h2>
            <p>
              Depending on applicable law, you may have rights
              to access, correct, or request deletion of your
              information, withdraw consent, or object to
              certain processing activities.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#3B2347]">
              8. Contact Us
            </h2>
            <p>
              StartupBae
              <br />
              G-602, Godrej Avenues, Bengaluru, Karnataka, India
            </p>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:hello@startupbae.com"
                className="text-[#C83B7A] underline"
              >
                hello@startupbae.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
