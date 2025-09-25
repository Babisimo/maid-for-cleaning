'use client'
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Maid for Cleaning LLC"
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="font-extrabold text-neutral-900">Maid for Cleaning LLC</span>
        </a>

        {/* nav: darker text, add Policies (no buttons) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-900">
          <a href="#services" className="hover:text-brand-700">Services</a>
          <a href="#pricing" className="hover:text-brand-700">Pricing</a>
          <a href="#str" className="hover:text-brand-700">Short-Term Rentals</a>
          <a href="#faq" className="hover:text-brand-700">FAQ</a>
          <a href="#policies" className="hover:text-brand-700">Policies</a> {/* NEW */}
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </nav>

        {/* keep phone action if you like; it’s not a “Policies” button */}
        <div className="hidden md:flex items-center gap-2 text-neutral-900">
          <Phone className="h-4 w-4" />
          <a href="tel:+15551234567" className="hover:text-brand-700">(555) 123-4567</a>
        </div>

        <button className="md:hidden rounded-xl border border-neutral-200 px-3 py-2" onClick={() => setOpen(!open)}>
          <Menu className="h-5 w-5 text-neutral-900" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white text-neutral-900">
          <div className="container py-3 grid gap-2">
            {["services","pricing","str","faq","policies","contact"].map((id) => (
              <a key={id} onClick={() => setOpen(false)} href={`#${id}`} className="py-2 hover:text-brand-700">
                {id.toUpperCase()}
              </a>
            ))}
            <a href="tel:+15551234567" className="py-2 hover:text-brand-700 flex items-center gap-2">
              <Phone className="h-4 w-4" /> (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
