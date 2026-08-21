import { Link } from 'react-router-dom';
import { Landmark, Heart } from 'lucide-react';
import { siteSettings } from '@/lib/settings';
import { getSocialIcon } from '@/utils/icons';

export default function Footer() {
  const {
    brandName,
    brandSuffix,
    footerTagline,
    footerCopyright,
    footerMadeWith,
    socialLinks,
    footerQuickInfo,
    footerLegalLinks,
  } = siteSettings;

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-bank-600 text-white">
                <Landmark className="h-5 w-5" />
              </div>
              <span className="text-base font-extrabold text-bank-900">
                {brandName.replace(brandSuffix, '')}
                <span className="text-accent-orange">{brandSuffix}</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              {footerTagline}
            </p>
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = getSocialIcon(s.label);
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition hover:bg-bank-600 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700">
              Legal &amp; Information
            </h3>
            <ul className="space-y-2.5">
              {footerLegalLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-500 transition hover:text-bank-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700">
              Quick Info
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {footerQuickInfo.map((item) => (
                <li key={item.info}>{item.info}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {brandName}. {footerCopyright}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            {footerMadeWith}
            <Heart className="h-3.5 w-3.5 text-accent-orange" />
          </p>
        </div>
      </div>
    </footer>
  );
}
