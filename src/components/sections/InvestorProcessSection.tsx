'use client'

import Image from 'next/image'
import { SECTION_PADDING_X, SECTION_CONTENT_WRAPPER_CLASS } from '@/constants/layout'

const TEAL = '#428999'
const TEAL_DARK = '#2d6b7a'

const STEPS_1_5 = [
  { num: '01', text: 'Ký hợp đồng nguyên tắc / Đặt cọc MOU' },
  { num: '02', text: 'Hoàn thiện các thủ tục cấp IRC, ERC, báo cáo dự án' },
  { num: '03', text: 'Ký hợp đồng thuê lại đất và CSHT' },
  { num: '04', text: 'Nhận bàn giao và ký xác nhận hồ sơ bàn giao đất' },
  { num: '05', text: 'Nhận giấy chứng nhận quyền sử dụng đất (sổ đỏ)' },
]

const STEPS_6_9 = [
  { num: '06', text: 'Hoàn thành Phê Duyệt đánh giá tác động môi trường (ĐTM)' },
  { num: '07', text: 'Xin phê duyệt quy hoạch chi tiết + phê duyệt PCCC' },
  { num: '08', text: 'Xin phê duyệt thiết kế cơ sở' },
  { num: '09', text: 'Xin phê duyệt thiết kế bản vẽ thi công / Xin cấp giấy phép xây dựng' },
]

export default function InvestorProcessSection() {
  const sectionClass = 'relative text-black py-0 overflow-hidden h-screen min-h-[100vh] ' + SECTION_PADDING_X
  return (
    <section id="section-investor-process" className={sectionClass}>
      <div className="absolute inset-0 z-0 min-h-full">
        <Image
          src="/images/home/invest_bg_pc.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className={'relative z-10 h-full flex flex-col pt-0 pb-8 ' + SECTION_CONTENT_WRAPPER_CLASS}>
        <div className="flex flex-col flex-1 w-full">
          <div className="mb-1">
            <p className="text-gray-600 text-sm uppercase tracking-widest">Thủ tục đầu tư</p>
            <h2 className="text-gray-700 text-2xl md:text-3xl font-bold">Quy trình</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-900 text-3xl md:text-5xl font-bold">ĐẦU TƯ</span>
              <span className="w-2 h-6 md:h-8 bg-primary shrink-0" aria-hidden />
            </div>
          </div>

          {/* 01-05 arranged in an arc: middle highest, ends lower; each card has linear-gradient background */}
          <div className="flex flex-wrap justify-between gap-x-[70px] gap-y-4 mb-[70px] items-end relative -mt-40 px-[36px]">
            {STEPS_1_5.map((step, index) => {
              const arcOffsets = [40, 20, 0, 20, 40]
              const cardHeights = [200, 282, 312, 296, 220]
              const translateY = arcOffsets[index]
              const height = cardHeights[index]
              const cardGradient = 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 99%)'
              return (
                <div
                  key={step.num}
                  className="flex-1 min-w-[140px] max-w-[220px] rounded p-4 transition-transform flex flex-col justify-center"
                  style={{
                    transform: `translateY(${translateY}px)`,
                    background: cardGradient,
                    height: `${height}px`,
                  }}
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: TEAL }}>
                    {step.num}
                  </div>
                  <p className="text-xs text-gray-900">{step.text}</p>
                </div>
              )
            })}
          </div>

          <div className="lg:ml-[20%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[70px] mt-auto">
            {STEPS_6_9.map((step) => (
              <div
                key={step.num}
                className="rounded p-4"
              >
                <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: TEAL_DARK }}>
                  {step.num}
                </div>
                <p className="text-xs text-gray-900">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10" aria-hidden>
        <span className="w-12 h-1 rounded bg-primary" />
        <span className="w-12 h-1 rounded bg-[#428999]" />
        <span className="w-12 h-1 rounded bg-white/50" />
      </div>
    </section>
  )
}
