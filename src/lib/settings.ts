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

export const siteSettings: SiteSettings = siteData as SiteSettings;

export { siteData };
