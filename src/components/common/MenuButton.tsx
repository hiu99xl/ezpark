'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MenuIconSvg } from '../svg';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

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
            // Base: white bg 29% opacity, padding 17px top, 19px bottom, 36px left/right, radius 8px
            'absolute rounded-[8px] shadow-2xl overflow-hidden z-100 menu-container-animate bg-white/[0.29] backdrop-blur-md',
            'pt-[17px] pb-[19px] px-[36px]',
            'min-w-[clamp(209px,70.4vw,539px)] lg:w-max lg:h-fit',
            getPositionClasses(position)
          )}
        >
          <MenuDropdownContent onClose={() => setIsOpen(false)} onScrollTo={handleScrollTo} />
        </div>
      )}
    </div>
  );
}

/** Menu items: section id and i18n key */
const MENU_ITEMS = [
  { selector: '#section-overview', key: 'overview' as const },
  { selector: '#section-master-plan', key: 'masterPlan' as const },
  { selector: '#section-advantages', key: 'advantages' as const },
  { selector: '#section-investor-process', key: 'investorProcess' as const },
  { selector: '#section-investment-env', key: 'investmentEnv' as const },
] as const;

/**
 * Shared menu dropdown content: 5 section links (Overview, Master Plan, Advantages, Investor Process, Investment Env).
 */
export function MenuDropdownContent({
  onClose,
  onScrollTo,
}: {
  onClose: () => void;
  onScrollTo?: (selector: string) => (e: React.MouseEvent) => void;
}) {
  const t = useTranslations('header.menu');

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
    <nav className="flex flex-col gap-[clamp(5px,1.6vw,12px)]">
      {MENU_ITEMS.map(({ selector, key }) => (
        <button
          key={key}
          type="button"
          onClick={scrollHandler(selector)}
          className="text-left text-[clamp(9px,2.8vw,22px)] lg:text-[0.83vw] text-gray-800 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium whitespace-nowrap"
        >
          {t(key)}
        </button>
      ))}
    </nav>
  );
}