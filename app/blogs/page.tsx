'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function BlogsPage() {
  const blogs = [
    {
      id: 'blog-1',
      slug: 'blog-1',
      title: 'File Management with an RFID-Based Smart Tracking System',
      image: '/blogs/ChatGPT Image Dec 17, 2025, 05_14_17 PM.png',
      date: 'December 2025',
      challenge:
        'Many organizations struggle with inefficient asset tracking, leading to lost inventory, increased operational costs, and reduced productivity.',
      solution:
        "Soochak Bharat's RFID solutions provide automated, real-time asset tracking that eliminates manual errors and significantly improves operational efficiency.",
      whyChooseUs: [
        'Proven track record in RFID technology implementation',
        'Comprehensive solutions tailored to your specific needs',
        'Expert support and consultation throughout the process',
      ],
    },
    {
      id: 'blog-2',
      slug: 'blog-2',
      title: 'RFID for Warehouse & Logistics Optimization',
      image: '/blogs/WhatsApp Image 2025-12-18 at 2.11.46 PM.jpeg',
      date: 'November 2025',
      challenge:
        'Fast-growing logistics operations often face blind spots in inventory visibility, vehicle movement, and dock efficiency.',
      solution:
        'RFID-enabled yard, dock, and warehouse automation helps logistics teams track assets, vehicles, and shipments in real-time.',
      whyChooseUs: [
        'Deep understanding of logistics and supply chain workflows',
        'End-to-end RFID hardware and software stack',
        'Proven deployments with measurable turnaround-time reduction',
      ],
    },
    {
      id: 'blog-3',
      slug: 'blog-3',
      title: 'RFID in Retail – From Storefront to Backroom',
      image: '/blogs/WhatsApp Image 2025-12-18 at 2.06.57 PM.jpeg',
      date: 'October 2025',
      challenge:
        'Retail brands struggle to maintain accurate stock, prevent shrinkage, and still deliver a premium in-store experience.',
      solution:
        'Item-level RFID tagging enables real-time stock accuracy, faster replenishment, and smart experiences like self-checkout and smart fitting rooms.',
      whyChooseUs: [
        'Experience with fashion, jewellery, and large-format retail',
        'Scalable designs for multi-store and omni-channel expansion',
        'Hardware, middleware, and analytics delivered as one solution',
      ],
    },
    {
      id: 'blog-4',
      slug: 'blog-4',
      title: 'RFID for Healthcare Asset & Patient Management',
      image: '/blogs/WhatsApp Image 2025-12-18 at 2.11.46 PM (1).jpeg',
      date: 'September 2025',
      challenge:
        'Hospitals often lose time and money searching for critical equipment, tracking patients, and managing high-value assets.',
      solution:
        'RFID-based tracking gives hospitals live visibility of equipment, patients, and staff movements across wards and critical care areas.',
      whyChooseUs: [
        'Solutions tailored for Indian healthcare environments',
        'Compliance-focused design with patient safety in mind',
        'Modular architecture that scales from single hospitals to networks',
      ],
    },
    {
      id: 'blog-5',
      slug: 'blog-5',
      title: 'Smart Transportation with RFID & IoT',
      image: '/blogs/WhatsApp Image 2025-12-18 at 2.11.46 PM (2).jpeg',
      date: 'August 2025',
      challenge:
        'Transport operators need to manage fleets, tolling, and yard movements without manual intervention or paper-based systems.',
      solution:
        'Soochak Bharat combines RFID-based vehicle identification with automation at gates, yards, and tolls to streamline movement and billing.',
      whyChooseUs: [
        'Experience across highways, yards, and private logistics hubs',
        'Robust hardware built for outdoor and industrial conditions',
        'Integration with ERP, WMS, and transport management systems',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Blogs</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blogs</h1>
          <p className="text-sm md:text-base text-blue-100">
            Updates, insights, and use-cases from the world of RFID and automation.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {blogs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-2">Coming soon</h2>
              <p className="text-gray-700">
                We'll publish blogs here soon. Meanwhile, you can explore our solutions and products.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#solutions"
                  className="inline-block bg-[#1e3a8a] text-white px-5 py-2 rounded font-medium hover:bg-[#1e40af] transition-colors"
                >
                  View Solutions
                </Link>
                <Link
                  href="/#products"
                  className="inline-block bg-white text-[#1e3a8a] px-5 py-2 rounded font-medium border border-[#1e3a8a] hover:bg-blue-50 transition-colors"
                >
                  View Products
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group flex flex-col md:flex-row"
                >
                  {/* Image on the left */}
                  <div className="relative w-full md:w-64 h-40 md:h-40 bg-gray-100 flex-shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  
                  {/* Content on the right */}
                  <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs text-gray-500">{blog.date}</p>
                        <h2 className="text-lg md:text-xl font-bold text-[#1e3a8a] group-hover:text-[#1e40af] transition-colors">
                          {blog.title}
                        </h2>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {/* Challenge Preview */}
                        <div>
                          <h3 className="text-xs font-semibold text-red-600 mb-1">Challenge</h3>
                          <p className="text-gray-600 text-xs line-clamp-2">{blog.challenge}</p>
                        </div>
                        
                        {/* Solution Preview */}
                        <div>
                          <h3 className="text-xs font-semibold text-green-600 mb-1">Solution</h3>
                          <p className="text-gray-600 text-xs line-clamp-2">{blog.solution}</p>
                        </div>
                        
                        {/* Why Choose Us Preview */}
                        <div>
                          <h3 className="text-xs font-semibold text-blue-600 mb-1">Why Choose Us?</h3>
                          <ul className="text-gray-600 text-xs space-y-0.5">
                            {blog.whyChooseUs.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="line-clamp-1">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <span className="inline-flex items-center gap-2 text-[#1e3a8a] font-medium group-hover:gap-3 transition-all mt-2 text-xs">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


