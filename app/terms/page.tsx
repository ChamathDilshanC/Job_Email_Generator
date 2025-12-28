export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Terms of Service
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using Job Email Generator ("the Service"), you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to these terms, please do not use
              the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Description of Service
            </h2>
            <p>
              Job Email Generator is a web application that helps users create
              professional job application emails and send them through their
              connected email accounts (Gmail or Outlook). The Service uses AI
              to generate personalized email content based on job descriptions
              and user-provided information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. User Accounts
            </h2>
            <p className="mb-3">When using our Service:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You must sign in using a valid Google account</li>
              <li>
                You are responsible for maintaining the security of your account
              </li>
              <li>
                You are responsible for all activities that occur under your
                account
              </li>
              <li>
                You must notify us immediately of any unauthorized use of your
                account
              </li>
              <li>You must be at least 13 years old to use this Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Acceptable Use
            </h2>
            <p className="mb-3">
              You agree to use the Service only for lawful purposes. You must
              not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Service to send spam or unsolicited emails</li>
              <li>Impersonate any person or entity</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                Service
              </li>
              <li>
                Use the Service to send malicious, offensive, or inappropriate
                content
              </li>
              <li>Abuse or harass other users or recipients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Email Permissions
            </h2>
            <p>
              By connecting your email account (Gmail or Outlook), you grant the
              Service permission to send emails on your behalf. You can revoke
              this permission at any time through your Google or Microsoft
              account settings. You are solely responsible for the content and
              recipients of emails sent through the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Intellectual Property
            </h2>
            <p>
              The Service, including its original content, features, and
              functionality, is owned by Job Email Generator and is protected by
              international copyright, trademark, and other intellectual
              property laws. Email content generated through the Service is your
              property, and you retain all rights to it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided "as is" and "as available" without any
              warranties of any kind, either express or implied. We do not
              guarantee that the Service will be uninterrupted, timely, secure,
              or error-free. We are not responsible for the outcome of job
              applications or emails sent using our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Limitation of Liability
            </h2>
            <p>
              In no event shall Job Email Generator, its directors, employees,
              or agents be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to
              your use of the Service. This includes, but is not limited to,
              loss of employment opportunities, data loss, or business
              interruption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Service Modifications and Termination
            </h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the
              Service at any time without prior notice. We may also terminate or
              suspend your account for violations of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Privacy Policy
            </h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy.
              Please review our{' '}
              <a
                href="/privacy"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>{' '}
              to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms of Service at any time.
              We will notify users of any material changes by posting the new
              Terms of Service on this page and updating the "Last updated"
              date. Your continued use of the Service after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              13. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us through our support channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              14. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the
              minimum extent necessary so that these Terms will otherwise remain
              in full force and effect.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
