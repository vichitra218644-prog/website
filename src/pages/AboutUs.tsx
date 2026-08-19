import LegalLayout from '@/components/LegalLayout';

export default function AboutUs() {
  return (
    <LegalLayout icon="about" title="About Us" lastUpdated="August 12, 2026">
      <p>
        ApplicationWala is a free online tool designed to make banking paperwork easier for every
        Indian. We understand that writing formal bank application letters can be confusing and
        time-consuming, especially when you are unsure of the correct format or language. That is
        why we built a simple, fast, and reliable generator that creates professional bank
        application letters in both English and Hindi.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to simplify banking documentation for every citizen of India. Whether you
        need to request a new passbook, block a lost ATM card, cancel a chequebook, or close an
        account, ApplicationWala helps you generate a properly formatted letter in minutes —
        completely free of charge.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>10 Application Types:</strong> From passbook lost requests to account closure, we cover the most common banking applications.</li>
        <li><strong>Bilingual Support:</strong> Generate letters in English or formal Hindi with a single toggle.</li>
        <li><strong>Live Preview:</strong> See your letter update in real time as you type.</li>
        <li><strong>Text-Based PDF:</strong> Download lightweight, text-searchable PDFs — not scanned images.</li>
        <li><strong>Banking Guide:</strong> A comprehensive guide covering SBI, HDFC, PNB, and other major Indian banks.</li>
      </ul>

      <h2>Who We Are</h2>
      <p>
        ApplicationWala is built by a small team passionate about making everyday tasks simpler
        through technology. We are not affiliated with any bank or financial institution. Our goal
        is purely to help Indian citizens handle their banking paperwork with confidence and ease.
      </p>

      <h2>Why Trust Us</h2>
      <p>
        All data you enter stays in your browser — nothing is sent to or stored on our servers. We
        do not require registration or login. Our templates follow standard formats accepted across
        Indian banks, and our Banking Guide is written with the Indian banking context in mind.
      </p>

      <h2>Get in Touch</h2>
      <p>
        We would love to hear from you. If you have suggestions, feedback, or questions, please
        visit our Contact Us page. We are constantly working to improve ApplicationWala and add new
        application types based on user needs.
      </p>
    </LegalLayout>
  );
}
