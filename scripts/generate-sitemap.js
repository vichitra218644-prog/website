#!/usr/bin/env node

/**
 * Sitemap Generator
 *
 * Reads static routes from App.tsx and blog post slugs from content/blog/*.md,
 * then writes sitemap.xml and robots.txt into the dist/ folder.
 *
 * Runs automatically on every `npm run build`.
 * If you deploy on a custom domain, set SITE_URL in your environment or .env
 * (e.g. SITE_URL=https://applicationwala.in). Otherwise it defaults to the
 * Vite dev server URL.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const SITE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://applicationwala.in';

const staticRoutes = [
  '/',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/disclaimer',
];

function getBlogSlugs() {
  const blogDir = join(projectRoot, 'content', 'blog');
  if (!existsSync(blogDir)) return [];
  return readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

function getPostDate(slug) {
  try {
    const raw = readFileSync(join(projectRoot, 'content', 'blog', `${slug}.md`), 'utf-8');
    const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) return null;
    const frontmatter = match[1];
    const dateMatch = frontmatter.match(/^date:\s*"?([^\n"]+)"?/m);
    return dateMatch ? dateMatch[1].trim() : null;
  } catch {
    return null;
  }
}

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

function generateSitemap() {
  const slugs = getBlogSlugs();
  const today = todayISO();

  const urls = [];

  for (const route of staticRoutes) {
    urls.push({
      loc: `${SITE_URL}${route}`,
      lastmod: today,
      changefreq: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? '1.0' : route === '/blog' ? '0.9' : '0.6',
    });
  }

  for (const slug of slugs) {
    const postDate = getPostDate(slug) || today;
    urls.push({
      loc: `${SITE_URL}/blog/${slug}`,
      lastmod: postDate,
      changefreq: 'monthly',
      priority: '0.8',
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  const distDir = join(projectRoot, 'dist');
  if (!existsSync(distDir)) {
    console.error('[sitemap] dist/ folder not found. Run this after the build, or adjust the script.');
    process.exit(1);
  }

  writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf-8');
  console.log(`[sitemap] Generated sitemap.xml with ${urls.length} URLs`);

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  writeFileSync(join(distDir, 'robots.txt'), robots, 'utf-8');
  console.log('[sitemap] Generated robots.txt');
}

generateSitemap();
