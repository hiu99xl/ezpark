'use client'

// Icons: thin circular outline style
const IconCheck = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="20" cy="20" r="18" />
    <path d="M12 20l6 6 10-12" />
  </svg>
)
const IconDocument = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="20" cy="20" r="18" />
    <path d="M14 14h12v4H14zM14 20h12v2H14zM14 26h8v2h-8z" />
  </svg>
)
const IconProduction = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="20" cy="20" r="18" />
    <path d="M12 26V14l8-4 8 4v12M12 18l8 4 8-4M20 22v4" />
  </svg>
)
const IconFactory = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="20" cy="20" r="18" />
    <path d="M14 26V18l6-4 6 4v8M14 18h12M16 22h8M16 26h8" />
  </svg>
)

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
      className="bg-[#f5f5f5] py-20"
      aria-labelledby="investor-support-heading"
    >
      {/* Same grid as AdvantagesSection (lg:grid-cols-4) so: khối đầu = 2 cột = 2 khối trên, khối t2 = cột 3, khối t3 = cột 4 */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Box 1: col-span-2 = same width as first 2 blocks of section-advantages */}
        <div className="flex flex-col text-left py-12 px-6 sm:px-8 md:py-16 lg:py-20 border-b border-gray-300 lg:border-b-0 col-span-1 sm:col-span-2">
            <h2
              id="investor-support-heading"
              className="text-black font-bold text-3xl sm:text-4xl lg:text-[clamp(28px,2.5vw,48px)] leading-tight mb-6 lg:mb-8"
            >
              Hỗ trợ
              <br />
              <span className="text-black">từ </span>
              <span className="text-primary">Chủ đầu tư</span>
            </h2>
            <div className="rounded-2xl bg-gray-200/60 aspect-[4/3] min-h-[200px] flex items-end p-4 lg:p-6 mb-4">
              {/* Placeholder for image / illustration */}
            </div>
            <p className="text-black/80 text-sm lg:text-base text-left">
              Những hỗ trợ đặc biệt từ chủ đầu tư GS HOLDING
            </p>
        </div>

        {/* Box 2: 1 col on lg = same width as block 3 (card_2_3) of AdvantagesSection */}
        <div className="flex flex-col py-12 px-6 sm:px-8 md:py-16 lg:py-20 lg:px-10 border-b sm:border-b-0 lg:border-l lg:border-gray-200 min-h-0 self-stretch">
            <div className="flex flex-col gap-8 lg:gap-10">
              {MIDDLE_BLOCKS.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="group transition-colors duration-200 rounded-xl p-4 -m-4 lg:p-5 lg:-m-5 hover:bg-white/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-black text-lg lg:text-xl mb-2">
                        {title.slice(0, -1)}
                        <span className="text-primary">.</span>
                      </h3>
                      <p className="text-black/80 text-sm lg:text-base leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <span className="text-primary shrink-0">
                      <Icon />
                    </span>
                  </div>
                </article>
              ))}
            </div>
        </div>

        {/* Box 3: 1 col on lg = same width as block 4 of AdvantagesSection */}
        <div className="flex flex-col py-12 px-6 sm:px-8 md:py-16 lg:py-20 lg:px-10 sm:border-l border-gray-200 min-h-0 self-stretch">
            <div className="flex flex-col gap-8 lg:gap-10">
              {RIGHT_BLOCKS.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="group transition-colors duration-200 rounded-xl p-4 -m-4 lg:p-5 lg:-m-5 hover:bg-white/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-black text-lg lg:text-xl mb-2">
                        {title.slice(0, -1)}
                        <span className="text-primary">.</span>
                      </h3>
                      <p className="text-black/80 text-sm lg:text-base leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <span className="text-primary shrink-0">
                      <Icon />
                    </span>
                  </div>
                </article>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
