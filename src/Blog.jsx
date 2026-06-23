import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

const BLOG_STORAGE_KEY = "blogPosts";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || "[]");
    const normalized = Array.isArray(stored) ? stored : [];
    setPosts(normalized);
  }, []);

  const handleReadMore = (post) => {
    setExpandedPostId(post.id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Blog</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Latest Updates</h1>
          <p className="text-lg leading-relaxed text-slate-600">Read the latest updates from our team.</p>
        </div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-slate-700 shadow-sm">
              <p className="text-lg font-medium">No blog posts yet.</p>
              <p className="mt-2 text-sm text-slate-500">Staff can add posts from the staff dashboard.</p>
            </div>
          ) : (
            posts.map((post) => {
              const isExpanded = expandedPostId === post.id;
              return (
                <article key={post.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm overflow-hidden">
                  <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
                    <div className="min-w-0">
                      <header>
                        <h2 className="text-2xl font-bold text-slate-900">{post.title}</h2>
                        <p className="mt-2 text-sm text-slate-500">{new Date(post.createdAt).toLocaleString()}</p>
                      </header>
                      <p className="mt-4 text-slate-700 break-words">{post.excerpt}</p>
                      <div className="mt-5 flex items-center gap-3">
                        <button
                          onClick={() => handleReadMore(post)}
                          className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800 whitespace-nowrap"
                        >
                          Read more
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-800 break-words">
                          <div className="prose max-w-full break-words" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(post.content || "")) }} />
                        </div>
                      )}
                    </div>

                    {post.image && (
                      <div className="order-first lg:order-last lg:self-start">
                        <img src={post.image} alt={post.title} className="h-full w-full rounded-3xl object-cover max-h-[360px]" />
                      </div>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
