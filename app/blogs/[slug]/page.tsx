import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogPosts: Record<string, {
  title: string
  date: string
  challenge: string
  solution: string
  whyChooseUs: string[]
  fullContent: {
    introduction?: string
    sections?: Array<{
      title: string
      content: string | string[]
    }>
    conclusion?: string
  }
}> = {
  'blog-1': {
    title: 'File Management with an RFID-Based Smart Tracking System',
    date: 'December 2025',
    challenge:
      "In today's fast-paced office environments, managing physical files efficiently remains a significant challenge. Despite digital transformation, many organizations still rely on physical documents for compliance, legal, and operational reasons. One of our recent projects focused on solving this exact problem through an RFID-based File Management System, delivering visibility, accuracy, and control over physical files.",
    solution:
      "Soochak Bharat Technologies designed and implemented a custom RFID-based File Management System tailored to the client's operational needs. Each physical file was tagged with a UHF RFID tag, uniquely encoded and linked to the file record in the system. Fixed and handheld RFID readers were strategically deployed across key locations such as file rooms, issue counters, and department entry/exit points.",
    whyChooseUs: [
      'Speed and accuracy',
      'Tamper-resistant identification',
      'Scalability for future expansion',
      'Seamless integration with enterprise systems',
    ],
    fullContent: {
      introduction: '',
      sections: [
        {
          title: 'Key System Components',
          content: [
            'RFID-Tagged Files: Each file carried a unique RFID identity',
            'RFID Readers & Antennas: Enabled fast, contactless detection',
            'Centralized Software Platform: Managed file data, logs, and reports',
            'User Access Control: Ensured authorized file handling',
            'Audit & Tracking Dashboard: Real-time and historical insights',
          ],
        },
        {
          title: 'How the System Worked',
          content: [
            'File Registration: Each file was digitally registered and mapped to its RFID tag in the system.',
            'Automated File Movement Tracking: Whenever a file moved between departments or storage areas, the RFID readers automatically recorded the movement—no manual entry required.',
            'Real-Time File Location: Authorized users could instantly check the last known location and status of any file through the software dashboard.',
            'User Accountability: File issuance and return were logged against user credentials, ensuring complete traceability.',
            'Audit-Ready Reports: The system generated detailed reports on file history, movement timelines, and pending files, simplifying audits and compliance checks.',
          ],
        },
        {
          title: 'The Impact & Results',
          content:
            'The RFID File Management System delivered measurable improvements: near-zero file misplacement, significant reduction in file search time, improved accountability and transparency, faster audits and internal reviews, and enhanced operational efficiency without increasing manpower. The client experienced a smooth transition from manual tracking to a smart, automated file management process with minimal training required for staff.',
        },
        {
          title: 'Why RFID for File Management?',
          content:
            'RFID technology enables non-line-of-sight, bulk reading, making it ideal for environments with large volumes of physical files. Unlike barcodes or manual registers, RFID offers speed and accuracy, tamper-resistant identification, scalability for future expansion, and seamless integration with enterprise systems.',
        },
      ],
      conclusion:
        'At Soochak Bharat Technologies Pvt. Ltd., we specialize in delivering end-to-end RFID solutions tailored to real-world business challenges. This project is a strong example of how technology, when applied thoughtfully, can modernize traditional processes and create long-term value. If your organization is struggling with physical file tracking, asset visibility, or manual record-keeping, our RFID solutions can help you move towards a smarter and more efficient system.',
    },
  },
  'blog-2': {
    title: 'RFID for Warehouse & Logistics Optimization',
    date: 'December 2025',
    challenge:
      'Logistics hubs and warehouses often struggle with visibility into incoming and outgoing loads, dock utilisation, and vehicle turnaround time.',
    solution:
      'By tagging pallets, containers, and vehicles with RFID and instrumenting docks and gates with readers, Soochak Bharat enables real-time visibility across the entire yard and warehouse.',
    whyChooseUs: [
      'End-to-end RFID architectures for yards, docks, and warehouses',
      'Experience in high-volume logistics and 3PL environments',
      'Strong integration capabilities with WMS, ERP, and transport systems',
    ],
    fullContent: {
      introduction:
        'For modern logistics and e-commerce operations, every minute of delay at the warehouse or yard directly impacts service levels and costs. RFID provides the automation layer required to keep goods and vehicles moving efficiently.',
      sections: [
        {
          title: 'Where RFID Adds Value in Logistics',
          content: [
            'Automated gate-in / gate-out logging for trucks and trailers',
            'Real-time view of dock door utilisation and queue lengths',
            'Pallet and carton tracking from inbound staging to dispatch',
            'Exception alerts for delayed or misrouted shipments',
          ],
        },
      ],
      conclusion:
        'With Soochak Bharat’s logistics-focused RFID solutions, operators gain live visibility of every vehicle and load—reducing detention, improving capacity utilisation, and strengthening customer SLAs.',
    },
  },
  'blog-3': {
    title: 'RFID in Retail – From Storefront to Backroom',
    date: 'December 2025',
    challenge:
      'Retailers need accurate stock, low shrinkage, and memorable in-store experiences, but manual processes make this difficult to achieve consistently.',
    solution:
      'RFID item-level tagging turns every product into a smart, scannable asset, enabling instant cycle counts, automated replenishment, and interactive customer journeys.',
    whyChooseUs: [
      'Deployments across fashion, jewellery, and lifestyle formats',
      'Solutions that support omni-channel and click-and-collect models',
      'Hardware and software stack tuned for Indian retail realities',
    ],
    fullContent: {
      introduction:
        'RFID has become a critical enabler for modern retail, making it possible to know exactly what is available on the floor, in the backroom, and in transit.',
      sections: [
        {
          title: 'Key Retail Use-Cases',
          content: [
            'Fast and accurate cycle counts using handheld RFID readers',
            'Smart fitting rooms that recognise garments and suggest alternatives',
            'Loss prevention through real-time movement monitoring of tagged items',
          ],
        },
      ],
      conclusion:
        'Soochak Bharat helps retailers move from manual barcode scans to RFID-powered operations, unlocking higher sales, better experiences, and lower shrinkage.',
    },
  },
  'blog-4': {
    title: 'RFID for Healthcare Asset & Patient Management',
    date: 'December 2025',
    challenge:
      'Hospitals and clinics frequently lose time searching for equipment, wheelchairs, and critical devices, while also needing to ensure patient safety.',
    solution:
      'RFID tags on assets, staff, and patient bands, combined with strategically placed readers, give hospitals a live map of movement and utilisation.',
    whyChooseUs: [
      'Solutions tuned for high-uptime, clinical environments',
      'Support for asset tracking, access control, and patient flow monitoring',
      'Consultative approach with hospital operations teams',
    ],
    fullContent: {
      introduction:
        'Healthcare environments demand both precision and speed. RFID can dramatically reduce time spent locating equipment while improving patient safety and compliance.',
      sections: [
        {
          title: 'Healthcare Scenarios We Address',
          content: [
            'Locating infusion pumps, wheelchairs, and critical devices in seconds',
            'Monitoring patient flow through emergency, wards, and diagnostic areas',
            'Restricting access to sensitive zones such as ICUs and pharmacies',
          ],
        },
      ],
      conclusion:
        'Soochak Bharat’s healthcare-focused RFID implementations bring clarity to busy hospitals, ensuring that the right assets and people are in the right place at the right time.',
    },
  },
  'blog-5': {
    title: 'Smart Transportation with RFID & IoT',
    date: 'December 2025',
    challenge:
      'Fleet operators and infrastructure owners need a reliable way to identify vehicles, control access, and automate tolling without manual intervention.',
    solution:
      'RFID-based vehicle identification, combined with IoT sensors and backend platforms, enables seamless tolling, parking, and fleet movement tracking.',
    whyChooseUs: [
      'Experience with highways, campuses, and private transport networks',
      'Rugged hardware designed for outdoor and roadside environments',
      'Ability to integrate with billing, access control, and analytics systems',
    ],
    fullContent: {
      introduction:
        'From toll plazas to corporate campuses, RFID streamlines how vehicles are authenticated, charged, and allowed through.',
      sections: [
        {
          title: 'Transport & Mobility Use-Cases',
          content: [
            'RFID-enabled automatic toll and parking payment',
            'Secure access control for staff and fleet vehicles',
            'Route and utilisation analytics for fleet owners',
          ],
        },
      ],
      conclusion:
        'With Soochak Bharat’s smart transportation solutions, organisations can reduce congestion, cut leakage in revenue collection, and gain full visibility into vehicle movement.',
    },
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: PageProps) {
  const blog = blogPosts[params.slug]

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors"
          >
            ← Back to Blogs
          </Link>
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">{blog.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {/* Challenge Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-red-500">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">Challenge</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{blog.challenge}</p>
          </div>

          {/* Solution Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-green-500">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">Solution</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{blog.solution}</p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              {blog.whyChooseUs.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#1e3a8a] font-bold mt-1">✓</span>
                  <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Content Sections */}
          {blog.fullContent.introduction && (
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed text-lg">{blog.fullContent.introduction}</p>
            </div>
          )}

          {blog.fullContent.sections && blog.fullContent.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#1e3a8a] font-bold mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
              )}
            </div>
          ))}

          {blog.fullContent.conclusion && (
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{blog.fullContent.conclusion}</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-[#1e3a8a] text-white rounded-xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="mb-6 text-blue-100">Get in touch with our experts to learn how RFID can benefit your business.</p>
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

