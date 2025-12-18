'use client'

import { notFound } from 'next/navigation'

const logisticsDetails = {
  'automated-tolling-parking-solutions': {
    title: 'Automated Tolling & Parking Solutions',
    kicker: 'RFID-Enabled Access for High-Speed Transit and Parking Efficiency',
    intro:
      'Streamline entry and exit operations with Soochak Bharat’s RFID solutions for tolling and parking—offering contactless payments, vehicle verification, and seamless access control.',
    highlights: [
      'RFID-based FASTag toll payments for highway vehicles',
      'Contactless entry/exit for parking facilities',
      'Whitelist/blacklist vehicle access control',
      'Real-time vehicle logs with timestamped movement history',
      'Integration with traffic and billing systems',
    ],
    hardware: [
      'Integrated RFID Reader (SBI-U2509): Equipped with a 9 dBi antenna for long-range vehicle detection',
      'ABS Anti-metal Tags (SBT-25ABS2): Installed on windshields or vehicle dashboards',
      '12 dBi Pure Antenna (SBA-U2512P): Used at toll gates and parking barriers',
      'Desktop Reader (SBD-U25): For FASTag issuance, parking permit encoding, and revalidation',
    ],
  },
  'fleet-inward-outward-management': {
    title: 'Fleet Inward/Outward Management',
    kicker: 'Automating Vehicle Movement at Warehouses and Depots',
    intro:
      'Monitor and control the flow of transport vehicles into and out of logistics hubs. Soochak Bharat’s fleet movement solution ensures accurate logs, fast processing, and reduced gate congestion.',
    highlights: [
      'RFID tagging of all incoming/outgoing vehicles',
      'Entry/exit time logging and movement history',
      'Integration with dock and yard management systems',
      'Fast turnaround validation for last-mile vehicles',
      'Role-based driver authentication',
    ],
    hardware: [
      'UHF Fixed Reader (SBR-U25-OS08): Mounted at gates to scan multiple vehicles',
      'Integrated Reader (SBI-U2512): Supports large-area detection with 12 dBi antenna',
      'RFID Tokens/Wristbands: Used for driver verification and ID logging',
      'Handheld Reader (SBH-U25): For mobile gate-side scanning and log reconciliation',
    ],
  },
  'cargo-container-tracking': {
    title: 'Cargo & Container Tracking',
    kicker: 'Complete Visibility from Loading Dock to Final Delivery',
    intro:
      'Prevent loss, tampering, and misrouting by tagging individual cargo items and shipping containers. Soochak Bharat’s RFID system ensures real-time tracking at every logistics node.',
    highlights: [
      'Unique identification for each container or cargo box',
      'Route validation and checkpoint scanning',
      'Alerts for diversion, tampering, or late movement',
      'Integration with ERP, TMS, and WMS platforms',
      'Support for returnable and reusable cargo units',
    ],
    hardware: [
      'PCB Anti-metal Tags (SBT-25PCB5/7/10): For metal containers, crates, and pallets',
      '12 dBi Antenna (SBA-U2512PC): Deployed at checkpoints, docks, and loading bays',
      'RFID Printer (SBPR-U2501): Used to generate container ID tags with unique EPCs',
      'Handheld Reader (SBH-U25): For cargo scan-in/out and field inspection',
    ],
  },
  'tyre-vehicle-component-tracking': {
    title: 'Tyre & Vehicle Component Tracking',
    kicker: 'Improving Fleet Safety and Maintenance Through RFID Tagging',
    intro:
      'Soochak Bharat’s RFID solution enables tracking of critical vehicle components—especially tyres—to monitor usage, rotation cycles, and maintenance needs in high-mileage fleets.',
    highlights: [
      'RFID tagging of each tyre or key vehicle component',
      'Mileage-based replacement and rotation scheduling',
      'Theft detection through location-linked alerts',
      'Component re-identification after repair or swap',
      'Reduction in safety incidents through preventive checks',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR1/2): For embedding in tyre walls or metal parts',
      'Flexible Anti-metal Labels (SBT-25FX13/FX14): Applied to chassis or maintenance units',
      'Handheld Reader (SBH-U25): For roadside inspection and depot servicing',
      'Desktop Reader (SBD-U25): For tagging and registration during assembly or onboarding',
    ],
  },
  'secure-transportation-storage-monitoring': {
    title: 'Secure Transportation & Storage Monitoring',
    kicker: 'RFID for Tamper-Proof Cargo and Environmental Oversight',
    intro:
      'Sensitive goods require both secure transport and controlled storage. Soochak Bharat enables smart cargo security and warehouse zone monitoring through RFID-based tagging.',
    highlights: [
      'Tamper-evident tagging of sensitive cargo items',
      'Access logging at secure storage and transfer points',
      'Integration with environmental sensors for temperature/humidity',
      'Alerts for unauthorized access or unexpected opening',
      'Location-aware chain of custody tracking',
    ],
    hardware: [
      'Anti-metal Tags (SBT-25FX Series): Applied to cargo seals, crates, and storage units',
      'Fixed Reader (SBR-U25-OS04): Installed in storage zones and transit checkpoints',
      'Integrated Reader (SBI-U2508): Dual-mode for external and internal cargo scanning',
      'RFID Desktop Reader (SBD-H25-93): For cargo check-in/out and ID revalidation',
    ],
  },
} as const

type LogisticsSlug = keyof typeof logisticsDetails

interface PageProps {
  params: {
    slug: LogisticsSlug
  }
}

export default function LogisticsDetailPage({ params }: PageProps) {
  const detail = logisticsDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0f172a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">
            Logistics &amp; Transportation
          </p>
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


