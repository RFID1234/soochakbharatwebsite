'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    id: 'defence-security',
    title: 'Defence & Security',
    description: 'Strengthen <b>national security & surveillance</b> with advanced <b>RFID & access control solutions</b>. We enable <b>secure authentication, asset tracking, & personnel management</b> for critical operations.',
    image: '/Sub-Sol_Soochak/Defence/1. Asset & Convoy Tracking.png',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Enhance <b>production efficiency and asset tracking</b> with RFID-driven <b>automation and inventory management</b>. Our solutions ensure <b>real-time visibility, reduced downtime, and seamless operations.</b>',
    image: '/Sub-Sol_Soochak/manufacturing/1. Work-in-Progress (WIP) Tracking.png',
  },
  {
    id: 'transportation-logistics',
    title: 'Transportation & Logistics',
    description: 'Optimize <b>supply chain efficiency</b> with RFID-powered <b>fleet management, cargo tracking, and warehouse automation</b>. Ensure <b>real-time visibility, reduced losses, and faster deliveries.</b>',
    image: '/Sub-Sol_Soochak/Logistics/1. Automated Tolling & Parking Solutions.png',
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Revolutionize <b>inventory management, theft prevention, and customer experience</b> with RFID. Gain <b>real-time stock insights, automated checkouts, and enhanced operational efficiency.</b>',
    image: '/Sub-Sol_Soochak/Retail/1. Smart Fitting Room System.png',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Ensure <b>patient safety, equipment tracking, and secure access control</b> with RFID. Improve <b>asset utilization, reduce errors, and streamline hospital operations</b> for better healthcare outcomes.',
    image: '/Sub-Sol_Soochak/Healthcare/1. Patient, Staff & Access Management.png',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Elevate <b>guest experiences and operational security</b> with <b>RFID-based smart access, cashless payments, and asset tracking</b>. Enhance convenience and security for both guests and staff.',
    image: '/Sub-Sol_Soochak/Hospitality/1. Seamless Check-In  Check-Out & Guest Access.png',
  },
  {
    id: 'government-public',
    title: 'Government & Public',
    description:
      'Digitize <b>government assets, documents, and citizen services</b> with RFID-powered tracking, access control, and smart infrastructure management for transparent, accountable governance.',
    image: '/Sub-Sol_Soochak/Govt & Public/1. Public Asset & File Tracking.png',
  },
]

// Hero videos (place files under public/hero-videos/)
const sliderVideos = ['/hero-videos/solution1.mp4', '/hero-videos/solution2.mp4']

const solutionLinkMap: Record<string, string> = {
  'defence-security': '/solutions/defence-security',
  manufacturing: '/solutions/manufacturing',
  'transportation-logistics': '/solutions/transportation-logistics',
  retail: '/solutions/retail',
  healthcare: '/solutions/healthcare',
  hospitality: '/solutions/hospitality',
  'government-public': '/solutions/government-public',
}

const products = [
  {
    id: 'rfid-tags',
    title: 'RFID Tags',
    description: 'Reliable and durable tags for seamless <b>tracking, identification, and asset management.</b>',
    image: '/Product_Soochak (1)/11.png',
  },
  {
    id: 'handheld-rfid-readers',
    title: 'Handheld RFID Readers',
    description: 'Portable and efficient readers for <b>quick, accurate, and on-the-go RFID scanning.</b>',
    image: '/Product_Soochak (1)/16.png',
  },
  {
    id: 'fixed-rfid-readers',
    title: 'Fixed RFID Readers',
    description: 'High-performance readers ensuring<b> real-time monitoring and automated data capture.</b>',
    image: '/Product_Soochak (1)/Fixed RFID Readers.jpg',
  },
  {
    id: 'integrated-rfid-readers',
    title: 'Integrated RFID Readers',
    description: 'Advanced all-in-one solutions for <b>seamless RFID integration and smart operations.</b>',
    image: '/Product_Soochak (1)/Integrated rfid reader.jpg',
  },
  {
    id: 'rfid-tokens-wristbands',
    title: 'RFID Tokens/Wristbands',
    description: 'Secure and contactless authentication for <b>access control, events, and transactions.</b>',
    image: '/Product_Soochak (1)/Rfid tokens wristbands.jpg',
  },
  {
    id: 'rfid-antennas',
    title: 'RFID Antennas',
    description: 'High-gain antennas designed for<b> enhanced RFID range, accuracy, and efficiency.</b>',
    image: '/Product_Soochak (1)/Rfid antennas.jpg',
  },
  {
    id: 'desktop-rfid-readers',
    title: 'Desktop RFID Readers',
    description: ' Reliable and efficient readers for seamless <b>data capture, authentication</b>, and <b>asset management </b>across various applications.',
    image: '/Product_Soochak (1)/Desktop RFID Readers.jpg',
  },
  {
    id: 'rfid-printers',
    title: 'RFID Printers',
    description: 'High-performance printers for <b>encoding and printing RFID tags and labels</b>, ensuring seamless tracking and identification.',
    image: '/Product_Soochak (1)/RFID Printers.jpg',
  },
  {
    id: 'biometric-machines-security-cameras',
    title: 'Biometric Machines & Security Cameras',
    description: 'High-gain antennas designed for<b> enhanced RFID range, accuracy, and efficiency.</b>',
    image: '/Product_Soochak (1)/Biometric machines and security cameras.jpg',
  },
  {
    id: 'nfc-chips',
    title: 'NFC Chips',
    description: 'Tap-and-go NFC products for <b>smart cards, posters, rings</b>, and more.',
    image: '/datasheets/NFC Chips/NFC Chips.jpg',
  },
]

