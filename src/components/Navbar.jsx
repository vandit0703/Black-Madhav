import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Blackmadhavicon.svg";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/35 backdrop-blur-xl border-white/50 shadow-[0_8px_30px_rgba(15,23,42,0.12)] py-3"
          : "bg-white border-transparent py-5"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
          <div className="w-12 h-12 rounded-md bg-black flex items-center justify-center text-white font-bold text-xl group-hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={logo} alt="BMDS Logo" className="h-7 w-7 max-w-full object-contain" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block text-black">
            Black Madhav Digital Solutions
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-600 hover:text-black"
              }`}
              data-testid={`link-desktop-${link.name.toLowerCase()}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-black px-5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 active:opacity-75"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-black hover:opacity-70 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_30px_rgba(15,23,42,0.12)] overflow-hidden md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium p-3 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 pb-1 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-black px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  data-testid="btn-mobile-nav-cta"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
