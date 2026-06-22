import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroSection } from "./HeroSection";
import {
  ArrowRight,
  BarChart,
  CheckCircle2,
  Code,
  Globe,
  Layout,
  Megaphone,
  Palette,
  Search,
  Smartphone,
  Star,
  Tag,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Web Development",
    description:
      "Professional, fast, and responsive websites designed to convert visitors into customers.",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "App Development",
    description:
      "Modern mobile applications for Android and cross-platform that deliver smooth performance and user experience.",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "Digital Marketing",
    description:
      "Result-driven marketing strategies to increase brand awareness, traffic, and leads.",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "SEO",
    description:
      "Improve your Google ranking and reach more customers organically.",
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "AI Solutions",
    description:
      "Smart automation and AI-powered systems to improve efficiency and business growth.",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Graphic Design",
    description:
      "Creative designs that strengthen your brand identity and visual communication.",
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: "UI/UX Design",
    description:
      "User-focused designs that improve usability, engagement, and conversion rates.",
  },
  {
    icon: <Tag className="w-7 h-7" />,
    title: "Branding",
    description:
      "Build a strong and memorable brand identity that stands out in the market.",
  },
];

const whyChooseItems = [
  {
    title: "Business-Focused Solutions",
    description: "We design every solution based on your business goals and target audience.",
  },
  {
    title: "Modern & Professional Design",
    description: "Clean, premium, and user-friendly designs that build trust and credibility.",
  },
  {
    title: "Complete Services Under One Roof",
    description: "From development to marketing, everything is handled by one expert team.",
  },
  {
    title: "Experienced Team",
    description: "Skilled designers, developers, and marketers working together for your success.",
  },
  {
    title: "Long-Term Support",
    description: "We don't just deliver — we support your business for long-term growth.",
  },
];

const portfolioItems = [
  {
    title: "E-commerce Website",
    description:
      "Developed a high-performance e-commerce website with modern UI/UX, responsive design, and secure checkout.",
  },
  {
    title: "Business Website",
    description:
      "Created a professional business website to strengthen brand identity and capture qualified leads.",
  },
  {
    title: "Mobile App UI",
    description:
      "Designed an intuitive mobile app interface with smooth navigation and modern visuals for better user retention.",
  },
  {
    title: "Digital Marketing Campaign",
    description:
      "Executed targeted marketing campaigns that increased reach, engagement, and lead generation.",
  },
  {
    title: "SEO Optimization",
    description:
      "Optimized website structure and content to improve search rankings and organic traffic.",
  },
  {
    title: "Brand Identity Design",
    description:
      "Developed a cohesive brand identity system with logo, colors, and visual guidelines.",
  },
];

const testimonials = [
  {
    category: "Web Development",
    rating: 5,
    quote:
      "We needed a modern and fast website that reflects our brand professionally. The team understood our requirements clearly and delivered beyond expectations. The website design and performance exceeded expectations. Everything is fast, responsive, and user-friendly.",
    author: "Nikhil Patel, Patel Fashion Hub",
  },
  {
    category: "App Development",
    rating: 5,
    quote:
      "We wanted a mobile app that is simple, fast, and easy to use. The team delivered a smooth and high-quality application. Smooth app performance with a clean interface. The team delivered exactly what we needed.",
    author: "Neha Sharma, Urban Trendz",
  },
  {
    category: "Digital Marketing",
    rating: 5,
    quote:
      "We were struggling to generate leads online before working with them. Their marketing strategies brought real results. Our lead generation improved significantly after working with them. Great marketing strategies.",
    author: "Amit Verma, Style Street India",
  },
  {
    category: "SEO Services",
    rating: 5,
    quote:
      "Our website was not ranking on search engines before. Their SEO work made a big difference in visibility. We saw noticeable improvement in rankings and organic traffic within months. Their SEO strategy is result-driven and well-planned. Highly recommended.",
    author: "Priya Mehta, NextGen Store",
  },
  {
    category: "AI Solutions",
    rating: 5,
    quote:
      "We needed automation to reduce manual work and improve efficiency. Their AI solutions were practical and effective. AI automation saved us time and improved our workflow efficiency.",
    author: "Karan Shah",
  },
  {
    category: "Graphic Design",
    rating: 5,
    quote:
      "We were looking for creative visuals that match our brand identity. Their designs were exactly what we needed. Creative and eye-catching designs that perfectly match our brand identity.",
    author: "Ritu Agarwal",
  },
  {
    category: "UI/UX Design",
    rating: 5,
    quote:
      "Our platform needed a better user experience to improve engagement. Their design approach was user-focused and modern. User experience improved significantly after redesign. Clean and modern design.",
    author: "Manish Gupta",
  },
  {
    category: "Branding",
    rating: 5,
    quote:
      "Our brand identity was inconsistent before working with them. They created a strong and professional brand presence. Our brand identity now looks professional and consistent across all platforms.",
    author: "Sneha Desai",
  },
];

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We provide complete IT and digital solutions including website development, mobile applications, AI solutions, UI/UX design, SEO, digital marketing, branding, and video production.",
  },
  {
    question: "How long will my project take to complete?",
    answer:
      "The timeline depends on the project scope. A basic website usually takes 1–2 weeks, while advanced applications or custom solutions may take 3–6 weeks or more.",
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Yes, every project is designed based on your business goals, target audience, and industry requirements.",
  },
  {
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer:
      "Absolutely. All our websites are fully responsive and built with SEO best practices to ensure better visibility and performance.",
  },
  {
    question: "Do you provide support after the project is completed?",
    answer:
      "Yes, we offer ongoing support, maintenance, and updates to ensure your system runs smoothly.",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "You can contact us directly or book a free consultation. Our team will guide you through the complete process.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed Successfully" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 20, suffix: "+", label: "Services Offered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 95, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 30, suffix: "+", label: "Ongoing Projects & Support Clients" },
];

