import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, FileText } from 'lucide-react';
import { getAllPosts, formatDate } from '@/lib/blog';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-bank-900">Blog</h1>
        <p className="mt-1 text-sm text-slate-500">
          Banking tips, guides, and sample application formats for Indian customers
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-card">
          <FileText className="mx-auto h-12 w-12 text-slate-300" />
          <h2 className="mt-4 text-lg font-semibold text-slate-700">No blog posts yet</h2>
          <p className="mt-1 text-sm text-slate-500">New articles will appear here soon.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:border-bank-300 hover:shadow-lg sm:p-7"
            >
              <h2 className="text-xl font-bold text-bank-900">{post.title}</h2>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
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
              {post.description && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.description}</p>
              )}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-bank-600">
                Read more
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
