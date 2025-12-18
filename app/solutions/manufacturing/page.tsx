'use client'

import Image from 'next/image'
import Link from 'next/link'

const manufacturingSubSolutions = [
  {
    id: 'work-in-progress-tracking',
    title: 'Work-in-Progress (WIP) Tracking',
    image: '/Sub-Sol_Soochak/manufacturing/1. Work-in-Progress (WIP) Tracking.png',
    short:
      'Real-time visibility of semi-finished goods as they move across production stages, reducing delays and improving throughput.',
  },
  {
    id: 'tool-asset-tracking',
    title: 'Tool and Asset Tracking',
    image: '/Sub-Sol_Soochak/manufacturing/2. Tool and Asset Tracking.png',
    short:
      'RFID-based monitoring of critical tools, fixtures, and machines to prevent loss, ensure availability, and support maintenance.',
  },
  {
    id: 'inventory-warehouse-management',
    title: 'Inventory & Warehouse Management (WMS)',
    image: '/Sub-Sol_Soochak/manufacturing/3. Inventory & Warehouse Management (WMS).png',
    short:
      'Fast, accurate RFID-driven warehouse workflows for receiving, stocking, picking, and dispatching materials and finished goods.',
  },
  {
    id: 'returnable-transport-item-management',
    title: 'Returnable Transport Item (RTI) Management',
    image: '/Sub-Sol_Soochak/manufacturing/4. Returnable Transport Item (RTI) Management.png',
    short:
      'Track reusable crates, containers, and pallets throughout their lifecycle to reduce loss and maximize asset utilization.',
  },
  {
    id: 'track-trace-supply-chain-integration',
    title: 'Track & Trace + Supply Chain Integration',
    image: '/Sub-Sol_Soochak/manufacturing/5. Track & Trace + Supply Chain Integration.png',
    short:
      'End-to-end RFID traceability of components and finished products from production lines to outbound logistics.',
  },
  {
    id: 'warranty-product-history-tracking',
    title: 'Warranty & Product History Tracking',
    image: '/Sub-Sol_Soochak/manufacturing/6. Warranty & Product History Tracking.png',
    short:
      'Attach complete product history to RFID IDs to simplify warranty validation, recalls, and after-sales service.',
  },
]

export default function ManufacturingSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#111827] to-[#1f2937] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Manufacturing Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">RFID-Powered Intelligence for Smarter Manufacturing</h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat’s RFID solutions for manufacturing optimize visibility, traceability, and operational
            control across complex factory environments. From shop floor automation to supply chain integration and
            warranty tracking, our rugged RFID systems bring clarity and speed to every production phase.
          </p>
          <p className="text-base md:text-lg text-white/80">
            We help manufacturers reduce downtime, control costs, and build lean, quality-driven operations.
          </p>
        </div>
      </section>

      {/* Sub-solution Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Manufacturing Use Cases &amp; Sub-Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manufacturingSubSolutions.map((sub) => (
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
                  <div className="absolute inset-0 flex flex-col justify.end p-6">
                    <div className="bg-black/60 group-hover:bg-transparent rounded-lg px-4 py-3 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                      <p className="text-xs text-white/90 line-clamp-3 mb-4">{sub.short}</p>
                      <Link
                        href={`/solutions/manufacturing/${sub.id}`}
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


