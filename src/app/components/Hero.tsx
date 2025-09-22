import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />
      <div className="container grid lg:grid-cols-2 gap-10 items-center py-24">
        <div>
          <span className="badge mb-4">Residential • Commercial • Short-Term Rentals</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Clean that feels <span className="text-brand-700">brand new</span> — every time
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            Book lightning-fast scheduling with vetted cleaners, flexible plans, and five-star results. No stress, just sparkle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">Get an Instant Quote</a>
            <a href="#services" className="btn btn-outline">See Services</a>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-neutral-800">
            {['Supplies included','Insured & background-checked','Satisfaction guarantee'].map(t => (
              <li className="flex items-center gap-2" key={t}>
                <CheckCircle2 className="h-4 w-4 text-brand-700"/>{t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Image
            src="/hero.jpg"
            alt="Spotless kitchen"
            width={1280}
            height={960}
            className="rounded-2xl shadow-soft border border-neutral-100"
            priority
          />
          <div className="absolute -bottom-6 -left-6 bg-white border border-neutral-100 shadow-soft rounded-2xl p-4">
            <p className="text-sm">
              <span className="font-semibold">450+ cleans</span> this year • 4.9/5 rating
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
