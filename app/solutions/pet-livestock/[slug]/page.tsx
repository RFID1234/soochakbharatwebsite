'use client'

import { notFound } from 'next/navigation'

const petDetails = {
  'electronic-identification-health-records': {
    title: 'Electronic Identification & Health Records',
    kicker: 'Lifetime RFID Tagging for Individual Animal Identification',
    intro:
      'Soochak Bharat enables tamper-proof electronic identification of livestock and pets using rugged RFID tags—linking each animal to a digital health and ownership record.',
    highlights: [
      'Unique ID assigned to each animal using RFID ear tags or implants',
      'Digital record of breed, age, gender, and owner',
      'Integration with vet clinics, animal registries, and municipal databases',
      'Real-time verification using handheld readers',
      'Compatible with both livestock and companion animals',
    ],
    hardware: [
      'RFID Animal Ear Tags (Custom Design with Soochak Chips): For cattle, goats, pigs',
      'Pet Microchip Tags (Low-frequency or UHF): Injectable, ISO-compliant',
      'Handheld Reader (SBH-U25): For veterinarians, breeders, or inspectors',
      'Desktop Reader (SBD-U25): For animal registry centers and insurance verification',
    ],
  },
  'vaccination-inoculation-disease-management': {
    title: 'Vaccination, Inoculation & Disease Management',
    kicker: 'RFID-Enabled Veterinary Health Monitoring',
    intro:
      'Track vaccination schedules and outbreak responses with Soochak Bharat’s RFID-linked medical record system—ensuring animals receive timely care and health authorities gain visibility into disease trends.',
    highlights: [
      'Record and track vaccination/inoculation history via RFID ID',
      'Alerts for pending or missed treatments',
      'Integration with government disease control databases',
      'Efficient livestock inspection and herd health analytics',
      'Traceability of vaccinated vs. unvaccinated populations',
    ],
    hardware: [
      'Animal RFID Tags (Ear or Injectable): Pre-encoded with unique health IDs',
      'Handheld Reader (SBH-U25): Used by veterinarians and field officers',
      'Desktop Reader (SBD-H25-43): For updating records at clinics or mobile vet camps',
      'RFID Printer (SBPR-U2501): For encoding vaccination records to animal ID tags',
    ],
  },
  'artificial-insemination-breeding-records': {
    title: 'Artificial Insemination & Breeding Records',
    kicker: 'Automated Reproductive Health Tracking for Livestock',
    intro:
      'Breeding efficiency is crucial to dairy and meat production. Soochak Bharat enables automated tracking of insemination, estrus cycles, and calving records—linked to each animal’s RFID ID.',
    highlights: [
      'RFID-tagged tracking of insemination and conception dates',
      'Linked breeding logs and bloodline histories',
      'Alerts for pregnancy checks and expected calving dates',
      'Integration with farm ERP and fertility monitoring tools',
      'Improves herd genetics and breeding outcomes',
    ],
    hardware: [
      'UHF Animal Tags (Ear-type with Soochak IC): Resistant to weather, suitable for long-term use',
      'Handheld Reader (SBH-U25): Used by breeders or artificial insemination technicians',
      'Desktop Reader (SBD-U25): For log updates at animal health and breeding centers',
      'RFID Printer (SBPR-U2501): For encoding new records on breeding cycles',
    ],
  },
  'insurance-ownership-theft-control': {
    title: 'Insurance, Ownership & Theft Control',
    kicker: 'Secure Identity and Verification for Livestock Valuation',
    intro:
      'For insured animals or those involved in commercial farming, RFID offers proof of ownership and movement logs—reducing fraud, theft, and claim disputes.',
    highlights: [
      'RFID tags linked to owner, village, or farm ID',
      'Simplified insurance registration and claim verification',
      'Alerts if animal moves out of geofenced area',
      'Theft prevention via roadside verification',
      'Movement logs at slaughterhouses, mandis, or fairs',
    ],
    hardware: [
      'Anti-tamper Animal Ear Tags: Pre-linked with insurance and ownership data',
      'Handheld Reader (SBH-U25): For mobile inspections and ownership validation',
      'ABS Anti-metal Tags (SBT-25ABS1): Used on equipment or high-value working animals',
      'Desktop Reader (SBD-U25): For claim processing centers and transport checkpoints',
    ],
  },
  'stray-animal-lost-pet-tracking': {
    title: 'Stray Animal & Lost Pet Tracking (Urban & Rural)',
    kicker: 'Smart Tagging for Animal Control and Public Safety',
    intro:
      'Municipalities can reduce stray animal issues and enhance public safety by tagging and tracking street animals, while pet owners benefit from RFID-enabled lost-and-found systems.',
    highlights: [
      'RFID-tagged stray cattle, dogs, and other street animals',
      'Digital vaccination and sterilization registry for stray dogs/cattle',
      'Lost pet detection through reader networks at shelters and clinics',
      'Integration with animal control apps and civic dashboards',
      'Reduced risk of vehicle-animal accidents and disease spread',
    ],
    hardware: [
      'Pet Microchip or Collared Tags: Lightweight, ISO-compliant',
      'Mobile RFID Readers (SBH-U25): For animal rescue and street patrol teams',
      'Fixed Reader (SBR-U25-OS04): Installed at shelters, pound facilities, or animal care centers',
      'Desktop Reader (SBD-H25-93): For checking animal identity at recovery and care units',
    ],
  },
} as const

type PetSlug = keyof typeof petDetails

interface PageProps {
  params: {
    slug: PetSlug
  }
}

export default function PetDetailPage({ params }: PageProps) {
  const detail = petDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#065f46] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-emerald-200">
            Pet &amp; Livestock
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{detail.title}</h1>
          <h2 className="text-lg md:text-xl font-semibold text-emerald-100 mb-4">{detail.kicker}</h2>
          <p className="text-sm md:text-base text-emerald-100 leading-relaxed">{detail.intro}</p>
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


