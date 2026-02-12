'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import type { NewsArticleData } from '@/types/api'

type NewsSectionProps = {
  featuredNews?: NewsArticleData | null;
};

export default function NewsSection({ featuredNews }: NewsSectionProps) {
  const t = useTranslations();
  const [calendarSvg, setCalendarSvg] = useState<string>('')
  const hasApiData = !!featuredNews;
  const apiTitle = hasApiData ? featuredNews!.title?.trim() : null;
  const apiTags = hasApiData && featuredNews!.tags?.length ? featuredNews!.tags : null;
  const apiExcerpt = hasApiData ? featuredNews!.excerpt?.trim() : null;
  const apiDate = hasApiData ? featuredNews!.dateDisplay?.trim() : null;
  const apiImageUrl: string | null = null;

  useEffect(() => {
    const today = new Date()
    const day = today.getDate()
    const monthNames = [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ]
    const month = monthNames[today.getMonth()]

    fetch('/images/news/calendar.svg')
      .then((response) => response.text())
      .then((svgText) => {
        const parser = new DOMParser()
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml')
        const monthText = svgDoc.getElementById('month-text')
        const dayText = svgDoc.getElementById('day-text')
        if (monthText) monthText.textContent = month
        if (dayText) dayText.textContent = String(day)
        const svgElement = svgDoc.querySelector('svg')
        if (svgElement) {
          svgElement.classList.add('w-full', 'h-full')
        }

        const serializer = new XMLSerializer()
        const updatedSvg = serializer.serializeToString(svgDoc)
        setCalendarSvg(updatedSvg)
      })
      .catch((error) => {
        console.error('Error loading calendar SVG:', error)
      })
  }, [])

  return (
    <section
      className="
        bg-white flex flex-col justify-center items-center
        px-[clamp(15.3px,4.09vw,31.4px)] gap-[clamp(3.8px,1vw,7.7px)] pb-[clamp(36.91px,9.84vw,75.54px)]
        lg:pt-[clamp(72px,7.03vw,270px)] lg:px-[clamp(61px,5.93vw,228px)] lg:pb-[clamp(165px,16.15vw,621px)]
      "
    >
      {/* TITLE LINK TO NEWS PAGE */}
      <Link href="/news" className="relative w-full lg:flex lg:flex-col lg:gap-[clamp(25px,2.42vw,93px)] lg:-mb-[clamp(110px,10.77vw,413px)]">
        <div className="flex items-center flex-col lg:flex-row w-full group gap-[clamp(11.4px,3.03vw,23.3px)]">
          <h2
            className="
              font-extrabold text-primary uppercase group-hover:underline leading-[1.05]
              text-[clamp(28px,7.46vw,57.3px)] lg:text-[clamp(25px,2.42vw,93px)]
            "
          >{t('news.title')}</h2>
          <Image
            src="/images/news/arrow_bottom.svg"
            className="h-[clamp(18px,4.8vw,36.9px)] lg:h-[clamp(19px,1.82vw,70px)] lg:mt-[clamp(4px,0.42vw,16px)] w-auto"
            alt="Icon"
            width={24}
            height={24}
          />
        </div>
        <div className="absolute lg:static bottom-0 left-0">
          <Image
            src="/images/news/news.svg"
            className="h-[clamp(41.3px,11vw,84.5px)] w-auto"
            alt="Calendar"
            width={32}
            height={32}
          />
        </div>
      </Link>

      {/* NEW CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-11 flex-col-reverse lg:flex-row gap-[clamp(11.67px,3.11vw,23.89px)] lg:gap-[clamp(44px,4.25vw,163px)]">
        {/* TEXT */}
        <div className="col-span-5 flex flex-col justify-between px-[clamp(5.91px,1.58vw,12.09px)] lg:mt-[clamp(110px,10.77vw,413px)] lg:px-0">
          <div className="flex flex-col items-start">
            <h3 className="font-extrabold text-[#2b2b2b] leading-snug text-[clamp(15px,4vw,30.72px)] lg:text-[clamp(12px,1.20vw,46px)] mb-[clamp(9.81px,2.62vw,20.08px)] lg:mb-[clamp(11px,1.05vw,40px)]">
              {apiTitle || t('news.article.title')}
            </h3>
            <p className="text-gray-500 text-[clamp(12px,3.2vw,24.58px)] lg:text-[clamp(10px,0.94vw,36px)] italic font-light leading-none mb-[clamp(10.59px,2.82vw,21.68px)] lg:mb-[clamp(36px,3.5vw,134px)]">
              {apiTags?.length ? apiTags.map((tag) => `#${tag}`).join(' ') : t('news.article.hashtags')}
            </p>
            <p className="text-gray-600 text-[clamp(10.5px,2.8vw,21.5px)] lg:text-[clamp(9px,0.84vw,30px)] leading-relaxed mb-[clamp(6.09px,1.62vw,12.47px)] lg:mb-[clamp(66px,6.48vw,249px)]">
              {apiExcerpt || t('news.article.description')}
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-[clamp(8.27px,2.2vw,16.93px)] lg:gap-[clamp(16px,1.55vw,59px)]">
              <div className="flex items-end gap-[clamp(2.25px,0.6vw,4.61px)] lg:gap-[clamp(2px,0.21vw,8px)]">
                {calendarSvg ? (
                  <div
                    className="inline-block w-[clamp(26.25px,7vw,53.76px)] lg:w-[clamp(23px,2.24vw,86px)] h-auto"
                    id="calendar-icon"
                    dangerouslySetInnerHTML={{ __html: calendarSvg }}
                  />
                ) : (
                  <Image
                    src="/images/news/calendar.svg"
                    className="w-[clamp(26.25px,7vw,53.76px)] lg:w-[clamp(23px,2.24vw,86px)] h-auto"
                    alt="Calendar"
                    width={32}
                    height={32}
                    id="calendar-icon"
                  />
                )}
                <span className="text-[clamp(9.06px,2.42vw,18.55px)] lg:text-[clamp(9px,0.84vw,30px)] text-gray-800">
                  {apiDate || 'T1/2026'}
                </span>
              </div>
              <div className="flex gap-[clamp(7.51px,2vw,15.39px)] lg:gap-[clamp(7px,0.67vw,26px)]">
                <button
                  className="
                    rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition
                    w-[clamp(28.5px,7.6vw,58.37px)] h-[clamp(28.5px,7.6vw,58.37px)] lg:w-[clamp(26px,2.5vw,96px)] lg:h-[clamp(26px,2.5vw,96px)]
                  "
                  suppressHydrationWarning
                >
                  <svg
                    className="rotate-180 h-auto w-[clamp(12.75px,3.4vw,26.11px)] lg:w-[clamp(12px,1.15vw,44px)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
                <button
                  className="
                    rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition
                    w-[clamp(28.5px,7.6vw,58.37px)] h-[clamp(28.5px,7.6vw,58.37px)] lg:w-[clamp(26px,2.5vw,96px)] lg:h-[clamp(26px,2.5vw,96px)]
                  "
                  suppressHydrationWarning
                >
                  <svg
                    className="h-auto w-[clamp(12.75px,3.4vw,26.11px)] lg:w-[clamp(12px,1.15vw,44px)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <Link
              href="/news"
              className="bg-primary text-white rounded-bl-[4rem] rounded-tr-[4rem] hover:bg-primary/90 transition flex items-center
                py-[clamp(5.17px,1.38vw,10.58px)] pl-[clamp(22.21px,5.92vw,45.48px)] pr-[clamp(16.12px,4.3vw,33.01px)] text-[clamp(10.5px,2.8vw,21.5px)] gap-[clamp(12.08px,3.22vw,24.73px)]
                lg:py-[clamp(5px,0.47vw,18px)] lg:pl-[clamp(21px,2.03vw,79px)] lg:pr-[clamp(15px,1.48vw,57px)] lg:text-[clamp(8px,0.76vw,29px)] lg:gap-[clamp(11px,1.10vw,42px)]
              "
            >
              {t('news.article.readMore')}
              <div className=" flex items-center justify-center rounded-full bg-white w-[clamp(18px,4.8vw,36.86px)] h-[clamp(18px,4.8vw,36.86px)] lg:w-[clamp(13px,1.30vw,50px)] lg:h-[clamp(13px,1.30vw,50px)]">
                <span className="text-[clamp(15px,4vw,30.72px)] lg:text-[clamp(13px,1.25vw,48px)] text-primary leading-none mb-[clamp(4.5px,1.2vw,9.22px)] lg:mb-[clamp(5px,0.52vw,20px)]">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="
            col-span-6 relative overflow-visible mx-auto pl-0
            h-[clamp(273.8px,73vw,560.6px)] p-[clamp(7.7px,2.05vw,15.8px)] pt-[clamp(9.9px,2.64vw,20.2px)]
            lg:h-full lg:w-full  lg:p-[clamp(11px,1.05vw,40px)] lg:pt-[clamp(14px,1.34vw,52px)]
          "
        >
          <div className="relative overflow-hidden w-full h-full rounded-[5.5%]">
            {apiImageUrl ? (
              <Image
                src={apiImageUrl}
                className="w-full h-full object-cover block"
                alt={featuredNews!.imageAlt?.trim() || featuredNews!.title || 'News'}
                width={800}
                height={600}
                unoptimized
              />
            ) : (
              <Image
                src="/images/news/news0_title_img.jpeg"
                className="w-full h-full object-cover block"
                alt="News Image"
                width={800}
                height={600}
              />
            )}
            <div
              className="absolute z-10 pointer-events-none opacity-90 w-[clamp(103.5px,27.6vw,211.97px)] lg:w-[clamp(112px,10.89vw,419px)]"
              style={{ left: '3%', bottom: '4%' }}
            >
              <Image
                src="/images/news/logo_news.svg"
                alt=""
                width={128}
                height={44}
                className="w-full h-auto object-contain"
                aria-hidden
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 aspect-[429/365] lg:aspect-830/706 w-[clamp(321.8px,85.8vw,659.7px)] lg:w-auto h-auto lg:h-full">
            <Image
              src="/images/news/news_frame_image.svg"
              alt="News Frame Image"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
