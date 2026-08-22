export interface NavLink {
  label: string;
  to: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteSettings {
  brandName: string;
  brandSuffix: string;
  brandAccentColor: string;
  heroBadge: string;
  heroTitleBefore: string;
  heroHighlight1: string;
  heroHighlight1Color: string;
  heroTitleMiddle: string;
  heroHighlight2: string;
  heroHighlight2Color: string;
  heroTitleAfter: string;
  heroDescription: string;
  features: Feature[];
  primaryColor: string;
  secondaryColor: string;
  navLinks: NavLink[];
  ctaLabel: string;
  footerTagline: string;
  footerCopyright: string;
  footerMadeWith: string;
  socialLinks: SocialLink[];
  footerQuickInfo: { info: string }[];
  footerLegalLinks: NavLink[];
}

import siteData from '@/../content/settings/site.json';

const fallback: SiteSettings = {
  brandName: 'ApplicationWala',
  brandSuffix: 'Wala',
  brandAccentColor: '#f97316',
  heroBadge: 'Free Bank Application Letter Generator',
  heroTitleBefore: 'Generate Bank Application Letters in',
  heroHighlight1: 'English',
  heroHighlight1Color: '#2563eb',
  heroTitleMiddle: '&',
  heroHighlight2: 'Hindi',
  heroHighlight2Color: '#16a34a',
  heroTitleAfter: '— Instantly',
  heroDescription: 'Fill in your details, preview your letter live, and download a clean text-based PDF.',
  features: [],
  primaryColor: '#2563eb',
  secondaryColor: '#16a34a',
  navLinks: [{ label: 'Home', to: '/' }],
  ctaLabel: 'Generate Letter',
  footerTagline: 'Free online tool to generate bank application letters in English and Hindi.',
  footerCopyright: 'All rights reserved.',
  footerMadeWith: 'Made with love for Indian banking customers',
  socialLinks: [],
  footerQuickInfo: [],
  footerLegalLinks: [],
};

const typedData: Partial<SiteSettings> = siteData;

export const siteSettings: SiteSettings = { ...fallback, ...typedData };

export { siteData };
