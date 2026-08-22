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
