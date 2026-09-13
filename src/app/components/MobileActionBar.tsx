import { Phone } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href="tel:+15551234567" className="btn btn-quiet">
          <Phone aria-hidden className="size-4" />
          Call
        </a>
        <a href="#contact" className="btn btn-primary">
          Get a quote
        </a>
      </div>
    </div>
  );
}
