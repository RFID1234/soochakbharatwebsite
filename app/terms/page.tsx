'use client'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms &amp; Conditions</h1>
          <p className="text-sm md:text-base text-blue-100">
            Please read these Terms &amp; Conditions carefully before using our website.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8 text-gray-800">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to comply with and be legally bound by these Terms and
              Conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">2. Company Information</h2>
            <p className="font-medium">Soochak Bharat Technologies Private Limited</p>
            <p>Golf Course Road, Gurugram, Haryana – 122101</p>
            <p>
              Email:{' '}
              <a
                className="text-[#1e3a8a] hover:underline"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@soochakbharat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@soochakbharat.com
              </a>
            </p>
            <p>Phone: +91 80767 02201</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">3. Scope of Services</h2>
            <p>
              This website showcases RFID-related products, services, and content developed for B2B and B2G clients.
              While downloads and inquiries are supported, product purchases are not available through the website at
              this time.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">4. Eligibility</h2>
            <p>
              This website is intended solely for users who are 18 years or older and legally capable of entering
              binding contracts. This website is targeted to businesses (B2B) and government entities (B2G).
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">5. Use of Website and Content</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Content is for informational and business reference only.</li>
              <li>Do not copy, modify, distribute, or reverse-engineer any part of the website.</li>
              <li>You agree not to interfere with the security or operation of this site.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">6. Intellectual Property Rights</h2>
            <p>
              All content, software tools, SDKs, logos, and graphics are the intellectual property of Soochak Bharat
              Technologies Private Limited or its licensors. Unauthorized use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">7. Licensing of Digital Tools</h2>
            <p>
              SDKs, APIs, or downloadable materials are governed by separate Software License Agreements (SLAs). By
              using them, you agree to their respective licensing terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">8. Privacy Policy</h2>
            <p>
              Your use of this website is also governed by our Privacy Policy. Please review it carefully. (See Privacy
              Policy page.)
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">9. Limitation of Liability</h2>
            <p>
              We shall not be liable for any indirect, incidental, or consequential damages, including data loss,
              business interruption, or loss of profits arising out of your use of this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">10. Indemnification</h2>
            <p>
              You agree to indemnify Soochak Bharat Technologies and its affiliates from any claims, liabilities, or
              expenses arising from your misuse of the site or violation of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">11. International Users</h2>
            <p>
              If accessing from outside India, you are responsible for complying with local laws. Use is prohibited in
              jurisdictions where content or practices may be unlawful.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">12. Modifications to Terms</h2>
            <p>
              We may update these Terms at any time. Changes will be posted on this page. Continued use constitutes
              acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">13. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. All disputes shall be subject to the exclusive
              jurisdiction of the courts in Gurugram, Haryana.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


