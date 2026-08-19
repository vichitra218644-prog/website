import { useMemo, useState } from 'react';
import {
  Building2,
  User,
  Hash,
  Calendar,
  FileText,
  Download,
  Languages,
  GitBranch,
  CalendarRange,
} from 'lucide-react';
import { TEMPLATES, formatDate, type LetterValues, type Language } from '@/data/templates';
import { downloadPdf } from '@/utils/pdf';

const todayISO = () => new Date().toISOString().slice(0, 10);

const initialValues: LetterValues = {
  bankName: '',
  branchName: '',
  holderName: '',
  accountNumber: '',
  date: todayISO(),
  dateFrom: '',
  dateTo: '',
};

const field = (label: string, icon: React.ReactNode, children: React.ReactNode) => (
  <label className="block">
    <span className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
      <span className="text-bank-600">{icon}</span>
      {label}
    </span>
    {children}
  </label>
);

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-bank-500 focus:outline-none focus:ring-2 focus:ring-bank-200 placeholder:text-slate-400';

export default function GeneratorTool() {
  const [values, setValues] = useState<LetterValues>(initialValues);
  const [templateId, setTemplateId] = useState(TEMPLATES[0].id);
  const [lang, setLang] = useState<Language>('en');

  const template = useMemo(
    () => TEMPLATES.find((t) => t.id === templateId) ?? TEMPLATES[0],
    [templateId]
  );

  const update = (key: keyof LetterValues, val: string) =>
    setValues((prev) => ({ ...prev, [key]: val }));

  const body = lang === 'hi' ? template.bodyHi(values) : template.bodyEn(values);
  const subjectLine = body[0];
  const paragraphs = body.slice(1);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Form Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bank-600 text-white">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-bank-900">Application Generator</h2>
            <p className="text-xs text-slate-500">Fill the details and download your letter</p>
          </div>
        </div>

        <div className="space-y-4">
          {field('Application Type', <FileText className="h-4 w-4" />, (
            <select
              value={templateId}
              onChange={(e) => setTemplateId(e.target.value)}
              className={inputClass}
            >
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>
                  {lang === 'hi' ? t.nameHi : t.nameEn}
                </option>
              ))}
            </select>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {field('Bank Name', <Building2 className="h-4 w-4" />, (
              <input
                type="text"
                value={values.bankName}
                onChange={(e) => update('bankName', e.target.value)}
                placeholder="e.g. State Bank of India"
                className={inputClass}
              />
            ))}
            {field('Branch Name', <GitBranch className="h-4 w-4" />, (
              <input
                type="text"
                value={values.branchName}
                onChange={(e) => update('branchName', e.target.value)}
                placeholder="e.g. MG Road"
                className={inputClass}
              />
            ))}
          </div>

          {field('Account Holder Name', <User className="h-4 w-4" />, (
            <input
              type="text"
              value={values.holderName}
              onChange={(e) => update('holderName', e.target.value)}
              placeholder="e.g. Rajesh Kumar Sharma"
              className={inputClass}
            />
          ))}

          {field('Account Number', <Hash className="h-4 w-4" />, (
            <input
              type="text"
              value={values.accountNumber}
              onChange={(e) => update('accountNumber', e.target.value)}
              placeholder="12-digit account number"
              className={inputClass}
            />
          ))}

          {field('Date', <Calendar className="h-4 w-4" />, (
            <input
              type="date"
              value={values.date}
              onChange={(e) => update('date', e.target.value)}
              className={inputClass}
            />
          ))}

          {template.needsDateRange && (
            <div className="grid gap-4 sm:grid-cols-2">
              {field('Statement From', <CalendarRange className="h-4 w-4" />, (
                <input
                  type="date"
                  value={values.dateFrom}
                  onChange={(e) => update('dateFrom', e.target.value)}
                  className={inputClass}
                />
              ))}
              {field('Statement To', <CalendarRange className="h-4 w-4" />, (
                <input
                  type="date"
                  value={values.dateTo}
                  onChange={(e) => update('dateTo', e.target.value)}
                  className={inputClass}
                />
              ))}
            </div>
          )}
        </div>

        {/* Language toggle */}
        <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 p-3">
          <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Languages className="h-4 w-4 text-bank-600" />
            Preview Language
          </span>
          <div className="flex items-center gap-1 rounded-lg bg-slate-200 p-1">
            <button
              onClick={() => setLang('en')}
              className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
                lang === 'en' ? 'bg-white text-bank-700 shadow-sm' : 'text-slate-500'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
                lang === 'hi' ? 'bg-white text-bank-700 shadow-sm' : 'text-slate-500'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>

        <button
          onClick={() => downloadPdf(template, values, lang)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-bank-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-bank-600/25 transition hover:bg-bank-700 active:scale-[0.99]"
        >
          <Download className="h-5 w-5" />
          Download PDF
        </button>
      </div>

      {/* Live Preview */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-600">Live Preview</span>
          <span className="rounded-full bg-bank-50 px-3 py-1 text-xs font-medium text-bank-700">
            {lang === 'hi' ? 'हिन्दी' : 'English'}
          </span>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <div className={`mx-auto max-w-[640px] ${lang === 'hi' ? 'font-deva' : ''}`}>
            <div className="flex items-start justify-between">
              <div className="text-sm leading-relaxed text-slate-700">
                {lang === 'hi' ? (
                  <>
                    सेवा में,<br />
                    शाखा प्रबंधक महोदय,<br />
                    {values.bankName || '____'},<br />
                    {values.branchName || '____'} शाखा
                  </>
                ) : (
                  <>
                    To,<br />
                    The Branch Manager,<br />
                    {values.bankName || '____'},<br />
                    {values.branchName || '____'} Branch
                  </>
                )}
              </div>
              <div className="text-sm text-slate-600">{formatDate(values.date, lang)}</div>
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-800">{subjectLine}</p>
            {paragraphs.map((p, i) => (
              <p key={i} className="mt-2.5 text-sm leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
            <div className="mt-10">
              <div className="text-sm text-slate-700">
                {lang === 'hi' ? 'भवदीय,' : 'Yours faithfully,'}
              </div>
              <div className="mt-12 text-right">
                <div className="text-sm font-semibold text-slate-800">
                  {values.holderName || '____'}
                </div>
                <div className="text-xs text-slate-500">
                  {lang === 'hi' ? 'खाता संख्या:' : 'Account No:'} {values.accountNumber || '____'}
                </div>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                {lang === 'hi' ? 'स्थान:' : 'Place:'} {values.branchName || '____'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
