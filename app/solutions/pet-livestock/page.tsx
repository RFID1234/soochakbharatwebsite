'use client'

import Image from 'next/image'
import Link from 'next/link'

const petSubSolutions = [
  {
    id: 'electronic-identification-health-records',
    title: 'Electronic Identification & Health Records',
    image: '/Sub-Sol_Soochak/Pet & Livestock/1. Electronic Identification & Health Records.png',
    short:
      'Lifetime RFID tagging for individual animals, linking each to a secure digital profile with health and ownership data.',
  },
  {
    id: 'vaccination-inoculation-disease-management',
    title: 'Vaccination, Inoculation & Disease Management',
    image: '/Sub-Sol_Soochak/Pet & Livestock/2. Vaccination, Inoculation & Disease Management.png',
    short:
      'RFID-linked vaccination histories and health monitoring to support disease control programs and veterinary care.',
  },
  {
    id: 'artificial-insemination-breeding-records',
    title: 'Artificial Insemination & Breeding Records',
    image: '/Sub-Sol_Soochak/Pet & Livestock/3. Artificial Insemination & Breeding Records.png',
    short:
      'Automated reproductive tracking for livestock to improve breeding efficiency, genetics, and production outcomes.',
  },
  {
    id: 'insurance-ownership-theft-control',
    title: 'Insurance, Ownership & Theft Control',
    image: '/Sub-Sol_Soochak/Pet & Livestock/4. Insurance, Ownership & Theft Control.png',
    short:
      'Secure animal identity, ownership verification, and movement logs to reduce fraud, theft, and claim disputes.',
  },
  {
    id: 'stray-animal-lost-pet-tracking',
    title: 'Stray Animal & Lost Pet Tracking (Urban & Rural)',
    image: '/Sub-Sol_Soochak/Pet & Livestock/5. Stray Animal & Lost Pet Tracking (Urban & Rural).png',
    short:
      'RFID tagging for pets and stray animals to support recovery, sterilization tracking, and municipal animal management.',
  },
]

export default function PetLivestockSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0f172a] to-[#065f46] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-sm mb-4">Pet &amp; Livestock Management Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reliable RFID Systems for Animal Identification, Health &amp; Movement Control
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Soochak Bharat offers robust RFID solutions tailored for veterinary, livestock, and animal welfare sectors,
            ensuring real-time identification, traceability, and health monitoring.
          </p>
          <p className="text-base md:text-lg text-white/80">
            Designed for harsh environments, these systems support vaccination tracking, breeding management, movement
            control, and theft prevention—enhancing animal welfare, compliance, and farm productivity.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            Pet &amp; Livestock Use Cases &amp; Sub-Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {petSubSolutions.map((sub) => (
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
                        href={`/solutions/pet-livestock/${sub.id}`}
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


