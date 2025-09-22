const data = [
    { name: 'Alex R.', role: 'STR Host', quote: 'Turnovers are finally painless. Guests walk in and say “wow.”', rating: 5 },
    { name: 'Priya S.', role: 'Homeowner', quote: 'Consistent, trustworthy, and fast. My house hasn’t felt this fresh in years.', rating: 5 },
    { name: 'Diego M.', role: 'Office Manager', quote: 'Our workplace stays spotless without disrupting the team. A++', rating: 5 },
]


export default function Testimonials() {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {data.map((t) => (
                <figure key={t.name} className="card p-6">
                    <div className="flex gap-2">
                        {Array.from({ length: t.rating }).map((_, i) => (<span key={i}>⭐</span>))}
                    </div>
                    <blockquote className="mt-3 text-neutral-700">“{t.quote}”</blockquote>
                    <figcaption className="mt-3 text-sm text-neutral-500">— {t.name}, {t.role}</figcaption>
                </figure>
            ))}
        </div>
    )
}