const productLinkMap: Record<string, string> = {
  'rfid-tags': '/products/rfid-tags',
  'handheld-rfid-readers': '/products/handheld-rfid-readers',
  'fixed-rfid-readers': '/products/fixed-rfid-readers',
  'integrated-rfid-readers': '/products/integrated-rfid-readers',
  'rfid-tokens-wristbands': '/products/rfid-tokens-wristbands',
  'rfid-antennas': '/products/rfid-antennas',
  'desktop-rfid-readers': '/products/desktop-rfid-readers',
  'rfid-printers': '/products/rfid-printers',
  'biometric-machines-security-cameras': '/products/biometric-machines-security-cameras',
  'nfc-chips': '/products/nfc-chips',
}

const testimonials = [
  {
    name: 'Rajesh Sharma',
    feedback:
      "Soochak Bharat's RFID solution greatly improved our operational efficiency. Implementation was smooth, and their technical support has been reliable and responsive.",
  },
  {
    name: 'Anita Verma',
    feedback:
      'The product authentication system helped us eliminate counterfeit issues. Simple for customers to use and extremely effective for brand protection.',
  },
  {
    name: 'Amit Kulkarni',
    feedback:
      'Inventory accuracy and dispatch speed improved significantly after RFID implementation. The system works flawlessly even during peak operational hours.',
  },
  {
    name: 'Neha Gupta',
    feedback:
      'Their centralized attendance system brought transparency across all school branches. Data accuracy and reporting have improved remarkably.',
  },
  {
    name: 'Sandeep Iyer',
    feedback:
      'Professional team with strong technical knowledge. The RFID file management system reduced manual errors and saved considerable administrative time.',
  },
  {
    name: 'Pooja Mehta',
    feedback:
      'NFC-based verification added a strong trust layer for our products. Customers can now easily authenticate authenticity using their smartphones.',
  },
  {
    name: 'Rohit Malhotra',
    feedback:
      'From planning to deployment, the execution was well-organized. The solution scaled smoothly as our operational requirements grew.',
  },
]

