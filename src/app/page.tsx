// src/app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section, { SectionHeading } from "./components/Section";
import ServiceRow from "./components/ServiceRow";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { IncludedPanel, PoliciesPanel } from "./components/Policies";
import InfoTabs from "./components/InfoTabs";
import MobileActionBar from "./components/MobileActionBar";
import {
  Building2,
  Check,
  Clock,
  Home as HomeIcon,
  MapPin,
  Package,
  Phone,
  Plus,
  Repeat,
  Ruler,
  SprayCan,
} from "lucide-react";

const quoteFactors = [
  { icon: Ruler, title: "Size of the space", desc: "Bedrooms, bathrooms, and square footage." },
  { icon: SprayCan, title: "Type of clean", desc: "Standard upkeep, deep clean, move-in/out, or rental turnover." },
  { icon: Repeat, title: "How often", desc: "A one-time visit or a recurring schedule." },
  { icon: Plus, title: "Add-ons", desc: "Special requests beyond the standard checklist." },
];

const bookingSteps = [
  { title: "Tell us about your space", desc: "Use the quote form or give us a call." },
  { title: "Get your quote", desc: "Flat-rate or hourly, whichever you prefer." },
  { title: "Book with a $50 deposit", desc: "Schedule at least 24 hours ahead to avoid a rush fee." },
  { title: "Start with a deep clean", desc: "First visits reset the home. Regular upkeep keeps it that way." },
];

const turnoverIncludes = [
  "Linen service & laundry",
  "Inventory & restock checks",
  "Damage notes with photos",
  "Staging for listings",
];

const hostAddOns = [
  "Starter toiletries pack",
  "Coffee/tea bar setup",
  "Mid-stay tidy (quick refresh)",
  "Seasonal deep clean",
];

