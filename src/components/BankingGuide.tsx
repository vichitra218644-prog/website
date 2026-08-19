import { useState } from 'react';
import { ChevronDown, HelpCircle, BookOpen } from 'lucide-react';

const FAQS = [
  {
    q: 'How to write an application for ATM block?',
    a: 'If your ATM card is lost, you should immediately submit a written application to your bank branch. Include your name, account number, branch name, and the date the card was lost. Write "Block Lost ATM Card" as the subject and clearly state in the body that the card has been lost and you want it blocked to prevent misuse. With the ApplicationWala tool, you can generate this application in English or Hindi in under two minutes.',
  },
  {
    q: 'Can I write my bank application in Hindi?',
    a: 'Yes, absolutely. Indian banks accept applications written in Hindi. As per RBI guidelines, banks are expected to offer services in regional languages. ApplicationWala has a Hindi toggle that lets you generate a formal and grammatically correct Hindi application in the standard "Sewa mein, Shakha Prabandhak" format.',
  },
  {
    q: 'Which documents do I need to submit with the application?',
    a: 'You typically need to submit a self-attested copy of your identity proof (Aadhaar, PAN, or Voter ID) along with the application. For name correction, an Aadhaar card is mandatory. For account closure, you need to surrender your passbook, chequebook, and ATM card to the branch.',
  },
  {
    q: 'How long does it take for the bank to process my application?',
    a: 'ATM blocking is usually done immediately. Passbook re-issue takes 1 to 3 days, bank statements are provided the same or next day, and chequebooks arrive within 5 to 7 working days. Account transfer and closure can take 7 to 10 working days depending on the bank.',
  },
  {
    q: 'Is ApplicationWala free to use?',
    a: 'Yes, ApplicationWala is completely free. You can generate and download as many bank applications as you need. No registration or login is required. Simply fill in your details and download the PDF.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
      >
        <span className="flex items-center gap-3 text-sm font-semibold text-slate-800">
          <HelpCircle className="h-5 w-5 shrink-0 text-bank-600" />
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
          {a}
        </div>
      )}
    </div>
  );
}

