'use client'

import Image from 'next/image'
import Link from 'next/link'

const educationSubSolutions = [
  {
    id: 'one-card-campus-smart-identity',
    title: 'One Card Campus & Smart Identity',
    image: '/Sub-Sol_Soochak/Education/1. One Card Campus & Smart Identity.png',
    short:
      'Unified RFID ID for students and staff that powers access, payments, attendance, and services across the entire campus.',
  },
  {
    id: 'attendance-access-management',
    title: 'Attendance & Access Management',
    image: '/Sub-Sol_Soochak/Education/2. Attendance & Access Management.png',
    short:
      'Automated contactless logging of student and staff presence at classrooms, labs, and academic buildings.',
  },
  {
    id: 'library-books-management',
    title: 'Library & Books Management',
    image: '/Sub-Sol_Soochak/Education/3. Library & Books Management.png',
    short:
      'RFID-tagged books and cards for faster issue/return, automated inventory, and anti-theft gate tracking.',
  },
  {
    id: 'hostel-pedestrian-access-control',
    title: 'Hostel & Pedestrian Access Control',
    image: '/Sub-Sol_Soochak/Education/4. Hostel & Pedestrian Access Control.png',
    short:
      'Secure hostel and restricted-area entry using RFID credentials with real-time movement logs and alerts.',
  },
  {
    id: 'canteen-campus-payments',
    title: 'Canteen & Campus Payments',
    image: '/Sub-Sol_Soochak/Education/5. Canteen & Campus Payments.png',
    short:
      'Cashless payments at cafeterias and kiosks using prepaid RFID cards or wristbands linked to student accounts.',
  },
  {
    id: 'asset-parking-management',
    title: 'Asset & Parking Management',
    image: '/Sub-Sol_Soochak/Education/6. Asset & Parking Management.png',
    short:
      'RFID-based tracking of IT/lab equipment and campus parking permits for staff and students.',
  },
]

export default function EducationSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Education Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building Smarter Campuses with RFID-Driven Automation
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat’s RFID solutions streamline access control, attendance, library operations, cashless payments,
            and asset tracking through a unified digital ecosystem.
          </p>
          <p className="text-base md:text-lg text-white/80">
            Institutions can create safer, more organized, and data-driven campuses while enhancing the student and
            staff experience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Education Use Cases &amp; Sub-Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationSubSolutions.map((sub) => (
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

                  <div className="absolute inset-0 bg-gradient.to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-black/60 group-hover:bg-transparent rounded-lg px-4 py-3 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                      <p className="text-xs text-white/90 line-clamp-3 mb-4">{sub.short}</p>
                      <Link
                        href={`/solutions/education/${sub.id}`}
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


