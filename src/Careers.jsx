import { motion } from "framer-motion";
import {
  Briefcase,
  Sparkles,
  Target,
  Rocket,
  Users,
  Mail,
  Zap,
  Film,
  ShieldCheck,
  CheckCircle2,
  Puzzle,
} from "lucide-react";

const talentCategories = [
  {
    title: "Creators",
    description: "Designers, UI/UX specialists, and storytellers who shape visual experiences.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Builders",
    description: "Developers and app creators who bring digital products to life.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Growers",
    description: "Marketing, SEO, and growth experts focused on scaling businesses.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Innovators",
    description: "AI and automation thinkers who improve workflows and products.",
    icon: <Rocket className="h-6 w-6" />,
  },
];

const opportunityTypes = [
  "Project-based work",
  "Freelance collaboration",
  "Internship programs",
  "Long-term team roles",
];

const fitItems = [
  "Learners",
  "Creators",
  "Problem-solvers",
  "Self-driven individuals",
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-24">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-slate-100 mb-6">
              <Briefcase className="h-5 w-5" />
              WE DON’T HIRE ROLES, WE BUILD PEOPLE
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Not Just Jobs. Opportunities.
            </motion.h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              At BLACK MADHAV DIGITAL SOLUTION, we don’t believe in traditional job openings. Talent doesn’t wait for positions — it creates value wherever needed.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:careers@blackmadhav.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/10 transition hover:bg-slate-100"
              >
                Join The Network
              </a>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-slate-200">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                We’re Always Open for Talent
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Our Hiring Philosophy
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">
                “We don’t hire for positions. We collaborate with talent.”
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                No fixed job titles. No limited openings. No traditional hiring pressure. Only skills, mindset, and growth.
              </p>
            </div>

            <div className="space-y-4">
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 text-blue-600">
                  <Sparkles className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Talent First, Role Later</h3>
                </div>
                <p className="mt-4 text-slate-600">
                  We discover talent first and define roles later. If you have potential, we make space for your strengths to grow.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 text-blue-600">
                  <Rocket className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Prove Your Skills</h3>
                </div>
                <p className="mt-4 text-slate-600">
                  Skip resume — send us your work. Show us what you can build, design, or grow, and we’ll match you to the right opportunity.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 text-blue-600">
                  <Film className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Build in Public</h3>
                </div>
                <p className="mt-4 text-slate-600">
                  Share projects and demos with us — not just applications. Real work and real creativity speak louder than titles.
                </p>
              </article>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-950 to-cyan-600 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-100/80">
                No Vacancy Needed
              </p>
              <h3 className="mt-4 text-2xl font-bold">We’re Always Open for Talent</h3>
              <p className="mt-4 text-slate-100 leading-7">
                No openings? No problem. If you believe you can create value, we want to hear from you.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Mail className="h-5 w-5" />
                careers@blackmadhav.com
              </div>
              <div className="mt-6 space-y-3 text-slate-600">
                <p className="font-semibold text-slate-900">Send your:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Resume / Portfolio</li>
                  <li>Skills & Interests</li>
                  <li>Recent work samples or demos</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-950">How You Fit In</h3>
              <p className="mt-4 text-slate-600 leading-7">
                You don’t apply for a job — you apply to become a part of our ecosystem. Once you join our talent network, you may work on live client projects, collaborate with our team, and grow into long-term roles.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {fitItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-950">Talent Categories</h3>
              <p className="mt-4 text-slate-600 leading-7">
                We don’t define positions — we define skill zones.
              </p>
              <div className="mt-8 space-y-4">
                {talentCategories.map((category) => (
                  <div key={category.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-950">{category.title}</h4>
                      <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-950">Growth Model</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Your journey is not fixed: Explore → Contribute → Prove → Grow → Lead.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Explore",
                "Contribute",
                "Prove",
                "Grow",
                "Lead",
              ].map((step, idx) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{step}</p>
                    <p className="text-sm text-slate-600">{step === "Explore" ? "Discover possibilities" : step === "Contribute" ? "Add value from day one" : step === "Prove" ? "Show what you can do" : step === "Grow" ? "Build your impact" : "Lead with confidence"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-950">Opportunity Types</h3>
            <div className="mt-8 space-y-4">
              {opportunityTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <p className="text-slate-700">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-cyan-200">
            <Puzzle className="h-5 w-5" />
            Become the Opportunity
          </div>
          <h2 className="mt-8 text-4xl font-extrabold tracking-tight">
            Stop waiting for opportunities.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Apply to become part of our creative, growth-focused talent ecosystem. Whether you’re a maker, thinker, or builder, we want to see how you can add value.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:careers@blackmadhav.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/20 transition hover:bg-slate-100"
            >
              Send Your Work
            </a>
            <a
              href="mailto:careers@blackmadhav.com"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              careers@blackmadhav.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
