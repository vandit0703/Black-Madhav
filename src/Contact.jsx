import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_STORAGE_KEY = "contactSubmissions";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !projectDetails.trim()) {
      setFeedback("Please fill in all fields before submitting.");
      return;
    }

    if (phone.length !== 10) {
      setFeedback("Mobile number must be exactly 10 digits.");
      return;
    }

    const submission = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      projectDetails: projectDetails.trim(),
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || "[]");
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify([submission, ...existing]));

    setName("");
    setEmail("");
    setProjectDetails("");
    setFeedback("Thank you! Your message has been sent and is visible to admin.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
            Let's Build Something Great Together
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Tell us about your project and we’ll help you bring it to life with a strategic, beautiful, and high-performing digital solution.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-blue-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Contact Info</h2>
            <div className="space-y-5 text-slate-700">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">hello@blackmadhav.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+91 12345 67890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Location</p>
                  <p className="text-sm text-slate-600">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-blue-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Send a Message</h2>
            {feedback && (
              <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-4 text-sm text-slate-900">
                {feedback}
              </div>
            )}
            <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Your email"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Mobile Number</span>
                <input
                  value={phone}
                  onChange={(event) => {
                    const digits = event.target.value.replace(/\D/g, "");
                    if (digits.length <= 10) {
                      setPhone(digits);
                    }
                  }}
                  type="tel"
                  placeholder="10 digit mobile number"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Project Details</span>
                <textarea
                  value={projectDetails}
                  onChange={(event) => setProjectDetails(event.target.value)}
                  rows="5"
                  placeholder="Tell us about your project"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