const processSteps = [
  {
    title: "Step 1 – Understanding Requirements",
    description:
      "We start by understanding your business goals, challenges, and project requirements.",
  },
  {
    title: "Step 2 – Research & Planning",
    description:
      "We analyze your industry and create a proper strategy and roadmap for execution.",
  },
  {
    title: "Step 3 – UI/UX Design",
    description: "We design modern, user-friendly, and visually appealing interfaces.",
  },
  {
    title: "Step 4 – Development",
    description:
      "Our team develops fast, secure, and scalable solutions using modern technologies.",
  },
  {
    title: "Step 5 – Testing & Quality Check",
    description:
      "We test everything to ensure performance, responsiveness, and bug-free delivery.",
  },
  {
    title: "Step 6 – Deployment",
    description:
      "We launch your project on a live server with complete optimization.",
  },
  {
    title: "Step 7 – Support & Maintenance",
    description:
      "We provide ongoing support, updates, and improvements for long-term success.",
  },
];

const industries = [
  {
    title: "E-commerce",
    description: "Helping businesses build online stores and digital marketplaces.",
  },
  {
    title: "Healthcare",
    description: "Developing secure and reliable healthcare systems and applications.",
  },
  {
    title: "Education",
    description: "Creating e-learning platforms, institute websites, and training systems.",
  },
  {
    title: "Corporate & Business",
    description: "Professional solutions for companies, startups, and enterprises.",
  },
  {
    title: "Hospitality",
    description: "Websites and booking systems for hotels, restaurants, and travel businesses.",
  },
  {
    title: "Real Estate",
    description: "Property listing platforms and real estate management systems.",
  },
  {
    title: "Automotive",
    description: "Digital solutions for vehicle services, dealerships, and platforms.",
  },
  {
    title: "Finance & Consulting",
    description: "Secure and professional systems for financial and consulting services.",
  },
  {
    title: "Startups",
    description: "Complete digital support to launch and scale new business ideas.",
  },
];

const CONTACT_STORAGE_KEY = "contactSubmissions";


