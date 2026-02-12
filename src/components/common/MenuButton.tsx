'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MenuIconSvg } from '../svg';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

/**
 * Menu position types - mô tả vị trí của menu dropdown so với button icon
 * Format: [vị trí menu]-[căn chỉnh]
 * 
 * Vị trí thứ nhất (top/right/bottom/left): menu nằm ở đâu so với button
 * Vị trí thứ hai (left/center/right hoặc top/center/bottom): menu căn chỉnh như thế nào
 * 
 * Ví dụ: 'top-left' = menu ở trên button và căn trái
 *        'bottom-center' = menu ở dưới button và căn giữa
 *        'right-top' = menu ở bên phải button và căn trên
 */
export type MenuPosition =
  | 'top-left'       // Menu ở trên button, căn trái
  | 'top-center'     // Menu ở trên button, căn giữa
  | 'top-right'      // Menu ở trên button, căn phải
  | 'right-top'      // Menu ở bên phải button, căn trên
  | 'right-center'   // Menu ở bên phải button, căn giữa
  | 'right-bottom'   // Menu ở bên phải button, căn dưới
  | 'bottom-left'    // Menu ở dưới button, căn trái
  | 'bottom-center'  // Menu ở dưới button, căn giữa
  | 'bottom-right'   // Menu ở dưới button, căn phải
  | 'left-top'       // Menu ở bên trái button, căn trên
  | 'left-center'    // Menu ở bên trái button, căn giữa
  | 'left-bottom';   // Menu ở bên trái button, căn dưới


type MenuButtonProps = {
  custom?: {
    icon?: React.SVGProps<SVGSVGElement>;
    button?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  };
  className?: string;
  position?: MenuPosition;
  isScrollDown?: boolean;
}

/**
 * Button Menu Component
 * Hiển thị icon menu và handle click để mở/đóng menu dropdown
 */
const ButtonMenu = ({
  isOpen,
  custom,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean;
  custom?: {
    icon?: React.SVGProps<SVGSVGElement>;
  };
}) => {

  const { className: iconClassName, ...iconProps } = custom?.icon || {};
  const classNames = cn(
    `
      relative w-fit h-fit rounded-full
      flex items-center justify-center
      group transition-all duration-300
      ring-transparent
    `,
    className
  );

  return (
    <button
      {...props}
      className={classNames}
      aria-label="Menu"
      aria-expanded={isOpen}
      suppressHydrationWarning
    >
      <MenuIconSvg className={cn(
        iconClassName,
        `transition-transform duration-300 ${isOpen ? 'rotate-45 fill-primary' : ''}`,
      )}  {...iconProps} />
    </button>
  );
};

/*
 *  =======================================================
 *  ================== MAIN: MENU BUTTON ==================
 *  =======================================================
 */
export default function MenuButton({
  custom,
  position = 'bottom-left',
  className,
  isScrollDown,
}: MenuButtonProps) {
  const t = useTranslations('header.menu');
  const locale = useLocale();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Function: Lấy class CSS cho vị trí menu dropdown dựa trên vị trí so với button
  const getPositionClasses = (position: MenuPosition) => {
    const positions = {
      // Menu ở trên button
      'top-left': 'left-0 bottom-full mb-[clamp(10px,3.2vw,25px)] origin-bottom-left lg:mb-[1.25vw]',
      'top-center': 'left-1/2 -translate-x-1/2 bottom-full mb-[clamp(10px,3.2vw,25px)] origin-bottom lg:mb-[1.25vw]',
      'top-right': 'right-0 bottom-full mb-[clamp(10px,3.2vw,25px)] origin-bottom-right lg:mb-[1.25vw]',

      // Menu ở bên phải button
      'right-top': 'left-full top-0 ml-[clamp(10px,3.2vw,25px)] origin-top-left lg:ml-[1.25vw]',
      'right-center': 'left-full top-1/2 -translate-y-1/2 ml-[clamp(10px,3.2vw,25px)] origin-left lg:ml-[1.25vw]',
      'right-bottom': 'left-full bottom-0 ml-[clamp(10px,3.2vw,25px)] origin-bottom-left lg:ml-[1.25vw]',

      // Menu ở dưới button
      'bottom-left': 'left-0 top-full mt-[clamp(10px,3.2vw,25px)] origin-top-left lg:mt-[1.25vw]',
      'bottom-center': 'left-1/2 -translate-x-1/2 top-full mt-[clamp(10px,3.2vw,25px)] origin-top lg:mt-[1.25vw]',
      'bottom-right': 'right-0 top-full mt-[clamp(10px,3.2vw,25px)] origin-top-right lg:mt-[1.25vw]',

      // Menu ở bên trái button
      'left-top': 'right-full top-0 mr-[clamp(10px,3.2vw,25px)] origin-top-right lg:mr-[1.25vw]',
      'left-center': 'right-full top-1/2 -translate-y-1/2 mr-[clamp(10px,3.2vw,25px)] origin-right lg:mr-[1.25vw]',
      'left-bottom': 'right-full bottom-0 mr-[clamp(10px,3.2vw,25px)] origin-bottom-right lg:mr-[1.25vw]',
    };

    return positions[position];
  }

  // Xử lý scroll đến section hoặc form
  const handleScrollTo = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isScrollDown) {
      setIsOpen(false);
    }
  }, [isScrollDown]);

  return (
    <div className={cn("relative w-fit h-full flex items-center justify-center z-9999", className)} ref={menuRef}>
      {/* Button Icon: Menu Icon */}
      <ButtonMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} custom={custom} {...custom?.button} />
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            // Base styles
            `absolute rounded-[clamp(10px,3.2vw,25px)] lg:rounded-3xl shadow-2xl overflow-hidden z-100
            menu-container-animate backdrop-blur-md bg-white/35 border border-white/30
            px-[clamp(19px,6.4vw,49px)] lg:px-[2vw] py-6 lg:py-[1.5vw] pt-8 lg:pt-[1.75vw]`,
            
            // Size: Mobile fixed width, Desktop auto width
            `min-w-[clamp(209px,70.4vw,539px)] lg:w-max lg:h-fit`,
            
            // Position
            getPositionClasses(position)
          )}
          style={{
            background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.3) 0%, rgba(254, 215, 170, 0.3) 25%, rgba(191, 219, 254, 0.3) 50%, rgba(224, 231, 255, 0.3) 75%, rgba(243, 232, 255, 0.3) 100%)',
          }}
        >
          <MenuDropdownContent onClose={() => setIsOpen(false)} onScrollTo={handleScrollTo} />
        </div>
      )}
    </div>
  );
}

