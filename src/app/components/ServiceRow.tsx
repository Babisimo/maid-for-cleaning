import { ReactNode } from 'react'

export default function ServiceRow({
    icon,
    title,
    desc,
    items,
    link,
}: {
    icon: ReactNode
    title: string
    desc: string
    items: string[]
    link?: { href: string, label: string }
}) {
    return (
        <li className="grid grid-cols-[2.5rem_1fr] gap-4 py-7 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-8">
            <div className="flex size-10 items-center justify-center rounded-control bg-rinse text-brand sm:size-12">{icon}</div>
            <div>
                <h3 className="text-[1.375rem] leading-10 font-extrabold sm:text-2xl sm:leading-12">{title}</h3>
                <p className="mt-1 max-w-prose text-ink-soft">{desc}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {items.map(x => (
                        <li key={x} className="rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-ink">
                            {x}
                        </li>
                    ))}
                </ul>
                {link && (
                    <a
                        href={link.href}
                        className="mt-4 inline-block font-bold text-brand underline decoration-brand/30 decoration-2 transition-colors hover:decoration-brand"
                    >
                        {link.label}
                    </a>
                )}
            </div>
        </li>
    )
}
