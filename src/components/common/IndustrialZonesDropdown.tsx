'use client'
import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTranslations, useLocale } from "next-intl"

type IndustrialZonesDropdownProps = {
  linkClassName: string
  isLight?: boolean
}

function IndustrialZonesDropdown({ linkClassName, isLight = false }: IndustrialZonesDropdownProps) {
  const t = useTranslations('header.nav')
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const projects = [
    { key: 'projectBacNinh' as const, href: `https://bacninh-1.ezpark.vn/${locale}` },
    { key: 'projectHaTinh' as const, href: `https://hatinh-1.ezpark.vn/${locale}` },
    { key: 'projectDakLak' as const, href: `https://daklak-1.ezpark.vn/${locale}` },
  ]

  return (
    <div className="relative flex items-center justify-center" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(linkClassName, 'cursor-pointer')}
        aria-expanded={isOpen}
        aria-haspopup="true"
        suppressHydrationWarning
      >
        <span className="inline-block relative">
          <span className="font-bold invisible text-nowrap" aria-hidden="true">{t('industrialZones')}</span>
          <span className="absolute left-0 top-0 whitespace-nowrap group-hover:font-bold">{t('industrialZones')}</span>
        </span>
      </button>

      {isOpen && (
        <div className={cn(
          'absolute top-full mt-[clamp(5px,1.6vw,12px)] min-w-[clamp(106.7px,10.42vw,400px)] rounded-[clamp(5px,1.6vw,12px)] shadow-lg border py-[clamp(5px,1.6vw,12px)] z-50',
          'lg:left-[50%] translate-x-[-50%] lg:right-auto',
          'right-0 left-auto',
          isLight
            ? 'bg-white border-gray-200'
            : 'bg-white/95 backdrop-blur-sm border-white/30'
        )}>
          {projects.map((project) => (
            <a
              key={project.key}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={cn(
                'block px-[clamp(10px,3.2vw,25px)] py-[clamp(5px,1.6vw,12px)] text-[clamp(11.7px,1.15vw,44px)] text-nowrap transition-colors duration-200',
                isLight
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  : 'text-gray-800 hover:bg-white/20 hover:text-primary'
              )}
            >
              {t(project.key)}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default IndustrialZonesDropdown