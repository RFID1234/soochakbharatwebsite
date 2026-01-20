'use client'

import { notFound } from 'next/navigation'

const hospitalityDetails = {
  'seamless-check-in-check-out-guest-access': {
    title: 'Seamless Check-In / Check-Out & Guest Access',
    kicker: 'Enhancing Guest Journey with Contactless Experience',
    intro:
      'Modern hospitality demands contactless, fast, and secure guest processing. Soochak Bharat’s RFID-based guest management system enables frictionless entry, room access, and personalized services without compromising security.',
    highlights: [
      'RFID keycards or wristbands for guest room and facility access',
      'Touchless check-in/check-out at kiosks or mobile terminals',
      'Guest ID linked to billing, service usage, and loyalty points',
      'Custom access permissions for different zones (spa, gym, pool)',
      'Integration with PMS and CRM systems',
    ],
    hardware: [
      'Desktop Reader (SBD-H25-43): For guest registration and card/wristband issuance',
      'RFID Wristbands & Tokens: Assigned to each guest for contactless interaction',
      'Integrated Reader (SBI-U2506): Installed at room doors and facility checkpoints',
      'Biometric + RFID Access Devices: For premium rooms or secure areas',
    ],
  },
  'housekeeping-efficiency-linen-management': {
    title: 'Housekeeping Efficiency & Linen Management',
    kicker: 'Smart Tagging for Room Service and Textile Tracking',
    intro:
      'Keep track of linens, uniforms, towels, and room cleaning tasks with RFID. Soochak Bharat enables full lifecycle tracking of hotel textiles and automates housekeeping performance monitoring.',
    highlights: [
      'RFID-tagged linens and uniforms with movement history',
      'Room-level linen issuance and return tracking',
      'Housekeeping staff identification and task logging',
      'Minimize loss and misuse of hotel-owned garments',
      'Integration with laundry and housekeeping systems',
    ],
    hardware: [
      'Flexible Washable RFID Tags (SBT-25FX Series): For embedding in towels, sheets, and uniforms',
      'Handheld Reader (SBH-U25): For mobile scanning during linen distribution and pickup',
      'Fixed Reader (SBR-U25-OS04): For zone monitoring in laundry or housekeeping areas',
      'Desktop Reader (SBD-U25): For linen tag encoding and garment registration',
    ],
  },
  'parking-visitor-vehicle-management-hospitality': {
    title: 'Parking & Visitor Vehicle Management',
    kicker: 'Effortless Guest and Staff Parking with RFID Automation',
    intro:
      'Hotels and event venues can automate parking access for guests, staff, and vendors using RFID, ensuring speed, traceability, and zone-wise control.',
    highlights: [
      'Contactless vehicle entry/exit for registered guests',
      'RFID permits for staff and long-term visitors',
      'Time-stamped vehicle access logs',
      'Integration with guest room database for temporary access',
      'Support for VIP, valet, and multi-zone parking systems',
    ],
    hardware: [
      'Integrated Reader (SBI-U2509): Long-range detection at parking gates',
      'ABS Anti-metal Tags (SBT-25ABS1): Installed on guest vehicles or valet tags',
      '12 dBi Antenna (SBA-U2512P): For drive-through vehicle ID verification',
      'Desktop Reader (SBD-U25): For RFID permit issuance and vehicle registration',
    ],
  },
  'asset-supply-tracking-minibar-amenities-equipment': {
    title: 'Asset & Supply Tracking (Minibar, Amenities, Equipment)',
    kicker: 'Automating High-Value Item Control in Guest & Service Areas',
    intro:
      'Track and control hotel assets such as minibar items, amenities, cleaning carts, and kitchenware using RFID. Soochak Bharat’s solution ensures accountability and minimizes loss or theft.',
    highlights: [
      'RFID-tagging of minibar items, room devices, and supplies',
      'Movement tracking of trolleys, trays, and service kits',
      'Replenishment alerts and consumption tracking',
      'Shrinkage prevention and faster stock audits',
      'Inventory sync with housekeeping and procurement systems',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR3): Embedded in minibar items and small appliances',
      'Flexible Anti-metal Labels (SBT-25FX Series): Applied to carts and supply bins',
      'Handheld Reader (SBH-U25): Used by staff to verify item presence per room',
      'RFID Printer (SBPR-U2501): For encoding supply item tags during inventory cycles',
    ],
  },
  'conference-event-management': {
    title: 'Conference & Event Management',
    kicker: 'Streamlining Guest Movement and Access at Events',
    intro:
      'For event venues, conventions, or hotel ballrooms, Soochak Bharat offers RFID tools to manage access, attendee verification, and real-time tracking of event resources and staff.',
    highlights: [
      'RFID-enabled attendee badges or wristbands for check-in',
      'Access control for speaker lounges, VIP zones, and staff-only areas',
      'Session-level attendance tracking',
      'Real-time footfall analytics for zones or booths',
      'Asset tracking for event furniture, tech gear, and catering items',
    ],
    hardware: [
      'RFID Wristbands & Badges: For attendees, staff, and VIPs',
      'Integrated Reader (SBI-U2506): Mounted at entry/exit points of event halls',
      'Handheld Reader (SBH-U25): For attendee badge scanning and zone patrol',
      'Desktop Reader (SBD-H25-43): For pre-event registration and credential issuance',
    ],
  },
} as const

type HospitalitySlug = keyof typeof hospitalityDetails

interface PageProps {
  params: {
    slug: HospitalitySlug
  }
}

export default function HospitalityDetailPage({ params }: PageProps) {
  const detail = hospitalityDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Hospitality</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{detail.title}</h1>
          <h2 className="text-lg md:text-xl font-semibold text-blue-100 mb-4">{detail.kicker}</h2>
          <p className="text-sm md:text-base text-blue-100 leading-relaxed">{detail.intro}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-10 md:space-y-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-4">Solution Highlights</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-sm md:text-base">
              {detail.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-4">Key Hardware Components</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-sm md:text-base">
              {detail.hardware.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


