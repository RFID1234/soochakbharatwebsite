'use client'

import { notFound } from 'next/navigation'

const educationDetails = {
  'one-card-campus-smart-identity': {
    title: 'One Card Campus & Smart Identity',
    kicker: 'Unifying Access, Services, and Identity for Every Student',
    intro:
      'Soochak Bharat enables “One University, One Card” functionality through RFID ID cards or wristbands, providing a single touchpoint for student identity, access, payments, and services across the entire campus.',
    highlights: [
      'RFID-based student ID cards for multi-purpose use',
      'Access to buildings, labs, hostels, libraries, and canteens',
      'Integration with academic records, fees, and attendance systems',
      'Secure credentials for staff, faculty, and visitors',
      'Support for NFC, ISO14443, and biometric integration',
    ],
    hardware: [
      'RFID Cards & Wristbands: Custom-branded for students and staff',
      'Desktop Reader (SBD-H25-43): For card issuance and account setup',
      'Integrated Reader (SBI-U2506): Installed at all access points and gates',
      'Biometric + RFID Combo Units: For high-security labs and examination centers',
    ],
  },
  'attendance-access-management': {
    title: 'Attendance & Access Management',
    kicker: 'Accurate and Contactless Logging of Student and Staff Presence',
    intro:
      'Move beyond manual registers with automated RFID-based attendance systems. Soochak Bharat’s solution enables real-time recording of entry and exit at classrooms, lecture halls, and other facilities.',
    highlights: [
      'RFID-tagged student entry at classrooms and academic blocks',
      'Real-time attendance logs accessible by administration and faculty',
      'Alerts for unauthorized or proxy attendance',
      'Custom rules for late arrivals, early exits, or absent days',
      'Integration with academic portals and HRMS',
    ],
    hardware: [
      'Integrated Reader (SBI-U2506): Wall-mounted outside lecture halls and labs',
      'Desktop Reader (SBD-H25-43U): For on-desk attendance logging or kiosk use',
      'RFID Cards/Wristbands: Carried by students, teachers, and staff',
      'Handheld Reader (SBH-U25): For mobile attendance collection in outdoor sessions or events',
    ],
  },
  'library-books-management': {
    title: 'Library & Books Management',
    kicker: 'Smarter Book Lending, Return, and Tracking',
    intro:
      'RFID tagging of books and library cards automates the entire circulation process, reduces queues, and provides full traceability of reading material within campus libraries.',
    highlights: [
      'RFID-tagged library books for instant check-in/check-out',
      'Integration with student ID cards for borrowing',
      'Alerts for overdue books or unauthorized removal',
      'Automated inventory and shelf audits',
      'Faster queue movement during exam season',
    ],
    hardware: [
      'RFID Book Labels (SBT-25FX Series): Applied inside book covers',
      'Desktop Reader (SBD-U25): For issue/return counters',
      'Handheld Reader (SBH-U25): For library audits and shelf scanning',
      'Integrated Reader (SBI-U2506): For exit gate anti-theft tracking',
    ],
  },
  'hostel-pedestrian-access-control': {
    title: 'Hostel & Pedestrian Access Control',
    kicker: 'Securing Residential and Campus Zones with RFID',
    intro:
      'Ensure safety in hostel facilities and restricted campus areas by controlling who enters where and when using RFID-based access and visitor logs.',
    highlights: [
      'Access control for hostels, admin offices, and exam rooms',
      'RFID-enabled hostel entry/exit for residents and visitors',
      'Real-time tracking of movement across zones',
      'Integration with visitor pass and guest booking systems',
      'Emergency alert and lockdown functions',
    ],
    hardware: [
      'RFID Cards/Wristbands: For hostel residents and staff',
      'Integrated Reader (SBI-U2509): For hostel gates and dorm entrances',
      'Desktop Reader (SBD-U25): For visitor badge issuance and verification',
      'Biometric + RFID Systems: For double authentication in secure zones',
    ],
  },
  'canteen-campus-payments': {
    title: 'Canteen & Campus Payments',
    kicker: 'Contactless Transactions for Food, Services, and Facilities',
    intro:
      'Enable RFID-based cashless payments at cafeterias, kiosks, and vending machines using student ID cards or wristbands—reducing cash handling and increasing accountability.',
    highlights: [
      'RFID-enabled canteen payment via prepaid campus card',
      'Integration with One Card identity system',
      'Real-time balance tracking and top-up kiosks',
      'Discount rules and usage tracking by student groups',
      'Reports for canteen staff and finance departments',
    ],
    hardware: [
      'Desktop Reader (SBD-H25-43): For top-ups and registration',
      'RFID Wristbands & Tokens: For fast, hygienic canteen transactions',
      'Integrated Reader (SBI-U2506): At POS terminals in dining halls',
      'Handheld Reader (SBH-U25): For mobile food stalls and events',
    ],
  },
  'asset-parking-management': {
    title: 'Asset & Parking Management',
    kicker: 'Protecting Campus Resources and Streamlining Parking',
    intro:
      'Track institutional assets such as computers, lab equipment, and projectors while managing staff and visitor parking through RFID tagging of vehicles and physical assets.',
    highlights: [
      'Real-time tracking of IT and lab equipment',
      'Loss prevention and maintenance alerting',
      'RFID permits for staff and student parking zones',
      'Timestamped entry/exit logs',
      'Integration with security systems',
    ],
    hardware: [
      'Anti-metal Tags (SBT-25FX/ABS Series): For tagging furniture, electronics, and lab gear',
      'Ceramic Labels (SBT-25CR2): For compact asset tagging',
      'Integrated Reader (SBI-U2509): At parking lots and entry gates',
      'Handheld Reader (SBH-U25): For field audits and mobile parking checks',
    ],
  },
} as const

type EducationSlug = keyof typeof educationDetails

interface PageProps {
  params: {
    slug: EducationSlug
  }
}

export default function EducationDetailPage({ params }: PageProps) {
  const detail = educationDetails[params.slug]

  if (!detail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Education</p>
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


