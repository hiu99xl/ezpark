'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import ThinkEasyDoBetter from '@/components/ThinkEasyDoBetter'
import { ArrowRightSvg } from '@/components/svg'
import { cn } from '@/lib/utils'

type HeroSectionProps = {
  pageData?: unknown
}

export default function HeroSection({ pageData }: HeroSectionProps) {
  const t = useTranslations('hero')

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        'min-h-[100dvh] min-h-[100vh]',
        'flex flex-col',
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/bg_bn.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 z-[1]"
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-start pt-[clamp(100px,18vw,280px)] pb-[clamp(80px,12vw,180px)] px-[clamp(20px,4vw,60px)] lg:px-[clamp(94px,9.2vw,354px)]">
        <div className="flex flex-col gap-8 w-full max-w-[1600px]">
          <div className="flex flex-col w-full items-end">
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              {/* khu công nghiệp trên, EZ.PARK + border dưới – dịch lên bằng transform */}
              <div className="flex flex-col leading-none -translate-y-8 translate-x-16">
                <p className="text-[clamp(25.6px,2.5vw,96px)] text-white/90 font-light tracking-wide leading-none">
                  {t('subtitle')}
                </p>
                <div className="w-fit -mt-1">
                  <h1 className="text-white font-medium text-[clamp(42.67px,4.17vw,160px)] tracking-tight uppercase leading-tight">
                    {t('titleBrand')}
                  </h1>
                  <div className="relative w-full h-4 mt-1">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] right-0 bg-white" aria-hidden />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white z-10" aria-hidden />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-white font-semibold text-[clamp(80px,7.8125vw,300px)] tracking-tight">
                  {t('titleProject')}
                </h2>
                <span className="w-3 h-3 bg-primary shrink-0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="inline-flex items-stretch gap-[6px]">
              <Link
                href="#section-overview"
                className={cn(
                  'inline-flex items-center justify-center bg-white text-gray-700 font-semibold rounded-[8px]',
                  'w-[clamp(102.4px,10vw,384px)] py-3 hover:bg-white/95 transition-colors',
                  'text-[clamp(14px,1vw,18px)]',
                )}
              >
                {t('explore')}
              </Link>
              <Link
                href="#section-overview"
                className="w-[clamp(34.13px,3.33vw,128px)] flex items-center justify-center bg-white hover:bg-white/95 transition-colors text-gray-900 shrink-0 rounded-[8px]"
                aria-label={t('explore')}
              >
                <ArrowRightSvg className="w-5 h-5 text-gray-900" />
              </Link>
            </div>
            {/* Social: below CTA, slightly to the left */}
            <div className="flex items-center gap-4 lg:-ml-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-bold hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-bold hover:bg-gray-600 transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="mailto:contact@ezpark.vn"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Line: from ThinkEasyDoBetter (left) to end of carousel label (right) + 2 dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        {/* Line segment from left to start of carousel label */}
        <div
          className="absolute bottom-0 left-[clamp(20px,4vw,60px)] lg:left-[clamp(94px,9.2vw,354px)] right-1/2 h-[2.5px] bg-white"
          aria-hidden="true"
        />
        <div className="absolute bottom-[32.5px] left-[clamp(20px,4vw,60px)] lg:left-[clamp(94px,9.2vw,354px)] text-white">
          <ThinkEasyDoBetter />
        </div>
      </div>

      {/* Bottom center: carousel label + line (line matches label width exactly) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] sm:text-xs text-white/60 tracking-widest uppercase">
          {t('carouselLabel')}
        </span>
        <div className="w-full h-[2.5px] bg-white relative" aria-hidden="true">
          {/* Two 16px dots: outside line on the right, 16px from line, 8px apart */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-4 h-4 rounded-full bg-white shrink-0 pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-4 h-4 rounded-full bg-white shrink-0 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom right: card – white bg, dark grey text, CTA = white btn + dark grey arrow btn */}
      <div className="absolute bottom-8 right-0 z-10 flex gap-4">
        <Link
          href="#section-investment-env"
          className={cn(
            'flex items-stretch w-[clamp(241.07px,23.54vw,904px)] rounded-xl overflow-hidden',
            'bg-white/30 shadow-lg',
            'hover:shadow-xl transition-shadow',
          )}
        >
          <div className="w-[clamp(89.6px,8.75vw,336px)] h-[clamp(89.6px,8.75vw,336px)] shrink-0 relative rounded-[30px] overflow-hidden py-[5px] pl-[8px] box-border flex flex-col">
            <div className="relative flex-1 min-h-0">
              <Image
                src="/images/home/card_vision.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 89.6px, 336px"
              />
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col min-w-0">
            <div className="flex-1 flex items-center min-h-0">
              <p className="text-white text-2xl font-medium text-left w-full">
                <span className="block">{t('cardLine1')}</span>
                <span className="block">{t('cardLine2')}</span>
              </p>
            </div>
            <div className="inline-flex items-stretch gap-[6px] mt-2 w-fit self-start">
              <span className="inline-flex items-center justify-center w-[clamp(65.07px,6.35vw,244px)] py-1.5 rounded-[8px] bg-gray-100 text-gray-700 text-sm font-semibold">
                {t('explore')}
              </span>
              <span className="w-[clamp(22.4px,2.19vw,84px)] flex items-center justify-center rounded-[8px] bg-white text-gray-900 shrink-0">
                <ArrowRightSvg className="w-4 h-4 text-gray-900" />
              </span>
            </div>
          </div>
        </Link>
        <div className="w-[clamp(80px,10vw,140px)] rounded-l-xl shrink-0 bg-white/80 shadow border border-white/50" />
      </div>
    </section>
  )
}
