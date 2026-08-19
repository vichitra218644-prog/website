import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ title, description, keywords }: SeoProps) {
  useEffect(() => {
    document.title = title;
    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
  }, [title, description, keywords]);

  return null;
}
