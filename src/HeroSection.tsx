import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-6rem)] overflow-hidden bg-white text-black"
    >
      <HeroBackground />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
              PREMIUM DIGITAL AGENCY
            </span>

            <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              We Build Digital <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Solutions</span> That Grow Your Business
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From premium web platforms to AI-powered growth systems, we craft elegant digital experiences that empower businesses, increase conversions, and create long-term resilience.
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.01 }}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-400 px-10 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-300 shadow-lg shadow-sky-500/20 sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
    </section>
  );
}
