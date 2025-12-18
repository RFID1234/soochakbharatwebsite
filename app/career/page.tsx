'use client'

import { useState } from 'react'

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    role: '',
    experience: '',
    message: '',
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const form = new FormData()
      form.append('name', formData.name)
      form.append('email', formData.email)
      form.append('phone', formData.phone)
      form.append('location', formData.location)
      form.append('role', formData.role)
      form.append('experience', formData.experience)
      form.append('message', formData.message)
      if (resumeFile) {
        form.append('resume', resumeFile)
      }

      const response = await fetch('/api/career', {
        method: 'POST',
        body: form,
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        role: '',
        experience: '',
        message: '',
      })
      setResumeFile(null)
    } catch (error) {
      console.error('Error submitting career form', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Allow only PDF files
      if (file.type !== 'application/pdf') {
        alert('Please upload your resume as a PDF file.')
        e.target.value = ''
        setResumeFile(null)
        return
      }
      setResumeFile(file)
    } else {
      setResumeFile(null)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Careers</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Careers at Soochak Bharat</h1>
          <p className="text-sm md:text-base text-blue-100">
            Apply with your details. We’ll review your profile and contact you for next steps.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-1">Apply now</h2>
              <p className="text-sm text-gray-600 mb-6">
                Fill in your details and we’ll receive your application on email.
              </p>

              {status === 'success' ? (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                  <p className="font-semibold">Thanks! Your application has been recorded.</p>
                  <p className="text-sm mt-1">We’ll reach out if there’s a good match.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="+91..."
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                        Current location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                        Role / Department
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                        placeholder="Sales, Engineering, Operations..."
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
                        Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                        required
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="0-1">0–1 years</option>
                        <option value="1-3">1–3 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="5-10">5–10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Briefly describe your skills, relevant projects, and what you’re looking for."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                      Resume (PDF)
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,application/pdf"
                      onChange={handleResumeChange}
                      className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#1e3a8a] file:text-white hover:file:bg-[#1e40af]"
                    />
                    <p className="mt-1 text-xs text-gray-500">Upload your latest resume as a PDF file.</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1e3a8a] text-white px-8 py-3 rounded font-medium hover:bg-[#1e40af] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                  </button>
                  {status === 'error' && (
                    <p className="mt-3 text-sm text-red-600">
                      Something went wrong while sending your application. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-lg text-[#1e3a8a] mb-2">Alternative option</h3>
                <p className="text-sm text-gray-700">
                  You can also email your resume to{' '}
                  <a
                    className="text-[#1e3a8a] hover:underline"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@soochakbharat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@soochakbharat.com
                  </a>
                  .
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-lg text-[#1e3a8a] mb-2">Tips</h3>
                <ul className="text-sm text-gray-700 list-disc pl-6 space-y-1">
                  <li>Include your preferred role and location</li>
                  <li>Mention relevant RFID/IoT/enterprise experience (if any)</li>
                  <li>Share links to portfolio or LinkedIn in the message</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}


