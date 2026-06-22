import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Target,
  Rocket,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Eye,
  Award,
  Globe,
  MessageSquare,
} from "lucide-react";

const approachSteps = [
  { title: "Understand", description: "We understand your business and goals" },
  { title: "Strategize", description: "We create a clear strategy" },
  { title: "Create", description: "We design and develop solutions" },
  { title: "Optimize", description: "We go live with perfection" },
  { title: "Grow", description: "We optimize and scale your business" },
];

const differences = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Strategy First",
    description: "We don't just execute — we plan smart strategies for long-term success.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Design + Performance",
    description: "Our designs are not only attractive but also focused on conversions.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Result-Oriented Work",
    description: "We focus on measurable results like traffic, leads, and growth.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "End-to-End Solutions",
    description: "From idea to execution — everything under one roof.",
  },
];

const expertise = [
  "Modern & Responsive Website Development",
  "High-Converting UI/UX Design",
  "Search Engine Optimization (SEO)",
  "Digital Marketing & Paid Advertising",
  "Brand Building & Online Presence",
  "Business Growth & Lead Generation",
];

const experts = [
  {
    name: "Krishna Chandravadiya",
    role: "CEO & Founder",
    bio: "Leads the company vision and guides strategy, ensuring every project achieves growth, brand impact, and measurable business results.",
  },
  {
    name: "Drashti Sanchaniya",
    role: "UI/UX Designer & Graphic Designer",
    bio: "Creates beautiful, user-focused interfaces and brand visuals that improve usability, drive engagement, and deliver a polished customer experience.",
  },
  {
    name: "Vandit Katbamna",
    role: "Full Stack Developer",
    bio: "Builds reliable, high-performance web applications from front-end design to back-end systems, making sure every solution is fast, scalable, and secure.",
  },
  {
    name: "Vishruti Patel",
    role: "Digital Marketing Specialist",
    bio: "Develops tailored marketing campaigns and growth strategies that increase visibility, generate leads, and convert audiences across digital channels.",
  },
];

const workSteps = [
  {
    number: "1",
    title: "Discover",
    description: "We understand your business and goals",
  },
  {
    number: "2",
    title: "Plan",
    description: "We create a clear strategy",
  },
  {
    number: "3",
    title: "Build",
    description: "We design and develop solutions",
  },
  {
    number: "4",
    title: "Launch",
    description: "We go live with perfection",
  },
  {
    number: "5",
    title: "Grow",
    description: "We optimize and scale your business",
  },
];

const extraSections = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Our Philosophy",
    description:
      "We believe that digital success is not just about technology — it's about creating meaningful experiences. Our philosophy is to combine creativity, strategy, and innovation to deliver solutions that truly impact businesses.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Our Goal",
    description:
      "Our goal is to empower businesses with digital tools and strategies that help them grow faster, reach the right audience, and achieve long-term success.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Our Strengths",
    description:
      "Strong technical expertise, creative and modern design approach, deep understanding of digital marketing, focus on performance and results, and continuous learning and improvement.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation & Technology",
    description:
      "We stay updated with the latest industry trends and technologies to deliver cutting-edge solutions. From modern frameworks to smart marketing tools, we ensure your business stays ahead of the competition.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client-Centric Approach",
    description:
      "We put our clients first. Every decision we make is based on what is best for your business. We listen, understand, and deliver solutions that match your goals.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Our Growth Mindset",
    description:
      "We believe in continuous growth — for our clients and for ourselves. We analyze, optimize, and improve strategies to ensure consistent progress.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Transparency & Communication",
    description:
      "We maintain clear and honest communication throughout the project. You are always updated about progress, ensuring trust and clarity.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Commitment to Excellence",
    description:
      "We are committed to delivering high-quality work that meets industry standards and exceeds client expectations.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Our Promise",
    description:
      "We promise to deliver reliable, scalable, and effective digital solutions that help your business succeed in the long run.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-900">
              We Build Digital Experiences That Drive Growth
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              At BLACK MADHAV DIGITAL SOLUTION, we don't just create websites or run campaigns — we build powerful digital experiences that help businesses grow, scale, and stand out in today's competitive market. We combine technology, creativity, and strategy to deliver solutions that are not only visually impressive but also performance-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-green-600" />
              <span className="text-sm font-semibold text-green-700">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6">
              We believe every business is unique
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              That's why we focus on understanding your brand, your audience, and your goals before creating any solution. Our approach is simple:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-5 mb-12"
          >
            {approachSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-3xl p-6 shadow-lg border border-slate-200 hover:border-blue-300 overflow-hidden"
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center text-3xl font-black shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                {i < approachSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-300 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
          >
            <p className="text-lg font-semibold">
              This ensures that every project we deliver adds real value to your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Our Difference</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950">
              What Makes Us Different
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {differences.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950">
              We specialize in building complete digital ecosystems
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
          >
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">Meet Our Experts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950">
              Meet the team driving your digital success
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              Our experts combine strategy, design, development, and growth skills to deliver exceptional digital solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {experts.map((expert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-600 to-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-6">
                  {expert.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">{expert.name}</h3>
                <p className="text-sm font-semibold text-cyan-700 mb-4">{expert.role}</p>
                <p className="text-slate-600 leading-relaxed">{expert.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Mindset */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-3"
          >
            {[
              {
                title: "Our Vision",
                description:
                  "To empower businesses with digital innovation and become a trusted growth partner for brands worldwide.",
                color: "from-blue-600 to-blue-700",
              },
              {
                title: "Our Mission",
                description:
                  "To deliver high-quality digital solutions that combine creativity, performance, and technology to achieve real business results.",
                color: "from-indigo-600 to-indigo-700",
              },
              {
                title: "Our Mindset",
                description:
                  "We think like business owners, not just service providers. Your success is our success — and that's what drives everything we do.",
                color: "from-purple-600 to-purple-700",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all`}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg leading-relaxed opacity-95">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950">
              How We Work
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-5 mb-12"
          >
            {workSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-blue-950 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 text-center">{step.description}</p>
                {i < workSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-8 text-blue-300 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Extra Sections Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950">
              What Drives Our Success
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {extraSections.map((section, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 group-hover:text-indigo-600 transition-all">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{section.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{section.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-blue-950 to-blue-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Let's Build Something Powerful
            </h2>
            <p className="text-xl mb-8 opacity-95">
              We are here to turn your ideas into reality and help your business grow in the digital world. Let's build something impactful together and take your business to the next level.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Start Your Project Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
