'use client'

import Image from 'next/image'

export default function OverviewCardsSection() {
  return (
    <section id="section-overview" className="bg-[#111] py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Cụm công nghiệp</p>
          <h2 className="text-white text-3xl md:text-5xl font-bold">Ez.Park Hà Tĩnh I</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Overview */}
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

          {/* Card 2: Location */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between h-[400px] group hover:bg-gray-50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Image src="/images/sections/icon_location.svg" width={24} height={24} alt="Location" className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4">Vị trí chiến lược.</h3>
              <p className="text-gray-600 text-sm">
                Ez.Park Hà Tĩnh I nằm tại tâm điểm kết nối Bắc Trung Bộ, nơi hội tụ các trục đường bộ – đường sắt...
              </p>
            </div>
            <button type="button" className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
              Xem thêm <span className="text-xl">&rarr;</span>
            </button>
          </div>

          {/* Card 3: Masterplan */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between h-[400px] group hover:bg-gray-50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Image src="/images/sections/icon_map.svg" width={24} height={24} alt="Map" className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4">Mặt bằng tổng thể.</h3>
              <p className="text-gray-600 text-sm">
                CCN Ez.Park Hà Tĩnh I có hạ tầng đồng bộ, đã có nhà máy hoạt động ổn định...
              </p>
            </div>
            <button type="button" className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
              Xem thêm <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
