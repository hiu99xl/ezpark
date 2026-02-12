'use client'

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/i18n/navigation';
import Image from 'next/image';
import { IndustrialZonesDropdown, MenuButton, MenuPosition } from './common';
import LanguageSwitcher from './common/LanguageSwitcher';
import { MOBILE_BREAKPOINT } from '@/constants/responsive';
import { HEADER_HORIZONTAL_PADDING } from '@/constants/layout';
import { useMediaQuery } from 'react-responsive';
import { useTranslations } from 'next-intl';

/* Types */
type HeaderProps = {
  mode?: typeof MODE_DEFAULT | typeof MODE_LIGHT;
  custom?: {
    logoConfig?: {
      src?: string;
      link?: string;
      classWrapper?: string;
      classImage?: string;
    };
    headerCls?: string;
    children?: React.ReactNode;
    headerScrollCls?: string;
    customMenuPosition?: MenuPosition;
  }
}

/* Constants */
const MODE_DEFAULT = 'default';
const MODE_LIGHT = 'light';

/* Component */
const Header = ({
  mode = MODE_DEFAULT,
  custom = {},
}: HeaderProps) => {
  const { logoConfig, headerCls, headerScrollCls, customMenuPosition } = custom;
  // Validate mode
  const isLight = mode === MODE_LIGHT;
  
  const t = useTranslations();
  const rawPathname = usePathname()
  const pathname = typeof rawPathname === 'string'
    ? (rawPathname.replace(/^\/(vi|en|kr|zh|ja)/, '') || '/') as string
    : rawPathname
  const [isMounted, setIsMounted] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(false)
  const [isScrollDown, setIsScrollDown] = useState(false)
  const lastScrollYRef = useRef(0)
  const isMobileQuery = useMediaQuery(MOBILE_BREAKPOINT)
  const isMobile = isMounted ? isMobileQuery : false

  useEffect(() => {
    setIsMounted(true)
  }, []);

  /** isScrollTop = true khi không ở đầu trang (y > 50), kể cả sau reload; ở top thì false. isScrollDown = true khi đang cuộn xuống và y > 50. */
  useEffect(() => {
    const SCROLL_TOP_THRESHOLD = 50
    if (typeof window !== 'undefined') {
      lastScrollYRef.current = window.scrollY
    }
    const handleScroll = () => {
      if (typeof window === 'undefined') return
      const y = window.scrollY
      const belowTop = y > SCROLL_TOP_THRESHOLD
      setIsScrollTop(belowTop)
      setIsScrollDown(belowTop && y > lastScrollYRef.current)
      lastScrollYRef.current = y
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const linkClassBase = cn(
    "group h-fit w-fit inline-flex items-center justify-center border border-transparent transition-all duration-300 font-normal",
    "hover:bg-white/25 hover:border-primary hover:text-primary hover:backdrop-blur-ms",
    "lg:rounded-[clamp(17.1px,1.67vw,64px)] lg:pt-[clamp(2.1px,0.21vw,8px)] lg:pb-[clamp(2.7px,0.26vw,10px)] lg:px-[clamp(8.5px,0.83vw,32px)] lg:text-[clamp(11.7px,1.15vw,44px)]",
  );

  const linkClassActive = "bg-primary text-white";
  const linkClassInactive = cn(
    isLight ? "text-black" : "text-white",
  );

  const menuClassScrollTop = cn(
    "lg:pt-[clamp(6.4px,0.63vw,24px)] lg:pb-[clamp(6.9px,0.68vw,26px)] pb-[clamp(9px,2.8vw,22px)] backdrop-blur-sm border-b border-white/45 shadow-[0_0_10px_2px_rgba(255, 255, 255, 0.5)]",
    isLight ? "bg-white/35" : "bg-black/35",
    headerScrollCls,
  )

  return (
    <header
      data-scroll-down={isScrollDown}
      className={cn(
        'fixed top-0 z-100',
        'grid grid-cols-3 lg:grid-cols-24 pb-0 grid-items-center w-full',
        'transition-[transform,background-color,padding] duration-300 ease-out',
        'pt-[clamp(12px,4vw,31px)]',
        HEADER_HORIZONTAL_PADDING,
        'lg:pt-[clamp(40.7px,3.97vw,152.6px)]',
        headerCls,
        isScrollDown && '-translate-y-full',
        !isScrollDown && 'translate-y-0',
        isScrollTop && menuClassScrollTop
      )}
    >
      {/* LOGO */}
      <Link
        href={logoConfig?.link ?? '/'}
        className={cn(
          'col-span-1 lg:col-span-7',
          'flex justify-start items-center',
          logoConfig?.classWrapper ?? '',
        )}  
      >
        <Image
          src={logoConfig?.src ?? '/images/home/logo.svg'}
          alt="Ez.Park Logo"
          width={181}
          height={54}
          className={cn(
            'w-[clamp(62px,20.8vw,160px)] lg:w-[clamp(117.3px,11.46vw,440px)] h-auto object-contain',
            logoConfig?.classImage ?? '',
          )}
        />
      </Link>
      {/* NAV BAR */}
      <div id="nav-bar" className={cn(
        'col-span-1 lg:col-span-14',
        'flex justify-center items-center',
      )}>
        {/* MOBILE MENU BUTTON */}
        <MenuButton
          position={customMenuPosition ?? 'bottom-center'}
          isScrollDown={isScrollDown}
          className={cn(
            "lg:hidden inline-flex",
          )}
          custom={{
            icon: {
              className: isLight ? "fill-black/50" : ""
            }
          }}
        />
        {/* DESKTOP NAV BAR */}
        <nav
          className={cn(
            "hidden lg:flex tracking-wide gap-[clamp(6.4px,0.63vw,24px)]",
          )}
        >
          <Link href="/" className={cn(
            pathname === '/' ? linkClassActive : linkClassInactive,
            linkClassBase
          )}>
            <span className="inline-block relative">
              <span className="font-bold invisible text-nowrap" aria-hidden="true">{t('header.nav.about')}</span>
              <span className="absolute left-0 top-0 whitespace-nowrap group-hover:font-bold">{t('header.nav.about')}</span>
            </span>
          </Link>
          <IndustrialZonesDropdown linkClassName={cn(
            linkClassInactive,
            linkClassBase
          )} isLight={isLight} />
        </nav>
      </div>
      {/* LANGUAGE SWITCHER */}
      <div className={cn(
        'col-span-1 lg:col-span-3',
        'flex justify-end items-center',
      )}>
        <LanguageSwitcher linkClassName={isLight ? "text-black border-black/35 [&>svg]:fill-black/50" : "text-white"} isLight showLabel={!isMobile} />
      </div>
    </header>
  );
};

export default Header;