// src/app/components/Section.tsx
import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const isMuted = className?.includes("section-muted");
  return (
    <section
      id={id}
      className={clsx(
        "section",
        isMuted ? "bg-[#e5e7eb]" : "bg-white",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
