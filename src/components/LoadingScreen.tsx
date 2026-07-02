import { motion } from "framer-motion";
import logo from "../assets/Blackmadhavicon.svg";

type LoadingScreenProps = {
  isVisible: boolean;
  isFadingOut: boolean;
};

const particles = [
  { left: "12%", top: "20%", delay: 0 },
  { left: "80%", top: "18%", delay: 0.8 },
  { left: "20%", top: "78%", delay: 1.4 },
  { left: "78%", top: "74%", delay: 2.1 },
  { left: "50%", top: "10%", delay: 0.4 },
  { left: "53%", top: "88%", delay: 1.8 },
];

const dots = [0, 1, 2];

export default function LoadingScreen({ isVisible, isFadingOut }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(12,18,32,0.95),_rgba(2,6,23,0.98))] transition-all duration-700 ${
        isFadingOut ? "opacity-0 backdrop-blur-none" : "opacity-100 backdrop-blur-3xl"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.03)_65%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_55%)]" />

      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.28, 0.92, 0.28],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{ duration: 3.2 + index * 0.35, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.04, y: -12 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative flex w-[min(92vw,30rem)] flex-col items-center justify-center px-6 py-8 text-center sm:px-10 sm:py-10"
      >
        <div className="relative mb-8 flex items-center justify-center">
          <motion.div
            className="absolute inset-[-1.4rem] rounded-full border border-cyan-300/25"
            animate={{ rotate: 360, scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[-2.25rem] rounded-full border border-cyan-400/15"
            animate={{ rotate: -360, scale: [1, 1.08, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[-0.35rem] rounded-full bg-cyan-400/20 blur-3xl"
            animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.38, 0.7, 0.38] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={logo}
            alt="Black Madhav logo"
            className="relative h-24 w-24 rounded-full object-contain sm:h-32 sm:w-32"
            animate={{
              scale: [0.94, 1.02, 1],
              rotate: [-1.6, 1.4, -0.7, 0],
              filter: ["drop-shadow(0 0 0 rgba(34,211,238,0))", "drop-shadow(0 0 18px rgba(34,211,238,0.4))", "drop-shadow(0 0 0 rgba(34,211,238,0))"],
            }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.p
          className="text-[0.67rem] font-semibold uppercase tracking-[0.7em] text-cyan-200/80 sm:text-[0.75rem]"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          BLACK MADHAV DIGITAL SOLUTIONS...
        </motion.p>

        <div className="mt-4 flex items-center gap-2">
          {dots.map((dot) => (
            <motion.span
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1.1, 0.85] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.16 }}
            />
          ))}
        </div>

        <div className="mt-6 h-1.5 w-44 overflow-hidden rounded-full border border-white/10 bg-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)] sm:w-56">
          <motion.div
            className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.2),rgba(34,211,238,0.95),rgba(255,255,255,0.3))]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
