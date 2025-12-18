'use client'

import Image from 'next/image'
import Link from 'next/link'

const logisticsSubSolutions = [
  {
    id: 'automated-tolling-parking-solutions',
    title: 'Automated Tolling & Parking Solutions',
    image: '/Sub-Sol_Soochak/Logistics/1. Automated Tolling & Parking Solutions.png',
    short:
      'Contactless RFID tolling and parking access for high-speed entry/exit, accurate billing, and secure vehicle verification.',
  },
  {
    id: 'fleet-inward-outward-management',
    title: 'Fleet Inward/Outward Management',
    image: '/Sub-Sol_Soochak/Logistics/2. Fleet InwardOutward Management.png',
    short:
      'Automated logging of vehicle entry and exit at warehouses and depots to reduce gate congestion and improve turnaround.',
  },
  {
    id: 'cargo-container-tracking',
    title: 'Cargo & Container Tracking',
    image: '/Sub-Sol_Soochak/Logistics/3. Cargo & Container Tracking.png',
    short:
      'End-to-end RFID tracking of cargo items and containers from loading dock to final delivery to prevent loss and tampering.',
  },
  {
    id: 'tyre-vehicle-component-tracking',
    title: 'Tyre & Vehicle Component Tracking',
    image: '/Sub-Sol_Soochak/Logistics/4. Tyre & Vehicle Component Tracking.png',
    short:
      'RFID-based monitoring of tyres and critical vehicle components for safer fleets and data-driven maintenance.',
  },
  {
    id: 'secure-transportation-storage-monitoring',
    title: 'Secure Transportation & Storage Monitoring',
    image: '/Sub-Sol_Soochak/Logistics/5. Secure Transportation & Storage Monitoring.png',
    short:
      'Tamper-evident RFID sealing and zone monitoring for secure cargo movement and controlled storage environments.',
  },
]

export default function LogisticsSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1f2937] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Logistics &amp; Transportation Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Driving Speed, Visibility &amp; Control in Supply Chain Operations
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat’s RFID solutions enable logistics providers and transport operators to track, monitor, and
            secure fleets, cargo, and infrastructure with high accuracy. From automated tolls to secure cargo
            validation, we deliver end-to-end visibility across every checkpoint, route, and storage zone.
          </p>
          <p className="text-base md:text-lg text-white/80">
            These systems ensure faster movement, reduced errors, and complete operational transparency across your
            logistics network.
          </p>
        </div>
      </section>

      {/* Sub-solution Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Logistics &amp; Transportation Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {logisticsSubSolutions.map((sub) => (
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
                        href={`/solutions/transportation-logistics/${sub.id}`}
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


