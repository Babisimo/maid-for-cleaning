import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="container py-8">
        {/* Top row */}
        <div className="grid gap-6 md:grid-cols-5 items-start">
          {/* Brand / blurb (span 2 cols on md+) */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="Maid for Cleaning LLC"
                width={22}
                height={22}
                className="rounded-sm"
              />
              <strong className="text-neutral-100">Maid for Cleaning LLC</strong>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Residential, commercial, and short-term rental cleaning. Licensed &amp; insured.
            </p>
          </div>

          {/* Links (3 skinny columns) */}
          <nav className="md:col-span-2 grid grid-cols-3 gap-4 text-sm">
            <ul className="space-y-1">
              <li><a href="#services" className="text-neutral-300 hover:text-white">Services</a></li>
              <li><a href="#pricing"  className="text-neutral-300 hover:text-white">Pricing</a></li>
            </ul>
            <ul className="space-y-1">
              <li><a href="#str"      className="text-neutral-300 hover:text-white">STR Turnovers</a></li>
              <li><a href="#faq"      className="text-neutral-300 hover:text-white">FAQ</a></li>
            </ul>
            <ul className="space-y-1">
              <li><a href="#policies" className="text-neutral-300 hover:text-white">Policies</a></li>
              <li><a href="#contact"  className="text-neutral-300 hover:text-white">Contact</a></li>
            </ul>
          </nav>

          {/* Contact (solo column) */}
          <div className="md:justify-self-end text-sm">
            <p className="text-neutral-300">hello@maidforcleaning.com</p>
            <p className="text-neutral-300">(555) 123-4567</p>
            <p className="text-neutral-300">Your City, ST</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 border-t border-neutral-800">
          <div className="py-4 text-xs text-neutral-400">
            © {new Date().getFullYear()} Maid for Cleaning LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
