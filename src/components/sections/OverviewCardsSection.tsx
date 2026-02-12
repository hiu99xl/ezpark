'use client'

import Image from 'next/image'
import { LocationIcon, FloorPlanIcon } from '@/components/svg'

export default function OverviewCardsSection() {
  return (
    <section id="section-overview" className="py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-black text-sm uppercase tracking-widest mb-2">Cụm công nghiệp</p>
          <h2 className="text-black text-3xl md:text-5xl font-bold">Ez.Park Hà Tĩnh I</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/sections/overview_card.png"
              alt="Overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">Tổng quan dự án.</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                Ez.Park Hà Tĩnh I là CCN được quy hoạch bài bản tại Đức Thọ...
              </p>
              <div className="mt-4">
                <span className="text-gray-400 text-xs block">Quy mô</span>
                <span className="text-white text-4xl font-bold">68ha</span>
              </div>
            </div>
          </div>

          <div className="bg-[#E5E5E5] rounded-2xl p-8 flex flex-col justify-between h-[400px] group -colors">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <LocationIcon className="w-6 h-auto" />
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4">Vị trí chiến lược.</h3>
              <p className="text-gray-600 text-sm">
                Là cửa ngõ kết nối thuận tiện với Hà Nội, sân bay, cảng biển và các tuyến giao thông chính, liên kết nhiều khu công nghiệp, thuận lợi cho sản xuất, logistics và liên kết chuỗi cung ứng...
              </p>
            </div>
            <button
              type="button"
              className="w-[clamp(87.47px,8.54vw,328px)] bg-white text-primary rounded-bl-[4rem] rounded-tr-[4rem] flex items-center py-2.5 pl-5 pr-4 text-[13px] font-medium gap-3 lg:py-2 lg:pl-6 lg:pr-4 lg:gap-4"
            >
              Xem thêm...
              <span className="text-lg leading-none" aria-hidden>&rarr;</span>
            </button>
          </div>

          <div className="bg-[#E5E5E5] rounded-2xl p-8 flex flex-col justify-between h-[400px] group -colors">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FloorPlanIcon className="w-7 h-auto" />
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4">Mặt bằng tổng thể.</h3>
              <p className="text-gray-600 text-sm">
                Được quy hoạch theo lộ trình, phân bổ hợp lý các khu sản xuất, dịch vụ, hạ tầng, giao thông và cây xanh, đồng thời dành quỹ đất dự trữ cho mở rộng và phát triển trong tương lai...
              </p>
            </div>
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
    </section>
  )
}
