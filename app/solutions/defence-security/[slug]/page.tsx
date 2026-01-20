'use client'

import { notFound } from 'next/navigation'

const defenceDetails = {
  'asset-convoy-tracking': {
    title: 'Asset & Convoy Tracking',
    kicker: 'Real-Time Visibility of Military Equipment and Movement',
    intro:
      'Defence logistics demand high precision, from tracking firearms to managing armoured convoys. Soochak Bharat’s RFID tracking system ensures mission-critical assets and vehicle fleets are continuously monitored and secured across bases, supply lines, and field operations.',
    highlights: [
      'Tagging of weapons, machinery, and vehicles for real-time tracking',
      'RFID convoy management with geolocation and checkpoint scanning',
      'Movement logs for supply trucks, artillery, and high-value cargo',
      'Environmental durability for battlefield and off-road conditions',
      'Integration with military ERP and fleet management systems',
    ],
    hardware: [
      'UHF Fixed Reader (SBR-U25-OS08): Mounted at gates or checkpoints for fleet and asset entry logging',
      'Integrated RFID Reader (SBI-U2512): 12 dBi antenna for long-range vehicle detection on supply routes',
      'ABS Anti-metal Tags (SBT-25ABS2): Waterproof, rugged tags for firearms, crates, and metal containers',
      'Handheld RFID Reader (SBH-U25): Used for field verification during dispatch and receipt',
    ],
  },
  'secure-access-control-border-management': {
    title: 'Secure Access Control & Border Management',
    kicker: 'High-Security Entry Systems for Defense Zones and Borders',
    intro:
      'Soochak Bharat’s RFID access systems enforce strict personnel and vehicle authorization at military zones, border checkpoints, and defence facilities—ensuring only verified entries.',
    highlights: [
      'Real-time gate control with vehicle and personnel authentication',
      'RFID tag and card-based identification at base entries',
      'Blacklist/whitelist functionality for sensitive zones',
      'Integration with biometric and surveillance infrastructure',
      'Encrypted access logs with anti-cloning protection',
    ],
    hardware: [
      'Integrated Reader (SBI-U2509): Used at gates with 9 dBi circular-polarized antenna for long-range ID',
      'Desktop ISO14443 Reader (SBD-H25-43): For card-based access control and authentication',
      'RFID Tokens/Wristbands: For soldiers, staff, and authorized contractors',
      'Biometric + RFID Machine: Combines fingerprint or facial recognition with RFID card verification',
    ],
  },
  'firearm-identification-registration': {
    title: 'Firearm Identification & Registration',
    kicker: 'Digitizing Weapon Control and Accountability',
    intro:
      'Weapon security is paramount. Soochak Bharat provides RFID tagging and tracking of firearms for secure issuance, usage monitoring, and return verification in armories and outposts.',
    highlights: [
      'Serialized RFID tagging of guns, magazines, and gear',
      'Issuance and return logs for accountability',
      'Digital audit trail of firearm movement and usage',
      'Support for secure armory automation',
      'Integration with personnel credentials',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR2/CR4): Compact, durable for tagging firearms and metal components',
      'Desktop RFID Reader (SBD-U25): For armory check-in/check-out operations',
      'RFID Printer (SBPR-U2501): To encode serialized weapon ID tags',
      'Fixed Reader (SBR-U25-OS04): For continuous weapon zone monitoring',
    ],
  },
  'personnel-biometric-identity-management': {
    title: 'Personnel & Biometric Identity Management',
    kicker: 'Smart Identification for Defense Staff and Soldiers',
    intro:
      'Soochak Bharat’s RFID ID system ensures quick and secure identification of military personnel, supports recruitment processing, and prevents unauthorized access to secure zones.',
    highlights: [
      'RFID-embedded military ID cards or badges',
      'Smart onboarding and biometric identity registration',
      'Personnel movement tracking inside secure bases',
      'Integration with HRMS for recruitment and service tracking',
      'Access-tier-based authentication',
    ],
    hardware: [
      'Desktop ISO14443 Multi-Unity Reader (SBD-H25-43U): For card reading, biometric enrollment, and access control',
      'Biometric + RFID Integrated Devices: For dual-authentication identity at checkpoints',
      'RFID Tokens & Cards: For daily access and attendance tracking',
      'Handheld RFID Reader (SBH-U25): For mobile identity checks in field or transport zones',
    ],
  },
  'document-staff-recruitment-file-tracking': {
    title: 'Document & Staff Recruitment File Tracking',
    kicker: 'RFID-Enabled Document Workflow for Secure Defense Hiring',
    intro:
      'Paper-heavy recruitment and personnel file processes can be digitized and secured through RFID tagging, preventing misplacement and ensuring document traceability.',
    highlights: [
      'RFID-tagged personnel folders and records',
      'Easy file retrieval across defence departments',
      'Access logs to track who handled a file and when',
      'Alerts for missing or misfiled documents',
      'Secured storage and faster audits',
    ],
    hardware: [
      'Desktop RFID Reader (SBD-H25-93): For ISO15693 tags on documents and folders',
      'Ceramic Labels (SBT-25CR3): Embedded within file jackets or ID covers',
      '3 dBi PCB Antenna (SBA-U2503PCB): Compact cabinet-level document tracking',
      'Handheld RFID Reader (SBH-U25): For mobile file location and audits',
    ],
  },
} as const

type DefenceSlug = keyof typeof defenceDetails

interface PageProps {
  params: {
    slug: DefenceSlug
  }
}

export default function DefenceDetailPage({ params }: PageProps) {
  const detail = defenceDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0f172a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Defence &amp; Security</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{detail.title}</h1>
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


