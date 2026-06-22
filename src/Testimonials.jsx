import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    title: "Web Development",
    rating: 5,
    quote:
      "We needed a modern and fast website that reflects our brand professionally. The team understood our requirements clearly and delivered beyond expectations. The website design and performance exceeded expectations. Everything is fast, responsive, and user-friendly.",
    author: "Nikhil Patel, Patel Fashion Hub",
  },
  {
    title: "App Development",
    rating: 5,
    quote:
      "We wanted a mobile app that is simple, fast, and easy to use. The team delivered a smooth and high-quality application. Smooth app performance with a clean interface. The team delivered exactly what we needed.",
    author: "Neha Sharma, Urban Trendz",
  },
  {
    title: "Digital Marketing",
    rating: 5,
    quote:
      "We were struggling to generate leads online before working with them. Their marketing strategies brought real results. Our lead generation improved significantly after working with them. Great marketing strategies.",
    author: "Amit Verma, Style Street India",
  },
  {
    title: "SEO Services",
    rating: 5,
    quote:
      "Our website was not ranking on search engines before. Their SEO work made a big difference in visibility. We saw noticeable improvement in rankings and organic traffic within months. Their SEO strategy is result-driven and well-planned. Highly recommended.",
    author: "Priya Mehta, NextGen Store",
  },
  {
    title: "AI Solutions",
    rating: 5,
    quote:
      "We needed automation to reduce manual work and improve efficiency. Their AI solutions were practical and effective. AI automation saved us time and improved our workflow efficiency.",
    author: "Karan Shah",
  },
  {
    title: "Graphic Design",
    rating: 5,
    quote:
      "We were looking for creative visuals that match our brand identity. Their designs were exactly what we needed. Creative and eye-catching designs that perfectly match our brand identity.",
    author: "Ritu Agarwal",
  },
  {
    title: "UI/UX Design",
    rating: 5,
    quote:
      "Our platform needed a better user experience to improve engagement. Their design approach was user-focused and modern. User experience improved significantly after redesign. Clean and modern design.",
    author: "Manish Gupta",
  },
  {
    title: "Branding",
    rating: 5,
    quote:
      "Our brand identity was inconsistent before working with them. They created a strong and professional brand presence. Our brand identity now looks professional and consistent across all platforms.",
    author: "Sneha Desai",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-24">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Real feedback from businesses that trusted us to build websites, apps, brands, and growth strategies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View Portfolio
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
          {testimonials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-3 text-blue-600">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="text-sm uppercase tracking-[0.2em] font-semibold">{item.title}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 text-amber-500" />
                  ))}
                </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">“{item.quote}”</p>
              <p className="text-sm font-semibold text-slate-900">{item.author}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Ready to join our satisfied clients?</h2>
              <p className="mt-2 text-slate-100 text-sm leading-relaxed">
                Let's turn your next project into a digital success story with strategy, design, and measurable growth.
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
