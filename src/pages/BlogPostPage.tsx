import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { getPost, formatDate } from '@/lib/blog';
import Seo from '@/components/Seo';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : null;

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-card">
          <h1 className="text-lg font-semibold text-slate-700">Post not found</h1>
          <Link
            to="/blog"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bank-600 hover:text-bank-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Seo title={post.title} description={post.description} keywords={post.keywords} />

      <Link
        to="/blog"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-bank-600 transition hover:text-bank-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <h1 className="text-3xl font-bold leading-tight text-bank-900">{post.title}</h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          {post.date && (
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
          )}
          {post.author && (
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>
          )}
        </div>

        <div
          className="prose-banking mt-6"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />
      </article>
    </div>
  );
}
