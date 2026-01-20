'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
  fallbackBgColor?: string
  fallbackTextColor?: string
}

export default function Logo({ 
  className = 'w-12 h-12', 
  showText = true, 
  textClassName = '',
  fallbackBgColor = 'bg-[#1e3a8a]',
  fallbackTextColor = 'text-white'
}: LogoProps) {
  const [logoError, setLogoError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Reset error state when component mounts to retry loading
  useEffect(() => {
    setLogoError(false)
    setImageLoaded(false)
  }, [])

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${className} flex-shrink-0`}>
        {!logoError ? (
          <>
            <Image
              src="/logo.png"
              alt="Soochak Bharat Logo"
              fill
              className={`object-contain ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              priority
              unoptimized
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setLogoError(true)
                setImageLoaded(false)
              }}
            />
            {!imageLoaded && !logoError && (
              <div className={`w-full h-full ${fallbackBgColor} rounded-lg flex items-center justify-center animate-pulse`}>
                <span className={`${fallbackTextColor} font-bold text-3xl`}>S</span>
              </div>
            )}
          </>
        ) : (
          <div className={`w-full h-full ${fallbackBgColor} rounded-lg flex items-center justify-center`}>
            <span className={`${fallbackTextColor} font-bold text-3xl`}>S</span>
          </div>
        )}
      </div>
      {showText && (
        <span className={`text-[#1e3a8a] font-bold text-xl ${textClassName}`}>
          Soochak Bharat
        </span>
      )}
    </div>
  )
}

