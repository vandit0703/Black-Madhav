import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import ConfirmModal from "./components/ConfirmModal";

const BLOG_STORAGE_KEY = "blogPosts";
const STAFF_SESSION_KEY = "staffLoggedIn";
const STAFF_USERNAME = "staff";
const STAFF_PASSWORD = "staffpass";

export default function Staff() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [imageTooLarge, setImageTooLarge] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem(STAFF_SESSION_KEY);
    setIsLoggedIn(session === "true");
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const stored = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || "[]");
      setPosts(Array.isArray(stored) ? stored : []);
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (username === STAFF_USERNAME && password === STAFF_PASSWORD) {
      localStorage.setItem(STAFF_SESSION_KEY, "true");
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      return;
    }
    setError("Invalid credentials.");
  };

  const handleLogout = () => {
    localStorage.removeItem(STAFF_SESSION_KEY);
    setIsLoggedIn(false);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim() || !content.trim()) return;
    if (imageTooLarge) return;

    const existing = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || "[]");

    if (editingPostId) {
      const updated = existing.map((p) =>
        p.id === editingPostId
          ? {
              ...p,
              title: title.trim(),
              excerpt: excerpt.trim(),
              content: content.trim(),
              image: imagePreview || p.image || null,
              updatedAt: new Date().toISOString(),
            }
          : p
      );
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(updated));
      setPosts(updated);
      setEditingPostId(null);
    } else {
      const post = {
        id: Date.now(),
        title: title.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        image: imagePreview || null,
        createdAt: new Date().toISOString(),
      };
      const updated = [post, ...existing];
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(updated));
      setPosts(updated);
    }

    setTitle("");
    setExcerpt("");
    setContent("");
    setImagePreview("");
    setImageFile(null);
  };

  const handleDelete = (id) => {
    // open modal
    setPostToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const id = postToDelete;
    const filtered = posts.filter((p) => p.id !== id);
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(filtered));
    setPosts(filtered);
    if (editingPostId === id) {
      setEditingPostId(null);
      setTitle("");
      setExcerpt("");
      setContent("");
      setImagePreview("");
      setImageFile(null);
    }
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  const handleEdit = (post) => {
    setEditingPostId(post.id);
    setTitle(post.title || "");
    setExcerpt(post.excerpt || "");
    setContent(post.content || "");
    setImagePreview(post.image || "");
    // scroll to top of form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Staff Login</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Staff Dashboard</h1>
            <p className="text-lg leading-relaxed text-slate-600">Log in to add daily blog updates.</p>
          </div>

          <div className="mx-auto rounded-3xl border border-slate-200 bg-white p-10 shadow-sm max-w-md">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
              )}
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Username</span>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white">Login</button>
            </form>
            <p className="mt-6 text-sm text-slate-500" style={{ display: "none"}}>Use username <span className="font-semibold">staff</span> and password <span className="font-semibold">staffpass</span>.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Staff Dashboard</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Create Blog Post</h1>
              <p className="text-lg leading-relaxed text-slate-600">Add updates and they will appear on the public blog.</p>
            </div>
            <button onClick={handleLogout} className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Logout</button>
          </div>
        </div>

        <div className="mx-auto rounded-3xl border border-slate-200 bg-white p-10 shadow-sm max-w-3xl">
          <form onSubmit={handlePost} className="space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Title</span>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Excerpt</span>
              <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Image (optional)</span>
              <input
                onChange={(e) => {
                  const file = e.target.files && e.target.files[0];
                  if (!file) return;
                  const maxBytes = 2 * 1024 * 1024; // 2MB
                  setImageTooLarge(file.size > maxBytes);
                  if (file.size > maxBytes) {
                    setError(`Image too large (${Math.round(file.size / 1024)} KB). Max is ${Math.round(maxBytes / 1024)} KB.`);
                    setImageFile(null);
                    setImagePreview("");
                    return;
                  }
                  setError("");
                  setImageFile(file);
                  const reader = new FileReader();
                  reader.onload = () => {
                    setImagePreview(reader.result.toString());
                  };
                  reader.readAsDataURL(file);
                }}
                type="file"
                accept="image/*"
                className="mt-2 w-full"
              />
              <p className="mt-2 text-xs text-slate-500">Max image size: 2MB.</p>
              {imagePreview && (
                <img src={imagePreview} alt="preview" className="mt-3 max-h-40 rounded-md object-cover" />
              )}
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Content</span>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={6} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </label>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={imageTooLarge}
                className={`inline-flex items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white ${imageTooLarge ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {editingPostId ? 'Update Post' : 'Publish'}
              </button>
              <button type="button" onClick={() => setPreviewMode(!previewMode)} className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm">{previewMode ? 'Edit' : 'Preview'}</button>
            </div>
          </form>
          {previewMode && (
            <div className="mt-6">
              <h3 className="font-semibold">Preview</h3>
              <div className="mt-3 prose max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(content || '')) }} />
            </div>
          )}
            <div className="mt-8 space-y-4">
            {posts.length === 0 ? (
              <p className="text-sm text-slate-500">No posts yet.</p>
            ) : (
              posts.map((p) => (
                <div key={p.id} className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-slate-500">{new Date(p.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEdit(p)} className="text-sm text-blue-600">Edit</button>
                      <button onClick={() => handleDelete(p.id)} className="text-sm text-rose-600">Delete</button>
                    </div>
                  </div>
                  <p className="mt-2 text-slate-700">{p.excerpt}</p>
                </div>
              ))
            )}
          </div>
          <ConfirmModal
            open={showDeleteModal}
            title="Delete blog post"
            message="Are you sure you want to delete this post? This action cannot be undone."
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
          />
        </div>
      </section>
    </div>
  );
}
