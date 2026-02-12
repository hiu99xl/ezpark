'use client'

import Image from 'next/image'

const TEAL = '#428999'

export default function AdvantagesSection() {
  return (
    <section id="section-advantages" className="bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Box 1: Title */}
          <div className="bg-primary p-8 flex flex-col justify-center items-start text-white h-64">
            <div className="mb-4">
              <Image src="/images/sections/advantages_icon.svg" width={32} height={32} alt="Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold leading-tight">Lợi thế<br />Khác biệt</h3>
          </div>

          {/* Box 2: Image */}
          <div className="bg-gray-100 overflow-hidden h-64 relative">
            <Image src="/images/sections/bento_tax.png" alt="Tax" fill className="object-cover" sizes="25vw" />
            <div className="absolute top-4 left-4 bg-white/80 px-2 py-1 text-xs font-bold rounded">Tax Form</div>
          </div>

          {/* Box 3: Import Tax */}
          <div className="bg-primary p-8 flex flex-col justify-center text-white h-64">
            <h4 className="text-xl font-bold mb-2">Ưu đãi !</h4>
            <p className="text-lg mb-4">thuế XNK</p>
            <div className="text-sm opacity-90 mb-2">Miễn thuế nhập khẩu để tạo TSCĐ</div>
            <div className="text-4xl font-bold">Miễn <span className="text-5xl">5 Năm</span></div>
            <div className="text-xs text-right mt-1">thuế nhập khẩu</div>
          </div>

          {/* Box 4: Legal Image */}
          <div className="bg-blue-50 overflow-hidden h-64 relative">
            <Image src="/images/sections/bento_legal.png" alt="Legal" fill className="object-cover" sizes="25vw" />
          </div>

          {/* Box 5: Handshake Image */}
          <div className="bg-gray-100 overflow-hidden h-64 relative">
            <Image src="/images/sections/bento_partnership.png" alt="Partnership" fill className="object-cover" sizes="25vw" />
          </div>

          {/* Box 6: Income Tax */}
          <div className="p-8 flex flex-col justify-center text-white h-64 relative overflow-hidden" style={{ backgroundColor: TEAL }}>
            <h4 className="text-lg font-bold mb-1">Ưu đãi !</h4>
            <p className="text-sm mb-4">thuế thu nhập doanh nghiệp</p>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs opacity-80">Miễn</div>
                <div className="text-4xl font-bold">100%</div>
                <div className="text-xs opacity-80">2 năm đầu</div>
              </div>
              <div className="text-right">
                <div className="text-xs opacity-80">Giảm</div>
                <div className="text-4xl font-bold">50%</div>
                <div className="text-xs opacity-80">4 năm tiếp theo</div>
              </div>
            </div>
          </div>

          {/* Box 7: Logistics Image */}
          <div className="bg-gray-100 overflow-hidden h-64 relative">
            <Image src="/images/sections/bento_logistics.png" alt="Logistics" fill className="object-cover" sizes="25vw" />
          </div>

          {/* Box 8: Legal Support */}
          <div className="bg-gray-200 p-8 flex flex-col justify-center h-64">
            <div className="mb-4">
              <Image src="/images/sections/icon_doc.svg" width={32} height={32} alt="Doc" className="w-8 h-8 opacity-50" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">Thủ tục pháp lý</h4>
            <p className="text-gray-600 text-sm mb-4">Các doanh nghiệp được</p>
            <div className="text-2xl font-bold text-gray-900 leading-tight">HỖ TRỢ<br />TOÀN DIỆN</div>
            <p className="text-gray-600 text-xs mt-2">trong các thủ tục pháp lý</p>
          </div>
        </div>
      </div>
    </section>
  )
}
