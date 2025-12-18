'use client'

import { notFound } from 'next/navigation'

const govtDetails = {
  'public-asset-file-tracking': {
    title: 'Public Asset & File Tracking',
    kicker: 'Securing Government Property and Records with RFID Precision',
    intro:
      'Government agencies handle large volumes of assets—furniture, computers, vehicles, and confidential documents. Soochak Bharat’s RFID solution ensures visibility, accountability, and audit-readiness.',
    highlights: [
      'RFID tagging of office furniture, IT assets, and infrastructure',
      'Real-time file and document movement tracking',
      'Theft and misplacement prevention',
      'Automated physical audit reports for compliance',
      'Integration with digital file systems and e-governance tools',
    ],
    hardware: [
      'UHF Fixed Reader (SBR-U25-OS04): Installed in government offices and archives',
      'Ceramic Tags (SBT-25CR3): Ideal for files, folders, and compact assets',
      'Anti-metal Tags (SBT-25FX / PCB Series): For metal cabinets and equipment',
      'Desktop Reader (SBD-U25): For check-in/check-out of files or assets',
      'Handheld Reader (SBH-U25): Used during audits and mobile inspections',
    ],
  },
  'parking-access-control-government-premises': {
    title: 'Parking & Access Control in Government Premises',
    kicker: 'Secure and Streamlined Entry for Vehicles and Personnel',
    intro:
      'From parliament buildings to public offices, Soochak Bharat enables RFID-based access control and vehicle movement tracking to safeguard high-security zones.',
    highlights: [
      'Contactless vehicle entry for officials, staff, and visitors',
      'RFID-based employee and contractor ID badges',
      'Time-stamped logs of entry/exit',
      'Integration with security and surveillance systems',
      'Multi-tiered zone access permissions',
    ],
    hardware: [
      'Integrated RFID Reader (SBI-U2509): For long-range vehicle detection at gates',
      'RFID Cards & Wristbands: For staff and visitor identity',
      '12 dBi Antenna (SBA-U2512P): Used at vehicle entry/exit points',
      'Biometric + RFID Units: For dual-authentication access to sensitive buildings',
      'Desktop Reader (SBD-H25-43): For card/wristband issuance',
    ],
  },
  'urban-infrastructure-smart-city-management': {
    title: 'Urban Infrastructure & Smart City Management',
    kicker: 'RFID for Intelligent Public Utilities and Infrastructure Monitoring',
    intro:
      'Soochak Bharat’s RFID solutions support smart cities and municipalities by automating and monitoring infrastructure, utilities, and resource usage across urban environments.',
    highlights: [
      'RFID tagging of utility poles, transformers, manholes, and city assets',
      'Smart gates, waste bins, and public transport nodes equipped with RFID',
      'Real-time usage tracking and automated maintenance logs',
      'Integration with central city dashboards and IoT devices',
      'Used by municipalities for streetlight audits, water tankers, etc.',
    ],
    hardware: [
      'ABS Anti-metal Tags (SBT-25ABS1/ABS2): Durable tags for harsh outdoor conditions',
      'Flexible Anti-metal Labels (SBT-25FX Series): For underground or metallic assets',
      'Fixed Reader (SBR-U25-OS08): For broad infrastructure zone scanning',
      'Handheld Reader (SBH-U25): Used by field teams for public asset checks',
    ],
  },
  'solid-waste-municipal-operations': {
    title: 'Solid Waste & Municipal Operations',
    kicker: 'RFID Automation for Clean, Accountable City Services',
    intro:
      'Municipalities can transform their waste collection processes and citizen service delivery using RFID to track bins, vehicles, and field staff—reducing delays and improving transparency.',
    highlights: [
      'RFID-tagged garbage bins and waste collection vehicles',
      'Route tracking and pickup verification via mobile readers',
      'Attendance logging of sanitation workers',
      'Integration with GIS and waste tracking dashboards',
      'Performance analytics for each ward or route',
    ],
    hardware: [
      'Flexible Anti-metal Tags (SBT-25FX Series): Attached to garbage bins and collection points',
      'Integrated Reader (SBI-U2508): Mounted on waste trucks for automatic scan',
      'Handheld Reader (SBH-U25): Used by municipal staff during waste pickup',
      'Desktop Reader (SBD-U25): For assigning bins to areas and logging collections',
    ],
  },
  'public-transport-fare-automation': {
    title: 'Public Transport & Fare Automation',
    kicker: 'RFID-Enabled Smart Mobility for Cities and Districts',
    intro:
      'Soochak Bharat enables seamless commuting through RFID-based ticketing, vehicle access control, and fare automation—improving citizen mobility and backend management.',
    highlights: [
      'RFID-based automatic fare collection at metro, bus, and ferry terminals',
      'Contactless transit cards or wristbands for commuters',
      'Vehicle authentication for government-operated fleets',
      'Real-time passenger logging and movement analytics',
      'Integration with GPS, NFC, and payment platforms',
    ],
    hardware: [
      'Desktop Reader (SBD-H25-43U): For issuing smart cards and managing accounts',
      'Integrated Reader (SBI-U2506): Installed at gates, terminals, and stations',
      'RFID Tokens/Wristbands: Used as reusable fare media',
      'RFID Printer (SBPR-U2501): For encoding fare cards and vehicle tags',
    ],
  },
  'judiciary-court-record-management': {
    title: 'Judiciary & Court Record Management',
    kicker: 'RFID for Judicial File Tracking and Courtroom Efficiency',
    intro:
      'Courts and judicial bodies handle sensitive case files and legal exhibits that require controlled access and strict traceability. Soochak Bharat enables full tracking of physical case files and access monitoring within court premises.',
    highlights: [
      'RFID-tagged legal files and evidence containers',
      'Real-time file access tracking by judge, clerk, or advocate',
      'Movement audit logs for sensitive cases',
      'Access control to evidence storage and secure zones',
      'Integration with digital case management systems',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR3): Embedded in case files for discreet tagging',
      'Desktop Reader (SBD-U25): At judicial desks for issuing and receiving files',
      'Fixed Reader (SBR-U25-OS04): Installed in secure file rooms and archives',
      'Handheld Reader (SBH-U25): For file location verification during hearings',
    ],
  },
} as const

type GovtSlug = keyof typeof govtDetails

interface PageProps {
  params: {
    slug: GovtSlug
  }
}

export default function GovernmentPublicDetailPage({ params }: PageProps) {
  const detail = govtDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#111827] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">
            Government &amp; Public Sector
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


