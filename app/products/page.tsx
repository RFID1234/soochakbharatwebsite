'use client'

import Image from 'next/image'

const products = [
  {
    id: 'rfid-tags',
    title: 'RFID Tags',
    description: 'Reliable and durable tags for seamless tracking, identification, and asset management.',
    image: '/Product_Soochak (1)/11.png',
  },
  {
    id: 'handheld-rfid-readers',
    title: 'Handheld RFID Readers',
    description: 'Portable and efficient readers for quick, accurate, and on-the-go RFID scanning.',
    image: '/Product_Soochak (1)/16.png',
  },
  {
    id: 'fixed-rfid-readers',
    title: 'Fixed RFID Readers',
    description: 'High-performance readers ensuring real-time monitoring and automated data capture.',
    image: '/Product_Soochak (1)/19.png',
  },
  {
    id: 'integrated-rfid-readers',
    title: 'Integrated RFID Readers',
    description: 'Advanced all-in-one solutions for seamless RFID integration and smart operations.',
    image: '/Product_Soochak (1)/32.png',
  },
  {
    id: 'rfid-tokens-wristbands',
    title: 'RFID Tokens/Wristbands',
    description: 'Secure and contactless authentication for access control, events, and transactions.',
    image: '/Product_Soochak (1)/35.png',
  },
  {
    id: 'rfid-antennas',
    title: 'RFID Antennas',
    description: 'High-gain antennas designed for enhanced RFID range, accuracy, and efficiency.',
    image: '/Product_Soochak (1)/55.png',
  },
  {
    id: 'desktop-rfid-readers',
    title: 'Desktop RFID Readers',
    description: 'Reliable and efficient readers for seamless data capture, authentication, and asset management across various applications.',
    image: '/Product_Soochak (1)/11.png',
  },
  {
    id: 'rfid-printers',
    title: 'RFID Printers',
    description: 'High-performance printers for encoding and printing RFID tags and labels, ensuring seamless tracking and identification.',
    image: '/Product_Soochak (1)/16.png',
  },
  {
    id: 'biometric-machines-security-cameras',
    title: 'Biometric Machines & Security Cameras',
    description: 'High-gain antennas designed for enhanced RFID range, accuracy, and efficiency.',
    image: '/Product_Soochak (1)/19.png',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-16">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

