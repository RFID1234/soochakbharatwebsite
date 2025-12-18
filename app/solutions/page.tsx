'use client'

import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    id: 'defence-security',
    title: 'Defence & Security',
    description: 'Strengthen national security & surveillance with advanced RFID & access control solutions. We enable secure authentication, asset tracking, & personnel management for critical operations.',
    image: '/Sub-Sol_Soochak/Defence/1. Asset & Convoy Tracking.png',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Enhance production efficiency and asset tracking with RFID-driven automation and inventory management. Our solutions ensure real-time visibility, reduced downtime, and seamless operations.',
    image: '/Sub-Sol_Soochak/manufacturing/1. Work-in-Progress (WIP) Tracking.png',
  },
  {
    id: 'transportation-logistics',
    title: 'Transportation & Logistics',
    description: 'Optimize supply chain efficiency with RFID-powered fleet management, cargo tracking, and warehouse automation. Ensure real-time visibility, reduced losses, and faster deliveries.',
    image: '/Sub-Sol_Soochak/Logistics/1. Automated Tolling & Parking Solutions.png',
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Revolutionize inventory management, theft prevention, and customer experience with RFID. Gain real-time stock insights, automated checkouts, and enhanced operational efficiency.',
    image: '/Sub-Sol_Soochak/Retail/1. Smart Fitting Room System.png',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Ensure patient safety, equipment tracking, and secure access control with RFID. Improve asset utilization, reduce errors, and streamline hospital operations for better healthcare outcomes.',
    image: '/Sub-Sol_Soochak/Healthcare/1. Patient, Staff & Access Management.png',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Elevate guest experiences and operational security with RFID-based smart access, cashless payments, and asset tracking. Enhance convenience and security for both guests and staff.',
    image: '/Sub-Sol_Soochak/Hospitality/1. Seamless Check-In  Check-Out & Guest Access.png',
  },
  {
    id: 'government-public',
    title: 'Government & Public',
    description:
      'Digitize public sector assets, citizen services, and urban infrastructure with RFID solutions that improve transparency, control, and service delivery.',
    image: '/Sub-Sol_Soochak/Govt & Public/1. Public Asset & File Tracking.png',
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-16">Our Solutions</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="group">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="bg-blue-900 text-white p-6 rounded-b-lg">
                  <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-sm mb-4">{solution.description}</p>
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

