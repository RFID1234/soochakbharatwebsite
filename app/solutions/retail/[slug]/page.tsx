'use client'

import { notFound } from 'next/navigation'

const retailDetails = {
  'smart-fitting-room-system': {
    title: 'Smart Fitting Room System',
    kicker: 'Revolutionizing In-Store Experience with RFID Technology',
    intro:
      "Soochak Bharat's Smart Fitting Room solution bridges the gap between physical retail and digital convenience. It delivers personalized recommendations, real-time engagement, and analytics inside the fitting room to help convert interest into purchases.",
    highlights: [
      'Automatically detects RFID-tagged garments entering the fitting room',
      'Displays product info, sizes, and alternatives on a digital screen',
      'Captures customer interaction time and preference data',
      'Integrates with CRM and inventory systems for smart promotions',
      'Enables customer assistance requests from within the fitting room',
    ],
    hardware: [
      'Integrated Reader (SBI-U2509): 9 dBi antenna for long-range tag reading at room entry',
      'Flexible Anti-metal Tags (SBT-25FX Series): Washable garment labels for consistent detection',
      '6 dBi Pure Antenna (SBA-U2506P): Mounted inside fitting room for stable mid-range reading',
      'RFID Printer (SBPR-U2501): For on-demand encoding of garment tags',
    ],
  },
  'inventory-supply-chain-store-operations': {
    title: 'Inventory, Supply Chain & Store Operations Management',
    kicker: 'End-to-End Retail Intelligence Across the Product Lifecycle',
    intro:
      'Soochak Bharat enables full product traceability and stock control from source to shelf. From incoming shipments to in-store restocking, RFID brings clarity and speed to every layer of retail logistics.',
    highlights: [
      'Real-time inventory tracking across backroom and floor',
      'RFID-based stock replenishment and restock alerts',
      'Supply chain traceability from warehouse to store',
      'Shelf compliance and shrinkage prevention',
      'Integration with ERP and WMS platforms',
    ],
    hardware: [
      'UHF Fixed Reader (SBR-U25-OS08): For continuous scanning in storerooms and loading zones',
      'Handheld Reader (SBH-U25): For floor audits, restocking, and mobile inventory tasks',
      'Flexible Anti-metal Labels (SBT-25FX Series): For garment racks, cartons, and bins',
      'RFID Printer (SBPR-U2501): For tagging stock during inward processing',
    ],
  },
  'checkout-optimization-mobile-pos': {
    title: 'Checkout Optimization & Mobile POS',
    kicker: 'Faster Payments, Smaller Queues, Better Experience',
    intro:
      'Enable seamless and contactless billing with RFID-powered checkout counters and mobile line-busting solutions. Soochak Bharat reduces friction in the payment process, improving both speed and customer satisfaction.',
    highlights: [
      'One-touch checkout using RFID bulk item scanning',
      'Mobile POS for on-the-go billing during rush hours',
      'RFID-enabled customer cards for loyalty and discounts',
      'Reduced cashier dependency and scanning time',
      'Integration with payment and POS systems',
    ],
    hardware: [
      'Integrated Reader (SBI-U2506): Built into POS stations for rapid tag reading',
      'Handheld Reader (SBH-U25): For mobile POS and line-busting',
      'RFID Cards/Wristbands: For customer identification and digital wallets',
      'Desktop Reader (SBD-U25): For member check-in or voucher validation',
    ],
  },
  'jewellery-high-value-item-management': {
    title: 'Jewellery & High-Value Item Management',
    kicker: 'Securing and Managing Premium Retail Inventory',
    intro:
      'Retailers dealing with jewellery and luxury items can benefit from high-precision RFID tagging to ensure authenticity, reduce theft, and maintain accurate inventory.',
    highlights: [
      'Unique RFID tags for each jewellery item',
      'Anti-counterfeiting authentication at POS or return counters',
      'High-accuracy counts without opening display cases',
      'Alerts for unauthorized movement or removal',
      'Integration with security systems and asset logs',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR1/CR3): Ultra-compact tags for rings, earrings, and accessories',
      'Desktop Reader (SBD-U25): Used for counter-side validation and return management',
      'Fixed Reader (SBR-U25-OS04): Mounted in display areas for tag detection without contact',
      'RFID Printer (SBPR-U2501): For unique encoded tag generation per SKU',
    ],
  },
  'washing-management-garments-uniforms': {
    title: 'Washing Management for Garments & Uniforms',
    kicker: 'Lifecycle Tracking of Store Uniforms and Rental Apparel',
    intro:
      'Soochak Bharat’s RFID tags are designed to withstand industrial laundry cycles, making them ideal for tracking store uniforms or garments in rental fashion setups.',
    highlights: [
      'Washable RFID tags embedded in uniforms and garments',
      'Track garments through wash cycles, usage count, and return',
      'Prevents loss, mixing, or unreturned items',
      'Integration with laundry vendors or internal systems',
    ],
    hardware: [
      'Flexible Washable Tags (SBT-25FX13): Designed for multiple laundry cycles',
      'Handheld Reader (SBH-U25): For garment check-in/check-out during washroom handling',
      'Fixed Reader (SBR-U25-OS04): At laundry entry/exit or collection points',
      'Desktop Reader (SBD-U25): For uniform registration and wash log management',
    ],
  },
  'customer-experience-engagement': {
    title: 'Customer Experience & Engagement',
    kicker: 'RFID-Powered Personalization for In-Store Shoppers',
    intro:
      'Enhance the shopping journey through interactive experiences and real-time product insights powered by RFID.',
    highlights: [
      'Smart mirrors or kiosks showing live product info',
      'Personalized recommendations based on product scans',
      'Interactive displays and loyalty program integration',
      'Heatmap analytics based on customer-item interaction',
      'Support for virtual try-on and digital fitting tools',
    ],
    hardware: [
      'Integrated Reader (SBI-U2509): For real-time interaction at digital displays',
      'Flexible Anti-metal Labels (SBT-25FX Series): On each item for traceability',
      '6 dBi Pure Antenna (SBA-U2506P): For fitting zones and interactive shelves',
    ],
  },
  'anti-counterfeiting-authenticity-verification': {
    title: 'Anti-Counterfeiting & Authenticity Verification',
    kicker: 'Protecting Brand Integrity with Serialized RFID Tags',
    intro:
      'Soochak Bharat enables each product to be assigned a unique RFID identifier, allowing store personnel and customers to verify authenticity on the spot.',
    highlights: [
      'Serialized RFID tags linked to brand authentication platforms',
      'Tamper-evident tag formats',
      'Mobile validation tools for customers and retailers',
      'Reduces return fraud and counterfeit resale',
    ],
    hardware: [
      'Ceramic Labels (SBT-25CR4): For hard-to-duplicate luxury and fashion items',
      'Desktop Reader (SBD-U25): For brand-side validation and returns',
      'RFID Printer (SBPR-U2501): For encoding secure product identities',
    ],
  },
} as const

type RetailSlug = keyof typeof retailDetails

interface PageProps {
  params: {
    slug: RetailSlug
  }
}

export default function RetailDetailPage({ params }: PageProps) {
  const detail = retailDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0f172a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Retail Solutions</p>
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


