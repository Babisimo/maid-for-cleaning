"use client";
import { ReactNode, useId, useState } from "react";
import clsx from "clsx";
import { Plus } from "lucide-react";

export type AccordionItem = {
  id?: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
};

export default function Accordion({
  items,
  allowMultiple = false,
  className,
}: {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(items.flatMap((item, idx) => (item.defaultOpen ? [idx] : [])))
  );

  const toggle = (idx: number) => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className={clsx("border-t border-line", className)}>
      {items.map((item, idx) => {
        const isOpen = open.has(idx);
        const headerId = `${baseId}-hdr-${idx}`;
        const panelId = `${baseId}-pnl-${idx}`;

        return (
          <div key={item.id ?? item.title} className="border-b border-line">
            <h3 className="text-[1.0625rem]">
              <button
                id={headerId}
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-bold transition-colors duration-200 hover:text-brand"
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
              >
                <span>{item.title}</span>
                <Plus
                  aria-hidden
                  className={clsx(
                    "size-5 shrink-0 text-brand transition-transform duration-200 ease-out",
                    isOpen && "rotate-45"
                  )}
                />
              </button>
            </h3>

            {/* Rows animate 0fr to 1fr; inert keeps closed content out of tab order */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              inert={!isOpen}
              className={clsx(
                "grid transition-[grid-template-rows] duration-[220ms] ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div
                className={clsx(
                  "min-h-0 overflow-hidden transition-opacity duration-[220ms] ease-out",
                  isOpen ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="pb-6 text-[0.9375rem] text-ink-soft">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
