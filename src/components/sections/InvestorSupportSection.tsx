'use client'

import { IconCheck, IconDocument, IconFactory, IconProduction } from '@/components/icons/InvestorSupportIcons'
import { SECTION_PADDING_X, SECTION_CONTENT_WRAPPER_CLASS } from '@/constants/layout'

const MIDDLE_BLOCKS = [
  {
    title: 'Thủ tục đầu tư.',
    description: 'Hỗ trợ trọn gói hồ sơ IRC & ERC.',
    Icon: IconCheck,
  },
  {
    title: 'Giấy phép chuyên ngành.',
    description: 'Thực hiện xây dựng, PCCC, giấy phép lao động và thủ tục liên quan.',
    Icon: IconDocument,
  },
] as const

const RIGHT_BLOCKS = [
  {
    title: 'Đi vào sản xuất.',
    description: 'Hoàn tất nghiệm thu, kết nối hạ tầng, sẵn sàng lắp máy và sản xuất.',
    Icon: IconProduction,
  },
  {
    title: 'Hoàn thiện nhà máy.',
    description: 'Cho thuê nhà xưởng sẵn có hoặc xây theo nhu cầu, hỗ trợ nhà thầu thi công.',
    Icon: IconFactory,
  },
] as const

export default function InvestorSupportSection() {
  return (
    <section
      id="section-investor-support"
      className={`py-20 ${SECTION_PADDING_X}`}
      aria-labelledby="investor-support-heading"
    >
      <div className={SECTION_CONTENT_WRAPPER_CLASS}>
        {/* lg: 50 cols — Box 1 = 50%, Box 2 = 28%, Box 3 = 22%; min-w-0 prevents overflow */}
        <div className="w-full min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(50,minmax(0,1fr))]">
        {/* Box 1: 50% */}
        <div className="flex flex-col text-left pt-12 pb-0 px-6 sm:px-8 md:pt-16 md:pb-0 lg:pt-20 lg:pb-0 border-b border-gray-300 lg:border-b-0 col-span-1 sm:col-span-2 lg:col-span-[25] min-w-0">
            <h2
              id="investor-support-heading"
              className="text-black font-semibold mb-6 lg:mb-8"
              style={{ fontSize: 'clamp(58.67px, 5.73vw, 220px)', lineHeight: 0.95 }}
            >
              Hỗ trợ
              <br />
              <span className="text-black font-light" style={{ fontSize: 'clamp(37.33px, 3.65vw, 140px)' }}>từ </span>
              <span className="text-primary font-medium" style={{ fontSize: 'clamp(45.87px, 4.48vw, 172px)' }}>Chủ đầu tư</span>
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-end mb-4 mt-[110px]">
              <div
                className="overflow-hidden inline-block max-w-full shrink-0"
                style={{ width: 'clamp(184.53px, 18.02vw, 692px)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home/support.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-1 sm:mb-0">
                <svg className="w-[39px] h-auto shrink-0" width="39" height="47" viewBox="0 0 39 47" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M17.1251 24.3166C21.9735 12.8331 24.0357 2.73511 21.7309 1.76198C19.426 0.788853 13.6274 9.30927 8.7789 20.7928C3.93045 32.2762 1.86824 42.3742 4.17308 43.3474C6.47792 44.3205 12.2766 35.8001 17.1251 24.3166Z" fill="#262626"/>
                  <path d="M29.3638 25.914C34.2122 14.4305 36.2745 4.33247 33.9696 3.35934C31.6648 2.38621 25.8656 10.9064 21.0172 22.3899C16.1687 33.8734 14.107 43.9716 16.4118 44.9447C18.7166 45.9179 24.5153 37.3974 29.3638 25.914Z" fill="#262626"/>
                </svg>
                <p
                  className="text-black/80 text-left"
                  style={{ fontSize: 'clamp(10.13px, 0.99vw, 38px)' }}
                >
                  Những hỗ trợ đặc
                  <br />
                  biệt từ chủ đầu tư
                  <br />
                  GS HOLDING
                </p>
              </div>
            </div>
        </div>

        {/* Box 2: 14 cols on lg = 28%; top spacing 82px, gap between blocks 174px */}
        <div className="flex flex-col py-12 pl-[22px] pr-10 md:py-16 lg:pt-[82px] lg:pb-20 lg:pl-[22px] lg:pr-10 border-b sm:border-b-0 lg:border-l lg:border-gray-200 min-h-0 min-w-0 self-stretch lg:col-span-[14]">
            <div className="flex flex-col gap-8 lg:gap-[174px]">
              {MIDDLE_BLOCKS.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-black flex-1 min-w-0 leading-tight" style={{ fontSize: 'clamp(21.33px, 2.08vw, 80px)' }}>
                      {title.slice(0, -1)}
                      <span className="text-primary">.</span>
                    </h3>
                    <span
                      className="text-primary shrink-0 flex items-center"
                      style={
                      title === 'Thủ tục đầu tư.'
                        ? { width: 'clamp(35.2px, 3.44vw, 132px)' }
                        : title === 'Giấy phép chuyên ngành.'
                          ? { width: 'clamp(37.33px, 3.65vw, 140px)' }
                          : undefined
                    }
                    >
                      <Icon />
                    </span>
                  </div>
                  <p className="text-black/80 font-normal leading-relaxed" style={{ fontSize: 'clamp(12.8px, 1.25vw, 48px)', maxWidth: 'clamp(166.4px, 16.25vw, 624px)' }}>
                    {description}
                  </p>
                </article>
              ))}
            </div>
        </div>

        {/* Box 3: 11 cols on lg = 22%; Đi vào sản xuất: 176px from top, 158px to block below */}
        <div className="flex flex-col py-12 pl-8 pr-0 sm:pl-8 md:py-16 lg:pt-[176px] lg:pb-20 lg:pl-8 sm:border-l border-gray-200 min-h-0 min-w-0 self-stretch lg:col-span-[11]">
            <div className="flex flex-col gap-8 lg:gap-[158px]">
              {RIGHT_BLOCKS.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-black flex-1 min-w-0 leading-tight" style={{ fontSize: 'clamp(21.33px, 2.08vw, 80px)' }}>
                      {title === 'Đi vào sản xuất.' ? (
                        <>Đi vào<br />sản xuất<span className="text-primary">.</span></>
                      ) : (
                        <>
                          {title.slice(0, -1)}
                          <span className="text-primary">.</span>
                        </>
                      )}
                    </h3>
                    <span
                      className="text-primary shrink-0 flex items-center"
                      style={
                        title === 'Đi vào sản xuất.'
                          ? { width: 'clamp(42.67px, 4.17vw, 160px)' }
                          : title === 'Hoàn thiện nhà máy.'
                            ? { width: 'clamp(49.07px, 4.79vw, 184px)' }
                            : undefined
                      }
                    >
                      <Icon />
                    </span>
                  </div>
                  <p className="text-black/80 font-normal leading-relaxed" style={{ fontSize: 'clamp(12.8px, 1.25vw, 48px)', maxWidth: 'clamp(140.8px, 13.75vw, 528px)' }}>
                    {description}
                  </p>
                </article>
              ))}
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}
