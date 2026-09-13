"use client";
import { KeyboardEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Tab = { id: string; label: string; content: ReactNode };

// Old section anchors still land on the matching tab
const HASH_TO_TAB: Record<string, string> = { "#faq": "faq", "#policies": "policies" };

export default function InfoTabs({ tabs, label, className }: { tabs: Tab[]; label: string; className?: string }) {
  const [selected, setSelected] = useState(tabs[0].id);
  // Keyboard switching is instant; the panel fade is for clicks only
  const [instant, setInstant] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const select = useCallback((id: string, viaKeyboard = false) => {
    setInstant(viaKeyboard);
    setSelected(id);
    window.dispatchEvent(new CustomEvent("info-tab", { detail: id }));
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const id = HASH_TO_TAB[window.location.hash];
      if (id) select(id);
    };
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href="#faq"], a[href="#policies"]');
      const href = link?.getAttribute("href");
      if (href) select(HASH_TO_TAB[href]);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, [select]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const idx = tabs.findIndex(t => t.id === selected);
    let next = -1;
    if (e.key === "ArrowRight") next = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next < 0) return;
    e.preventDefault();
    select(tabs[next].id, true);
    tabRefs.current[tabs[next].id]?.focus();
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="flex gap-1 rounded-control border border-line bg-surface p-1 sm:inline-flex"
      >
        {tabs.map(t => {
          const isSelected = t.id === selected;
          return (
            <button
              key={t.id}
              ref={el => {
                tabRefs.current[t.id] = el;
              }}
              id={`tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${t.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => select(t.id)}
              className={clsx(
                "flex-1 whitespace-nowrap rounded-[0.4rem] px-3 py-2.5 font-display text-[0.9375rem] font-bold transition-colors duration-200 sm:flex-none sm:px-5",
                isSelected ? "bg-brand-fill text-white" : "text-ink-soft hover:text-ink"
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tabs.map(t => (
        <div
          key={t.id}
          id={`panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${t.id}`}
          tabIndex={0}
          hidden={t.id !== selected}
          className={clsx("mt-8 focus-visible:outline-offset-8", !instant && "tab-panel")}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
