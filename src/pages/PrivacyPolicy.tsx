import LegalLayout from '@/components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout icon="privacy" title="Privacy Policy" lastUpdated="August 12, 2026">
      <p>
        ApplicationWala ("we", "us", or "our") operates this website and the ApplicationWala bank
        application generator tool. This Privacy Policy explains how we collect, use, and protect
        your information when you use our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        ApplicationWala is a client-side tool. All information you enter into the generator form —
        such as bank name, branch name, account holder name, account number, mobile number, and
        dates — is processed entirely within your browser. We do <strong>not</strong> store, transmit,
        or save any of the data you enter into the application generator on any server.
      </p>
      <p>
        We may collect non-personal, aggregated analytics data such as page views, browser type, and
        general usage patterns through third-party services like Google Analytics to improve our
        website.
      </p>

      <h2>Google AdSense</h2>
      <p>
        We use Google AdSense to display advertisements on this website. Google, as a third-party
        vendor, uses cookies to serve ads based on your prior visits to this and other websites.
        Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based
        on your visit to our site and/or other sites on the Internet.
      </p>
      <ul>
        <li>Google may use the DART cookie to serve ads to users based on their visit to this site and other sites on the Internet.</li>
        <li>You may opt out of personalized advertising by visiting Google&apos;s Ads Settings page.</li>
        <li>Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies to enhance user experience. Cookies are small files stored on
        your device. You can choose to disable cookies through your browser settings, but some
        features of the website may not function properly.
      </p>

      <h2>Data Security</h2>
      <p>
        Since all application data is processed locally in your browser and never sent to our
        servers, your sensitive banking information remains on your device. We recommend clearing
        your browser data after using shared computers.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our website is not directed to children under the age of 13. We do not knowingly collect
        personal information from children under 13.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page
        with an updated revision date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us through our Contact
        Us page.
      </p>
    </LegalLayout>
  );
}
