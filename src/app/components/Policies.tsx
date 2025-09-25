import Accordion, { AccordionItem } from "./Accordion";

function UL(props: { children: React.ReactNode }) {
  return <ul className="list-disc list-inside space-y-1">{props.children}</ul>;
}

export default function Policies() {
  const policyItems: AccordionItem[] = [
    {
      title: "Booking & Scheduling",
      content: (
        <UL>
          <li>Cleanings can be scheduled up to 24 hours in advance. Bookings within 24 hours incur a rush fee.</li>
          <li>All new customers must get a deep clean to “reset” the home before general upkeep cleanings.</li>
          <li>$50 deposit due at booking.</li>
        </UL>
      ),
      defaultOpen: true,
    },
    {
      title: "Cancellations & Rescheduling",
      content: (
        <UL>
          <li>48-hour notice required for any cancellation or rescheduling.</li>
          <li>No-shows or late cancellations will forfeit the $50 deposit.</li>
        </UL>
      ),
    },
    {
      title: "Payments & Fees",
      content: (
        <UL>
          <li>Payment is due upon service completion unless arranged differently prior to cleaning.</li>
          <li>We accept Credit/Debit Cards and Checks (no cash).</li>
          <li>Payments not made within 24 hours of invoice will be charged a $10 fee.</li>
        </UL>
      ),
    },
    {
      title: "Access to Property",
      content: (
        <>
          <p className="mb-2">Access must be arranged during booking. Options include:</p>
          <UL>
            <li>Client present at arrival</li>
            <li>Key provided</li>
            <li>Lockbox</li>
          </UL>
          <p className="mt-2">Not responsible for cleaning delays due to inaccessible property.</p>
        </>
      ),
    },
    {
      title: "Satisfaction Guaranteed",
      content: (
        <UL>
          <li>Report any dissatisfaction/issues within 24 hours after cleaning (photo proof required).</li>
          <li>Re-cleans are offered. We do not provide refunds or discounts.</li>
          <li>Please do not clean or attempt to fix our mistake; we will fix it in a timely manner.</li>
        </UL>
      ),
    },
    {
      title: "Damage Policy",
      content: (
        <UL>
          <li>Report any damage within 24 hours after cleaning is completed (photo proof required).</li>
        </UL>
      ),
    },
    {
      title: "Safety & Health",
      content: (
        <UL>
          <li>We do not clean properties with rodents, pests, hazardous materials, or biohazards unless agreed in advance.</li>
        </UL>
      ),
    },
    {
      title: "Pet Policy",
      content: (
        <UL>
          <li>Pets must be securely put away before cleaners arrive.</li>
          <li>We are not responsible for pets escaping due to unsecured areas.</li>
        </UL>
      ),
    },
    {
      title: "Custom Requests",
      content: (
        <UL>
          <li>Add-on services not included in standard scopes must be requested at booking and will incur extra charges.</li>
        </UL>
      ),
    },
  ];

  const servicesItems: AccordionItem[] = [
    {
      title: "Move-In/Out Cleaning — $100/hr",
      content: (
        <>
          <h5 className="font-semibold mb-1">All Rooms</h5>
          <UL>
            <li>Dust/Wipe ceiling fans, window ledges, furniture, blinds, baseboards</li>
            <li>Empty trash cans; Vacuum/Mop floors</li>
            <li>Wipe inside windowsill; Dust/Wash vents</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Kitchen</h5>
          <UL>
            <li>Countertops; Appliance exteriors</li>
            <li>Deep scrub sink and faucet</li>
            <li>Wipe cabinets interior/exterior</li>
            <li>Deep scrub stove interior/exterior</li>
            <li>Microwave interior/exterior</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Bathrooms</h5>
          <UL>
            <li>Deep scrub shower and tub; Deep clean toilet</li>
            <li>Cabinets interior/exterior; Vanity mirrors interior/exterior</li>
            <li>Wipe mirrors/glass; Dust/Wash exhaust</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Bedrooms</h5>
          <UL>
            <li>Dust/Wipe furniture/shelves & blinds</li>
            <li>Make bed</li>
          </UL>
          <p className="mt-2 text-xs text-default">(Special requests available for an extra charge.)</p>
        </>
      ),
      defaultOpen: true,
    },
    {
      title: "Deep Home Cleaning — $100/hr",
      content: (
        <>
          <h5 className="font-semibold mb-1">All Rooms</h5>
          <UL>
            <li>Dust/Wipe ceiling fans, window ledges, furniture, blinds, baseboards</li>
            <li>Empty trash cans; Vacuum/Mop floors</li>
            <li>Vacuum between couches & lint roll</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Kitchen</h5>
          <UL>
            <li>Countertops; Appliance exteriors</li>
            <li>Deep scrub sink and faucet</li>
            <li>Wipe cabinets interior/exterior</li>
            <li>Deep scrub stove interior/exterior</li>
            <li>Microwave interior/exterior</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Bathrooms</h5>
          <UL>
            <li>Deep scrub shower and tub; Deep clean toilet</li>
            <li>Cabinets interior/exterior</li>
            <li>Vanity mirrors interior/exterior; Wipe mirrors/glass</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Bedrooms</h5>
          <UL>
            <li>Dust/Wipe furniture/shelves & blinds</li>
            <li>Make bed</li>
          </UL>
          <p className="mt-2 text-xs text-default">(Special requests available for an extra charge.)</p>
        </>
      ),
    },
    {
      title: "General Home Cleaning — Based on SQFT & Frequency",
      content: (
        <>
          <h5 className="font-semibold mb-1">All Rooms</h5>
          <UL>
            <li>Dust ceiling fans, window ledges, furniture, blinds</li>
            <li>Empty trash cans; Vacuum/Mop floors</li>
            <li>Vacuum between couches & lint roll</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Kitchen</h5>
          <UL>
            <li>Countertops; Appliance exteriors</li>
            <li>Deep scrub sink and faucet</li>
            <li>Wipe cabinets exterior</li>
            <li>Deep scrub stove interior/exterior</li>
            <li>Microwave interior/exterior</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Bathrooms</h5>
          <UL>
            <li>Deep scrub shower and tub; Deep clean toilet</li>
            <li>Cabinets exterior; Vanity mirror exterior</li>
            <li>Wipe mirrors/glass</li>
          </UL>
          <h5 className="font-semibold mt-3 mb-1">Bedrooms</h5>
          <UL>
            <li>Dust furniture/shelves & blinds</li>
            <li>Make bed</li>
          </UL>
          <p className="mt-2 text-xs text-default">(Special requests available for an extra charge.)</p>
        </>
      ),
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-3">Policies</h3>
        <Accordion items={policyItems} allowMultiple />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">Service Details</h3>
        <Accordion items={servicesItems} allowMultiple />
      </div>
    </div>
  );
}
