import { Star } from 'lucide-react'

const data = [
    { name: 'Alex R.', role: 'STR Host', quote: 'Turnovers are finally painless. Guests walk in and say ‘wow.’', rating: 5 },
    { name: 'Priya S.', role: 'Homeowner', quote: 'Consistent, trustworthy, and fast. My house hasn’t felt this fresh in years.', rating: 5 },
    { name: 'Diego M.', role: 'Office Manager', quote: 'Our workplace stays spotless without disrupting the team. A++', rating: 5 },
]

function Stars({ rating }: { rating: number }) {
    return (
        <div role="img" aria-label={`${rating} out of 5 stars`} className="flex gap-0.5 text-brand">
            {Array.from({ length: rating }, (_, i) => (
                <Star key={i} aria-hidden className="size-[1.125rem] fill-current" />
            ))}
        </div>
    )
}

// Swipe row below lg, featured grid at lg and up
export default function Testimonials() {
    const [featured, ...rest] = data
    return (
        <div
            role="region"
            aria-label="Client reviews"
            tabIndex={0}
            className="scroll-row -mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-1 pb-6 md:-mx-8 md:scroll-px-8 md:px-8 lg:mx-0 lg:mt-10 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-6 lg:overflow-visible lg:p-0"
        >
            <figure className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-panel bg-surface p-6 shadow-panel sm:w-[60%] md:p-10 lg:w-auto">
                <Stars rating={featured.rating} />
                <blockquote className="mt-4 font-display text-[1.375rem] font-bold leading-[1.25] tracking-[-0.015em] text-ink md:mt-6 md:text-[2rem]">
                    <p>“{featured.quote}”</p>
                </blockquote>
                <figcaption className="mt-5 text-ink-soft md:mt-8">
                    <span className="font-bold text-ink">{featured.name}</span>, {featured.role}
                </figcaption>
            </figure>
            <div className="contents lg:grid lg:gap-6">
                {rest.map((t) => (
                    <figure key={t.name} className="flex w-[85%] shrink-0 snap-start flex-col rounded-panel bg-surface p-6 shadow-panel sm:w-[60%] md:p-7 lg:w-auto">
                        <Stars rating={t.rating} />
                        <blockquote className="mt-4 text-lg text-ink">
                            <p>“{t.quote}”</p>
                        </blockquote>
                        <figcaption className="mt-auto pt-4 text-sm text-ink-soft">
                            <span className="font-bold text-ink">{t.name}</span>, {t.role}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}
