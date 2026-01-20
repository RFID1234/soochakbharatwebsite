'use client'

import Image from 'next/image'
import Link from 'next/link'

const retailSubSolutions = [
  {
    id: 'smart-fitting-room-system',
    title: 'Smart Fitting Room System',
    image: '/Sub-Sol_Soochak/Retail/1. Smart Fitting Room System.png',
    short:
      "Revolutionize in-store experiences with RFID-enabled fitting rooms that detect garments, show suggestions, and capture real-time customer interaction data.",
  },
  {
    id: 'inventory-supply-chain-store-operations',
    title: 'Inventory, Supply Chain & Store Operations Management',
    image: '/Sub-Sol_Soochak/Retail/2. Inventory, Supply Chain & Store Operations Management.png',
    short:
      'Achieve end-to-end retail visibility from warehouse to shop floor with RFID-driven stock accuracy, replenishment, and supply-chain traceability.',
  },
  {
    id: 'checkout-optimization-mobile-pos',
    title: 'Checkout Optimization & Mobile POS',
    image: '/Sub-Sol_Soochak/Retail/3. Checkout Optimization & Mobile POS.png',
    short:
      'Speed up billing with RFID bulk scanning, mobile POS, and contactless loyalty—reducing queues and improving the overall checkout experience.',
  },
  {
    id: 'jewellery-high-value-item-management',
    title: 'Jewellery & High-Value Item Management',
    image: '/Sub-Sol_Soochak/Retail/4. Jewellery & High-Value Item Management.png',
    short:
      'Protect premium inventory with serialized RFID tags that enable fast stock counts, anti-counterfeiting checks, and movement alerts.',
  },
  {
    id: 'washing-management-garments-uniforms',
    title: 'Washing Management for Garments & Uniforms',
    image: '/Sub-Sol_Soochak/Retail/5. Washing Management for Garments & Uniforms.png',
    short:
      'Track store uniforms and rental garments through every wash cycle with durable RFID tags designed for industrial laundry environments.',
  },
  {
    id: 'customer-experience-engagement',
    title: 'Customer Experience & Engagement',
    image: '/Sub-Sol_Soochak/Retail/6. Customer Experience & Engagement.png',
    short:
      'Use RFID-powered smart mirrors, kiosks, and interactive displays to deliver personalized product recommendations and in-store analytics.',
  },
  {
    id: 'anti-counterfeiting-authenticity-verification',
    title: 'Anti-Counterfeiting & Authenticity Verification',
    image: '/Sub-Sol_Soochak/Retail/7. Anti-Counterfeiting & Authenticity Verification.png',
    short:
      'Protect brand integrity with serialized RFID tags that enable instant authenticity checks at POS, returns, and after-sales service.',
  },
]

export default function RetailSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Retail Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digitally-Driven Retail Powered by RFID Intelligence</h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat’s RFID solutions bring automation, visibility, and precision to modern retail. From
            streamlined checkout to high-value inventory control, our technology enhances every aspect of retail—from
            backroom operations to the customer experience.
          </p>
          <p className="text-base md:text-lg text-white/80">
            Built to scale with your business, these solutions reduce shrinkage, improve operational efficiency, and
            unlock powerful data-driven retailing.
          </p>
        </div>
      </section>

      {/* Sub-solution Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Retail Use Cases & Sub-Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {retailSubSolutions.map((sub) => (
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
                        href={`/solutions/retail/${sub.id}`}
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

