import Link from 'next/link'
import { SITE_SEARCH_INDEX } from '@/lib/siteSearchIndex'

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string }
}) {
  const q = (searchParams?.q || '').trim()
  const qLower = q.toLowerCase()

  const results =
    qLower.length === 0
      ? []
      : SITE_SEARCH_INDEX.filter((item) => {
          const hay = `${item.title} ${item.content} ${(item.tags || []).join(' ')}`.toLowerCase()
          return hay.includes(qLower)
        })

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-3 text-blue-200">Search</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">Search the website</h1>
          <p className="text-sm md:text-base text-blue-100">
            {q ? (
              <>
                Results for <span className="font-semibold text-white">“{q}”</span>
              </>
            ) : (
              'Type a keyword in the header search bar to find pages.'
            )}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {q && (
            <div className="text-sm text-gray-700 mb-4">
              {results.length === 0 ? 'No results found.' : `${results.length} result${results.length === 1 ? '' : 's'} found.`}
            </div>
          )}

          <div className="space-y-4">
            {results.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-bold text-[#1e3a8a]">{r.title}</div>
                    <div className="text-sm text-gray-600 mt-1 line-clamp-2">{r.content}</div>
                    <div className="text-xs text-gray-500 mt-2">{r.href}</div>
                  </div>
                </div>
              </Link>
            ))}

            {q && results.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-gray-700">
                Try searching: <span className="font-medium">RFID</span>, <span className="font-medium">Retail</span>,{' '}
                <span className="font-medium">Datasheet</span>, <span className="font-medium">Contact</span>,{' '}
                <span className="font-medium">Government</span>.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}


