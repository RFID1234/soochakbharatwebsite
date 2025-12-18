'use client'

import Image from 'next/image'
import Link from 'next/link'

const healthcareSubSolutions = [
  {
    id: 'patient-staff-access-management',
    title: 'Patient, Staff & Access Management',
    image: '/Sub-Sol_Soochak/Healthcare/1. Patient, Staff & Access Management.png',
    short:
      'Real-time RFID tracking of patients, staff, and visitors to improve safety, workflow efficiency, and access control.',
  },
  {
    id: 'surgical-tool-sterile-instrument-tracking',
    title: 'Surgical Tool & Sterile Instrument Tracking',
    image: '/Sub-Sol_Soochak/Healthcare/2. Surgical Tool & Sterile Instrument Tracking.png',
    short:
      'RFID-enabled tracking of critical surgical instruments and kits through sterilization and operating theatre cycles.',
  },
  {
    id: 'medication-administration-lab-specimen-control',
    title: 'Medication Administration & Lab Specimen Control',
    image: '/Sub-Sol_Soochak/Healthcare/3. Medication Administration & Lab Specimen Control.png',
    short:
      'Link patients, medications, and lab specimens with RFID to prevent dosing errors and sample mix-ups.',
  },
  {
    id: 'inventory-asset-management-medical-equipment-supplies',
    title: 'Inventory & Asset Management (Medical Equipment & Supplies)',
    image:
      '/Sub-Sol_Soochak/Healthcare/4. Inventory & Asset Management (Medical Equipment & Supplies).png',
    short:
      'End-to-end RFID visibility for high-value medical equipment and consumables across wards, stores, and theatres.',
  },
  {
    id: 'linen-laundry-management',
    title: 'Linen & Laundry Management',
    image: '/Sub-Sol_Soochak/Healthcare/5. Linen & Laundry Management.png',
    short:
      'Track hospital linens and uniforms through usage and wash cycles to maintain hygiene and reduce losses.',
  },
  {
    id: 'parking-visitor-vehicle-management',
    title: 'Parking & Visitor Vehicle Management (Optional Add-on)',
    image:
      '/Sub-Sol_Soochak/Healthcare/6. Parking & Visitor Vehicle Management (Optional Add-on).png',
    short:
      'Automate parking access and logging for ambulances, doctors, and visitors with RFID-based vehicle tagging.',
  },
]

export default function HealthcareSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Healthcare Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            RFID for Safer, Smarter, and More Efficient Medical Environments
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat’s RFID solutions empower hospitals and healthcare institutions to deliver safer care,
            improve inventory control, and streamline complex workflows—from patient identity to instrument
            sterilization.
          </p>
          <p className="text-base md:text-lg text.white/80">
            Our systems ensure traceability, accountability, and automation across the medical facility—helping staff
            focus more on patients and less on paperwork.
          </p>
        </div>
      </section>

      {/* Sub-solution Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Healthcare Use Cases &amp; Sub-Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthcareSubSolutions.map((sub) => (
              <div
                key={sub.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-black/60 group-hover:bg-transparent rounded-lg px-4 py-3 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                      <p className="text-xs text-white/90 line-clamp-3 mb-4">{sub.short}</p>
                      <Link
                        href={`/solutions/healthcare/${sub.id}`}
                        className="inline-block bg.white text-[#1e3a8a] hover:bg-gray-100 font-medium px-4 py-2 rounded text-sm transition-colors bg-white"
                      >
                        Know more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


