import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
  id,
  tone = "paper",
  labelledBy,
  className,
  children,
}: {
  id?: string;
  tone?: "paper" | "rinse";
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={clsx("py-12 md:py-20", tone === "rinse" ? "bg-rinse" : "bg-paper", className)}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  title,
  intro,
  className,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-2xl", className)}>
      <h2 id={id} className="text-[1.875rem] font-extrabold md:text-[2.5rem]">
        {title}
      </h2>
      {intro && <p className="mt-3 text-ink-soft sm:text-lg">{intro}</p>}
    </div>
  );
}
