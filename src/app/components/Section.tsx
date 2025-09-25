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
  const isBlue = className?.includes("section-blue");
  return (
    <section
      id={id}
      className={clsx(
        "section",
        // slam dunk the background so cascade can't fight you
        isBlue ? "bg-[#0061af]" : "bg-white",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
