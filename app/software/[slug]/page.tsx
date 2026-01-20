import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type SoftwareId = 'hospital' | 'school' | 'cow-shelter' | 'protein'

const softwareDetails: Record<
  SoftwareId,
  {
    title: string
    intro: string
    details: string
    images: string[]
  }
> = {
  hospital: {
    title: 'Hospital Asset & Patient Flow Software',
    intro:
      'Our hospital software platform connects RFID-tagged assets, patient bands, and staff badges into a single live view, helping hospitals reduce search time and improve patient care.',
    details:
      'With the hospital software dashboard, staff can instantly see where each infusion pump, wheelchair, and critical device is located, reducing search time and delays in treatment. Patient journeys across ER, wards, OTs, and ICUs are captured automatically, giving operations teams a complete history of movement. Maintenance teams receive better utilisation data, while administrators can plan capacity and staffing based on real, real-time information rather than guesswork. Alerts for missing or idle assets further improve control and accountability inside busy facilities.',
    images: [
      '/software/hospital/WhatsApp Image 2025-12-18 at 11.48.20 AM.jpeg',
      '/software/hospital/WhatsApp Image 2025-12-18 at 11.48.20 AM (1).jpeg',
      '/software/hospital/WhatsApp Image 2025-12-18 at 11.48.20 AM (2).jpeg',
      '/software/hospital/WhatsApp Image 2025-12-18 at 11.48.20 AM (3).jpeg',
    ],
  },
  school: {
    title: 'School Attendance & Safety Software',
    intro:
      'Our school RFID software automates attendance, gate entry, and bus boarding logs so parents and administrators always know when students arrive and leave.',
    details:
      'Every student and staff member carries an RFID card that is read at gates, classroom entry points, and on school buses. Attendance is captured automatically in the system, eliminating manual registers and reducing errors. Parents can receive timely updates when buses reach or leave the campus, while principals and administrators see trends across classes and terms. The platform also supports custom reports for compliance and inspections, making it easier to demonstrate adherence to safety and operational norms.',
    images: [
      '/software/school/WhatsApp Image 2025-12-18 at 11.41.12 AM.jpeg',
      '/software/school/WhatsApp Image 2025-12-18 at 11.41.12 AM (1).jpeg',
      '/software/school/WhatsApp Image 2025-12-18 at 11.41.12 AM (2).jpeg',
    ],
  },
  'cow-shelter': {
    title: 'Cow Shelter & Livestock Management Software',
    intro:
      'Designed for gaushalas and livestock farms, this software uses RFID tags to uniquely identify each animal and maintain health, feeding, and movement records.',
    details:
      'Each cow or animal is tagged with a unique RFID identity linked to a detailed profile in the software. Caretakers can record feed schedules, vaccinations, treatments, and movement between sheds or pastures, building a complete life history for every animal. This helps gaushalas ensure better care, plan feed and medical budgets, and reduce losses from missing or mis-identified cattle. Over time, analytics highlight which practices improve health outcomes and productivity across the herd.',
    images: [
      '/software/cow shelter/WhatsApp Image 2025-12-18 at 12.00.58 PM.jpeg',
      '/software/cow shelter/WhatsApp Image 2025-12-18 at 12.00.58 PM (1).jpeg',
      '/software/cow shelter/WhatsApp Image 2025-12-18 at 12.00.58 PM (2).jpeg',
    ],
  },
  protein: {
    title: 'Protein & Nutrition Supply Chain Software',
    intro:
      'For protein and nutrition brands, this platform tracks ingredients, production batches, and dispatches using RFID for full supply-chain traceability.',
    details:
      'Raw material bags, intermediate batches, and finished goods are all associated with RFID identities that the software follows through the end-to-end process. Production managers always know which ingredients went into which batch, and where that batch is in storage, packaging, or dispatch. In case of a quality issue, affected lots can be traced and isolated quickly, instead of recalling entire product lines. The result is stronger compliance, better brand protection, and leaner, more transparent operations.',
    images: [
      '/software/protein/WhatsApp Image 2025-12-18 at 12.07.37 PM.jpeg',
      '/software/protein/WhatsApp Image 2025-12-18 at 12.07.37 PM (1).jpeg',
      '/software/protein/WhatsApp Image 2025-12-18 at 12.07.37 PM (2).jpeg',
    ],
  },
}

interface PageProps {
  params: {
    slug: SoftwareId
  }
}

export default function SoftwareDetailPage({ params }: PageProps) {
  const data = softwareDetails[params.slug]

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a8a] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/software"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors"
          >
            ← Back to Software
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{data.title}</h1>
          <p className="text-blue-100 text-sm md:text-base">{data.intro}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          {/* Images grid – show 3 images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.images.slice(0, 3).map((src) => (
              <div key={src} className="relative h-40 md:h-52 rounded-lg overflow-hidden shadow-md">
                <Image src={src} alt={data.title} fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>

          {/* Details paragraph */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">How this software helps</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{data.details}</p>
          </div>

          {/* Call to Action (same style as blogs) */}
          <div className="bg-[#1e3a8a] text-white rounded-xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Talk to our team</h3>
            <p className="mb-6 text-blue-100">
              Share your use-case and we’ll show you how this software can be adapted to your
              environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#1e3a8a] px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/#solutions"
                className="inline-block bg-transparent text-white px-6 py-3 rounded font-medium border-2 border-white hover:bg-white/10 transition-colors"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


