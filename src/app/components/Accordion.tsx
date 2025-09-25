"use client";
import { ReactNode, useId, useMemo, useState } from "react";
import clsx from "clsx";

export type AccordionItem = {
  id?: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
};

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}) {
  const baseId = useId();
  const initialOpen = useMemo(
    () => new Set(items.filter(i => i.defaultOpen).map((_, idx) => String(idx))),
    [items]
  );
  const [open, setOpen] = useState<Set<string>>(initialOpen);

  const toggle = (key: string) => {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else {
        if (!allowMultiple) next.clear();
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className={clsx("grid gap-3", className)}>
      {items.map((item, idx) => {
        const key = String(idx);
        const isOpen = open.has(key);
        const headerId = `${baseId}-hdr-${idx}`;
        const panelId = `${baseId}-pnl-${idx}`;

        return (
          <div key={item.id ?? idx} className="card p-0 overflow-hidden">
            <button
              id={headerId}
              className={clsx(
                "w-full text-left px-4 py-3 flex items-center justify-between gap-3",
                "hover:bg-black/5 focus:outline-none"
              )}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => toggle(key)}
            >
              <span className="font-semibold">{item.title}</span>
              <span className="text-sm">{isOpen ? "−" : "+"}</span>
            </button>

            {/* Collapsible wrapper: NO padding, clipped fully */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={clsx(
                "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              {/* Inner content gets the padding; fully hidden when parent is 0fr */}
              <div className="min-h-0 overflow-hidden">
                <div className="px-4 pb-4 pt-1 text-sm text-default">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* helper UL if you’re using it */
export function UL(props: { children: ReactNode }) {
  return <ul className="list-disc list-inside space-y-1 m-0">{props.children}</ul>;
}
