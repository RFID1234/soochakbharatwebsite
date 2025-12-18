import Image from 'next/image'
import Link from 'next/link'

const softwareApps = [
  {
    id: 'hospital',
    title: 'Hospital Asset & Patient Flow Software',
    description:
      'Live tracking of medical equipment, wheelchairs, and patients with RFID-enabled dashboards and alerts.',
    image: '/software/hospital/WhatsApp Image 2025-12-18 at 11.48.20 AM.jpeg',
  },
  {
    id: 'school',
    title: 'School Attendance & Safety Software',
    description:
      'Automated student attendance, gate entry, and bus boarding with RFID cards and central dashboards.',
    image: '/software/school/WhatsApp Image 2025-12-18 at 11.41.12 AM.jpeg',
  },
  {
    id: 'cow-shelter',
    title: 'Cow Shelter & Livestock Management Software',
    description:
      'RFID-based identification, health logging, and movement tracking for gaushalas and livestock farms.',
    image: '/software/cow shelter/WhatsApp Image 2025-12-18 at 12.00.58 PM.jpeg',
  },
  {
    id: 'protein',
    title: 'Protein & Nutrition Supply Chain Software',
    description:
      'Track raw material, production batches, and dispatches for protein and nutrition brands using RFID.',
    image: '/software/protein/WhatsApp Image 2025-12-18 at 12.07.37 PM.jpeg',
  },
]

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">
            SOFTWARE
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">RFID-Driven Software Platforms</h1>
          <p className="text-sm md:text-base text-blue-100 max-w-3xl mx-auto">
            Explore vertical-focused software built on top of Soochak Bharat’s RFID and automation stack.
          </p>
        </div>
      </section>

      {/* Software list with Read More */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareApps.map((app) => (
              <Link
                key={app.id}
                href={`/software/${app.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group flex flex-col"
              >
                <div className="relative h-44 bg-gray-100">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#1e40af] transition-colors">
                      {app.title}
                    </h2>
                    <p className="text-sm text-gray-700 line-clamp-3">{app.description}</p>
                  </div>
                  <span className="mt-3 text-xs font-medium text-[#1e3a8a] group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-500 text-sm">
            ...and many more customised software workflows built on our RFID platform.
          </p>
        </div>
      </section>
    </div>
  )
}

