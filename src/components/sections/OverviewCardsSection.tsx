'use client'

import Image from 'next/image'
import { LocationIcon, FloorPlanIcon } from '@/components/svg'

export default function OverviewCardsSection() {
  return (
    <section id="section-overview" className="py-20 relative px-4 sm:px-8">
      <div className="w-full max-w-[clamp(818.13px,79.89vw,3068px)] mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-[10px] mb-3" aria-hidden>
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="w-2 h-2 rounded-full bg-black" />
          </div>
          <p className="text-black font-light text-[clamp(21.33px,2.08vw,80px)] mb-2 leading-[1.15]">Khu công nghiệp</p>
          <h2 className="text-black font-semibold text-[clamp(56.53px,5.52vw,212px)] leading-[1.15]">Ez.Park Bắc Ninh I</h2>
        </div>

        <div className="flex flex-col md:flex-row md:flex-nowrap gap-y-6 md:gap-y-0 md:min-w-[79.89vw]">
          <div className="relative w-full md:w-[clamp(325.33px,31.77vw,1220px)] md:shrink-0 md:mr-[clamp(21.33px,2.08vw,80px)] h-[552px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/home/project_bn.png"
              alt="Overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Tổng quan dự án.</h3>
                <p className="text-gray-300 font-light text-[clamp(7.47px,0.73vw,28px)] mb-4 line-clamp-3">
                  Quy mô gần 223 ha, hạ tầng đồng bộ, định hướng công nghiệp sạch & công nghệ cao, đầu tư bền vững...
                </p>
                <button
                  type="button"
                  className="w-[clamp(87.47px,8.54vw,328px)] border border-white bg-transparent text-white rounded-bl-[4rem] rounded-tr-[4rem] flex items-center py-2.5 pl-5 pr-4 text-[13px] font-medium gap-3 lg:py-2 lg:pl-6 lg:pr-4 lg:gap-4 hover:bg-white/10 transition-colors"
                >
                  Xem thêm...
                  <span className="text-lg leading-none" aria-hidden>&rarr;</span>
                </button>
              </div>
              <div className="leading-none">
                <span className="text-gray-400 font-light text-[clamp(17.07px,1.67vw,64px)] block">Quy mô</span>
                <span className="text-white font-extrabold text-[clamp(37.33px,3.65vw,140px)]">223</span>
                <span className="text-white font-light text-[clamp(16px,1.5625vw,60px)]">ha</span>
              </div>
            </div>
            <div
              className="absolute bottom-4 right-4 w-[clamp(91.73px,8.96vw,344px)] h-auto pointer-events-none z-10"
              aria-hidden
            >
              <Image
                src="/images/home/overview_badge.svg"
                alt=""
                width={174}
                height={174}
                className="w-full h-auto object-contain object-right"
              />
            </div>
          </div>

          <div className="bg-[#E5E5E5] w-full md:w-[clamp(230.4px,22.5vw,864px)] md:shrink-0 md:mr-[clamp(10.67px,1.04vw,40px)] rounded-2xl p-8 flex flex-col justify-between h-[552px] group -colors">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <LocationIcon className="w-6 h-auto" />
              </div>
              <h3 className="text-gray-900 font-bold mb-4 text-[clamp(19.2px,1.875vw,72px)]">Vị trí chiến lược.</h3>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 font-light text-[clamp(7.47px,0.73vw,28px)]">
                Là cửa ngõ kết nối thuận tiện với Hà Nội, sân bay, cảng biển và các tuyến giao thông chính, liên kết nhiều khu công nghiệp, thuận lợi cho sản xuất, logistics và liên kết chuỗi cung ứng...
              </p>
              <button
                type="button"
                className="w-[clamp(87.47px,8.54vw,328px)] bg-white text-primary rounded-bl-[4rem] rounded-tr-[4rem] flex items-center py-2.5 pl-5 pr-4 text-[13px] font-medium gap-3 lg:py-2 lg:pl-6 lg:pr-4 lg:gap-4"
              >
                Xem thêm...
                <span className="text-lg leading-none" aria-hidden>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="bg-[#E5E5E5] w-full md:w-[clamp(230.4px,22.5vw,864px)] md:shrink-0 rounded-2xl p-8 flex flex-col justify-between h-[552px] group -colors">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FloorPlanIcon className="w-7 h-auto" />
              </div>
              <h3 className="text-gray-900 font-bold mb-4 text-[clamp(19.2px,1.875vw,72px)]">Mặt bằng tổng thể.</h3>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 font-light text-[clamp(7.47px,0.73vw,28px)]">
                Được quy hoạch theo lộ trình, phân bổ hợp lý các khu sản xuất, dịch vụ, hạ tầng, giao thông và cây xanh, đồng thời dành quỹ đất dự trữ cho mở rộng và phát triển trong tương lai...
              </p>
              <button
                type="button"
                className="w-[clamp(87.47px,8.54vw,328px)] bg-white text-primary rounded-bl-[4rem] rounded-tr-[4rem] flex items-center py-2.5 pl-5 pr-4 text-[13px] font-medium gap-3 lg:py-2 lg:pl-6 lg:pr-4 lg:gap-4"
              >
                Xem thêm...
                <span className="text-lg leading-none" aria-hidden>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