export default function Home() {
  const [currentSlider, setCurrentSlider] = useState(0)
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)

  // Auto-rotate hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % sliderVideos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonialsPerSlide = 3
  const totalTestimonialSlides = Math.ceil(testimonials.length / testimonialsPerSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides)
    }, 4000)
    return () => clearInterval(interval)
  }, [totalTestimonialSlides])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Slideshow */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {sliderVideos.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlider ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <video
                key={src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center bg-black/40">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-white">
              <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-3">
                RFID-POWERED SOLUTIONS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Boost productivity at every step of your business.
              </h1>
              <p className="text-lg md:text-xl text-blue-50">
                Soochak Bharat delivers end-to-end RFID, tracking, and automation solutions across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel indicators (dots) */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {sliderVideos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlider(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlider ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Our Solutions</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore RFID-powered solutions designed for defence, manufacturing, logistics, retail, healthcare,
            government, and more.
          </p>
          
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {solutions.slice(0, 3).map((solution) => (
              <div key={solution.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Overlay - Visible on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-white">{solution.title}</h3>
                    <p 
                      className="text-sm mb-4 leading-relaxed text-white/90 line-clamp-3" 
                      dangerouslySetInnerHTML={{ __html: solution.description }}
                    />
                    <Link
                      href={solutionLinkMap[solution.id] ?? `/solutions#${solution.id}`}
                      className="inline-block bg-white text-[#1e3a8a] hover:bg-gray-100 font-medium px-6 py-2 rounded transition-colors w-fit"
                    >
                      Know more
                    </Link>
                  </div>
                  
                  {/* Title always visible at bottom (non-interactive so it doesn't block clicks) */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-[#1e3a8a] text-white p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.slice(3, 6).map((solution) => (
              <div key={solution.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Overlay - Visible on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-white">{solution.title}</h3>
                    <p 
                      className="text-sm mb-4 leading-relaxed text-white/90 line-clamp-3" 
                      dangerouslySetInnerHTML={{ __html: solution.description }}
                    />
                    <Link
                      href={solutionLinkMap[solution.id] ?? `/solutions#${solution.id}`}
                      className="inline-block bg-white text-[#1e3a8a] hover:bg-gray-100 font-medium px-6 py-2 rounded transition-colors w-fit"
                    >
                      Know more
                    </Link>
                  </div>
                  
                  {/* Title always visible at bottom (non-interactive so it doesn't block clicks) */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-[#1e3a8a] text-white p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row (additional solutions, e.g. Government & Public) */}
          {solutions.length > 6 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.slice(6).map((solution) => (
                <div
                  key={solution.id}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold mb-3 text-white">{solution.title}</h3>
                      <p
                        className="text-sm mb-4 leading-relaxed text-white/90 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: solution.description }}
                      />
                      <Link
                        href={solutionLinkMap[solution.id] ?? `/solutions#${solution.id}`}
                        className="inline-block bg-white text-[#1e3a8a] hover:bg-gray-100 font-medium px-6 py-2 rounded transition-colors w-fit"
                      >
                        Know more
                      </Link>
                    </div>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-[#1e3a8a] text-white p-4 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Products</h2>
          
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  {/* Hover overlay with Know more */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={productLinkMap[product.id] ?? '/products'}
                      className="bg-white text-[#1e3a8a] px-6 py-2 rounded font-medium shadow hover:bg-gray-100 transition-colors"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {products.slice(3, 6).map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={productLinkMap[product.id] ?? '/products'}
                      className="bg-white text-[#1e3a8a] px-6 py-2 rounded font-medium shadow hover:bg-gray-100 transition-colors"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(6, 9).map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={productLinkMap[product.id] ?? '/products'}
                      className="bg-white text-[#1e3a8a] px-6 py-2 rounded font-medium shadow hover:bg-gray-100 transition-colors"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fourth Row (additional products, e.g. NFC Chips) */}
          {products.length > 9 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(9).map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href={productLinkMap[product.id] ?? '/products'}
                        className="bg-white text-[#1e3a8a] px-6 py-2 rounded font-medium shadow hover:bg-gray-100 transition-colors"
                      >
                        Know more
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                    <p
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Our Valuable Customers */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Our Valuable Customers
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            A glimpse of what our customers say about working with Soochak Bharat on RFID, NFC, and
            automation projects.
          </p>

          {/* Carousel of 3 feedbacks at a time */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials
                .slice(
                  currentTestimonialSlide * testimonialsPerSlide,
                  currentTestimonialSlide * testimonialsPerSlide + testimonialsPerSlide,
                )
                .map((t, index) => (
                  <div
                    key={`${currentTestimonialSlide}-${index}`}
                    className="relative bg-white rounded-2xl shadow-md p-6 pt-8 flex flex-col h-full border border-gray-100"
                  >
                    <span className="absolute -top-4 left-6 text-5xl text-blue-100 select-none">“</span>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed mt-2">{t.feedback}</p>
                    <div className="mt-auto pt-2 border-t border-gray-100">
                      <p className="text-sm font-semibold text-[#1e3a8a]">{t.name}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Carousel controls */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentTestimonialSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentTestimonialSlide ? 'w-6 bg-[#1e3a8a]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonials slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Satisfied Clients Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Satisfied Clients</h2>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="text-3xl font-bold text-red-600">Honeywell</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-orange-500">D2C</span>
              <span className="text-2xl font-bold text-green-600">ECOMMERCE</span>
            </div>
            <div className="text-3xl font-bold text-red-600">Honeywell</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-orange-500">D2C</span>
              <span className="text-2xl font-bold text-green-600">ECOMMERCE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
