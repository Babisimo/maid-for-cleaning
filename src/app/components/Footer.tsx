import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#str", label: "Short-Term Rentals" },
  { href: "#faq", label: "FAQ" },
  { href: "#policies", label: "Policies" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white/75">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Image src="/logo-mark-dark.png" alt="Maid for Cleaning LLC" width={720} height={470} className="h-14 w-auto" />
          <p className="mt-5 max-w-xs">
            Residential, commercial, and short-term rental cleaning. Licensed &amp; insured.
          </p>
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="text-base font-bold text-white">Explore</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 md:grid-cols-1">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="inline-block py-1.5 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold text-white">Contact</h2>
          <ul className="mt-3">
            <li>
              <a href="mailto:hello@maidforcleaning.com" className="inline-block py-1.5 transition-colors hover:text-white">
                hello@maidforcleaning.com
              </a>
            </li>
            <li>
              <a href="tel:+15551234567" className="inline-block py-1.5 transition-colors hover:text-white">
                (555) 123-4567
              </a>
            </li>
            <li className="py-1.5">Your City, ST</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="wrap py-5 text-sm text-white/60">
          © {new Date().getFullYear()} Maid for Cleaning LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
