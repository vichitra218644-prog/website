export type Language = 'en' | 'hi';

export interface LetterTemplate {
  id: string;
  nameEn: string;
  nameHi: string;
  needsDateRange: boolean;
  bodyEn: (v: LetterValues) => string[];
  bodyHi: (v: LetterValues) => string[];
}

export interface LetterValues {
  bankName: string;
  branchName: string;
  holderName: string;
  accountNumber: string;
  date: string;
  dateFrom: string;
  dateTo: string;
}

const fmtDate = (d: string, lang: Language) => {
  if (!d) return '____';
  try {
    const dt = new Date(d);
    if (isNaN(dt.getTime())) return d;
    return dt.toLocaleDateString(lang === 'en' ? 'en-IN' : 'hi-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return d;
  }
};

export const TEMPLATES: LetterTemplate[] = [
  {
    id: 'passbook-lost',
    nameEn: 'Passbook Lost Request',
    nameHi: 'पासबुक खोने का अनुरोध',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for issuance of new passbook.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold a savings account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I would like to inform you that my bank passbook has been lost. I searched for it everywhere but could not find it. I am attaching a copy of my identity proof for verification.`,
      `I kindly request you to issue me a new passbook for my above-mentioned account. I shall be grateful for your help.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: नया पासबुक जारी करने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा बचत खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं आपको सूचित करना चाहता हूँ कि मेरा बैंक पासबुक खो गया है। मैंने बहुत जगह खोजा लेकिन वह नहीं मिला। मैं सत्यापन हेतु अपनी पहचान प्रमाण की प्रति संलग्न कर रहा हूँ।`,
      `मैं आपसे अनुरोध करता हूँ कि मेरे उपरोक्त खाते के लिए एक नया पासबुक जारी कर दें। आपके सहयोग हेतु मैं आभारी रहूँगा।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'block-atm',
    nameEn: 'Block Lost ATM Card',
    nameHi: 'खोई हुई ATM कार्ड ब्लॉक करना',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application to block lost ATM/Debit Card.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I would like to inform you that my ATM/Debit Card linked to my above account has been lost on ${fmtDate(v.date, 'en')}. I am worried about unauthorized transactions and misuse of the card.`,
      `I request you to kindly block my ATM/Debit Card with immediate effect so that no unauthorized transaction can take place. I shall be grateful for your prompt action.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: खोई हुई ATM/डेबिट कार्ड ब्लॉक करने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं आपको सूचित करना चाहता हूँ कि मेरे उपरोक्त खाते से जुड़ी मेरी ATM/डेबिट कार्ड ${fmtDate(v.date, 'hi')} को खो गई है। मुझे अनधिकृत लेनदेन और कार्ड के दुरुपयोग की चिंता है।`,
      `मैं आपसे अनुरोध करता हूँ कि मेरी ATM/डेबिट कार्ड को तुरंत ब्लॉक कर दें ताकि कोई अनधिकृत लेनदेन न हो सके। आपके त्वरित कार्य हेतु मैं आभारी रहूँगा।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'chequebook-cancellation',
    nameEn: 'Chequebook Cancellation',
    nameHi: 'चेकबुक रद्द करना',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for cancellation of chequebook.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I would like to request you to kindly cancel the chequebook issued against my above-mentioned account, as I no longer require it. I confirm that no cheques from this chequebook are pending or outstanding for clearance.`,
      `Please process the cancellation at your earliest convenience.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: चेकबुक रद्द करने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं आपसे अनुरोध करता हूँ कि मेरे उपरोक्त खाते के विरुद्ध जारी चेकबुक को रद्द कर दें, क्योंकि मुझे अब इसकी आवश्यकता नहीं है। मैं पुष्टि करता हूँ कि इस चेकबुक का कोई भी चेक लंबित या निकासी हेतु शेष नहीं है।`,
      `कृपया अपनी सुविधानुसार शीघ्र रद्दीकरण संसाधित करें।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'bank-statement',
    nameEn: 'Bank Statement Request',
    nameHi: 'बैंक स्टेटमेंट अनुरोध',
    needsDateRange: true,
    bodyEn: (v) => [
      `Subject: Application for bank account statement.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I kindly request you to provide me the bank statement for my above-mentioned account for the period from ${fmtDate(v.dateFrom, 'en')} to ${fmtDate(v.dateTo, 'en')}. The statement is required for my personal records and official purposes.`,
      `Please issue the statement at your earliest convenience.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: बैंक खाता विवरण (स्टेटमेंट) प्राप्त करने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं आपसे अनुरोध करता हूँ कि मेरे उपरोक्त खाते के लिए ${fmtDate(v.dateFrom, 'hi')} से ${fmtDate(v.dateTo, 'hi')} तक की अवधि का बैंक विवरण प्रदान करें। यह विवरण मेरे निजी अभिलेख और आधिकारिक उद्देश्यों हेतु आवश्यक है।`,
      `कृपया शीघ्र ही विवरण जारी कर दें।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'mobile-change',
    nameEn: 'Mobile Number Change',
    nameHi: 'मोबाइल नंबर बदलना',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for change of registered mobile number.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I would like to update my registered mobile number in your records. My new mobile number is ____________________. Please update it and activate SMS banking services on my new number.`,
      `I am enclosing a self-attested copy of my identity proof for verification purposes.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: पंजीकृत मोबाइल नंबर बदलने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं अपना पंजीकृत मोबाइल नंबर अपडेट करना चाहता हूँ। मेरा नया मोबाइल नंबर ____________________ है। कृपया इसे अपडेट करें और मेरे नए नंबर पर SMS बैंकिंग सेवाएँ सक्रिय कर दें।`,
      `मैं सत्यापन हेतु अपनी पहचान प्रमाण की स्व-प्रमाणित प्रति संलग्न कर रहा हूँ।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'account-transfer',
    nameEn: 'Account Transfer Request',
    nameHi: 'खाता स्थानांतरण अनुरोध',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for transfer of account to another branch.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `Due to my relocation to another city, I am unable to continue banking with this branch. I request you to kindly transfer my above-mentioned account to my new branch. I shall provide the new branch details as required.`,
      `Please process the transfer at your earliest convenience.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: खाता अन्य शाखा में स्थानांतरित करने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मेरे दूसरे शहर में रहने के कारण, मैं इस शाखा से बैंकिंग जारी रखने में असमर्थ हूँ। मैं आपसे अनुरोध करता हूँ कि मेरे उपरोक्त खाते को मेरी नई शाखा में स्थानांतरित कर दें। मैं आवश्यकतानुसार नई शाखा का विवरण प्रदान करूँगा।`,
      `कृपया शीघ्र ही स्थानांतरण संसाधित करें।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'pmjjby-cancellation',
    nameEn: 'PMJJBY / PMSBY / APY Cancellation',
    nameHi: 'PMJJBY / PMSBY / APY रद्दीकरण',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for cancellation of PMJJBY / PMSBY / APY scheme.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I would like to request you to kindly cancel my enrollment under the PMJJBY / PMSBY / APY scheme linked to my above-mentioned account. I no longer wish to continue with this scheme.`,
      `Please stop the auto-debit of premium from my account and process the cancellation.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: PMJJBY / PMSBY / APY योजना रद्द करने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं आपसे अनुरोध करता हूँ कि मेरे उपरोक्त खाते से जुड़ी PMJJBY / PMSBY / APY योजना के अंतर्गत मेरी नामांकनी रद्द कर दें। मैं इस योजना को आगे जारी नहीं रखना चाहता।`,
      `कृपया मेरे खाते से प्रीमियम की स्वतः-कटौती बंद करें और रद्दीकरण संसाधित करें।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'jandhan-savings',
    nameEn: 'Jan Dhan to Savings Account Conversion',
    nameHi: 'जन धन से बचत खाता रूपांतरण',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for conversion of Jan Dhan account to Savings account.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold a Jan Dhan account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I now have valid KYC documents and wish to convert my Jan Dhan account into a regular Savings Account with chequebook and other banking facilities.`,
      `I am enclosing the requisite KYC documents for your verification. Please process the conversion at your earliest convenience.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: जन धन खाता को बचत खाते में बदलने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा जन धन खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मेरे पास अब वैध KYC दस्तावेज हैं और मैं अपने जन धन खाते को चेकबुक तथा अन्य बैंकिंग सुविधाओं के साथ एक सामान्य बचत खाते में बदलना चाहता हूँ।`,
      `मैं सत्यापन हेतु आवश्यक KYC दस्तावेज संलग्न कर रहा हूँ। कृपया शीघ्र ही रूपांतरण संसाधित करें।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'account-closure',
    nameEn: 'Account Closure Request',
    nameHi: 'खाता बंद करने का अनुरोध',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for closure of bank account.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I would like to request you to kindly close my above-mentioned account as I am unable to maintain it. I have surrendered my chequebook, ATM/Debit card and passbook to the branch.`,
      `Please transfer the remaining balance to my other account, the details of which are enclosed. Kindly process the closure at your earliest convenience.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: बैंक खाता बंद करने हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं आपसे अनुरोध करता हूँ कि मेरे उपरोक्त खाते को बंद कर दें, क्योंकि मैं इसे जारी नहीं रख सकता। मैंने अपनी चेकबुक, ATM/डेबिट कार्ड तथा पासबुक शाखा में जमा कर दी है।`,
      `कृपया शेष राशि मेरे दूसरे खाते में स्थानांतरित कर दें, जिसका विवरण संलग्न है। कृपया शीघ्र ही बंदी संसाधित करें।`,
      `धन्यवाद,`,
    ],
  },
  {
    id: 'name-correction',
    nameEn: 'Name Correction as per Aadhaar',
    nameHi: 'आधार के अनुसार नाम सुधार',
    needsDateRange: false,
    bodyEn: (v) => [
      `Subject: Application for correction of name as per Aadhaar.`,
      `Respected Sir/Madam,`,
      `My name is ${v.holderName || '____'} and I hold an account (Account No: ${v.accountNumber || '____'}) in your ${v.branchName || '____'} branch of ${v.bankName || '____'}.`,
      `I would like to bring to your kind notice that my name in the bank records is incorrectly spelt. I request you to kindly correct my name as per my Aadhaar Card.`,
      `I am enclosing a self-attested copy of my Aadhaar Card for your reference. Please update my name and issue a corrected passbook.`,
      `Thanking you,`,
    ],
    bodyHi: (v) => [
      `विषय: आधार के अनुसार नाम सुधार हेतु आवेदन।`,
      `महोदय,`,
      `मेरा नाम ${v.holderName || '____'} है और मेरा खाता (खाता संख्या: ${v.accountNumber || '____'}) ${v.bankName || '____'} की ${v.branchName || '____'} शाखा में है।`,
      `मैं आपके ध्यान में लाना चाहता हूँ कि बैंक रिकॉर्ड में मेरा नाम गलत वर्तनी से लिखा हुआ है। मैं आपसे अनुरोध करता हूँ कि मेरा नाम आधार कार्ड के अनुसार सुधार दें।`,
      `मैं संदर्भ हेतु अपने आधार कार्ड की स्व-प्रमाणित प्रति संलग्न कर रहा हूँ। कृपया मेरा नाम अपडेट करें और संशोधित पासबुक जारी करें।`,
      `धन्यवाद,`,
    ],
  },
];

export const formatDate = fmtDate;
