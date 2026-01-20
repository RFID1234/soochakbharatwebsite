'use client'

import { notFound } from 'next/navigation'

const manufacturingDetails = {
  'work-in-progress-tracking': {
    title: 'Work-in-Progress (WIP) Tracking',
    kicker: 'Enhancing Production Line Visibility with RFID Automation',
    intro:
      'Manufacturing processes require real-time insight into each stage of production. Soochak Bharat’s WIP tracking solution provides end-to-end traceability for semi-finished products as they move through workstations—reducing delays and enhancing process control.',
    highlights: [
      'Live monitoring of production stage progress',
      'Auto-identification of parts at each station',
      'Bottleneck detection and response triggers',
      'Improved scheduling and throughput analysis',
      'Seamless integration with MES and ERP systems',
    ],
    hardware: [
      'Integrated Reader (SBI-U2508): Mounted on production lines for real-time WIP scanning',
      'PCB Anti-metal Tags (SBT-25PCB Series): Attached to jigs, bins, or components during production',
      'Flexible Anti-metal Labels (SBT-25FX Series): Ideal for tagging workpieces on metallic stations',
      'Handheld Reader (SBH-U25): Used for spot verification or offline processes',
    ],
  },
  'tool-asset-tracking': {
    title: 'Tool and Asset Tracking',
    kicker: 'Securing and Monitoring Critical Manufacturing Equipment',
    intro:
      'Industrial assets such as tools, fixtures, and machines must be available, traceable, and maintained on schedule. Soochak Bharat’s RFID-based tracking ensures visibility and control over equipment usage and location.',
    highlights: [
      'Real-time location and status monitoring of tools and machines',
      'Loss prevention through zone-based movement alerts',
      'Tool issuance and return logging',
      'Maintenance alerts and lifecycle management',
      'Enhanced asset utilization and ROI',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR1/CR4): Durable mini tags for metal tools and small machines',
      'PCB Anti-metal Tags (SBT-25PCB9/10): Ideal for larger factory equipment and fixtures',
      'Handheld RFID Reader (SBH-U25): For mobile audits, issuance, and retrieval logging',
      'Desktop Reader (SBD-U25): For registering tools and encoding new assets',
    ],
  },
  'inventory-warehouse-management': {
    title: 'Inventory & Warehouse Management (WMS)',
    kicker: 'RFID Intelligence for Warehouse Operations',
    intro:
      'Automate warehouse workflows with RFID to enable fast, accurate receiving, stocking, picking, and dispatching—supporting just-in-time operations and lean inventory strategies.',
    highlights: [
      'Automated inbound and outbound material validation',
      'Shelf and bin tagging for faster stock retrieval',
      'Inventory counts with minimal labor and downtime',
      'Real-time visibility into stock levels and movements',
      'Integration with WMS/ERP for end-to-end control',
    ],
    hardware: [
      'Fixed Reader (SBR-U25-OS08): For dock doors and warehouse entry/exit points',
      'UHF Antennas (SBA-U2512P, SBA-U2508P): For shelf-level or overhead scanning',
      'Flexible Anti-metal Labels (SBT-25FX Series): Applied on bins, racks, and stock items',
      'Handheld Reader (SBH-U25): For mobile inventory counting and label verification',
    ],
  },
  'returnable-transport-item-management': {
    title: 'Returnable Transport Item (RTI) Management',
    kicker: 'Optimizing Reusable Asset Cycles with RFID',
    intro:
      'Returnable packaging like crates, containers, and trays represent recurring costs and loss risks. Soochak Bharat’s RTI solution tracks each item’s usage cycle, preventing loss and enhancing logistics efficiency.',
    highlights: [
      'Unique RFID tagging of crates, trolleys, and transport bins',
      'Movement tracking between suppliers, plants, and customers',
      'Alerts for delays or missing items',
      'Lifecycle management and reuse optimization',
      'Supports multi-location asset return loops',
    ],
    hardware: [
      'PCB Anti-metal Tags (SBT-25PCB3/5/7): Designed for rugged use on RTIs',
      'Integrated Reader (SBI-U2512): At dock entries for automatic check-in/check-out',
      'Handheld Reader (SBH-U25): Used by logistics staff during loading/unloading',
      '12 dBi Antenna (SBA-U2512P): For zone-level RTI detection at entry/exit points',
    ],
  },
  'track-trace-supply-chain-integration': {
    title: 'Track & Trace + Supply Chain Integration',
    kicker: 'Full Lifecycle Visibility Across Production and Logistics',
    intro:
      'From raw material input to finished goods delivery, Soochak Bharat’s track & trace solution ensures that every product and part can be monitored through its journey across the supply chain.',
    highlights: [
      'Serialized RFID tagging of components and finished products',
      'Production-to-shipping traceability',
      'Integration with shipping, packaging, and QA checkpoints',
      'Error prevention in dispatch and receiving',
      'Regulatory compliance and anti-diversion support',
    ],
    hardware: [
      'Integrated Reader (SBI-U2506): Mounted at checkpoints for product identification',
      'RFID Printer (SBPR-U2501): Encodes serialized product and shipment labels',
      'Anti-metal Tags (SBT-25ABS1/FX Series): Applied on cases, pallets, and cartons',
      'Handheld Reader (SBH-U25): For cross-docking, QA validation, and last-mile tracking',
    ],
  },
  'warranty-product-history-tracking': {
    title: 'Warranty & Product History Tracking',
    kicker: 'Building Confidence with Post-Sale Product Intelligence',
    intro:
      'Track every product’s origin, test history, and service log using RFID. Soochak Bharat’s solution supports warranty claims, recalls, and customer support through verifiable product histories.',
    highlights: [
      'Unique RFID-linked product IDs from assembly to sale',
      'Instant access to batch, test, and repair records',
      'Streamlined warranty validation and service intake',
      'Prevents counterfeit claim attempts',
      'Improves after-sales support and transparency',
    ],
    hardware: [
      'Desktop Reader (SBD-U25): For product ID validation at service centers',
      'Ceramic Tags (SBT-25CR3): Embedded in high-value items for long-term traceability',
      'RFID Tokens & Cards: For product passport or customer ownership cards',
      'Handheld Reader (SBH-U25): For warranty claim field verification',
    ],
  },
} as const

type ManufacturingSlug = keyof typeof manufacturingDetails

interface PageProps {
  params: {
    slug: ManufacturingSlug
  }
}

export default function ManufacturingDetailPage({ params }: PageProps) {
  const detail = manufacturingDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#111827] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Manufacturing</p>
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


