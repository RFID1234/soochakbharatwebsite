'use client'

import Link from 'next/link'

interface DatasheetViewerProps {
  searchParams: {
    folder?: string
    file?: string
  }
}

export default function DatasheetViewer({ searchParams }: DatasheetViewerProps) {
  const folder = searchParams.folder
  const file = searchParams.file

  if (!folder || !file) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-700">Invalid datasheet link.</p>
      </div>
    )
  }

  const filePath = `/datasheets/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Datasheet</h1>
          <p className="text-sm md:text-base text-blue-100 break-words">
            {file.replace('.docx', '')}
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <p className="text-gray-700 text-sm md:text-base">
            This datasheet will open as a downloadable document. Use the button below to download or open it in your
            office viewer.
          </p>

          <div className="flex gap-4">
            <a
              href={filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#1e40af] transition-colors"
            >
              Open datasheet
            </a>
            <a
              href={filePath}
              download
              className="inline-block bg-white border border-[#1e3a8a] text-[#1e3a8a] px-5 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Download
            </a>
          </div>

          <Link href="/contact" className="inline-block text-sm text-[#1e3a8a] hover:underline">
            Need help choosing a product? Contact us.
          </Link>
        </div>
      </section>
    </div>
  )
}


