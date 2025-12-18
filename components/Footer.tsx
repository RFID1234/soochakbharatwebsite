import Link from 'next/link'
import Logo from './Logo'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo 
                showText={true} 
                textClassName="text-white" 
                fallbackBgColor="bg-white"
                fallbackTextColor="text-[#1e3a8a]"
              />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>Golf Course Road, Gurugram, Haryana- 122101</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-200" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@soochakbharat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  info@soochakbharat.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+918076702201" className="hover:underline">
                  +91 80767 02201
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/career" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:underline">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:underline">
                  Products (Home)
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:underline">
                  Solutions (Home)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:underline">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:underline">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT US</h3>
            <p className="text-sm mb-4">
              At Soochak Bharat, our vision is to empower national security, personal safety, and global prosperity through innovative solutions, making a positive impact on people's lives and businesses.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@soochakbharat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label="Email"
              >
                <FaEnvelope className="text-red-200 text-xl" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574416277485" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Facebook">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://x.com/SoochakBharat" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/soochak-bharat/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="LinkedIn">
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
              <Link href="/solutions/defence-security" className="hover:underline">
                Defence &amp; Security
              </Link>
              <Link href="/solutions/manufacturing" className="hover:underline">
                Manufacturing
              </Link>
              <Link href="/solutions/transportation-logistics" className="hover:underline">
                Transportation &amp; Logistics
              </Link>
              <Link href="/solutions/retail" className="hover:underline">
                Retail
              </Link>
              <Link href="/solutions/healthcare" className="hover:underline">
                Healthcare
              </Link>
              <Link href="/solutions/hospitality" className="hover:underline">
                Hospitality
              </Link>
              <Link href="/solutions/education" className="hover:underline">
                Education
              </Link>
              <Link href="/solutions/pet-livestock" className="hover:underline">
                Pet &amp; Livestock
              </Link>
              <Link href="/solutions/government-public" className="hover:underline">
                Government &amp; Public
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e40af] mt-8 pt-6 text-center text-sm">
          <p>Copyright © 2025 SOOCHAK BHARAT TECHNOLOGIES PRIVATE LIMITED</p>
        </div>
      </div>
    </footer>
  )
}

