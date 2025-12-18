'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

type SubProduct = {
  name: string
  file: string
  image?: string
}

type ProductFamily = {
  title: string
  description: string
  folder?: string
  subProducts: SubProduct[]
}

function resolveSubProductImage(folder: string | undefined, sp: SubProduct): string | null {
  if (sp.image) return sp.image
  if (!folder) return null

  // Try extracting model code from filename suffix `_CODE.pdf` / `_CODE.docx.pdf`.
  const fileMatch = sp.file.match(/_([A-Za-z0-9-]+)\.(pdf|docx\.pdf)$/i)
  // Or from `(CODE)` in product name.
  const nameMatch = sp.name.match(/\(([A-Za-z0-9-]+)\)/)
  const code = (fileMatch?.[1] || nameMatch?.[1])?.trim()
  if (!code) return null

  // Special-case mismatches where the image uses SBI-* while PDF uses SBR-*.
  const codeOverrides: Record<string, string> = {
    'SBR-U2509': 'SBI-U2509',
    'SBR-U2508': 'SBI-U2508',
  }
  const finalCode = codeOverrides[code] ?? code

  // Most images are stored as uppercase PNG.
  return `/datasheets/${folder}/${finalCode}.PNG`
}

const productFamilies: Record<string, ProductFamily> = {
  'rfid-tags': {
    title: 'RFID Tags / RFID Modules',
    description:
      'Reliable RFID tags and modules used for encoding, identification, and connectivity across a wide range of applications.',
    folder: 'RFID Module',
    subProducts: [
      {
        name: 'Multiprotocol HF RFID Module (SBM-H25)',
        file: 'Multiprotocol HF RFID Module _SBM-H25.pdf',
        image: '/datasheets/RFID Module/SBM-H25.png',
      },
      {
        name: 'Multiprotocol UHF RFID Module (SBM-U25)',
        file: 'Multiprotocol UHF RFID Module _SBM-U25.pdf',
        image: '/datasheets/RFID Module/SBM-U25.PNG',
      },
    ],
  },
  'handheld-rfid-readers': {
    title: 'Handheld RFID Readers',
    description:
      'Portable, Android-based handheld RFID readers for on-the-go inventory, verification, and field operations.',
    folder: 'Handheld RFID Reader',
    subProducts: [
      {
        name: 'UHF Smart Android RFID Handheld Reader (SBH-U25)',
        file: 'UHF Smart Android RFID Handheld Reader_SBH-U25.pdf',
        image: '/datasheets/Handheld RFID Reader/SBH-U25.PNG',
      },
    ],
  },
  'fixed-rfid-readers': {
    title: 'Fixed RFID Readers',
    description:
      'High-performance fixed RFID readers for dock doors, portals, and automated read zones in warehouses and yards.',
    folder: 'Fixed RFID Reader',
    subProducts: [
      {
        name: 'Intelligent UHF 4-Port Reader (SBR-U25-OS04)',
        file: 'Intelligent UHF 4-Port Reader_SBR-U25-OS04.pdf',
        image: '/datasheets/Fixed RFID Reader/SBR-U25-OS04.PNG',
      },
      {
        name: 'Intelligent UHF 8-Port Reader (SBR-U25-OS08)',
        file: 'Intelligent UHF 8-Port Reader_SBR-U25-OS08.pdf',
      },
    ],
  },
  'integrated-rfid-readers': {
    title: 'Integrated RFID Readers',
    description:
      'All-in-one integrated RFID readers combining antenna and reader electronics for compact deployments.',
    folder: 'Integrated RFID Reader',
    subProducts: [
      {
        name: '12dBi UHF Integrated RFID Reader (SBR-U2512)',
        file: '12dBi UHF Integrated RFID Reader_SBR-U2512.pdf',
        image: '/datasheets/Integrated RFID Reader/SBR-U2512.PNG',
      },
      {
        name: '6dBi UHF Integrated RFID Reader (SBI-U2506)',
        file: '6dBi UHF Integrated RFID Reader_SBI-U2506.pdf',
        image: '/datasheets/Integrated RFID Reader/SBI-U2506.PNG',
      },
      {
        name: '8dBi UHF Integrated RFID Reader (SBR-U2508)',
        file: '8dBi UHF Integrated RFID Reader_SBR-U2508.pdf',
        image: '/datasheets/Integrated RFID Reader/SBI-U2508.PNG',
      },
      {
        name: '9dBi UHF Integrated RFID Reader (SBR-U2509)',
        file: '9dBi UHF Integrated RFID Reader_SBR-U2509.pdf',
        image: '/datasheets/Integrated RFID Reader/SBI-U2509.PNG',
      },
    ],
  },
  'rfid-tokens-wristbands': {
    title: 'RFID Tokens & Wristbands',
    description:
      'RFID keyfobs and wristbands for access control, loyalty, ticketing, and cashless payments in events and facilities.',
    folder: 'RFID TokensWristbands',
    subProducts: [
      { name: 'HF KeyFob Token (SBK-H25)', file: 'HF KeyFob Token_SBK-H25.pdf', image: '/datasheets/RFID TokensWristbands/SBK-H25.PNG' },
      { name: 'HF Wristband Tag (SBW-H25)', file: 'HF Wristband Tag_SBW-H25.pdf', image: '/datasheets/RFID TokensWristbands/SBW-H25.PNG' },
      { name: 'LF KeyFob Token (SBK-L25)', file: 'LF KeyFob Token_SBK-L25.pdf', image: '/datasheets/RFID TokensWristbands/SBK-L25.PNG' },
      { name: 'LF Wristband Tag (SBW-L25)', file: 'LF Wristband Tag_SBW-L25.pdf', image: '/datasheets/RFID TokensWristbands/SBW-L25.PNG' },
      { name: 'UHF KeyFob Token (SBK-U25)', file: 'UHF KeyFob Token_SBK-U25.pdf', image: '/datasheets/RFID TokensWristbands/SBK-U25.PNG' },
      { name: 'UHF Wristband Tag (SBW-U25)', file: 'UHF Wristband Tag_SBW-U25.pdf', image: '/datasheets/RFID TokensWristbands/SBW-U25.PNG' },
    ],
  },
  'rfid-antennas': {
    title: 'RFID Antennas',
    description:
      'High-gain and specialty RFID antennas for portals, overhead coverage, conveyor tunnels, and embedded applications.',
    folder: 'RFID Antennas',
    subProducts: [
      { name: '10dBi Flat Antenna (SBA-U2510F)', file: '10dBi Flat Antenna_SBA-U2510F.pdf' },
      { name: '10dBi Track Antenna (SBA-U2510T)', file: '10dBi Track Antenna_SBA-U2510T.pdf' },
      { name: '11dBi Rectangular Antenna (SBA-U2511R)', file: '11dBi Rectangular Antenna_SBA-U2511R.pdf' },
      { name: '12dBi Circular Polarization Antenna (SBA-U2512C)', file: '12dBi Circular Polarization Antenna _SBA-U2512C.pdf' },
      { name: '12dBi Circular Polarization Flat Antenna (SBA-U2512FC)', file: '12dBi Circular Polarization Flat Antenna_SBA-U2512FC.pdf' },
      { name: '12dBi Circular Polarization Pure Antenna (SBA-U2512PC)', file: '12dBi Circular Polarization Pure Antenna_SBA-U2512PC.pdf' },
      { name: '12dBi Panel Antenna (SBA-U2512PN)', file: '12dBi Panel Antenna_SBA-U2512PN.pdf' },
      { name: '12dBi Pure Antenna (SBA-U2512P)', file: '12dBi Pure Antenna_SBA-U2512P.pdf' },
      { name: '12dBi Rectangular Antenna (SBA-U2512R)', file: '12dBi Rectangular Antenna_SBA-U2512R.pdf' },
      { name: '14dBi Flat Antenna (SBA-U2514F)', file: '14dBi Flat Antenna_SBA-U2514F.pdf' },
      { name: '15dBi Panel Antenna (SBA-U2515PN)', file: '15dBi Panel Antenna_SBA-U2515PN.pdf' },
      { name: '2dBi Near Field Antenna (SBA-U2502N)', file: '2dBi Near Field Antenna _SBA-U2502N.pdf' },
      { name: '3 dBi PCB Antenna (SBA-U2503PCB)', file: '3 dBi PCB Antenna_SBA-U2503PCB.pdf' },
      { name: '5dBi Flat Antenna (SBA-U2505F)', file: '5dBi Flat Antenna_SBA-U2505F.pdf' },
      { name: '5dBi UHF Concealed Antenna (SBA-U2505CA)', file: '5dBi UHF Concealed Antenna_SBA-U2505CA.pdf' },
      { name: '6dBi Circular Polarization Antenna (SBA-U2506C)', file: '6dBi Circular Polarization Antenna _SBA-U2506C.pdf' },
      { name: '6dBi Pure Antenna (SBA-U2506P)', file: '6dBi Pure Antenna_SBA-U2506P.pdf' },
      { name: '7dBi Pure Antenna (SBA-U2507P)', file: '7dBi Pure Antenna_SBA-U2507P.pdf' },
      { name: '8Bi U.S. Pure Standard Antenna (SBA-U2508PS)', file: '8Bi U.S. Pure Standard Antenna_SBA-U2508PS.pdf' },
      { name: '8dBi Circular Polarization Antenna (SBA-U2508C)', file: '8dBi Circular Polarization Antenna _SBA-U2508C.pdf' },
      { name: '8dBi Circular Polarization Flat Antenna (SBA-U2508FC)', file: '8dBi Circular Polarization Flat Antenna_SBA-U2508FC.pdf' },
      { name: '8dBi Narrow Beam Antenna (SBA-U2508NB)', file: '8dBi Narrow Beam Antenna_SBA-U2508NB.pdf' },
      { name: '8dBi Pure Antenna (SBA-U2508P)', file: '8dBi Pure Antenna_SBA-U2508P.pdf' },
      { name: '9dBi Carpet Antenna (SBA-U2509CP)', file: '9dBi Carpet Antenna_SBA-U2509CP.pdf' },
      { name: '9dBi Circular Polarization Antenna (SBA-U2509C)', file: '9dBi Circular Polarization Antenna _SBA-U2509C.pdf' },
      { name: '9dBi Linear Polarization Antenna (SBA-U2509L)', file: '9dBi Linear Polarization Antenna_SBA-U2509L.pdf' },
      { name: '9dBi Underground Antenna (SBA-U2509UA)', file: '9dBi Underground Antenna_SBA-U2509UA.pdf' },
    ],
  },
  'desktop-rfid-readers': {
    title: 'Desktop RFID Readers',
    description:
      'Desktop RFID readers for enrollment, registration, and secure desktop-based identification workflows.',
    folder: 'Dekstop RFID Reader',
    subProducts: [
      {
        name: 'Desktop ISO14443 RFID Bluetooth Reader (SBD-H25-43B)',
        file: 'Desktop ISO14443 RFID Bluetooth Reader_SBD-H25-43B.pdf',
        image: '/datasheets/Dekstop RFID Reader/SBD-H25-43B.PNG',
      },
      {
        name: 'Desktop ISO14443 RFID Reader (SBD-H25-43)',
        file: 'Desktop ISO14443 RFID Reader_SBD-H25-43.pdf',
        image: '/datasheets/Dekstop RFID Reader/SBD-H25-43.PNG',
      },
      {
        name: 'Desktop ISO15693 RFID Reader (SBD-H25-93)',
        file: 'Desktop ISO15693 RFID Reader_SBD-H25-93.pdf',
        image: '/datasheets/Dekstop RFID Reader/SBD-H25-93.PNG',
      },
      {
        name: 'Desktop Style ISO14443 RFID Multi-Unity Reader (SBD-H25-43U)',
        file: 'Desktop Style ISO14443 RFID Multi-Unity Reader_SBD-H25-43U.pdf',
        image: '/datasheets/Dekstop RFID Reader/SBD-H25-43U.PNG',
      },
      {
        name: 'UHF RFID Desktop Reader (SBD-U25)',
        file: 'UHF RFID Desktop Reader_SBD-U25.pdf',
        image: '/datasheets/Dekstop RFID Reader/SBD-U25.PNG',
      },
    ],
  },
  'rfid-printers': {
    title: 'RFID Printers',
    description:
      'RFID printers that encode and print smart labels and tags for supply chain, asset tracking, and identification.',
    folder: 'RFID Printers',
    subProducts: [
      {
        name: 'Flexible Anti-Metal Desktop UHF RFID Reader Label Printer (SBPR-U2501)',
        file: 'Flexible Anti-Metal Desktop UHF RFID Reader Label Printer_SBPR-U2501.pdf',
        image: '/datasheets/RFID Printers/SBPR-U2501.PNG',
      },
    ],
  },
  'biometric-machines-security-cameras': {
    title: 'Biometric Machines & Security Cameras',
    description:
      'Biometric and RFID-enabled security devices for access control, attendance, and identity verification.',
    folder: 'Biometric',
    subProducts: [
      {
        name: 'Facial Recognition Camera (SBC-2501)',
        file: 'Facial Recognition Camera_SBC-2501.pdf',
        image: '/datasheets/Biometric/SBC-2501.PNG',
      },
      {
        name: 'Wireless RFID Card Android IOS USB Fingerprint Reader (SBBM-USB25)',
        file: 'Wireless RFID Card Android IOS USB Fingerprint Reader_SBBM-USB25.pdf',
      },
    ],
  },
  'nfc-chips': {
    title: 'NFC Chips',
    description:
      'NFC products and components for smart cards, posters, rings, on-metal tags, and keyfobs/wristbands—ideal for tap-and-go engagement and authentication.',
    folder: 'NFC Chips',
    subProducts: [
      {
        name: 'NFC Chips',
        file: 'PRODUCT DATASHEET NFC CHIPS.docx.pdf',
        image: '/datasheets/NFC Chips/NFC Chips.jpg',
      },
      {
        name: 'NFC Cards',
        file: 'Copy of PRODUCT DATASHEET NFC Cards.docx.pdf',
        image: '/datasheets/NFC Chips/NFC Cards.jpeg',
      },
      {
        name: 'NFC Key Fobs / Wristbands',
        file: 'PRODUCT DATASHEET NFC Key fobs _ wristbands.docx.pdf',
        image: '/datasheets/NFC Chips/ChatGPT Image Dec 17, 2025, 12_27_28 PM.png',
      },
      {
        name: 'NFC On-metal Tags',
        file: 'PRODUCT DATASHEET NFC On-metal tags.docx.pdf',
        image: '/datasheets/NFC Chips/ChatGPT Image Dec 17, 2025, 12_33_23 PM.png',
      },
      {
        name: 'NFC Smart Posters',
        file: 'PRODUCT DATASHEET NFC Smart Posters.docx.pdf',
        image: '/datasheets/NFC Chips/ChatGPT Image Dec 17, 2025, 12_49_44 PM.png',
      },
      {
        name: 'NFC Smart Rings',
        file: 'PRODUCT DATASHEET NFC Smart Rings.docx.pdf',
        image: '/datasheets/NFC Chips/ChatGPT Image Dec 17, 2025, 12_40_09 PM.png',
      },
    ],
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProductDetailPage({ params }: PageProps) {
  const family = productFamilies[params.slug]

  if (!family) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Products</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{family.title}</h1>
          <p className="text-sm md:text-base text-blue-100 leading-relaxed">{family.description}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {family.subProducts.length === 0 ? (
            <p className="text-gray-700">
              Datasheets for this product family will be available soon. Please contact us for more information.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {family.subProducts.map((sp) => (
                <div
                  key={sp.file}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col justify-between"
                >
                  <div>
                    {resolveSubProductImage(family.folder, sp) && (
                      <div className="relative w-full h-40 bg-gray-50 rounded-md overflow-hidden mb-4">
                        <Image
                          src={resolveSubProductImage(family.folder, sp) as string}
                          alt={sp.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                    <h2 className="text-lg font-bold text-[#1e3a8a] mb-2">{sp.name}</h2>
                    {family.folder && (
                      <p className="text-xs text-gray-500 mb-4 break-words">
                        Datasheet: {sp.file.replace(/\.(pdf|docx)$/i, '')}
                      </p>
                    )}
                  </div>
                  {family.folder && (
                    <Link
                      href={`/datasheets/${encodeURIComponent(family.folder)}/${encodeURIComponent(sp.file)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-[#1e3a8a] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1e40af] transition-colors"
                    >
                      View datasheet
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Chat bubble linking to Contact page */}
      <Link
        href="/contact"
        className="fixed bottom-24 right-6 bg-[#1e3a8a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#1e40af] transition-colors z-40"
        aria-label="Talk to our team"
      >
        ?
      </Link>
    </div>
  )
}

