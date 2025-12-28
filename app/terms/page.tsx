export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Welcome to Job Email Generator. These Terms of Service ("Terms")
            govern your use of our website and services. By accessing or using
            our Service, you agree to be bound by these Terms. If you disagree
            with any part of these terms, you may not access the Service.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By creating an account, accessing, or using Job Email Generator
              ("the Service"), you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service and our Privacy
              Policy. If you do not agree to these terms, you must not use the
              Service. We reserve the right to modify these Terms at any time,
              and your continued use of the Service constitutes acceptance of
              any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Job Email Generator is a web application designed to help users
              create professional, personalized job application emails. The
              Service uses artificial intelligence and natural language
              processing to generate email content based on job descriptions and
              user-provided information such as resumes, skills, and experience.
              Users can send these generated emails directly through their
              connected email accounts (Gmail or Outlook). The Service is
              provided for personal, non-commercial use in job seeking
              activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. User Accounts and Registration
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              To use Job Email Generator, you must create an account by
              authenticating with Google. When you create an account:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                You must provide accurate, current, and complete information
                during the registration process
              </li>
              <li>
                You must sign in using a valid Google account that you own and
                control
              </li>
              <li>
                You are responsible for maintaining the confidentiality and
                security of your account credentials
              </li>
              <li>
                You are fully responsible for all activities that occur under
                your account
              </li>
              <li>
                You must immediately notify us of any unauthorized use of your
                account or any other security breach
              </li>
              <li>
                You must be at least 13 years of age to use this Service (or the
                minimum age required in your jurisdiction)
              </li>
              <li>
                You represent that you have the legal capacity to enter into
                these Terms
              </li>
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              We reserve the right to refuse service, terminate accounts, or
              remove or edit content at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Acceptable Use Policy
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. Specifically, you agree NOT to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                Use the Service to send spam, unsolicited bulk emails, or
                commercial advertisements
              </li>
              <li>
                Impersonate any person or entity, or falsely state or
                misrepresent your affiliation with any person or entity
              </li>
              <li>
                Violate any applicable local, state, national, or international
                law or regulation
              </li>
              <li>
                Interfere with or disrupt the Service, servers, or networks
                connected to the Service
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                Service, other user accounts, or computer systems or networks
              </li>
              <li>
                Use the Service to send malicious, defamatory, offensive,
                threatening, harassing, or inappropriate content
              </li>
              <li>
                Abuse, harass, threaten, or intimidate other users or email
                recipients
              </li>
              <li>
                Collect or store personal data about other users without their
                express permission
              </li>
              <li>
                Use any automated system, including "robots," "spiders," or
                "scrapers" to access the Service
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the
                Service
              </li>
              <li>Transmit any viruses, malware, or other malicious code</li>
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Violation of this Acceptable Use Policy may result in immediate
              termination of your account and legal action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Email Permissions and Responsibilities
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              By connecting your email account (Gmail or Outlook) to our Service
              through the OAuth authentication flow, you explicitly grant Job
              Email Generator permission to send emails on your behalf. Please
              understand:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                We will only send emails when you explicitly click the "Send"
                button in our application
              </li>
              <li>
                You can review and edit all email content before it is sent
              </li>
              <li>
                You can revoke this permission at any time through your Google
                or Microsoft account settings
              </li>
              <li>
                You are solely and entirely responsible for the content,
                recipients, and consequences of all emails sent through the
                Service
              </li>
              <li>
                We do not monitor, control, or take responsibility for the
                content of emails you send
              </li>
              <li>
                You must ensure that all emails comply with applicable laws,
                including anti-spam legislation
              </li>
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              We are not liable for any consequences arising from emails sent
              using our Service, including but not limited to employment
              disputes, privacy violations, or legal claims.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              The Service and its original content, features, functionality,
              design, and code (excluding your user-generated content) are and
              will remain the exclusive property of Job Email Generator and its
              licensors. The Service is protected by copyright, trademark, and
              other laws of both domestic and foreign jurisdictions.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Our trademarks and trade dress may not be used in connection with
              any product or service without our prior written consent. You are
              granted a limited, non-exclusive, non-transferable license to
              access and use the Service for personal, non-commercial purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Your Content:</strong> You retain all rights to the email
              content, resumes, job descriptions, and other materials you
              create, upload, or generate using the Service. By using the
              Service, you grant us a limited license to process and display
              your content solely for the purpose of providing the Service to
              you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
              WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                Implied warranties of merchantability, fitness for a particular
                purpose, or non-infringement
              </li>
              <li>
                Warranties that the Service will be uninterrupted, timely,
                secure, or error-free
              </li>
              <li>
                Warranties regarding the accuracy, reliability, or quality of
                any content or information obtained through the Service
              </li>
              <li>
                Warranties that defects will be corrected or that the Service is
                free of viruses or other harmful components
              </li>
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              We do not warrant or guarantee any specific results from using the
              Service, including job offers, interview invitations, or positive
              responses to your applications. Your use of the Service is at your
              sole risk. We are not responsible for the outcome of job
              applications or emails sent using our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL JOB EMAIL GENERATOR, ITS DIRECTORS, EMPLOYEES, PARTNERS,
              AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
              WITHOUT LIMITATION:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>Loss of profits, revenue, data, or use</li>
              <li>Loss of employment opportunities or job offers</li>
              <li>Business interruption or loss of goodwill</li>
              <li>Cost of procurement of substitute services</li>
              <li>Any other intangible losses</li>
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This limitation applies whether the alleged liability is based on
              contract, tort, negligence, strict liability, or any other basis,
              even if we have been advised of the possibility of such damage. In
              jurisdictions that do not allow the exclusion or limitation of
              liability for consequential or incidental damages, our liability
              shall be limited to the maximum extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Job Email
              Generator and its licensors, employees, contractors, agents,
              officers, and directors from and against any claims, damages,
              obligations, losses, liabilities, costs, or debt, and expenses
              (including attorney's fees) arising from: (1) your use of and
              access to the Service; (2) your violation of any term of these
              Terms; (3) your violation of any third-party right, including
              intellectual property or privacy rights; (4) any content you
              submit or send through the Service; or (5) any claim that your
              content caused damage to a third party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Service Modifications and Termination
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                Modify, suspend, or discontinue the Service (or any part
                thereof) at any time, with or without notice
              </li>
              <li>Change, modify, or update these Terms at any time</li>
              <li>
                Terminate or suspend your account and access to the Service
                immediately, without prior notice or liability, for any reason,
                including breach of these Terms
              </li>
              <li>Refuse service to anyone for any reason at any time</li>
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service or contact us to request account
              deletion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Your use of the Service is also
              governed by our Privacy Policy, which explains how we collect,
              use, protect, and share your personal information. Please review
              our{' '}
              <a
                href="/privacy"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Privacy Policy
              </a>{' '}
              carefully to understand our practices regarding your information.
              By using the Service, you consent to the collection and use of
              information as described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update, change, or replace any part of
              these Terms of Service at any time at our sole discretion. It is
              your responsibility to check these Terms periodically for changes.
              We will notify users of any material changes by posting the new
              Terms of Service on this page and updating the "Last updated" date
              at the top. Changes will be effective immediately upon posting.
              Your continued use of or access to the Service following the
              posting of any changes to these Terms constitutes acceptance of
              those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the applicable jurisdiction, without regard to its
              conflict of law provisions. Our failure to enforce any right or
              provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or
              unenforceable by a court, the remaining provisions of these Terms
              will remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Entire Agreement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service, together with our Privacy Policy,
              constitute the entire agreement between you and Job Email
              Generator regarding the use of the Service, superseding any prior
              agreements between you and Job Email Generator relating to your
              use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions, concerns, or feedback about these Terms
              of Service, please contact us through our support channels or by
              email. We will make reasonable efforts to respond to your
              inquiries in a timely manner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              16. Severability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unlawful, void, or
              unenforceable by a court of competent jurisdiction, that provision
              will be deemed severable from these Terms and will not affect the
              validity and enforceability of any remaining provisions. The
              unenforceable provision will be limited or eliminated to the
              minimum extent necessary so that these Terms will otherwise remain
              in full force and effect and enforceable.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
