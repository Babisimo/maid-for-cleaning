// src/app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ServiceCard from "./components/ServiceCard";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Policies from "./components/Policies";
import { Building2, Home as HomeIcon, Package, Sparkles, CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        {/* Hero (white by default) */}
        <Hero />

        {/* Services (white) */}
        <Section id="services">
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<HomeIcon className="h-5 w-5 text-brand-700" />}
              title="Residential Cleaning"
              desc="Recurring or one-time deep cleans with kitchens, baths, floors, and dusting handled."
              items={["Standard & deep clean", "Move-in/out", "Eco-friendly supplies"]}
            />
            <ServiceCard
              icon={<Building2 className="h-5 w-5 text-brand-700" />}
              title="Commercial Cleaning"
              desc="Offices, studios, and retail. After-hours options so your team stays focused."
              items={["Trash & surfaces", "Restrooms & breakrooms", "Floors & glass"]}
            />
            <ServiceCard
              icon={<Package className="h-5 w-5 text-brand-700" />}
              title="Short-Term Rentals"
              desc="Fast turnovers with hotel-level standards, linen service, and restock checklists."
              items={["Laundry & linens", "Photo verification", "Damage notes"]}
            />
          </div>
        </Section>

        {/* Pricing (BLUE) */}
        <Section id="pricing" className="section-blue">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Standard", price: "$119+", points: ["1-2 bed", "Kitchen & bath", "Floors & surfaces"] },
              { name: "Deep Clean", price: "$219+", points: ["Inside appliances", "Baseboards", "Detail focus"] },
              { name: "STR Turnover", price: "$139+", points: ["Linen service", "Restock check", "Photo report"] },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <span className="badge">{t.name}</span>
                <h3 className="mt-2 text-3xl font-extrabold">{t.price}</h3>
                <ul className="mt-4 grid gap-2 text-sm">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-700" /> {p}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary mt-6 w-full">
                  Get Exact Quote
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* STR Highlights (white) */}
        <Section id="str">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold">Short-Term Rental Turnovers</h2>
              <p className="mt-3 text-default">
                Fast, photo-verified cleans between guests. We handle linens, restocking, and checklists so your reviews stay glowing.
              </p>
              <ul className="mt-4 grid gap-2 text-sm">
                {[
                  "Linen service & laundry",
                  "Inventory & restock checks",
                  "Damage notes with photos",
                  "Staging for listings",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand-700" /> {x}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary mt-6">
                Turnover Quote
              </a>
            </div>

            <div className="card p-6">
              <h3 className="font-bold">Host-friendly Add-Ons</h3>
              <ul className="mt-3 text-sm text-default grid gap-2 list-disc list-inside">
                <li>Starter toiletries pack</li>
                <li>Coffee/tea bar setup</li>
                <li>Mid-stay tidy (quick refresh)</li>
                <li>Seasonal deep clean</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Testimonials (BLUE) */}
        <Section className="section-blue">
          <h2 className="text-3xl font-extrabold mb-6">People are low-key obsessed</h2>
          <Testimonials />
        </Section>

        {/* CTA (white) */}
        <Section>
          <CTA />
        </Section>

        {/* FAQ (BLUE) */}
        <Section id="faq" className="section-blue">
          <h2 className="text-3xl font-extrabold mb-6">FAQ</h2>
          <FAQ />
        </Section>

        {/* Policies (white) */}
        <Section id="policies">
          <h2 className="text-3xl font-extrabold mb-6">Policies & Service Details</h2>
          <Policies />
        </Section>

        {/* Contact (BLUE) */}
        <Section id="contact" className="section-blue">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-extrabold">Let’s make it shine</h2>
              <p className="mt-2 text-default">
                Drop details about your home, office, or rental and we’ll send a fast, transparent quote.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
              <p className="mt-4 text-sm text-default">
                Prefer to chat? Call{" "}
                <a className="font-semibold text-white underline/20 hover:underline" href="tel:+15551234567">
                  (555) 123-4567
                </a>
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold">Service Area</h3>
              <p className="mt-2 text-sm text-default">
                Your City and surrounding neighborhoods. Same-day slots often available.
              </p>
              <div className="mt-4 aspect-video rounded-xl bg-neutral-100 flex items-center justify-center">
                Map placeholder
              </div>
              <h4 className="mt-6 font-semibold">Hours</h4>
              <p className="text-sm text-default">Mon–Sat: 8am–6pm • Sun: by appointment</p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
