import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Landmark, Menu, X } from 'lucide-react';
import { siteSettings } from '@/lib/settings';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { brandName, brandSuffix, navLinks, ctaLabel } = siteSettings;

  const scrollToGenerator = () => {
    setOpen(false);
    const scroll = () => {
      document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
    };
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-bank-600 text-white shadow-md shadow-bank-600/20">
            <Landmark className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-bank-900">
              {brandName.replace(brandSuffix, '')}
              <span className="text-accent-orange">{brandSuffix}</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Bank Letter Generator
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-bank-50 text-bank-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-bank-700'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={scrollToGenerator}
            className="ml-2 rounded-lg bg-bank-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-bank-700"
          >
            {ctaLabel}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  isActive ? 'bg-bank-50 text-bank-700' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={scrollToGenerator}
            className="mt-1 block w-full rounded-lg bg-bank-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            {ctaLabel}
          </button>
        </nav>
      )}
    </header>
  );
}