export default function BankingGuide() {
  return (
    <section className="mt-16">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bank-100 text-bank-700">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-bank-900">Banking Guide</h2>
          <p className="text-sm text-slate-500">Complete guide to writing bank applications in India</p>
        </div>
      </div>

      <article className="prose-banking max-w-none">
        <h2>How to Write Bank Applications in India: A Complete Guide for SBI, HDFC, PNB &amp; More</h2>
        <p>
          Writing a bank application can seem daunting, but with the right format and details, it
          becomes quite straightforward. Whether you are a customer of SBI, HDFC, PNB, ICICI, or any
          other Indian bank, the basic structure of a bank application letter remains the same. In
          this guide, we will explain in detail how to write different types of bank applications,
          what documents you need, and what common mistakes to avoid.
        </p>

        <h3>Why a Properly Written Bank Application Matters</h3>
        <p>
          A well-written application not only gets your work done faster but also prevents any
          confusion in the future. Bank officials handle hundreds of applications every day. If your
          application is clear, concise, and in the correct format, it will receive attention first.
          Vague or incomplete applications may be rejected or face unnecessary delays.
        </p>
        <p>
          With ApplicationWala, you can generate applications in a standard format that is accepted
          across all major Indian banks. The tool provides a real-time preview so you can see exactly
          how your final letter will look. The Hindi-English toggle lets you create the letter in
          your preferred language with a single click.
        </p>

        <h3>Standard Format of a Bank Application Letter</h3>
        <p>
          Every bank application letter follows a basic structure. Adhering to this structure makes
          your application look professional and helps bank officials process it quickly.
        </p>
        <ul>
          <li><strong>Sender&apos;s Details:</strong> Your name and account number at the top.</li>
          <li><strong>Date:</strong> The date on which the application is written.</li>
          <li><strong>Recipient:</strong> "To, The Branch Manager, [Bank Name], [Branch Name]".</li>
          <li><strong>Subject:</strong> A single line stating the purpose clearly.</li>
          <li><strong>Salutation:</strong> "Respected Sir/Madam" or "Mahoday".</li>
          <li><strong>Body:</strong> Your request described in detail with all relevant information.</li>
          <li><strong>Closing:</strong> "Thanking you" followed by your signature.</li>
        </ul>

        <h3>SBI Application Format: Special Considerations</h3>
        <p>
          State Bank of India (SBI) is the largest bank in India. SBI applications follow the
          standard format, but there are a few additional points to keep in mind. SBI branches
          typically register your application in a dedicated register. Always keep a photocopy of
          your application and obtain a receiving acknowledgement from the branch.
        </p>
        <p>
          For ATM block requests, you can also call the SBI customer care number 1800 11 2211, but a
          written application at the branch is necessary for a permanent record. For a lost
          passbook, SBI may charge approximately Rs. 50 plus GST for issuing a new passbook.
        </p>

        <h3>HDFC Bank Application: Key Points</h3>
        <p>
          HDFC Bank is a leading private sector bank in India. HDFC allows you to submit certain
          applications online through net banking or mobile banking. However, services like account
          closure and name correction still require a branch visit with a written application.
          Chequebook requests can be made online, but for cancellation, a written application is
          recommended.
        </p>
        <p>
          For a mobile number update at HDFC, a self-attested ID proof must be submitted along with
          the application. The account closure form can be downloaded from the HDFC website, or you
          can generate a standard format application using ApplicationWala.
        </p>

        <h3>PNB &amp; Other Public Sector Banks</h3>
        <p>
          Punjab National Bank (PNB) and other public sector banks such as Bank of Baroda, Canara
          Bank, and Union Bank of India follow a similar application format. In these banks, a branch
          visit is required for most services. Applications written in Hindi are also accepted,
          especially in tier-2 and tier-3 cities.
        </p>
        <p>
          At PNB, a passbook re-issue may be free the first time, but repeated requests could attract
          a charge. For ATM block, call the PNB customer care number 1800 180 2223 first, and then
          submit a written application at your branch.
        </p>

        <h3>Common Bank Applications &amp; How to Write Them</h3>

        <h3>1. Passbook Lost Application</h3>
        <p>
          When your passbook is lost, submit an application to your branch immediately. In the
          application, mention when and where the passbook was lost, include your account details,
          and request the issuance of a new passbook. Some banks may require a copy of an FIR, so it
          is advisable to file one at your local police station.
        </p>

        <h3>2. Block Lost ATM Card</h3>
        <p>
          If your ATM card is lost, first call customer care to block the card immediately, then
          submit a written application at your branch. In the application, mention the card number
          (if known), account number, and the date of loss. You can also request a new card in the
          same application or submit a separate one.
        </p>

        <h3>3. Chequebook Cancellation</h3>
        <p>
          If you have unused cheques and wish to cancel the chequebook, mention the cheque number
          range in your application. Confirm that no cheques are pending or outstanding for
          clearance. This is important for security purposes and to avoid any future disputes.
        </p>

        <h3>4. Bank Statement Request</h3>
        <p>
          For a bank statement request, clearly mention the date range in your application. Some
          banks charge a fee if the statement is for a period older than six months. E-statements
          are usually free, but physical copies may attract a charge. ApplicationWala includes date
          range inputs that are automatically added to the letter.
        </p>

        <h3>5. Mobile Number Change</h3>
        <p>
          For a mobile number update, a self-attested ID proof is required along with the
          application. Mention the new number and request activation of SMS banking on the new
          number. Since OTPs are sent to your registered mobile number, updating it promptly is
          essential.
        </p>

        <h3>6. Account Transfer Request</h3>
        <p>
          For an account transfer, mention the name and address of the new branch in your
          application. Fresh KYC documents may be required. The transfer process typically takes 7
          to 10 working days. In most cases, your account number remains the same after the transfer.
        </p>

        <h3>7. PMJJBY / PMSBY / APY Cancellation</h3>
        <p>
          These are government-backed insurance and pension schemes. For cancellation, clearly
          mention the scheme name in your application and request that the auto-debit of the
          premium be stopped. If you wish to re-enroll the following year, you can submit a fresh
          application at that time.
        </p>

        <h3>8. Jan Dhan to Savings Account Conversion</h3>
        <p>
          A Jan Dhan account has certain limitations, such as no chequebook facility and a capped
          overdraft limit. For conversion, submit KYC documents (Aadhaar and PAN). After conversion,
          you receive full banking facilities including a chequebook, ATM card, and net banking
          access.
        </p>

        <h3>9. Account Closure Request</h3>
        <p>
          For account closure, mention the details of the account where the remaining balance should
          be transferred. You must surrender your passbook, chequebook, and ATM card. The closure
          form can be downloaded from the bank website or collected from the branch. Some banks
          charge a closure fee if the account has been open for less than one year.
        </p>

        <h3>10. Name Correction as per Aadhaar</h3>
        <p>
          For a name correction, a copy of your Aadhaar card is mandatory. In the application,
          mention both the incorrect name and the correct name. Attach a self-attested copy of your
          Aadhaar card. After the correction, request a re-issued passbook and chequebook with the
          updated name.
        </p>

        <h3>Tips for Writing Effective Bank Applications</h3>
        <ul>
          <li><strong>Be Specific:</strong> State the purpose clearly in the subject line.</li>
          <li><strong>Include All Details:</strong> Mention your account number, branch name, and all relevant information.</li>
          <li><strong>Keep it Short:</strong> Limit the body to 2 to 3 paragraphs. Avoid unnecessary details.</li>
          <li><strong>Attach Documents:</strong> Always attach self-attested copies of the required documents.</li>
          <li><strong>Get Acknowledgement:</strong> Obtain a receiving stamp from the branch for your records.</li>
          <li><strong>Use Formal Language:</strong> Use "Respected Sir/Madam" and maintain a formal tone throughout.</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        <p>
          There are several common mistakes that people make repeatedly. The first is writing the
          wrong account number. The second is omitting the date. The third is forgetting to mention
          the branch name. The fourth is not attaching the required documents. To avoid all of these,
          use ApplicationWala, where all fields are clearly labeled and the live preview lets you
          verify that everything is correct before downloading.
        </p>

        <h3>Digital vs Physical Applications</h3>
        <p>
          Nowadays, most banks accept digital applications through net banking or their mobile app.
          However, certain services such as account closure, name correction, and account transfer
          still require a physical application submitted at the branch. Digital applications are
          processed faster, but physical applications provide a hard copy record that can be useful
          in the future.
        </p>

        <h3>Conclusion</h3>
        <p>
          Writing a bank application does not have to be difficult if you follow the correct format.
          ApplicationWala makes it easy by providing ready-made templates in both English and Hindi.
          Simply fill in your details, check the preview, and download the PDF. The tool is free and
          can be used for any Indian bank. Try ApplicationWala today and save time on your banking
          paperwork.
        </p>
      </article>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-bank-900">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
