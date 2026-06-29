import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Blackmadhavicon.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const otherLinks = [
  { name: "Careers", path: "/careers" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isOthersActive = otherLinks.some((link) => location.pathname === link.path);

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
      <div className="container mx-auto flex min-w-0 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3" data-testid="link-home-logo">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-black text-xl font-bold text-white transition-opacity group-hover:opacity-80 sm:h-12 sm:w-12">
            <img src={logo} alt="BMDS Logo" className="h-7 w-7 object-contain" />
          </div>
          <span className="hidden truncate text-lg font-bold tracking-tight text-black sm:block">
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
          <div className="group relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                isOthersActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-600 hover:text-black"
              }`}
              data-testid="btn-desktop-others"
            >
              Others
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-3 w-48 translate-y-2 rounded-lg border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {otherLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                  data-testid={`link-desktop-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
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
          className="shrink-0 p-2 text-black transition-opacity hover:opacity-70 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
            className="absolute left-0 right-0 top-full max-h-[calc(100svh-5rem)] overflow-y-auto overflow-x-hidden border-b border-white/50 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
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
              <div className="rounded-md border border-gray-200 p-2">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Others
                </p>
                {otherLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block rounded-md p-3 text-base font-medium transition-colors ${
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
              </div>
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
