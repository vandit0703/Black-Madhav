import { motion } from "framer-motion";
import { ArrowRight, Search, Globe, Smartphone, BarChart, Palette, Code } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-commerce Website",
    category: "Web Development + UI/UX",
    description:
      "Built a high-performance online store with modern design, responsive layouts, and secure payment integration.",
    results: ["Fast loading speed", "Mobile responsive design", "Secure payment integration", "User-friendly navigation"],
  },
  {
    title: "Business Website",
    category: "Web Development + Branding",
    description:
      "Delivered a polished business site that communicates brand value and turns visitors into leads.",
    results: ["Clean and modern layout", "SEO-friendly structure", "Lead capture forms"],
  },
  {
    title: "Mobile App UI",
    category: "UI/UX Design",
    description:
      "Designed a clean mobile app interface with intuitive navigation and polished interactions.",
    results: ["Intuitive navigation", "Clean UI design", "User-focused layout"],
  },
  {
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    description:
      "Executed targeted campaigns to grow reach, build awareness, and generate quality leads.",
    results: ["Audience targeting", "Creative ad design", "Performance tracking"],
  },
  {
    title: "SEO Optimization",
    category: "SEO",
    description:
      "Optimized site content and structure to increase visibility and organic traffic.",
    results: ["Keyword optimization", "Technical SEO", "Content strategy"],
  },
  {
    title: "Brand Identity Design",
    category: "Branding + Graphic Design",
    description:
      "Created a distinctive brand identity with logo, color palette, and visual guidelines.",
    results: ["Logo design", "Brand color palette", "Consistent design system"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
            Our Work Speaks for Itself
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Explore a selection of projects that demonstrate our expertise in web development, branding, design, marketing, and performance-driven digital experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/testimonials"
              className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View Testimonials
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                {project.category}
              </div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">{project.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">{project.description}</p>
              <ul className="space-y-3 mb-6 text-sm text-slate-600">
                {project.results.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                View Project Details
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Want to bring your next project to life?</h2>
              <p className="mt-2 text-slate-100 text-sm leading-relaxed">
                We deliver end-to-end digital solutions with measurable results. Let's create something great together.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
