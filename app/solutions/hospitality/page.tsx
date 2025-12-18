'use client'

import Image from 'next/image'
import Link from 'next/link'

const hospitalitySubSolutions = [
  {
    id: 'seamless-check-in-check-out-guest-access',
    title: 'Seamless Check-In / Check-Out & Guest Access',
    image: '/Sub-Sol_Soochak/Hospitality/1. Seamless Check-In  Check-Out & Guest Access.png',
    short:
      'RFID keycards and wristbands enable fast, contactless guest registration, room access, and personalized services.',
  },
  {
    id: 'housekeeping-efficiency-linen-management',
    title: 'Housekeeping Efficiency & Linen Management',
    image: '/Sub-Sol_Soochak/Hospitality/2. Housekeeping Efficiency & Linen Management.png',
    short:
      'Track linens, uniforms, and housekeeping activities to ensure timely service, cleanliness, and reduced textile loss.',
  },
  {
    id: 'parking-visitor-vehicle-management-hospitality',
    title: 'Parking & Visitor Vehicle Management',
    image: '/Sub-Sol_Soochak/Hospitality/3. Parking & Visitor Vehicle Management.png',
    short:
      'Automate guest, staff, and vendor parking with RFID permits, time-stamped access logs, and zone-based control.',
  },
  {
    id: 'asset-supply-tracking-minibar-amenities-equipment',
    title: 'Asset & Supply Tracking (Minibar, Amenities, Equipment)',
    image: '/Sub-Sol_Soochak/Hospitality/4. Asset & Supply Tracking (Minibar, Amenities, Equipment).png',
    short:
      'RFID-tag critical hotel assets and supplies to prevent shrinkage, automate replenishment, and maintain service quality.',
  },
  {
    id: 'conference-event-management',
    title: 'Conference & Event Management',
    image: '/Sub-Sol_Soochak/Hospitality/5. Conference & Event Management.png',
    short:
      'Manage attendees, zones, and event assets with RFID-based credentials, access control, and real-time analytics.',
  },
]

export default function HospitalitySolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#312e81] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Hospitality Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Elevating Guest Experience &amp; Operational Excellence with RFID
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat’s RFID solutions for the hospitality industry bring automation, elegance, and intelligence to
            everyday operations—from seamless check-ins to efficient linen tracking and secure access.
          </p>
          <p className="text-base md:text-lg text-white/80">
            Hotels, resorts, and event venues can deliver faster services, reduce losses, and gain complete visibility
            across assets, people, and services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Hospitality Use Cases &amp; Sub-Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hospitalitySubSolutions.map((sub) => (
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
                        href={`/solutions/hospitality/${sub.id}`}
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


