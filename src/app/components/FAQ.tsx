const faqs = [
    { q: 'Do you bring supplies?', a: 'Yes. We bring eco-friendly supplies and equipment. Let us know about any sensitivities.' },
    { q: 'Are you insured?', a: 'Yes. We are fully insured, and every cleaner is background-checked.' },
    { q: 'Do you clean short-term rentals?', a: 'Yes. Airbnb and other rental turnovers include linen service, photo verification, and restock checklists.' },
    { q: 'How do quotes work?', a: 'Share details about your space and we send a transparent quote, flat-rate or hourly, whichever you prefer.' }
]


export default function FAQ() {
    return (
        <dl className="grid gap-x-14 gap-y-7 md:grid-cols-2">
            {faqs.map((f) => (
                <div key={f.q} className="border-t border-line pt-5">
                    <dt className="font-display text-lg font-bold text-ink sm:text-xl">{f.q}</dt>
                    <dd className="mt-1.5 text-ink-soft">{f.a}</dd>
                </div>
            ))}
        </dl>
    )
}
