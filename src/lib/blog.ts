import { marked } from 'marked';

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  author: string;
}

export interface BlogPost extends BlogPostMeta {
  bodyHtml: string;
}

interface RawPost {
  meta: BlogPostMeta;
  bodyHtml: string;
}

const mdModules = import.meta.glob('/content/blog/*.md', {
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

const allPosts: RawPost[] = Object.entries(mdModules)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    const slug = slugFromPath(path);
    return {
      meta: {
        slug,
        title: meta.title ?? slug,
        description: meta.description ?? '',
        keywords: meta.keywords ?? '',
        date: meta.date ?? '',
        author: meta.author ?? '',
      },
      bodyHtml: marked.parse(body) as string,
    };
  })
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getAllPosts(): BlogPostMeta[] {
  return allPosts.map((p) => p.meta);
}

export function getPost(slug: string): BlogPost | null {
  const found = allPosts.find((p) => p.meta.slug === slug);
  if (!found) return null;
  return { ...found.meta, bodyHtml: found.bodyHtml };
}

export function formatDate(d: string): string {
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return d;
  }
}
