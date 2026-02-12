'use client'

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { MenuButton, MenuPosition } from './common';
import LanguageSwitcher from './common/LanguageSwitcher';
import { HeaderTaglineLogoSvg, HeaderExpandIconSvg } from './svg';
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

const MENU_SECTIONS: { id: string; key: 'overview' | 'masterPlan' | 'advantages' | 'investorProcess' | 'investmentEnv' }[] = [
  { id: 'section-overview', key: 'overview' },
  { id: 'section-master-plan', key: 'masterPlan' },
  { id: 'section-advantages', key: 'advantages' },
  { id: 'section-investor-process', key: 'investorProcess' },
  { id: 'section-investment-env', key: 'investmentEnv' },
];

/* Component */
const Header = ({
  mode = MODE_DEFAULT,
  custom = {},
}: HeaderProps) => {
  const { logoConfig, headerCls, headerScrollCls, customMenuPosition } = custom;
  // Validate mode
  const isLight = mode === MODE_LIGHT;
  
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

  const tMenu = useTranslations('header.menu');

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const menuClassScrollTop = cn(
    "lg:pt-[clamp(6.4px,0.63vw,24px)] lg:pb-[clamp(6.9px,0.68vw,26px)] pb-[clamp(9px,2.8vw,22px)] backdrop-blur-sm border-b border-white/45 shadow-[0_0_10px_2px_rgba(255, 255, 255, 0.5)]",
    isLight ? "bg-white/35" : "bg-black/35",
    headerScrollCls,
  )

  return (
    <header
      data-scroll-down={isScrollDown}
      className={cn(
        'flex',
        'fixed top-0 z-100',
        'pb-0 grid-items-center w-full',
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
      {/* LOGO + TAGLINE */}
      <div
        className={cn(
          'col-span-1 lg:col-span-7',
          'flex justify-start items-center',
          'lg:ml-0',
        )}
      >
        <Link
          href={logoConfig?.link ?? '/'}
          className={cn('flex items-center', logoConfig?.classWrapper ?? '')}
        >
          <Image
            src={logoConfig?.src ?? '/images/home/logo.svg'}
            alt="Ez.Park Logo"
            width={181}
            height={54}
            className={cn(
              'w-[clamp(95px,9.3vw,356px)] h-auto object-contain',
              logoConfig?.classImage ?? '',
            )}
          />
        </Link>
        <span
          className={cn(
            'hidden lg:inline-flex items-center shrink-0',
            isLight ? 'text-black' : 'text-white',
            'ml-[clamp(57.6px,5.625vw,216px)]',
          )}
        >
          <HeaderTaglineLogoSvg className="w-[clamp(67.2px,6.5625vw,252px)]" />
        </span>
        <span
          className={cn(
            'hidden lg:inline-flex items-center shrink-0',
            isLight ? 'text-black' : 'text-white',
            'ml-[clamp(80px,7.8125vw,300px)] mr-[clamp(80px,7.8125vw,300px)]',
          )}
        >
          <HeaderExpandIconSvg className="w-[30px] h-[30px]" />
        </span>
      </div>
      {/* NAV BAR */}
      <div id="nav-bar" className={cn(
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
        {/* DESKTOP NAV BAR: white bg 29%, padding 17/19/36px, rounded 8px; gap 40px; text white; active: black text, bg white 49%, padding 11/14/34px */}
        <nav
          className={cn(
            'hidden lg:flex items-center justify-center gap-[40px]',
            'bg-white/[0.29] backdrop-blur-md rounded-[8px]',
            'py-[4px] pl-[6px] pr-[6px]',
            'tracking-wide',
          )}
        >
          {MENU_SECTIONS.map(({ id, key }) => {
            const isActive = id === 'section-overview'
            return (
              <button
                key={id}
                type="button"
                onClick={scrollToSection(`#${id}`)}
                className={cn(
                  'text-[clamp(8.53px,0.83vw,32px)] font-medium whitespace-nowrap transition-colors',
                  isActive
                    ? 'text-black bg-white/[0.49] pt-[11px] pb-[14px] px-[34px] rounded-[8px]'
                    : 'text-white hover:text-white/90',
                )}
              >
                {tMenu(key)}
              </button>
            )
          })}
        </nav>
      </div>
      {/* LANGUAGE SWITCHER */}
      {/* <div className={cn(
        'col-span-1 lg:col-span-3',
        'flex justify-end items-center',
      )}>
        <LanguageSwitcher linkClassName={isLight ? "text-black border-black/35 [&>svg]:fill-black/50" : "text-white"} isLight showLabel={!isMobile} />
      </div> */}
    </header>
  );
};

export default Header;