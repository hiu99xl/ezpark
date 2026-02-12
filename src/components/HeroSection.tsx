'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslations } from 'next-intl';
import { MOBILE_BREAKPOINT } from '@/constants/responsive';
import { Arrow45LeftSvg } from '@/components/svg';
import ThinkEasyDoBetter from '@/components/ThinkEasyDoBetter';
import type { HomePageData } from '@/types/api';
import { MenuButton } from './common';
import { cn } from '@/lib/utils';

type HeroSectionProps = {
  pageData?: HomePageData | null;
};

export default function HeroSection({ pageData }: HeroSectionProps) {
  const t = useTranslations();
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  // Temporarily use static images only (ignore API image)
  const heroImageUrl: string | null = null;
  const heroImageAlt = t('hero.slogan.easy');

  // Đảm bảo component đã mount ở client để tránh hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className={`
        relative w-full overflow-hidden
        aspect-[500/933] px-[clamp(15px,4vw,30.72px)] pt-[clamp(123.9px,calc(33.05vw-0.01px),253.8px)]
        lg:aspect-[1920/1061] lg:pt-[clamp(113px,11vw,423px)] lg:px-0 lg:pl-[clamp(94.45px,9.224vw,354.2px)] lg:pr-[clamp(61px,5.94vw,228px)]
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImageUrl ? (
          <>
            <Image
              src={heroImageUrl}
              alt={heroImageAlt}
              fill
              className="object-cover lg:block hidden"
              sizes="100vw"
              priority
              unoptimized
            />
            <Image
              src={heroImageUrl}
              alt={heroImageAlt}
              fill
              className="object-contain lg:hidden block cover-center cover-top"
              sizes="100vw"
              priority
              unoptimized
            />
          </>
        ) : (
          <Image
            src="/images/home/bg_bn.png"
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-10"></div>

      {/* Desktop Frame Bottom Left */}
      <div className="absolute bottom-0 left-0 w-1/5 h-[clamp(16px,1.56vw,60px)] pointer-events-none z-20 hidden lg:block">
        <svg
          viewBox="0 0 100 34"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon points="0,50 100,50 80,0 0,0" fill="white" />
        </svg>
      </div>
      {/* Mobile Frame Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[38%] h-[clamp(20px,5.089vw+0.92px,40px)] pointer-events-none z-10 lg:hidden">
        <svg
          viewBox="0 0 100 34"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon points="0,50 100,50 80,0 0,0" fill="white" />
        </svg>
      </div>

      {/* Section Content: Heading + Description */}
      <div
        className="
          relative grid z-40
          grid-cols-1 gap-[clamp(48.04px,calc(12.81vw-0.01px),98.39px)] mb-[clamp(26px,3.4vw,13px)]
          lg:grid-cols-2 lg:gap-0 lg:mb-[clamp(36.5px,3.56vw,137px)]
        "
      >
        {/* Action Menu: HỆ SINH THÁI */}
        <div className="text-white group transition-all duration-300 w-fit hover:cursor-pointer flex flex-col lg:pl-[clamp(30px,2.96vw,114px)]">
          <div
            className="
              flex flex-col lg:flex-row
              items-start
              lg:mb-[clamp(10px,1.02vw,39px)] 
            "
          >
            {/* <MenuButton className="hidden lg:absolute lg:left-[clamp(2px,0.21vw,8px)] lg:block lg:mt-[clamp(13px,1.25vw,48px)]"/> */}
            <h2
              className="
                relative font-[800] uppercase tracking-wide transition-all duration-300 
                text-[clamp(19.5px,5.2vw,39.936px)] leading-[1.6]
                lg:text-[clamp(34px,3.3vw,127px)] lg:leading-[1.26]
              "
            >
              <span className="group-hover:invisible invisible" aria-hidden="true">
                {t('hero.ecosystem')}
              </span>
              <span className="absolute left-0 top-0 whitespace-nowrap group-hover:font-[900] group-hover:visible visible">
                {t('hero.ecosystem')}
              </span>
            </h2>
          </div>
          <div className="flex items-start flex-col pl-0">
            <p
              className="
                font-light transition-all duration-300 
                text-[clamp(10.5px,calc(2.82vw-0.1px),21.6px)] leading-[1.48]
                lg:text-[clamp(19px,1.87vw,72px)] lg:leading-[1.1]
              "
            >
              {t('hero.subtitle1')}
            </p>
            <p
              className="
                font-light transition-all duration-300
                text-[clamp(10.5px,calc(2.82vw-0.1px),21.6px)] leading-[1.48]
                lg:text-[clamp(19px,1.87vw,72px)] lg:leading-[1.1]
              "
            >
              {t('hero.subtitle2')}
            </p>
          </div>
        </div>

        {/* Slogan: THINK EASY DO BETTER - same as Vision */}
        <div className="text-white text-right flex flex-col items-end relative z-20 m-auto lg:m-0 gap-[clamp(22px,5.9vw,45px)] lg:gap-[clamp(33px,3.25vw,125px)]">
          <ThinkEasyDoBetter />
          <button 
            className="
              relative z-20 inline-flex items-center  bg-white text-black border border-white rounded-full hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group
              gap-[clamp(21px,1.132vw+16.76px,24px)] p-[clamp(4px,1.5094vw-1.66px,8px)] pl-[clamp(15.2px,6.3396vw-8.57px,32px)]
              lg:p-[clamp(4.5px,0.44vw,17px)] lg:pl-[clamp(15px,1.49vw,57px)] lg:gap-[clamp(9.75px,0.95vw,36.5px)]
            "
            suppressHydrationWarning
          >
            <span className="
              tracking-wider leading-none
              text-[clamp(10.5px,2.8vw,17.92px)] mb-[0.1rem]
              lg:text-[clamp(9px,0.86vw,33px)] lg:mb-[0.15rem]
            ">
              {t('hero.explore')}
            </span>
            <div
              className="
              bg-primary group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 ease-out 
                w-[clamp(28.5px,7.6vw,48.64px)] h-[clamp(28.5px,7.6vw,48.64px)] p-[clamp(8px,2.6415vw-1.91px,15px)]
                lg:w-[clamp(25px,2.45vw,94px)] lg:h-[clamp(25px,2.45vw,94px)] lg:p-[clamp(8px,0.73vw,28px)]
              "
            >
              <Arrow45LeftSvg className="w-full h-full" />
            </div>
          </button>
        </div>
      </div>

      {/* Section Content: Energy + Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center pl-0 relative z-10 gap-[clamp(7px,1.8vw,14px)] lg:gap-0">
        {/* Energy */}
        <div
          className="
            animate-card-reveal bg-white/20 backdrop-blur-[0.5px] border border-white/25 flex flex-col justify-self-start hover:cursor-pointer hover:shadow-[0_0_12px_0px_rgba(239,86,40,0.5)] transition duration-300 ease-in-out
            p-[clamp(14px,3.8vw,29px)] pr-[clamp(54px,14.4vw,110.5px)] rounded-3xl
            lg:pl-[clamp(20.8px,2.03vw,78px)] lg:py-[clamp(18px,1.75vw,67px)] lg:pr-[clamp(56.6px,5.53vw,212px)] lg:rounded-4xl
          "
          style={{ transformOrigin: 'center center' }}
        >
          <div
            className="
              flex items-center bg-white rounded-xl justify-center
              h-[clamp(27px,7.2vw,55px)] w-[clamp(27px,7.2vw,55px)] mb-[clamp(18px,4.8vw,37px)]
              lg:w-[clamp(35px,3.44vw,132px)] lg:h-[clamp(35px,3.44vw,132px)] lg:mb-[clamp(22.28px,2.18vw,33.43px)]
              2xl:mb-[clamp(52px,3.39vw,130px)]
            "
          >
            <Image
              src="/images/home/hero_energy.svg"
              className="w-[clamp(9px,2.4vw,18px)] h-[clamp(9px,2.4vw,18px)] lg:w-[clamp(10.7px,1.04vw,40px)] lg:h-[clamp(10.7px,1.04vw,40px)]"
              alt="Icon"
              width={24}
              height={24} 
            />
          </div>
          <p className="text-white/80 text-[clamp(8px,2vw,15px)] lg:text-[clamp(11.1px,1.09vw,16.7px)] 2xl:text-[clamp(12.8px,0.83vw,32px)] leading-relaxed lg:leading-tight text-nowrap">
            {t('hero.energy.description1')}
            <br />
            {t('hero.energy.description2')}
          </p>
          <p className="text-white/80 text-[clamp(8px,2vw,15px)] lg:text-[clamp(11.1px,1.09vw,16.7px)] 2xl:text-[clamp(12.8px,0.83vw,32px)] lg:mt-[clamp(8.5px,0.83vw,32px)] lg:mb-[clamp(7.27px,0.7093vw,27.24px)] lg:block hidden leading-relaxed lg:leading-tight text-nowrap">
            {t('hero.energy.description3')}
            <br />
            {t('hero.energy.description4')}
          </p>
          <div className="flex items-center gap-[clamp(6px,1.6vw,12px)] lg:gap-[clamp(8px,0.78vw,30px)]">
            <p className="text-white text-[clamp(15px,4vw,31px)] lg:text-[clamp(18.9px,1.85vw,71px)] font-bold text-nowrap">{t('hero.energy.title')}</p>
            <Image
              src="/images/home/hero_electric_mb.svg"
              className="
                w-[clamp(15px,4vw,31px)] h-[clamp(15px,4vw,31px)] translate-y-[clamp(12px,3.2vw,25px)] lg:hidden
              "
              alt="Icon"
              width={20}
              height={20}
            />
            <Image
              src="/images/home/hero_electric.svg"
              className="
                w-[clamp(15.5px,1.51vw,58px)] h-[clamp(15.5px,1.51vw,58px)] translate-y-[clamp(1px,0.1vw,4px)] lg:block hidden
              "
              alt="Icon"
              width={20}
              height={20}
            />
          </div>
        </div>
        {/* Mission */}
        <div
          className="
            animate-card-reveal bg-white/20 backdrop-blur-[0.5px] border border-white/25 rounded-3xl lg:rounded-4xl justify-self-end text-left hover:cursor-pointer hover:shadow-[0_0_12px_0px_rgba(239,86,40,0.5)] transition duration-300 ease-in-out
            p-[clamp(14px,3.8vw,29px)] lg:py-[clamp(16.1px,1.57vw,60.5px)] lg:px-[clamp(16.75px,1.64vw,63px)]
          "
          style={{ transformOrigin: 'center center' }}
        >
          <p className="text-white text-[clamp(16px,4.3vw,33px)] lg:text-[clamp(17.6px,1.72vw,66px)] lg:mb-[clamp(4.4px,0.43vw,16.7px)] font-bold">{t('hero.mission.title')}</p>
          <p className="text-white/80 text-[clamp(8px,2vw,15px)] lg:text-[clamp(11.1px,1.09vw,16.7px)] 2xl:text-[clamp(12.8px,0.83vw,32px)] leading-relaxed lg:leading-tight">
            {t('hero.mission.description')}
            <br />
            {t('hero.mission.description2')}
          </p>
        </div>
      </div>
    </section>
  )
}
