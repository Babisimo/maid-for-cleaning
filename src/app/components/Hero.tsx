import Image from 'next/image';
import { Phone, ShieldCheck, Sparkles, SprayCan, Star } from 'lucide-react';

const trust = [
  { icon: SprayCan, label: 'Supplies included' },
  { icon: ShieldCheck, label: 'Insured & background-checked' },
  { icon: Sparkles, label: 'Satisfaction guarantee' },
  { icon: Star, label: '450+ cleans this year, 4.9/5 rating' },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-paper">
      <div className="wrap grid items-center gap-8 pt-8 pb-10 md:gap-12 md:pt-14 md:pb-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-16 lg:pb-20">
        <div>
          <h1
            id="hero-title"
            className="text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.875rem]"
          >
            Cleaning you can trust with your keys.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft md:mt-6 md:text-xl">
            Residential, commercial, and short-term rental cleaning by an insured, background-checked team. Flexible plans, supplies included.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
            <a href="#contact" className="btn btn-primary px-6">Get a quote</a>
            <a href="tel:+15551234567" className="btn btn-quiet px-6">
              <Phone aria-hidden className="size-4 text-brand" />
              (555) 123-4567
            </a>
          </div>
        </div>

        {/* Fogged glass wiped clean once on load (see .wipe-* in globals.css) */}
        <div className="relative isolate overflow-hidden rounded-panel border border-line bg-rinse shadow-panel">
          <div className="flex aspect-[16/9] items-center justify-center p-6 sm:aspect-[5/4] sm:p-16">
            <Image
              src="/logo-mark.png"
              alt="Maid for Cleaning LLC logo"
              width={720}
              height={470}
              priority
              sizes="(min-width: 1024px) 420px, 60vw"
              className="h-auto w-full max-w-[13rem] sm:max-w-[25rem] dark:hidden"
            />
            <Image
              src="/logo-mark-dark.png"
              alt="Maid for Cleaning LLC logo"
              width={720}
              height={470}
              sizes="(min-width: 1024px) 420px, 60vw"
              className="hidden h-auto w-full max-w-[13rem] sm:max-w-[25rem] dark:block"
            />
          </div>
          <div aria-hidden className="wipe-fog" />
          <div aria-hidden className="wipe-blade-track">
            <span className="wipe-blade" />
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-surface">
        <ul className="wrap grid grid-cols-2 gap-x-4 gap-y-4 py-5 lg:grid-cols-4 lg:gap-x-8 lg:py-6">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-ink sm:gap-3 sm:text-base">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rinse text-brand sm:size-9">
                <Icon aria-hidden className="size-4 sm:size-[1.125rem]" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
