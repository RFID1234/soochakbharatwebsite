'use client'

import { notFound } from 'next/navigation'

const healthcareDetails = {
  'patient-staff-access-management': {
    title: 'Patient, Staff & Access Management',
    kicker: 'Enhancing Safety and Efficiency Through Real-Time Tracking',
    intro:
      'Soochak Bharat’s RFID personnel tracking system improves hospital security, optimizes workflow, and enables better resource allocation by tracking patients, staff, and visitors in real time.',
    highlights: [
      'RFID wristbands for patient identification and location tracking',
      'Real-time staff location and task assignments',
      'Attendance logging for doctors, nurses, and cleaners',
      'Integration with biometric and access control systems',
      'Emergency alerts and movement restrictions',
    ],
    hardware: [
      'RFID Wristbands & Cards: Assigned to patients, staff, and visitors',
      'Desktop Reader (SBD-H25-43): For wristband encoding and ID management',
      'Integrated Reader (SBI-U2506): Installed at room or ward entry points',
      'Biometric + RFID Combo Devices: For multi-level access to ICUs or OT zones',
    ],
  },
  'surgical-tool-sterile-instrument-tracking': {
    title: 'Surgical Tool & Sterile Instrument Tracking',
    kicker: 'Precision Tracking of Life-Critical Surgical Equipment',
    intro:
      'Misplaced or unsterilized surgical instruments can lead to life-threatening complications. Soochak Bharat’s RFID-enabled surgical tool tracking ensures strict control over critical instruments and sterilization cycles.',
    highlights: [
      'RFID-tagged tools and surgical kits with lifecycle monitoring',
      'Sterile status tracking with autoclave cycle logging',
      'Pre-op and post-op tool count verification',
      'Alerts for tool misplacement or unauthorized removal',
      'Compliance support for surgical safety protocols',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR1/CR2): Small, sterilization-resistant tags for surgical instruments',
      'Flexible Washable RFID Tags (SBT-25FX Series): For tagging surgical gowns, masks, and linens',
      'Handheld Reader (SBH-U25): For pre-surgery and post-surgery scanning',
      'Fixed Reader (SBR-U25-OS04): At OT entrance for tool entry/exit validation',
    ],
  },
  'medication-administration-lab-specimen-control': {
    title: 'Medication Administration & Lab Specimen Control',
    kicker: 'Ensuring Accuracy in Drug Dispensing and Sample Handling',
    intro:
      'Errors in medication delivery or specimen labeling can lead to severe consequences. Soochak Bharat provides RFID-based patient-medication linking and specimen tracking to prevent such risks.',
    highlights: [
      'RFID-tagged medication trays linked to patient ID',
      'Verifies correct drug, dosage, and timing before administration',
      'Lab specimens tracked from collection to analysis',
      'Alerts for sample mix-ups, delays, or route deviations',
      'Audit logs for compliance and quality assurance',
    ],
    hardware: [
      'RFID Desktop Reader (SBD-H25-93): For medication tray and specimen logging',
      'Ceramic or Mini PCB Tags (SBT-25CR3 / PCB1): For tagging sample tubes and vials',
      'Handheld Reader (SBH-U25): For bedside drug verification or sample pickup',
      'Wristbands & Cards: To link patient ID with medication/samples',
    ],
  },
  'inventory-asset-management-medical-equipment-supplies': {
    title: 'Inventory & Asset Management (Medical Equipment & Supplies)',
    kicker: 'Real-Time Control Over Medical Inventory and High-Value Assets',
    intro:
      'Soochak Bharat’s asset and inventory tracking system helps hospitals manage expensive medical devices, PPE stock, implants, and consumables with pinpoint accuracy.',
    highlights: [
      'RFID tagging of beds, monitors, wheelchairs, defibrillators',
      'Real-time stock visibility for gloves, masks, syringes, and implants',
      'Alerts for shortages, expirations, or stockouts',
      'Movement tracking for mobile assets',
      'Integration with HIS and procurement platforms',
    ],
    hardware: [
      'Flexible Anti-metal Labels (SBT-25FX Series): For equipment, shelves, and storage racks',
      'Ceramic Tags (SBT-25CR4): For compact high-value tools',
      'Fixed Reader (SBR-U25-OS08): At storage room entrances',
      'Handheld Reader (SBH-U25): For mobile inventory rounds',
    ],
  },
  'linen-laundry-management': {
    title: 'Linen & Laundry Management',
    kicker: 'Tagging Medical Textiles for Cleanliness and Accountability',
    intro:
      'Hospital linen, including bedsheets, staff uniforms, and patient gowns, must be tracked through usage, washing, and return cycles. Soochak Bharat’s RFID laundry management ensures hygiene compliance and reduces linen loss.',
    highlights: [
      'RFID-tagged washable linens and garments',
      'Usage logging and return validation',
      'Movement tracking across wards, laundry rooms, and stores',
      'Alerts for missing or under-returned garments',
      'Supports integration with hospital laundry vendors',
    ],
    hardware: [
      'Washable RFID Tags (SBT-25FX13): Embedded into hospital linens',
      'Desktop Reader (SBD-U25): For registration and check-in/check-out',
      'Handheld Reader (SBH-U25): For field scanning during laundry collection',
      'Fixed Reader (SBR-U25-OS04): Deployed in laundry zones and storage',
    ],
  },
  'parking-visitor-vehicle-management': {
    title: 'Parking & Visitor Vehicle Management (Optional Add-on)',
    kicker: 'Streamlined Access Control for Hospital Vehicles and Visitors',
    intro:
      'Parking space in healthcare facilities must be well-regulated for ambulances, doctors, and patients. Soochak Bharat offers RFID-based vehicle tagging and access automation.',
    highlights: [
      'Fast, contactless parking access for staff and ambulances',
      'Visitor parking permits with defined timeframes',
      'Integration with hospital entry logs and billing systems',
      'Supports valet and zone-based parking structures',
    ],
    hardware: [
      'Integrated Reader (SBI-U2509): Installed at hospital gates',
      'ABS Anti-metal Tags (SBT-25ABS1): For ambulances, doctors’ vehicles, and visitors',
      '12 dBi Antenna (SBA-U2512P): For drive-in ID validation',
      'Desktop Reader (SBD-U25): For vehicle permit issuance',
    ],
  },
} as const

type HealthcareSlug = keyof typeof healthcareDetails

interface PageProps {
  params: {
    slug: HealthcareSlug
  }
}

export default function HealthcareDetailPage({ params }: PageProps) {
  const detail = healthcareDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Healthcare</p>
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


