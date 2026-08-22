import { marked } from 'marked';
import type { Feature } from '@/lib/settings';

export interface HomeContent {
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
}

export interface LegalPageContent {
  slug: string;
  title: string;
  lastUpdated: string;
  bodyHtml: string;
}

import homeData from '@/../content/pages/home.json';

const fallbackHome: HomeContent = {
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
};

const typedHome: Partial<HomeContent> = homeData;

export const homeContent: HomeContent = { ...fallbackHome, ...typedHome };

const mdModules = import.meta.glob('/content/pages/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const frontRaw = match[1];
  const body = match[2];
  const meta: Record<string, string> = {};
  for (const line of frontRaw.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim().replace(/^"|"$/g, '');
    meta[key] = val;
  }
  return { meta, body };
}

function slugFromPath(path: string): string {
  const filename = path.split('/').pop() ?? '';
  return filename.replace(/\.md$/, '');
}

const allPages: LegalPageContent[] = Object.entries(mdModules).map(([path, raw]) => {
  const { meta, body } = parseFrontmatter(raw);
  const slug = slugFromPath(path);
  return {
    slug,
    title: meta.title ?? slug,
    lastUpdated: meta.lastUpdated ?? '',
    bodyHtml: marked.parse(body) as string,
  };
});

const pageMap = new Map(allPages.map((p) => [p.slug, p]));

export function getLegalPage(slug: string): LegalPageContent | null {
  return pageMap.get(slug) ?? null;
}

export const LEGAL_PAGE_SLUGS = {
  about: 'about',
  privacy: 'privacy-policy',
  terms: 'terms',
  contact: 'contact',
  disclaimer: 'disclaimer',
} as const;
