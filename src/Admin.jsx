import { useEffect, useState } from "react";

const CONTACT_STORAGE_KEY = "contactSubmissions";
const ADMIN_SESSION_KEY = "adminLoggedIn";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "password123";

export default function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedSession = localStorage.getItem(ADMIN_SESSION_KEY);
    setIsLoggedIn(storedSession === "true");
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const stored = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || "[]");
      setSubmissions(Array.isArray(stored) ? stored : []);
    }
  }, [isLoggedIn]);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_SESSION_KEY, "true");
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      return;
    }

    setError("Invalid username or password. Please try again.");
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-md text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Admin Login
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
              Secure Admin Access
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Enter your administrator credentials to view contact submissions.
            </p>
          </div>

          <div className="mx-auto rounded-3xl border border-slate-200 bg-white p-10 shadow-sm max-w-md">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Username</span>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  placeholder="admin"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Login
              </button>
            </form>
            <p className="mt-6 text-sm text-slate-500" style={{ display: "none" }}>
              Use username <span className="font-semibold text-slate-900">admin</span> and password <span className="font-semibold text-slate-900">password123</span>.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Admin Panel
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
                Contact Submissions
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Review all inquiries submitted through the contact page below.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {submissions.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-slate-700 shadow-sm">
              <p className="text-lg font-medium">No contact submissions have been received yet.</p>
              <p className="mt-2 text-sm text-slate-500">
                Submissions will appear here after someone fills out the contact form.
              </p>
            </div>
          ) : (
            submissions.map((submission) => (
              <div key={submission.id} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Submitted</p>
                    <p className="text-sm text-slate-700">
                      {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                    Inquiry ID #{submission.id}
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Name</p>
                    <p className="mt-2 text-base font-medium text-slate-900">{submission.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Email</p>
                    <p className="mt-2 text-base font-medium text-slate-900">{submission.email}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Mobile</p>
                    <p className="mt-2 text-base font-medium text-slate-900">{submission.phone}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-slate-500">Project Details</p>
                  <p className="mt-3 whitespace-pre-wrap text-slate-700">{submission.projectDetails}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
