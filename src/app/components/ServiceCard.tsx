import { ReactNode } from 'react'


export default function ServiceCard({ icon, title, desc, items }: { icon: ReactNode, title: string, desc: string, items?: string[] }) {
    return (
        <div className="card p-6">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center">{icon}</div>
                <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-600">{desc}</p>
            {items && (
                <ul className="mt-4 text-sm grid gap-1 list-disc list-inside text-neutral-700">
                    {items.map(x => <li key={x}>{x}</li>)}
                </ul>
            )}
        </div>
    )
}