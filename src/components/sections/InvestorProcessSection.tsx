'use client'

import Image from 'next/image'

const TEAL = '#428999'

const STEPS = [
  { num: '01', text: 'Ký hợp đồng nguyên tắc / Đặt cọc MOU', highlight: false },
  { num: '02', text: 'Hoàn thiện các thủ tục cấp IRC, ERC, báo cáo dự án', highlight: true },
  { num: '03', text: 'Ký hợp đồng thuê lại đất và CSHT', highlight: false },
  { num: '04', text: 'Nhận bàn giao và ký xác nhận hồ sơ bàn giao đất', highlight: true },
  { num: '05', text: 'Nhận giấy chứng nhận quyền sử dụng đất (sổ đỏ)', highlight: false },
  { num: '06', text: 'Hoàn thành Phê Duyệt đánh giá tác động môi trường (ĐTM)', highlight: false },
  { num: '07', text: 'Xin phê duyệt quy hoạch chi tiết + phê duyệt PCCC', highlight: true },
  { num: '08', text: 'Xin phê duyệt thiết kế cơ sở', highlight: false },
  { num: '09', text: 'Xin phê duyệt thiết kế bản vẽ thi công / Xin cấp giấy phép xây dựng', highlight: true },
]

export default function InvestorProcessSection() {
  return (
    <section id="section-investor-process" className="relative bg-black text-white py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sections/investor_bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-primary text-4xl font-bold mb-8">Chủ đầu tư</h2>
            <div className="bg-white rounded-2xl p-6 w-48 h-48 flex items-center justify-center mb-6">
              <div className="text-black font-bold text-xl">GS HOLDING</div>
            </div>
            <p className="text-gray-400 text-sm border-l-2 border-primary pl-4">
              Những hỗ trợ đặc biệt từ chủ đầu tư<br />
              <span className="text-white font-bold">GS HOLDING</span>
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col h-full justify-center">
              <div className="mb-12">
                <p className="text-gray-400 text-sm uppercase tracking-widest">Thủ tục đầu tư</p>
                <h2 className="text-white text-4xl font-bold mt-2">Quy trình ĐẦU TƯ</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-primary/20 transition-colors"
                  >
                    <div
                      className="text-3xl font-bold mb-2 text-gray-500"
                      style={step.highlight ? { color: TEAL } : undefined}
                    >
                      {step.num}
                    </div>
                    <p className="text-xs text-gray-300">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
