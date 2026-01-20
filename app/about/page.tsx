'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const bannerImages = [
  '/Soochak Website Banner Pages/1.png',
  '/Soochak Website Banner Pages/2.png',
  '/Soochak Website Banner Pages/3.png',
  '/Soochak Website Banner Pages/4.png',
  '/Soochak Website Banner Pages/5.png',
  '/Soochak Website Banner Pages/6.png',
]

export default function AboutPage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % bannerImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-[420px] md:h-[520px] bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={bannerImages[currentImage]}
                  alt={`Banner ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-500">
                ABOUT US
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase leading-tight">
                SOOCHAK BHARAT TECHNOLOGIES PRIVATE LIMITED
              </h1>
              <p className="text-sm md:text-base text-gray-500 mb-4">
                RFID • Security • Automation
              </p>
              <div className="space-y-4 text-gray-700 text-sm md:text-base">
                <p>
                  Founded by <b>Mr. Puneet Kumar Agarawal (CEO) </b> and Co-Founded by <b>Mr. Manish Gupta</b >, Soochak
                  Bharat is a pioneering leader in RFID, security, and automation solutions. Our mission is
                  to revolutionize industries by providing cutting-edge RFID readers, tags, antennas, and
                  integrated automation systems that enhance efficiency, security, and asset management.
                </p>
                <p>
                  With a strong focus on logistics, retail, healthcare, smart infrastructure, and defense, we empower businesses and government organizations with advanced tracking, access control, and real-time data solutions. Our expertise ensures seamless integration of RFID technology into diverse operational environments, improving productivity, security, and decision-making.
                </p>
                <p>
                  At Soochak Bharat, our vision is to empower national security, personal safety, and global
                  prosperity through innovative solutions.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/#solutions"
                  className="inline-block bg-[#1e3a8a] text-white px-6 py-2 rounded font-medium hover:bg-[#1e40af] transition-colors text-sm"
                >
                  Explore Our Solutions
                </a>
                <a
                  href="/contact"
                  className="inline-block border border-[#1e3a8a] text-[#1e3a8a] px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors text-sm"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-6 text-center">
            What We Do
          </h2>
          <p className="text-gray-700 text-sm md:text-base text-center max-w-3xl mx-auto mb-8">
            We design, manufacture, and integrate RFID hardware with intelligent software platforms to
            deliver end-to-end tracking, authentication, and automation for complex environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-base font-semibold text-[#1e3a8a] mb-2">Industries</h3>
              <p className="text-sm text-gray-700">
                Retail, logistics, healthcare, smart infrastructure, defence & security, education, and
                government.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-base font-semibold text-[#1e3a8a] mb-2">Solutions</h3>
              <p className="text-sm text-gray-700">
                Asset tracking, people tracking, access control, yard & warehouse automation, and
                anti-counterfeiting.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-base font-semibold text-[#1e3a8a] mb-2">Approach</h3>
              <p className="text-sm text-gray-700">
                Consultative, use-case-first deployments with hardware, software, and services delivered as
                one stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Soochak Bharat */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:3xl font-bold text-[#1e3a8a] mb-6 text-center">
            Why Organisations Choose Soochak Bharat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl shadow-sm p-5">
              <h3 className="text-base font-semibold text-[#1e3a8a] mb-2">Made for India</h3>
              <p className="text-sm text-gray-700">
                Solutions built and tested for Indian conditions—from harsh outdoor yards to dense urban
                retail and hospitals.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-sm p-5">
              <h3 className="text-base font-semibold text-[#1e3a8a] mb-2">End-to-End Expertise</h3>
              <p className="text-sm text-gray-700">
                Hardware, tags, antennas, software, and implementation handled by a single, accountable
                team.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-sm p-5">
              <h3 className="text-base font-semibold text-[#1e3a8a] mb-2">Scalable by Design</h3>
              <p className="text-sm text-gray-700">
                Architected to start with one site or pilot and expand smoothly to multi-location and
                nation-wide rollouts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

