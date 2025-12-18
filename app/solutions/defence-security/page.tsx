'use client'

import Image from 'next/image'
import Link from 'next/link'

const defenceSubSolutions = [
  {
    id: 'asset-convoy-tracking',
    title: 'Asset & Convoy Tracking',
    image: '/Sub-Sol_Soochak/Defence/1. Asset & Convoy Tracking.png',
    short:
      'Real-time RFID tracking of weapons, vehicles, and high-value cargo across bases, supply lines, and field operations.',
  },
  {
    id: 'secure-access-control-border-management',
    title: 'Secure Access Control & Border Management',
    image: '/Sub-Sol_Soochak/Defence/2. Secure Access Control & Border Management.png',
    short:
      'High-security RFID access for personnel and vehicles at bases, border checkpoints, and restricted defence zones.',
  },
  {
    id: 'firearm-identification-registration',
    title: 'Firearm Identification & Registration',
    image: '/Sub-Sol_Soochak/Defence/3. Firearm Identification & Registration.png',
    short:
      'Serialized RFID tagging of firearms for secure issuance, movement logging, and automated armory control.',
  },
  {
    id: 'personnel-biometric-identity-management',
    title: 'Personnel & Biometric Identity Management',
    image: '/Sub-Sol_Soochak/Defence/4. Personnel & Biometric Identity Management.png',
    short:
      'RFID + biometric identity management for soldiers and defence staff, enabling secure access and movement tracking.',
  },
  {
    id: 'document-staff-recruitment-file-tracking',
    title: 'Document & Staff Recruitment File Tracking',
    image: '/Sub-Sol_Soochak/Defence/5. Document & Staff Recruitment File Tracking.png',
    short:
      'RFID-enabled document workflows for secure defence recruitment and personnel record management.',
  },
]

export default function DefenceSecuritySolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Defence &amp; Security Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission-Critical RFID Solutions for National Defense</h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat delivers rugged, high-performance RFID systems designed to meet the demanding needs of
            defence operations and national security. From secure access control to firearms registration, our
            solutions ensure visibility, accountability, and control in high-stakes environments.
          </p>
          <p className="text-base md:text-lg text-white/80">
            Built with industrial-grade components and advanced data processing, these systems enhance operational
            efficiency, personnel management, and situational awareness in the most challenging conditions.
          </p>
        </div>
      </section>

      {/* Sub-solution Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Defence &amp; Security Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {defenceSubSolutions.map((sub) => (
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

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-black/60 group-hover:bg-transparent rounded-lg px-4 py-3 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                      <p className="text-xs text-white/90 line-clamp-3 mb-4">{sub.short}</p>
                      <Link
                        href={`/solutions/defence-security/${sub.id}`}
                        className="inline-block bg-white text-[#1e3a8a] hover:bg-gray-100 font-medium px-4 py-2 rounded text-sm transition-colors"
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


