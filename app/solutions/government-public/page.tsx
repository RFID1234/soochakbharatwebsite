'use client'

import Image from 'next/image'
import Link from 'next/link'

const govtSubSolutions = [
  {
    id: 'public-asset-file-tracking',
    title: 'Public Asset & File Tracking',
    image: '/Sub-Sol_Soochak/Govt & Public/1. Public Asset & File Tracking.png',
    short:
      'RFID-powered tracking of government assets and confidential files for better visibility, accountability, and audit readiness.',
  },
  {
    id: 'parking-access-control-government-premises',
    title: 'Parking & Access Control in Government Premises',
    image: '/Sub-Sol_Soochak/Govt & Public/2. Parking & Access Control in Government Premises.png',
    short:
      'Secure, contactless entry and access management for vehicles and personnel across high-security government zones.',
  },
  {
    id: 'urban-infrastructure-smart-city-management',
    title: 'Urban Infrastructure & Smart City Management',
    image: '/Sub-Sol_Soochak/Govt & Public/3. Urban Infrastructure & Smart City Management.png',
    short:
      'RFID-enabled monitoring of city assets and utilities to support smart city operations and proactive maintenance.',
  },
  {
    id: 'solid-waste-municipal-operations',
    title: 'Solid Waste & Municipal Operations',
    image: '/Sub-Sol_Soochak/Govt & Public/4. Solid Waste & Municipal Operations.png',
    short:
      'Automated tracking of waste bins, vehicles, and sanitation staff for cleaner, more transparent municipal services.',
  },
  {
    id: 'public-transport-fare-automation',
    title: 'Public Transport & Fare Automation',
    image: '/Sub-Sol_Soochak/Govt & Public/5. Public Transport & Fare Automation.png',
    short:
      'RFID-based ticketing and fare automation for metros, buses, and ferries to simplify commuting and back-end settlement.',
  },
  {
    id: 'judiciary-court-record-management',
    title: 'Judiciary & Court Record Management',
    image: '/Sub-Sol_Soochak/Govt & Public/6. Judiciary & Court Record Management.png',
    short:
      'RFID-enabled tracking of case files and exhibits to improve judicial efficiency and maintain strict traceability.',
  },
]

export default function GovernmentPublicSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#111827] to-[#1e3a8a] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Government &amp; Public Sector Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digitizing Governance with RFID-Powered Efficiency
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat’s RFID solutions empower government departments, public sector units, and municipal bodies to
            deliver faster, more accountable, and citizen-friendly services.
          </p>
          <p className="text-base md:text-lg text-white/80">
            By automating critical functions—from asset tracking and waste management to secure identity and smart
            transportation—we enable transparency, control, and operational intelligence across every layer of public
            infrastructure.
          </p>
        </div>
      </section>

      {/* Sub-solution cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Government &amp; Public Sector Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {govtSubSolutions.map((sub) => (
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
                        href={`/solutions/government-public/${sub.id}`}
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


