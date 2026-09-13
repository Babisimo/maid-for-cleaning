import Accordion, { AccordionItem } from "./Accordion";

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-brand">
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

type RoomScope = { room: string; tasks: string[] };

function Scope({ rooms }: { rooms: RoomScope[] }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rooms.map(r => (
          <div key={r.room}>
            <h4 className="mb-2 text-[0.9375rem] font-bold">{r.room}</h4>
            <List items={r.tasks} />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm">Special requests are available for an extra charge.</p>
    </>
  );
}

const policyItems: AccordionItem[] = [
  {
    title: "Booking and scheduling",
    content: (
      <List
        items={[
          "Cleanings can be scheduled up to 24 hours in advance. Bookings within 24 hours incur a rush fee.",
          "All new customers get a deep clean to reset the home before regular upkeep cleanings.",
          "A $50 deposit is due at booking.",
        ]}
      />
    ),
    defaultOpen: true,
  },
  {
    title: "Cancellations and rescheduling",
    content: (
      <List
        items={[
          "48-hour notice is required for any cancellation or rescheduling.",
          "No-shows or late cancellations forfeit the $50 deposit.",
        ]}
      />
    ),
  },
  {
    title: "Payments and fees",
    content: (
      <List
        items={[
          "Payment is due when the service is complete, unless arranged differently before the cleaning.",
          "We accept credit/debit cards and checks (no cash).",
          "Payments not made within 24 hours of the invoice are charged a $10 fee.",
        ]}
      />
    ),
  },
  {
    title: "Access to your property",
    content: (
      <>
        <p className="mb-2">Access is arranged during booking. Options include:</p>
        <List items={["Client present at arrival", "Key provided", "Lockbox"]} />
        <p className="mt-2">We are not responsible for cleaning delays caused by an inaccessible property.</p>
      </>
    ),
  },
  {
    title: "Satisfaction guarantee",
    content: (
      <List
        items={[
          "Report any issues within 24 hours after the cleaning (photo proof required).",
          "Re-cleans are offered. We do not provide refunds or discounts.",
          "Please don't clean or try to fix the issue yourself. We'll fix it promptly.",
        ]}
      />
    ),
  },
  {
    title: "Damage policy",
    content: <List items={["Report any damage within 24 hours after the cleaning is completed (photo proof required)."]} />,
  },
  {
    title: "Safety and health",
    content: (
      <List items={["We do not clean properties with rodents, pests, hazardous materials, or biohazards unless agreed in advance."]} />
    ),
  },
  {
    title: "Pet policy",
    content: (
      <List
        items={[
          "Pets must be securely put away before cleaners arrive.",
          "We are not responsible for pets escaping from unsecured areas.",
        ]}
      />
    ),
  },
  {
    title: "Custom requests",
    content: (
      <List items={["Add-on services outside the standard scope must be requested at booking and carry an extra charge."]} />
    ),
  },
];

const serviceItems: AccordionItem[] = [
  {
    title: "Move-in/out cleaning",
    content: (
      <Scope
        rooms={[
          {
            room: "All rooms",
            tasks: [
              "Dust/wipe ceiling fans, window ledges, furniture, blinds, baseboards",
              "Empty trash cans; vacuum/mop floors",
              "Wipe inside windowsills; dust/wash vents",
            ],
          },
          {
            room: "Kitchen",
            tasks: [
              "Countertops; appliance exteriors",
              "Deep scrub sink and faucet",
              "Wipe cabinets inside and out",
              "Deep scrub stove inside and out",
              "Microwave inside and out",
            ],
          },
          {
            room: "Bathrooms",
            tasks: [
              "Deep scrub shower and tub; deep clean toilet",
              "Cabinets and vanity mirrors inside and out",
              "Wipe mirrors/glass; dust/wash exhaust",
            ],
          },
          { room: "Bedrooms", tasks: ["Dust/wipe furniture, shelves, and blinds", "Make bed"] },
        ]}
      />
    ),
    defaultOpen: true,
  },
  {
    title: "Deep home cleaning",
    content: (
      <Scope
        rooms={[
          {
            room: "All rooms",
            tasks: [
              "Dust/wipe ceiling fans, window ledges, furniture, blinds, baseboards",
              "Empty trash cans; vacuum/mop floors",
              "Vacuum between couch cushions and lint roll",
            ],
          },
          {
            room: "Kitchen",
            tasks: [
              "Countertops; appliance exteriors",
              "Deep scrub sink and faucet",
              "Wipe cabinets inside and out",
              "Deep scrub stove inside and out",
              "Microwave inside and out",
            ],
          },
          {
            room: "Bathrooms",
            tasks: [
              "Deep scrub shower and tub; deep clean toilet",
              "Cabinets inside and out",
              "Vanity mirrors inside and out; wipe mirrors/glass",
            ],
          },
          { room: "Bedrooms", tasks: ["Dust/wipe furniture, shelves, and blinds", "Make bed"] },
        ]}
      />
    ),
  },
  {
    title: "General home cleaning",
    content: (
      <Scope
        rooms={[
          {
            room: "All rooms",
            tasks: [
              "Dust ceiling fans, window ledges, furniture, blinds",
              "Empty trash cans; vacuum/mop floors",
              "Vacuum between couch cushions and lint roll",
            ],
          },
          {
            room: "Kitchen",
            tasks: [
              "Countertops; appliance exteriors",
              "Deep scrub sink and faucet",
              "Wipe cabinet exteriors",
              "Deep scrub stove inside and out",
              "Microwave inside and out",
            ],
          },
          {
            room: "Bathrooms",
            tasks: [
              "Deep scrub shower and tub; deep clean toilet",
              "Cabinet and vanity mirror exteriors",
              "Wipe mirrors/glass",
            ],
          },
          { room: "Bedrooms", tasks: ["Dust furniture, shelves, and blinds", "Make bed"] },
        ]}
      />
    ),
  },
];

export function PoliciesPanel() {
  const mid = Math.ceil(policyItems.length / 2);
  return (
    <div className="grid gap-x-14 lg:grid-cols-2">
      <Accordion items={policyItems.slice(0, mid)} allowMultiple />
      <Accordion items={policyItems.slice(mid)} allowMultiple className="-mt-px lg:mt-0" />
    </div>
  );
}

export function IncludedPanel() {
  return <Accordion items={serviceItems} allowMultiple />;
}