export default function Home() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback("");

    if (!name.trim() || !businessName.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      setFeedback("Please fill in all fields before submitting.");
      return;
    }

    const digitCount = phone.replace(/\D/g, "").length;
    if (digitCount !== 10) {
      setFeedback("Please enter a valid 10-digit mobile number.");
      return;
    }

    const submission = {
      id: Date.now(),
      name: name.trim(),
      businessName: businessName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service,
      projectDetails: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || "[]");
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify([submission, ...existing]));

    setName("");
    setBusinessName("");
    setPhone("");
    setEmail("");
    setService("Web Development");
    setMessage("");
    setFeedback("Thank you! Your message has been sent and is visible to admin.");
  };

  useEffect(() => {
    const duration = 1200;
    const frameRate = 24;
    const intervalTime = Math.round(1000 / frameRate);
    const totalFrames = Math.round(duration / intervalTime);
    const increments = stats.map((item) => item.value / totalFrames);
    let frame = 0;

    const interval = setInterval(() => {
      frame += 1;
      setCounts((prev) =>
        prev.map((count, index) => {
          const next = Math.min(stats[index].value, Math.round(increments[index] * frame));
          return next;
        })
      );

      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div id="top" className="flex min-h-screen flex-col pt-24 bg-slate-50 text-slate-800" data-testid="page-home">
      
      <HeroSection />
      {/* About Section */}
      <section id="about" className="border-y border-blue-100 bg-gradient-to-b from-white to-blue-50/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Your Trusted Digital Growth Partner
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
                Your Trusted Digital Growth Partner
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Black Madhav Digital Solution is a modern IT and digital agency focused on helping businesses grow through innovative technology and creative strategies.
                </p>
                <p>
                  We work with startups, brands, and companies to deliver high-quality digital solutions that improve visibility, performance, and customer engagement.
                </p>
                <p>
                  Our approach is simple — understand your business, build the right solution, and help you achieve real results.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8 shadow-sm"
            >
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 p-8 text-white shadow-lg shadow-blue-950/15">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  About Us
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-snug">
                  Helping businesses grow online with design, technology, and strategy.
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Digital strategy",
                  "Custom software",
                  "Creative branding",
                  "Performance marketing",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-xl border border-blue-100 bg-white p-5 shadow-xs transition-all duration-300 hover:border-blue-300"
                  >
                    <p className="font-semibold text-blue-950 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Services
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Complete Digital Services For Your Business
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We provide end-to-end solutions designed to help your business succeed in the digital world.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.1), 0 8px 10px -6px rgb(59 130 246 / 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 }}
                className="group rounded-2xl border border-blue-100 bg-white p-7 transition-all duration-300 hover:border-blue-400"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-blue-950 transition-colors group-hover:text-blue-600 duration-300">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-blue-50/20 via-blue-50/50 to-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Why Choose Us
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
                Why Clients Choose Black Madhav
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                We provide business-focused digital solutions, modern design, complete services, and long-term support to help your brand grow.
              </p>
            </div>
            <div className="grid gap-4">
              {whyChooseItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.05 }}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:border-blue-300 transition-all duration-300"
                >
                  <div className="mb-3 flex items-center gap-3 text-blue-600">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-500" />
                    <h3 className="text-lg font-semibold text-blue-950">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Our Work Speaks For Itself
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Explore our projects including websites, apps, branding, and digital marketing campaigns designed for real business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                className="group rounded-2xl border border-blue-100 bg-white p-8 shadow-sm hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase">Featured Project</div>
                <h3 className="mb-3 text-xl font-semibold text-blue-950 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                  View Project Details <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white via-blue-50/30 to-blue-50/50 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative rounded-2xl border border-blue-100 bg-white p-8 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 text-amber-500" />
                    ))}
                  </div>
                </div>
                <span className="absolute top-4 right-6 text-6xl text-blue-100 font-serif leading-none select-none">“</span>
                <p className="relative z-10 mb-6 text-lg italic leading-relaxed text-blue-900">
                  {item.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 uppercase">
                    {item.author.split(" ").map((word) => word[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-950">{item.author}</p>
                    <p className="text-xs text-gray-400">Client feedback</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Everything you need to know before starting your project with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-blue-100 bg-white p-6 md:p-8 shadow-sm hover:border-blue-200 transition-all duration-300"
              >
                <h3 className="mb-3 text-lg md:text-xl font-semibold text-blue-950 flex gap-3 items-start">
                  <span className="text-blue-500 font-bold">Q.</span>
                  {item.question}
                </h3>
                <div className="pl-6 text-sm md:text-base leading-relaxed text-slate-600 border-l-2 border-blue-50">
                  {item.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-gradient-to-b from-blue-50/50 via-blue-50/30 to-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Work Speaks Through Numbers
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Our Work Speaks Through Numbers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Delivering consistent results and building long-term client relationships.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <p className="mb-2 text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  {counts[index]}
                  {item.suffix}
                </p>
                <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Our Step-by-Step Working Process
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We follow a structured process to deliver high-quality and result-driven solutions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl border border-blue-100 bg-white p-8 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-gradient-to-b from-white via-blue-50/20 to-blue-50/40 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Industries We Serve
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We deliver customized digital solutions for businesses across various industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.08 }}
                className="group rounded-2xl border border-blue-100 bg-white p-8 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-1.5 h-8 bg-blue-500 rounded-r-md -ml-8 mb-4 group-hover:bg-indigo-600 transition-colors" />
                <h3 className="mb-3 text-xl font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50/30 to-blue-50 p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-blue-950">
              "We don't just deliver projects — we build long-term partnerships that help your business grow digitally."
            </p>
            <p className="mt-4 text-sm uppercase tracking-widest text-blue-600 font-semibold">
              BLACK MADHAV DIGITAL SOLUTION
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center text-white">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Ready To Grow Your Business?
            </h2>
            <p className="mb-10 text-xl text-blue-200/80">
              Let's build something powerful together. Start your digital journey with Black Madhav Digital Solution today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-lg font-semibold text-blue-950 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5"
              >
                Start Project
              </a>
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-blue-500/30 bg-transparent px-10 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/5 hover:border-blue-400 hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Let's Connect
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
                Let's Connect
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-blue-950">Address</h3>
                  <p>G8 Uniconprime, Near Avadh Showroom, Jamnagar, Gujarat</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">Phone</h3>
                  <p>+91 9876543210</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">Email</h3>
                  <p>info@blackmadhav.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-8 shadow-sm">
              <form className="space-y-5" onSubmit={handleSubmit}>
                {feedback && (
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-slate-900">
                    {feedback}
                  </div>
                )}
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-950">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-950">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(event) => setBusinessName(event.target.value)}
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                    placeholder="Enter your business name"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-blue-950">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => {
                        const digits = event.target.value.replace(/\D/g, "");
                        if (digits.length <= 10) {
                          setPhone(digits);
                        }
                      }}
                      className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                      placeholder="1234567890"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-blue-950">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                      placeholder="info@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-950">
                    Select Service
                  </label>
                  <select
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                  >
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Digital Marketing</option>
                    <option>SEO</option>
                    <option>UI/UX Design</option>
                    <option>Branding</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-950">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                    placeholder="Share a few details about your project"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-base font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: "none" }}>
        Developed by Vandit Katbamna
      </div>
      {/* Footer moved to global `Footer` component */}
    </div>
  );
}
