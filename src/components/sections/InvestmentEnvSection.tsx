'use client'

import Image from 'next/image'

export default function InvestmentEnvSection() {
  return (
    <section id="section-investment-env" className="bg-black text-white py-20 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <h2 className="text-4xl font-bold text-gray-500">
            Môi trường <span className="text-white">Đầu Tư</span>
          </h2>
          <div className="w-full md:w-auto h-px bg-primary flex-grow md:ml-8 mb-4 md:mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full border border-primary flex items-center justify-center relative">
              <Image
                src="/images/sections/env_chart.svg"
                width={192}
                height={192}
                alt="Chart"
                className="w-48 h-48"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-baseline gap-4 border-b border-gray-800 pb-4">
              <span className="text-4xl font-bold text-primary">16 tỷ</span>
              <span className="text-xl text-gray-400">USD</span>
              <span className="text-sm text-gray-500 ml-auto">FDI hơn</span>
            </div>
            <div className="flex items-baseline gap-4 border-b border-gray-800 pb-4">
              <span className="text-4xl font-bold text-primary">5.994,45</span>
              <span className="text-xl text-gray-400">km²</span>
              <span className="text-sm text-gray-500 ml-auto">Diện tích hơn</span>
            </div>
            <div className="flex items-baseline gap-4 border-b border-gray-800 pb-4">
              <span className="text-4xl font-bold text-primary">1 triệu</span>
              <span className="text-xl text-gray-400">lao động</span>
              <span className="text-sm text-gray-500 ml-auto">Nguồn nhân lực gần</span>
            </div>

            <div className="grid grid-cols-1 gap-2 text-sm text-primary mt-4">
              <div className="flex justify-between"><span>Hạ tầng giao thông</span> <span>✈</span></div>
              <div className="flex justify-between"><span>Mạng lưới KCN</span> <span>🏭</span></div>
              <div className="flex justify-between"><span>Vị trí chiến lược</span> <span>📍</span></div>
            </div>

            <div className="text-center md:text-left mt-8">
              <button type="button" className="bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
                Xem thêm &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
