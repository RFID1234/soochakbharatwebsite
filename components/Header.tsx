'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import Logo from './Logo'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const runSiteSearch = () => {
    const q = searchQuery.trim()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
    setMobileMenuOpen(false)
  }

  const solutions = [
    'Defence & Security',
    'Manufacturing',
    'Transportation & Logistics',
    'Retail',
    'Healthcare',
    'Hospitality',
    'Education',
    'Government & Public',
    'Pet & Livestock',
  ]

  const products = [
    'Handheld RFID Readers',
    'Fixed RFID Readers',
    'Integrated RFID Readers',
    'RFID Tags',
    'RFID Tokens/Wristbands',
    'RFID Antennas',
    'Desktop RFID Readers',
    'RFID Printers',
    'Biometric Machines & Security Cameras',
    'NFC Chips',
  ]

  return (
    <>
      {/* Main Navigation */}
      <header
        className={`z-50 transition-colors ${
          isHome ? 'absolute top-0 left-0 right-0 bg-transparent' : 'sticky top-0 bg-white shadow-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/">
              <Logo showText={false} className="w-32 h-16 md:w-40 md:h-18" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${isHome ? 'text-white' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <div
                className="relative"
                onMouseEnter={() => setShowSolutionsDropdown(true)}
                onMouseLeave={() => setShowSolutionsDropdown(false)}
              >
                <a
                  href="/#solutions"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('solutions')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.href = '/#solutions'
                    }
                  }}
                  className={`font-medium flex items-center gap-1 cursor-pointer ${
                    isHome ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-[#1e3a8a]'
                  }`}
                >
                  SOLUTIONS
                  <span className="text-xs">▼</span>
                </a>
                {showSolutionsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded border py-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution}
                        href={
                          solution === 'Retail'
                            ? '/solutions/retail'
                            : solution === 'Defence & Security'
                            ? '/solutions/defence-security'
                            : solution === 'Manufacturing'
                            ? '/solutions/manufacturing'
                          : solution === 'Transportation & Logistics'
                            ? '/solutions/transportation-logistics'
                          : solution === 'Healthcare'
                            ? '/solutions/healthcare'
                          : solution === 'Hospitality'
                            ? '/solutions/hospitality'
                          : solution === 'Education'
                            ? '/solutions/education'
                          : solution === 'Pet & Livestock'
                            ? '/solutions/pet-livestock'
                          : solution === 'Government & Public'
                            ? '/solutions/government-public'
                            : '/#solutions'
                        }
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]"
                      >
                        {solution}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <a
                  href="/#products"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('products')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.href = '/#products'
                    }
                  }}
                  className={`font-medium flex items-center gap-1 cursor-pointer ${
                    isHome ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-[#1e3a8a]'
                  }`}
                >
                  PRODUCTS
                  <span className="text-xs">▼</span>
                </a>
                {showProductsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded border py-2">
                    {products.map((product) => (
                      <Link
                        key={product}
                        href={
                          product === 'RFID Tags'
                            ? '/products/rfid-tags'
                            : product === 'Handheld RFID Readers'
                            ? '/products/handheld-rfid-readers'
                            : product === 'Fixed RFID Readers'
                            ? '/products/fixed-rfid-readers'
                            : product === 'Integrated RFID Readers'
                            ? '/products/integrated-rfid-readers'
                            : product === 'RFID Tokens/Wristbands'
                            ? '/products/rfid-tokens-wristbands'
                            : product === 'RFID Antennas'
                            ? '/products/rfid-antennas'
                            : product === 'Desktop RFID Readers'
                            ? '/products/desktop-rfid-readers'
                            : product === 'RFID Printers'
                            ? '/products/rfid-printers'
                            : product === 'NFC Chips'
                            ? '/products/nfc-chips'
                            : '/products/biometric-machines-security-cameras'
                        }
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]"
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/software"
                className={isHome ? 'text-white hover:text-blue-100 font-medium' : 'text-gray-700 hover:text-[#1e3a8a] font-medium'}
              >
                SOFTWARE
              </Link>
              <Link
                href="/about"
                className={isHome ? 'text-white hover:text-blue-100 font-medium' : 'text-gray-700 hover:text-[#1e3a8a] font-medium'}
              >
                ABOUT US
              </Link>
              <Link
                href="/blogs"
                className={isHome ? 'text-white hover:text-blue-100 font-medium' : 'text-gray-700 hover:text-[#1e3a8a] font-medium'}
              >
                BLOGS
              </Link>
              <Link
                href="/career"
                className={isHome ? 'text-white hover:text-blue-100 font-medium' : 'text-gray-700 hover:text-[#1e3a8a] font-medium'}
              >
                CAREER
              </Link>
              <Link
                href="/certifications"
                className={isHome ? 'text-white hover:text-blue-100 font-medium' : 'text-gray-700 hover:text-[#1e3a8a] font-medium'}
              >
                CERTIFICATIONS
              </Link>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center gap-4">
              <div
                className={`flex items-center rounded px-3 py-1 ${
                  isHome ? 'border border-white/60 bg-white/10' : 'border border-gray-300 bg-white'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      runSiteSearch()
                    }
                  }}
                  className={`outline-none text-sm bg-transparent ${
                    isHome ? 'text-white placeholder:text-blue-100' : 'text-gray-800'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => {
                    runSiteSearch()
                  }}
                  className={`cursor-pointer ${
                    isHome ? 'text-white hover:text-blue-100' : 'text-[#1e3a8a]'
                  }`}
                  aria-label="Search website"
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a
                  href="/#solutions"
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    const element = document.getElementById('solutions')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.href = '/#solutions'
                    }
                  }}
                  className="text-gray-700 hover:text-[#1e3a8a] font-medium"
                >
                  SOLUTIONS
                </a>
                <a
                  href="/#products"
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    const element = document.getElementById('products')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.href = '/#products'
                    }
                  }}
                  className="text-gray-700 hover:text-[#1e3a8a] font-medium"
                >
                  PRODUCTS
                </a>
                <Link href="/software" className="text-gray-700 hover:text-[#1e3a8a] font-medium">
                  SOFTWARE
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-[#1e3a8a] font-medium">
                  ABOUT US
                </Link>
                <Link href="/blogs" className="text-gray-700 hover:text-[#1e3a8a] font-medium">
                  BLOGS
                </Link>
                <Link href="/career" className="text-gray-700 hover:text-[#1e3a8a] font-medium">
                  CAREER
                </Link>
                <Link href="/certifications" className="text-gray-700 hover:text-[#1e3a8a] font-medium">
                  CERTIFICATIONS
                </Link>
                <div className="flex items-center border rounded px-3 py-1 mt-2">
                  <input
                    type="text"
                    placeholder="Search ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        runSiteSearch()
                      }
                    }}
                    className="outline-none text-sm flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => runSiteSearch()}
                    className="text-[#1e3a8a] cursor-pointer"
                    aria-label="Search website"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

