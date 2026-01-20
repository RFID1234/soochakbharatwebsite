'use client'

import Image from 'next/image'
import { useState } from 'react'

const certificates = [
  '/certifications/Updated-Soochak%20Profile-13-36_page-0001.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0002.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0003.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0004.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0005.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0006.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0007.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0008.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0009.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0010.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0011.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0012.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0013.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0014.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0015.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0016.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0017.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0018.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0019.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0020.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0021.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0022.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0023.jpg',
  '/certifications/Updated-Soochak%20Profile-13-36_page-0024.jpg',
]

export default function CertificationsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setActiveIndex(index)
  }

  const handleClose = () => {
    setActiveIndex(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Certifications</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications &amp; Accreditations</h1>
          <p className="text-sm md:text-base text-blue-100">
            We are committed to quality, security, and compliance. Explore our key certifications and accreditations
            that reflect our standards.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((src, index) => (
              <button
                type="button"
                key={src}
                onClick={() => handleOpen(index)}
                className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center p-4 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] group"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={decodeURI(src)}
                    alt={`Certification ${index + 1}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-black/60 rounded-full">
                      View full screen
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen viewer */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-3 right-3 z-50 rounded-full bg-black/60 text-white px-3 py-1 text-sm hover:bg-black"
            >
              Close
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={decodeURI(certificates[activeIndex])}
                alt={`Certification ${activeIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

