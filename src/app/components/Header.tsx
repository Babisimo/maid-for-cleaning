'use client'
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3">
          {/* <Image
            src="/logo.jpeg"
            alt="Maid for Cleaning LLC"
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          /> */}
          <span className="font-extrabold text-brand-500">Maid for Cleaning LLC</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-brand-900">
          <a href="#services" className="hover:text-brand-700">Services</a>
          <a href="#pricing" className="hover:text-brand-700">Pricing</a>
          <a href="#str" className="hover:text-brand-700">Short-Term Rentals</a>
          <a href="#faq" className="hover:text-brand-700">FAQ</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3 text-white">
          <a href="#contact" className="btn btn-outline">Get a Quote</a>
          <a href="tel:+15551234567" className="btn btn-primary">
            <Phone className="h-4 w-4" /> (555) 123-4567
          </a>
        </div>

        <button className="md:hidden btn btn-outline" onClick={() => setOpen(!open)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-100">
          <div className="container py-3 grid gap-3">
            {["services","pricing","str","faq","contact"].map((id) => (
              <a key={id} onClick={() => setOpen(false)} href={`#${id}`} className="py-2">
                {id.toUpperCase()}
              </a>
            ))}
            <a href="tel:+15551234567" className="btn btn-primary w-full">Call Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
