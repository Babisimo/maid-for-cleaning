const faqs = [
    { q: 'Do you bring supplies?', a: 'Yes! We bring eco‑friendly supplies and equipment. Let us know about any sensitivities.' },
    { q: 'Are you insured?', a: 'Absolutely. Fully insured with background‑checked cleaners.' },
    { q: 'Do you do Airbnb/STR turnovers?', a: 'Yes, with linen service, photo verification, and restock checklists.' },
    { q: 'How do quotes work?', a: 'Share your space details; we give a transparent, flat‑rate or hourly quote—your choice.' }
]


export default function FAQ() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f) => (
                <div key={f.q} className="card p-6">
                    <h4 className="font-semibold">{f.q}</h4>
                    <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
                </div>
            ))}
        </div>
    )
}