import type { LetterValues, LetterTemplate, Language } from '@/data/templates';
import { formatDate } from '@/data/templates';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const buildLetterHtml = (
  template: LetterTemplate,
  values: LetterValues,
  lang: Language
): string => {
  const isHindi = lang === 'hi';
  const body = isHindi ? template.bodyHi(values) : template.bodyEn(values);
  const fontClass = isHindi ? 'Noto Sans Devanagari, sans-serif' : 'Noto Sans, sans-serif';

  const subjectLine = body[0];
  const paragraphs = body.slice(1);

  const toLine = isHindi
    ? `सेवा में,<br/>शाखा प्रबंधक महोदय,<br/>${values.bankName || '____'},<br/>${values.branchName || '____'} शाखा`
    : `To,<br/>The Branch Manager,<br/>${values.bankName || '____'},<br/>${values.branchName || '____'} Branch`;

  const yoursFaithfully = isHindi ? 'भवदीय,' : 'Yours faithfully,';
  const placeLabel = isHindi ? 'स्थान:' : 'Place:';
  const acctLabel = isHindi ? 'खाता संख्या:' : 'Account No:';

  const paraHtml = paragraphs
    .map(
      (p) =>
        `<p style="margin:0 0 14px 0;line-height:1.8;font-size:14px;color:#1a1a1a;">${escapeHtml(
          p
        )}</p>`
    )
    .join('');

  return `<!doctype html>
<html lang="${isHindi ? 'hi' : 'en'}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
  @page { margin: 22mm 20mm; }
  body { font-family: ${fontClass}; color:#1a1a1a; margin:0; padding:0; }
  .doc { max-width: 640px; margin: 0 auto; }
  .top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 32px; }
  .to { font-size: 14px; line-height:1.8; }
  .date { font-size: 14px; white-space:nowrap; padding-top:2px; }
  .subject { font-weight:600; margin: 0 0 20px 0; font-size:14px; color:#1a1a1a; }
  .body-text { margin: 0 0 24px 0; }
  .closing { margin-top: 36px; }
  .yours { font-size:14px; margin-bottom: 48px; }
  .sig { text-align:right; }
  .sig-name { font-weight:600; font-size:14px; margin-bottom:6px; }
  .sig-acct { font-size:13px; color:#444; }
  .place { margin-top:28px; font-size:13px; color:#444; }
</style>
</head>
<body>
  <div class="doc">
    <div class="top">
      <div class="to">${toLine}</div>
      <div class="date">${escapeHtml(formatDate(values.date, lang))}</div>
    </div>
    <p class="subject">${escapeHtml(subjectLine)}</p>
    <div class="body-text">${paraHtml}</div>
    <div class="closing">
      <div class="yours">${escapeHtml(yoursFaithfully)}</div>
      <div class="sig">
        <div class="sig-name">${escapeHtml(values.holderName || '____')}</div>
        <div class="sig-acct">${escapeHtml(acctLabel)} ${escapeHtml(values.accountNumber || '____')}</div>
      </div>
      <div class="place">${escapeHtml(placeLabel)} ${escapeHtml(values.branchName || '____')}</div>
    </div>
  </div>
</body>
</html>`;
};

export function downloadPdf(
  template: LetterTemplate,
  values: LetterValues,
  lang: Language
): void {
  const html = buildLetterHtml(template, values, lang);

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  iframe.setAttribute('aria-hidden', 'true');

  document.body.appendChild(iframe);

  const doc = iframe.contentDocument;
  if (!doc) {
    document.body.removeChild(iframe);
    return;
  }

  doc.open();
  doc.write(html);
  doc.close();

  const triggerPrint = () => {
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } catch {
      /* noop */
    }
    setTimeout(() => {
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    }, 1500);
  };

  const fontsReady = (iframe.contentWindow as any)?.fonts?.ready;
  if (fontsReady && typeof fontsReady.then === 'function') {
    fontsReady.then(triggerPrint).catch(triggerPrint);
  } else {
    setTimeout(triggerPrint, 600);
  }
}
