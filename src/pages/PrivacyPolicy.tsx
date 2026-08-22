import LegalLayout from '@/components/LegalLayout';
import Seo from '@/components/Seo';
import { getLegalPage, LEGAL_PAGE_SLUGS } from '@/lib/pages';

export default function PrivacyPolicy() {
  const page = getLegalPage(LEGAL_PAGE_SLUGS.privacy);

  if (!page) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-slate-600">Page content not found.</p>
      </div>
    );
  }

  return (
    <>
      <Seo title={`${page.title} - ApplicationWala`} />
      <LegalLayout icon="privacy" title={page.title} lastUpdated={page.lastUpdated}>
        <div dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
      </LegalLayout>
    </>
  );
}
