import LegalLayout from '@/components/LegalLayout';

export default function ContactUs() {
  return (
    <LegalLayout icon="contact" title="Contact Us" lastUpdated="August 12, 2026">
      <p>
        We value your feedback, suggestions, and questions. Whether you have a request for a new
        application type, found a bug, or simply want to share your experience with ApplicationWala,
        we would love to hear from you.
      </p>

      <h2>Get in Touch</h2>
      <p>
        You can reach us through any of the following channels:
      </p>
      <ul>
        <li><strong>Email:</strong> support@applicationwala.com</li>
        <li><strong>Feedback Form:</strong> Please use the email above with the subject line &quot;Feedback&quot; or &quot;Suggestion&quot;.</li>
        <li><strong>Bug Reports:</strong> Kindly include a description of the issue and the browser you are using.</li>
      </ul>

      <h2>Response Time</h2>
      <p>
        We aim to respond to all inquiries within 2-3 business days. Please be patient during
        weekends and public holidays.
      </p>

      <h2>What to Include in Your Message</h2>
      <ul>
        <li>Your name and a valid email address for us to reply to.</li>
        <li>A clear subject line describing your query.</li>
        <li>Details of your feedback, suggestion, or the issue you encountered.</li>
        <li>If reporting a bug, the steps to reproduce it and screenshots if possible.</li>
      </ul>

      <h2>Requesting New Application Types</h2>
      <p>
        If you need a bank application type that is not currently available on ApplicationWala,
        please let us know. We regularly add new templates based on user requests and will do our
        best to include yours in a future update.
      </p>

      <h2>Privacy</h2>
      <p>
        Any information you share with us via email will be handled in accordance with our Privacy
        Policy. We will never share your contact details with third parties without your consent.
      </p>

      <p>
        Thank you for using ApplicationWala. We appreciate your support and feedback in helping us
        improve the tool for all users.
      </p>
    </LegalLayout>
  );
}
