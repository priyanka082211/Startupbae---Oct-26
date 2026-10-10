
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  const updatedDate = 'October 10, 2026';

  return (
    <main className="min-h-screen bg-[#FFF8F0] text-[#332D35]">
      <section className="bg-[#2F1F35] text-[#FFF8F0] px-4 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F7B7A3] mb-4">
            Your Privacy Matters
          </p>

          <h1 className="text-4xl sm:text-5xl font-serif-display font-semibold mb-5">
            Privacy Policy
          </h1>

          <p className="text-sm text-[#FFF8F0]/70">
            Last updated: {updatedDate}
          </p>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#FFF8F0]/85">
            This Privacy Policy explains how StartupBae collects, uses,
            stores, and protects personal information when you visit our
            website, contact us, or use our services.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 leading-7 text-[#332D35]/90">

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                1. About StartupBae
              </h2>
              <p>
                StartupBae provides AI automation and business process
                automation services. These may include workflow automation,
                CRM implementation, AI assistants, lead management,
                customer communication workflows, integrations, reporting,
                and related business systems.
              </p>
              <p className="mt-3">
                In this policy, "StartupBae", "we", "our", and "us" refer
                to the StartupBae business operating through
                startupbae.com. "You" refers to visitors, prospective
                customers, customers, and other individuals whose
                information we process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                2. Information We Collect
              </h2>
              <p>
                Depending on how you interact with us, we may collect the
                following categories of information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Contact information:</strong> your name, business
                  name, email address, phone number, and other details you
                  provide when contacting us.
                </li>
                <li>
                  <strong>Business information:</strong> information about
                  your business, requirements, workflows, software,
                  automation goals, and project preferences.
                </li>
                <li>
                  <strong>Communications:</strong> messages, enquiries,
                  feedback, and correspondence exchanged with us.
                </li>
                <li>
                  <strong>Technical information:</strong> information such
                  as browser type, device information, IP address, pages
                  visited, and approximate location derived from technical
                  data, where collected by our website or service providers.
                </li>
                <li>
                  <strong>Usage information:</strong> information about how
                  you interact with our website, subject to the analytics
                  and cookie settings in use.
                </li>
                <li>
                  <strong>Client-provided data:</strong> information you
                  authorize us to access or process when implementing,
                  maintaining, or supporting an automation system.
                </li>
              </ul>
              <p className="mt-3">
                Please do not send sensitive personal information unless it
                is necessary for an agreed service and appropriate
                safeguards have been established.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                3. How We Use Information
              </h2>
              <p>We may use personal information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to enquiries and requests.</li>
                <li>Arrange consultations, demonstrations, and meetings.</li>
                <li>Prepare proposals, estimates, and project plans.</li>
                <li>Deliver, configure, test, and maintain automation services.</li>
                <li>Provide customer support and communicate about projects.</li>
                <li>Manage business operations, billing, and records.</li>
                <li>Maintain website functionality, security, and performance.</li>
                <li>Understand website usage and improve our services.</li>
                <li>
                  Send relevant service updates or marketing communications
                  where permitted by applicable law.
                </li>
                <li>
                  Comply with legal obligations and protect our legitimate
                  rights.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                4. Legal Grounds for Processing
              </h2>
              <p>
                Where applicable law requires a legal basis for processing
                personal information, we rely on an appropriate basis for
                the relevant activity. Depending on the circumstances, this
                may include your consent, taking steps at your request
                before entering into a contract, performing a contract,
                complying with legal obligations, or pursuing legitimate
                business interests where permitted by law.
              </p>
              <p className="mt-3">
                Where we rely on consent, you may withdraw it as permitted
                by applicable law. Withdrawal does not affect the lawfulness
                of processing carried out before withdrawal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                5. Cookies and Analytics
              </h2>
              <p>
                Our website or its service providers may use cookies,
                pixels, local storage, and similar technologies to support
                website functionality, understand visitor activity, measure
                performance, and improve the user experience.
              </p>
              <p className="mt-3">
                Depending on the tools configured on the website, these
                technologies may include analytics or advertising
                measurement services. We do not intend this list to mean
                that every service is currently active.
              </p>
              <p className="mt-3">
                You can manage cookies through your browser settings.
                Where required by law, we will seek consent before using
                non-essential cookies or similar technologies. Disabling
                certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                6. Marketing Communications
              </h2>
              <p>
                We may use contact information to respond to business
                enquiries and, where legally permitted, share relevant
                information about our services.
              </p>
              <p className="mt-3">
                You can ask us to stop sending marketing communications by
                replying to the message with an unsubscribe request or by
                contacting hello@startupbae.com. We may still send
                essential service-related or legal communications where
                necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                7. AI Services and Automated Systems
              </h2>
              <p>
                Our services may involve AI models, AI assistants, chatbots,
                voice agents, and automated workflows. These systems may
                process information such as customer enquiries, messages,
                call transcripts, form submissions, business records, and
                other data required to perform the agreed task.
              </p>
              <p className="mt-3">
                The information processed depends on the configuration,
                integrations, and instructions approved for each project.
                We aim to use information only for the agreed purpose and
                to configure appropriate access controls and safeguards.
              </p>
              <p className="mt-3">
                AI-generated responses can be inaccurate or incomplete.
                Unless expressly agreed otherwise, AI systems should not
                be treated as a substitute for appropriate human review,
                professional judgment, or decisions requiring special care.
              </p>
              <p className="mt-3">
                Where third-party AI providers are used, information may
                be processed under their applicable terms and privacy
                policies. Their data handling practices depend on the
                specific service and account configuration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                8. Client Data and Automation Workflows
              </h2>
              <p>
                When implementing automation systems, we may receive
                access to client platforms, databases, CRM records,
                communication systems, documents, or other business data.
              </p>
              <p className="mt-3">
                Where we process personal information on behalf of a client,
                we generally do so according to the agreed scope of work
                and the client's documented instructions, subject to
                applicable law and our contractual obligations.
              </p>
              <p className="mt-3">
                Clients are responsible for ensuring they have the
                necessary rights, permissions, notices, and lawful basis
                to provide data for processing through their systems.
                Clients should also review automation rules, AI outputs,
                access permissions, and data retention settings before
                using a system in production.
              </p>
              <p className="mt-3">
                The specific responsibilities of StartupBae and the client
                may be further defined in a service agreement or data
                processing agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                9. Third-Party Services
              </h2>
              <p>
                Our website and services may integrate with third-party
                platforms to provide hosting, communications, scheduling,
                CRM, automation, analytics, AI, payments, or other
                functionality.
              </p>
              <p className="mt-3">
                Depending on the project and tools actually used, these
                providers may include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>GoHighLevel for CRM and customer communication workflows.</li>
                <li>n8n, Make, and Zapier for workflow automation.</li>
                <li>OpenAI, Google, or other AI and cloud service providers.</li>
                <li>Twilio and WhatsApp-related services for communications.</li>
                <li>Google Workspace and other business productivity tools.</li>
                <li>Website hosting, analytics, scheduling, and payment providers.</li>
              </ul>
              <p className="mt-3">
                This is an illustrative list of possible providers, not a
                statement that every provider is used for every visitor or
                project. Information shared with a provider depends on the
                service being used and its configuration.
              </p>
              <p className="mt-3">
                Third-party providers process information under their own
                terms and privacy practices. We encourage you to review
                their policies where relevant. We do not control the
                independent privacy practices of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                10. When We Share Information
              </h2>
              <p>
                We do not sell personal information as a business model.
                We may share information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  With service providers and subprocessors needed to
                  deliver a requested service.
                </li>
                <li>
                  With platforms you authorize us to connect to your
                  automation workflows.
                </li>
                <li>
                  With professional advisers where reasonably necessary.
                </li>
                <li>
                  When required by law, a valid legal process, or a
                  competent authority.
                </li>
                <li>
                  Where necessary to establish, exercise, or defend legal
                  claims, or protect rights, safety, and security.
                </li>
                <li>
                  In connection with a business restructuring or transfer,
                  subject to applicable legal requirements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                11. International Data Transfers
              </h2>
              <p>
                Some service providers may store or process information in
                countries other than your own. As a result, personal
                information may be transferred internationally when
                necessary to operate our website or deliver a service.
              </p>
              <p className="mt-3">
                Where required by applicable law, we will take appropriate
                steps to ensure that international transfers are permitted
                and that required safeguards are in place.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                12. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as
                reasonably necessary for the purposes described in this
                policy, including service delivery, customer support,
                legal compliance, dispute resolution, and legitimate
                business recordkeeping.
              </p>
              <p className="mt-3">
                Retention periods vary according to the type of information,
                the service involved, contractual requirements, and
                applicable law. Client data held in third-party systems
                may also be subject to the client's retention settings
                and the relevant provider's policies.
              </p>
              <p className="mt-3">
                When information is no longer needed, we will take
                reasonable steps to delete it or anonymise it, subject
                to legal obligations and legitimate retention needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                13. Data Security
              </h2>
              <p>
                We take reasonable technical and organisational measures
                designed to protect personal information against
                unauthorised access, loss, misuse, alteration, or
                disclosure.
              </p>
              <p className="mt-3">
                Depending on the service, safeguards may include access
                controls, account permissions, secure authentication,
                limited data access, and security features provided by
                integrated platforms.
              </p>
              <p className="mt-3">
                No method of transmission, storage, or electronic
                processing is completely secure. We cannot guarantee
                absolute security, but we aim to use reasonable safeguards
                appropriate to the nature of the information and service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                14. Your Privacy Rights
              </h2>
              <p>
                Depending on your location and applicable law, you may
                have rights to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Request access to personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request deletion of information where legally applicable.</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>Object to or request restriction of certain processing.</li>
                <li>Request a copy of certain information in a portable format.</li>
                <li>Opt out of marketing communications.</li>
                <li>
                  Lodge a complaint with the relevant data protection
                  authority where applicable.
                </li>
              </ul>
              <p className="mt-3">
                These rights are subject to applicable legal conditions
                and exceptions. To submit a request, contact
                hello@startupbae.com. We may need to verify your identity
                before responding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                15. Information About Indian Privacy Law
              </h2>
              <p>
                For individuals in India, we handle personal data in
                accordance with applicable Indian law, including the
                Digital Personal Data Protection Act, 2023, and relevant
                rules and provisions to the extent they are in force and
                applicable to the processing concerned.
              </p>
              <p className="mt-3">
                Where required by applicable law, we will provide notices,
                seek consent, facilitate applicable rights, and follow
                relevant requirements relating to personal data
                processing and security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                16. EEA, UK, and Other Applicable Privacy Laws
              </h2>
              <p>
                If you are located in the European Economic Area or the
                United Kingdom, applicable data protection laws may give
                you additional rights regarding your personal information.
                These may include rights of access, rectification,
                erasure, restriction, objection, and data portability,
                subject to the relevant legal requirements.
              </p>
              <p className="mt-3">
                Where applicable, you may also have the right to lodge a
                complaint with your local data protection authority.
                Contact us if you wish to exercise a right or ask how
                these rules apply to your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                17. Children's Privacy
              </h2>
              <p>
                Our website and services are intended for businesses and
                adults. We do not knowingly collect personal information
                directly from children in circumstances where doing so
                would violate applicable law. If you believe a child has
                provided personal information to us inappropriately,
                please contact us so we can assess and address the request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                18. Third-Party Websites
              </h2>
              <p>
                Our website may contain links to external websites,
                applications, or services. We are not responsible for
                their content, security, or privacy practices. Your use
                of those services is governed by their own terms and
                privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif-display font-semibold mb-3">
                19. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in our services, technology, legal
                obligations, or privacy practices. The updated version
                will be published on this page with a revised "Last
                updated" date. Where required by law, we will provide
                additional notice or seek consent for material changes.
              </p>
            </section>

            <section className="rounded-2xl bg-white border border-[#E9DDE8] p-6 sm:p-8">
              <h2 className="text-2xl font-serif-display font-semibold mb-4">
                20. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, wish to
                make a privacy request, or need information about how
                we handle personal data, contact us:
              </p>

              <div className="mt-5 space-y-3">
                <p>
                  <strong>Business:</strong> StartupBae
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:hello@startupbae.com"
                    className="text-[#C83B7A] hover:underline"
                  >
                    hello@startupbae.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://startupbae.com"
                    className="text-[#C83B7A] hover:underline"
                  >
                    startupbae.com
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/919740326160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C83B7A] hover:underline"
                  >
                    +91 9740326160
                  </a>
                </p>
              </div>
            </section>

          </div>

          <div className="mt-12 pt-6 border-t border-[#E9DDE8] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <p className="text-sm text-[#332D35]/60">
              © {new Date().getFullYear()} StartupBae. All rights reserved.
            </p>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-sm font-semibold text-[#C83B7A] hover:underline"
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
