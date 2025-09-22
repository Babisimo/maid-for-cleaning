import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Maid for Cleaning LLC" width={24} height={24} />
            <strong>Maid for Cleaning LLC</strong>
          </div>
          <p className="mt-3 text-neutral-700">
            Residential, commercial, and short-term rental cleaning. Licensed &amp; insured.
          </p>
        </div>
        <nav className="grid gap-2">
          <a href="#services" className="hover:text-brand-700">Services</a>
          <a href="#pricing" className="hover:text-brand-700">Pricing</a>
          <a href="#str" className="hover:text-brand-700">STR Turnovers</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </nav>
        <div className="grid gap-2">
          <p>hello@maidforcleaning.com</p>
          <p>(555) 123-4567</p>
          <p>Your City, ST</p>
        </div>
      </div>
      <div className="border-t border-neutral-100">
        <div className="container py-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Maid for Cleaning LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
