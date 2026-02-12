'use client'

import { Link, usePathname } from "@/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState, useRef } from "react"
import { routing } from '@/i18n/routing'
import { localeFlags } from '@/i18n/config'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { DownArrow } from "../svg"

type LanguageSwitcherProps = {
  linkClassName: string
  isLight?: boolean
  showLabel?: boolean
}

function LanguageSwitcher({ linkClassName, isLight = false, showLabel = true }: LanguageSwitcherProps) {
  const t = useTranslations('header')
  const pathname = usePathname()
  const currentLocale = useLocale()
  const locales = routing.locales
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
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const currentLabel = t(`languages.${currentLocale}`)
  const currentFlag = localeFlags[currentLocale] ?? ''

  return (
    <div className="relative inline-flex items-center justify-center" ref={dropdownRef} suppressHydrationWarning>
      <button
        type="button"
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'cursor-pointer inline-flex items-center',
          'gap-[clamp(4px,1.2vw,9px)] lg:gap-[clamp(6.4px,0.63vw,24px)] rounded-[clamp(8.5px,0.83vw,32px)] lg:rounded-[clamp(4.3px,0.42vw,16px)] border border-white/35 ',
          'px-[clamp(5px,1.6vw,12px)] lg:px-[clamp(6.4px,0.63vw,24px)]',
          'lg:pt-[clamp(2.1px,0.21vw,8px)] lg:pb-[clamp(1.6px,0.16vw,6px)] lg:px-[clamp(6.4px,0.63vw,24px)]',
          linkClassName,
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('selectLanguage')}
      >
        {currentFlag ? (
          <Image src={currentFlag} width={24} height={18} alt="" className="object-cover shrink-0 w-[clamp(18px,4.8vw,36.86px)] lg:w-[clamp(13.9px,1.35vw,52px)] h-auto" aria-hidden priority />
        ) : null}
        {showLabel && <span className="text-[clamp(11.7px,1.15vw,44px)] text-nowrap">{currentLabel}</span>}
        <DownArrow className="fill-white/35 w-[clamp(5px,1.6vw,12px)] lg:w-[clamp(8.5px,0.83vw,32px)] h-auto" />
      </button>
      {isOpen && (
        <div
          className={cn(
            'absolute top-full rounded-lg shadow-lg border py-[clamp(5px,1.6vw,12px)] lg:py-[clamp(7px,2.4vw,18px)] z-50 right-0 left-auto',
            'mt-[clamp(5px,1.6vw,12px)] min-w-[clamp(84px,28vw,215px)]',
            'lg:mt-[clamp(6.4px,0.63vw,24px)] lg:min-w-[clamp(88.5px,8.65vw,332px)]',
            isLight
              ? 'bg-white border-gray-200'
              : 'bg-white/95 backdrop-blur-sm border-white/30'
          )}
        >
          {locales.map((loc) => {
            const label = t(`languages.${loc}`)
            const flag = localeFlags[loc] ?? ''
            const isActive = currentLocale === loc
            return (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center transition-colors duration-200 w-full text-nowrap',
                  'gap-[clamp(5px,1.6vw,12px)] px-[clamp(10px,3.2vw,25px)] py-[clamp(5px,1.6vw,12px)] text-[clamp(9px,2.8vw,22px)]',
                  'lg:gap-[clamp(6.4px,0.63vw,24px)] lg:px-[clamp(7.5px,0.73vw,28px)] lg:py-[clamp(4.3px,0.42vw,16px)] lg:text-[clamp(11.7px,1.15vw,44px)]',
                  isLight
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    : 'text-gray-800 hover:bg-white/20 hover:text-primary',
                  isActive && 'font-bold bg-black/5'
                )}
              >
                {flag ? (
                  <Image src={flag} width={24} height={18} alt="" className="object-cover shrink-0 w-[clamp(18px,4.8vw,36.86px)] lg:w-[clamp(13.9px,1.35vw,52px)] h-auto" aria-hidden priority />
                ) : null}
                <span>{label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher