import { Sparkles } from 'lucide-react';
import GeneratorTool from '@/components/GeneratorTool';
import BankingGuide from '@/components/BankingGuide';
import { homeContent } from '@/lib/pages';
import { getFeatureIcon } from '@/utils/icons';
import Seo from '@/components/Seo';

export default function Home() {
  const {
    heroBadge,
    heroTitleBefore,
    heroHighlight1,
    heroTitleMiddle,
    heroHighlight2,
    heroTitleAfter,
    heroDescription,
    features,
  } = homeContent;

  return (
    <>
      <Seo
        title="ApplicationWala - Bank Application Letter Generator (English & Hindi)"
        description={heroDescription}
        keywords="bank application, SBI application, HDFC application, ATM block application, passbook lost application, chequebook cancellation, bank statement application, Hindi bank application"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bank-50 via-white to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-bank-200/40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-8 text-center sm:px-6 sm:pt-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bank-200 bg-bank-50 px-4 py-1.5 text-xs font-semibold text-bank-700">
            <Sparkles className="h-3.5 w-3.5" />
            {heroBadge}
          </div>
          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-bank-900 sm:text-5xl">
            {heroTitleBefore}{' '}
            <span className="text-hero-highlight1">{heroHighlight1}</span>{' '}
            {heroTitleMiddle}{' '}
            <span className="text-hero-highlight2">{heroHighlight2}</span>{' '}
            {heroTitleAfter}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            {heroDescription}
          </p>

          {/* Feature pills */}
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = getFeatureIcon(f.icon);
              return (
                <div
                  key={f.title}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-bank-50 text-bank-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">{f.title}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Generator Tool */}
      <section id="generator" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 sm:px-6">
        <GeneratorTool />
      </section>

      {/* Banking Guide + FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <BankingGuide />
      </section>
    </>
  );
}
