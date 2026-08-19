import { Link } from 'react-router-dom';
import { Landmark, Heart } from 'lucide-react';

const legalLinks = [
  { to: '/blog', label: 'Blog' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/disclaimer', label: 'Disclaimer' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
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
                Application<span className="text-accent-orange">Wala</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Free online tool to generate bank application letters in English and Hindi for all
              major Indian banks.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700">
              Legal &amp; Information
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
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
              <li>10+ Application Types</li>
              <li>English &amp; Hindi Support</li>
              <li>Free, No Registration</li>
              <li>Works on Mobile &amp; Desktop</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} ApplicationWala. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            Made with <Heart className="h-3.5 w-3.5 text-accent-orange" /> for Indian banking customers
          </p>
        </div>
      </div>
    </footer>
  );
}