export default function Page() {
  return (
    <>
      <Header />

      <main id="main">
        <Hero />

        {/* Services */}
        <Section id="services" labelledBy="services-title">
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                id="services-title"
                title="Cleaning for homes, offices, and rentals"
                intro="Tell us what kind of space you have. We bring the supplies, the checklist, and a team that treats it with care."
              />
            </div>
            <ul className="divide-y divide-line">
              <ServiceRow
                icon={<HomeIcon aria-hidden className="size-6" />}
                title="Residential cleaning"
                desc="Recurring or one-time deep cleans, with kitchens, baths, floors, and dusting handled."
                items={["Standard & deep clean", "Move-in/out", "Eco-friendly supplies"]}
              />
              <ServiceRow
                icon={<Building2 aria-hidden className="size-6" />}
                title="Commercial cleaning"
                desc="Offices, studios, and retail. After-hours options so your team stays focused."
                items={["Trash & surfaces", "Restrooms & breakrooms", "Floors & glass"]}
              />
              <ServiceRow
                icon={<Package aria-hidden className="size-6" />}
                title="Short-term rentals"
                desc="Fast turnovers with hotel-level standards, linen service, and restock checklists."
                items={["Laundry & linens", "Photo verification", "Damage notes"]}
                link={{ href: "#str", label: "See what a turnover includes" }}
              />
            </ul>
          </div>
        </Section>

        {/* Pricing: quote-based */}
        <Section id="pricing" tone="rinse" labelledBy="pricing-title">
          <SectionHeading
            id="pricing-title"
            title="Every quote is built for your space"
            intro="No one-size price list. We look at your space and send a clear quote before anything is booked."
          />
          <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
            <div>
              <h3 className="text-xl font-extrabold">What shapes your quote</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-10 sm:gap-y-8">
                {quoteFactors.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="border-t border-brand/25 pt-4 sm:pt-5">
                    <Icon aria-hidden className="size-5 text-brand sm:size-6" />
                    <p className="mt-2 font-display font-bold text-ink sm:mt-3 sm:text-lg">{title}</p>
                    <p className="mt-1 text-sm text-ink-soft sm:text-base">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-panel bg-surface p-6 shadow-panel md:p-9">
              <h3 className="text-xl font-extrabold">How booking works</h3>
              <ol className="mt-5 grid gap-5">
                {bookingSteps.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2.25rem_1fr] gap-4">
                    <span className="flex size-9 items-center justify-center rounded-full bg-brand-fill font-display font-bold text-white tabular-nums">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display font-bold text-ink">{step.title}</p>
                      <p className="mt-0.5 text-[0.9375rem] text-ink-soft">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a href="#contact" className="btn btn-primary mt-7 w-full">
                Get a quote
              </a>
            </div>
          </div>
        </Section>

        {/* Short-term rentals */}
        <Section id="str" labelledBy="str-title">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="str-title"
                title="Short-term rental turnovers"
                intro="Fast, photo-verified cleans between guests. We handle linens, restocking, and checklists so your reviews stay glowing."
              />
              <a href="#contact" className="btn btn-primary mt-6 lg:mt-8">
                Get a quote
              </a>
            </div>

            <div className="rounded-panel border border-line bg-surface p-6 shadow-panel md:p-9">
              <h3 className="text-xl font-extrabold">Every turnover includes</h3>
              <ul className="mt-3 divide-y divide-line">
                {turnoverIncludes.map(item => (
                  <li key={item} className="flex items-center gap-3 py-3 font-medium text-ink">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-fill text-white">
                      <Check aria-hidden className="size-4" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-xl font-extrabold">Host add-ons</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {hostAddOns.map(item => (
                  <li key={item} className="flex items-start gap-2 rounded-control bg-rinse px-3 py-2.5 text-sm text-ink sm:text-[0.9375rem]">
                    <Plus aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section tone="rinse" labelledBy="reviews-title">
          <SectionHeading id="reviews-title" title="What clients say" />
          <Testimonials />
        </Section>

        {/* FAQ, policies, and scope share one tabbed section */}
        <Section id="policies" labelledBy="info-title" className="relative">
          <span id="faq" aria-hidden className="absolute top-0" />
          <SectionHeading
            id="info-title"
            title="Questions and policies"
            intro="Quick answers, the fine print, and exactly what each clean covers."
          />
          <InfoTabs
            label="Questions and policies"
            className="mt-7 md:mt-8"
            tabs={[
              { id: "faq", label: "FAQ", content: <FAQ /> },
              { id: "policies", label: "Policies", content: <PoliciesPanel /> },
              { id: "included", label: "What’s included", content: <IncludedPanel /> },
            ]}
          />
        </Section>

        {/* Contact */}
        <Section id="contact" tone="rinse" labelledBy="contact-title">
          <div className="grid items-start gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
            <div>
              <SectionHeading
                id="contact-title"
                title="Request a quote"
                intro="Share a few details about your home, office, or rental and we’ll send a fast, transparent quote."
              />
              <div className="mt-6 lg:mt-8">
                <ContactForm />
              </div>
            </div>

            <aside aria-label="Service area and hours" className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-1 lg:gap-9 lg:pt-3">
              <div className="col-span-2 lg:col-span-1">
                <h3 className="flex items-center gap-2 text-xl font-extrabold">
                  <MapPin aria-hidden className="size-5 text-brand" />
                  Service area
                </h3>
                <p className="mt-2 text-ink-soft">Your City and surrounding neighborhoods. Same-day slots often available.</p>
                <div className="mt-4 flex aspect-[16/9] items-center justify-center rounded-panel border border-dashed border-line-strong bg-surface text-sm font-medium text-ink-soft lg:aspect-[4/3]">
                  Map placeholder
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-lg font-extrabold sm:text-xl">
                  <Clock aria-hidden className="size-5 text-brand" />
                  Hours
                </h3>
                <p className="mt-2 text-ink-soft">
                  Monday to Saturday, 8am to 6pm
                  <br />
                  Sunday by appointment
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-lg font-extrabold sm:text-xl">
                  <Phone aria-hidden className="size-5 text-brand" />
                  Prefer to talk?
                </h3>
                <a
                  href="tel:+15551234567"
                  className="mt-1 inline-block font-display text-xl font-extrabold text-brand underline decoration-brand/30 decoration-2 hover:decoration-brand sm:text-2xl"
                >
                  (555) 123-4567
                </a>
              </div>
            </aside>
          </div>
        </Section>
      </main>

      <Footer />
      <div aria-hidden className="h-[calc(4.5rem+env(safe-area-inset-bottom))] bg-footer md:hidden" />
      <MobileActionBar />
    </>
  );
}
