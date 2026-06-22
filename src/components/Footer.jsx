export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative border-t border-blue-950">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="mb-4 text-xl font-bold text-white">Black Madhav Digital Solution</p>
            <p className="max-w-md leading-relaxed text-gray-400">
              Black Madhav Digital Solution helps businesses grow with modern websites, mobile apps, AI solutions, branding, and digital marketing services.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">Quick Links</p>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  { label: "Home", href: "#top" },
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Portfolio", href: "#portfolio" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-blue-400">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">Services</p>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  "Web Development",
                  "App Development",
                  "Digital Marketing",
                  "SEO",
                  "UI/UX Design",
                  "Branding",
                ].map((service) => (
                  <li key={service} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">Contact Info</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Email: blackmadhav.com</li>
              <li>Phone: +91 7041090715</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 8128730715</li>
              <li>Address: Jamnagar, Gujarat</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-950/60 pt-6 text-center text-sm text-gray-400">
          © 2026 Black Madhav Digital Solution. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