/**
 * Shared menu dropdown content (links and sections).
 * Used by MenuButton and by Legacy hero icon on mobile.
 */
export function MenuDropdownContent({
  onClose,
  onScrollTo,
}: {
  onClose: () => void;
  onScrollTo?: (selector: string) => (e: React.MouseEvent) => void;
}) {
  const t = useTranslations('header.menu');
  const locale = useLocale();

  const handleScrollTo = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollHandler = onScrollTo ?? handleScrollTo;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(14px,4.8vw,37px)] lg:gap-[1.67vw]">
      {/* Column 1: Về EZ.PARK */}
      <div className="menu-column-1 lg:col-span-1">
        <h3
          className="
            font-bold text-gray-800 mb-[clamp(10px,3.2vw,25px)] lg:mb-[1.25vw] uppercase tracking-wide whitespace-nowrap
            text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw]
            cursor-default
          "
        >
          {t('aboutEzPark')}
        </h3>
        <div className="space-y-[clamp(5px,1.6vw,12px)] lg:space-y-3">
          <Link
            href="/"
            onClick={onClose}
            className="block text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw] text-gray-700 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium whitespace-nowrap"
          >
            {t('aboutIntro')}
          </Link>
        </div>
      </div>

      {/* Column 2: Dự Án Khu Công Nghiệp */}
      <div className="menu-column-2 lg:col-span-1">
        <h3
          className="
            font-bold text-gray-800 mb-[clamp(10px,3.2vw,25px)] lg:mb-[1.25vw] uppercase tracking-wide whitespace-nowrap
            text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw]
            cursor-default
          "
        >
          {t('industrialProjects')}
        </h3>
        <div className="space-y-[clamp(5px,1.6vw,12px)] lg:space-y-3">
          <Link
            href={`https://bacninh-1.ezpark.vn/${locale}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw] text-gray-700 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium whitespace-nowrap"
          >
            {t('projectBacNinh')}
          </Link>
          <Link
            href={`https://hatinh-1.ezpark.vn/${locale}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw] text-gray-700 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium whitespace-nowrap"
          >
            {t('projectHaTinh')}
          </Link>
          <Link
            href={`https://daklak-1.ezpark.vn/${locale}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw] text-gray-700 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium whitespace-nowrap"
          >
            {t('projectDakLak')}
          </Link>
        </div>
      </div>

      {/* Column 3: Liên hệ */}
      <div className="menu-column-3 lg:col-span-1 space-y-[clamp(10px,3.2vw,25px)] lg:space-y-8">
        <h3 className="text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw] font-bold text-gray-800 uppercase tracking-wide whitespace-nowrap">
          <button
            onClick={scrollHandler('#section-footer')}
            className="hover:text-primary hover:translate-x-1 transition-all duration-300 text-left inline-block"
          >
            {t('contact')}
          </button>
        </h3>
      </div>
    </div>
  );
}