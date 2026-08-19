import { Shield, FileText, AlertTriangle, Info, Mail } from 'lucide-react';
import type { ReactNode } from 'react';

interface LegalLayoutProps {
  icon: 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact';
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

const ICONS = {
  privacy: Shield,
  terms: FileText,
  disclaimer: AlertTriangle,
  about: Info,
  contact: Mail,
};

export default function LegalLayout({ icon, title, lastUpdated, children }: LegalLayoutProps) {
  const Icon = ICONS[icon];
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bank-100 text-bank-700">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-bank-900 sm:text-3xl">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
          )}
        </div>
      </div>
      <div className="prose-banking max-w-none">{children}</div>
    </div>
  );
}
