'use client'

import Image from 'next/image'

const TEAL = '#428999'

export default function AdvantagesSection() {
  return (
    <section id="section-advantages" className="bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1_1: Lợi thế • Khác biệt */}
          <div className="bg-primary pl-[clamp(60.8px,5.9375vw,228px)] pt-8 pr-8 pb-8 flex flex-col justify-end items-start text-white h-[clamp(256px,25vw,960px)]">
            <div className="mb-4 w-[clamp(61.33px,5.99vw,230px)] h-auto">
              <Image src="/images/sections/advantages_ez.svg" alt="" width={116} height={116} className="w-full h-auto" />
            </div>
            <h3 className="leading-tight">
              <span className="font-light block flex items-end gap-2">
                <span style={{ fontSize: 'clamp(29.33px, 2.86vw, 110px)' }}>Lợi thế</span>
                <span 
                  className="rounded-full bg-white flex-shrink-0 translate-y-[-0.55em]" 
                  style={{ width: 'clamp(5.33px, 0.52vw, 20px)', height: 'clamp(5.33px, 0.52vw, 20px)' }} 
                />
              </span>
              <span className="font-extrabold" style={{ fontSize: 'clamp(29.33px, 2.86vw, 110px)' }}>Khác biệt </span>
              <span 
                className="inline-block"
                style={{ 
                  fontSize: 'clamp(32px, 3.125vw, 120px)',
                  fontFamily: 'Novelia, sans-serif',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                #
              </span>
            </h3>
          </div>

          {/* 1_2: Row 1, card 2 - image */}
          <div className="bg-gray-100 overflow-hidden h-[clamp(256px,25vw,960px)] relative">
            <Image src="/images/home/card_1_2.png" alt="" fill className="object-cover" sizes="25vw" />
          </div>

          {/* 1_3: Ưu đãi thuế nhập khẩu */}
          <div className="bg-primary p-8 flex flex-col justify-center text-white h-[clamp(256px,25vw,960px)]">
            {/* Title row: Ưu đãi ! / thuế / nhập khẩu — icon only on the right of this block */}
            <div className="flex flex-row justify-between items-center gap-4 mb-2">
              <h4 className="leading-tight min-w-0" style={{ fontSize: 'clamp(24px, 2.34375vw, 90px)' }}>
                <span className="font-semibold block">Ưu đãi !</span>
                <span className="font-light block">thuế</span>
                <span className="font-light block">nhập khẩu</span>
              </h4>
              <div className="flex-shrink-0 w-[clamp(60px,5.86vw,142px)] h-auto">
                <Image src="/images/sections/icon_tax_import.svg" alt="" width={142} height={142} className="w-full h-auto" />
              </div>
            </div>
            <div className="mt-[34px] mb-2">
              <span className="text-black font-light block" style={{ fontSize: 'clamp(13.33px, 1.30vw, 50px)' }}>Nhà đầu tư thứ cấp được</span>
              <span className="text-black font-medium block" style={{ fontSize: 'clamp(18.67px, 1.82vw, 70px)' }}>MIỄN THUẾ</span>
              <span className="text-white font-extrabold block" style={{ fontSize: 'clamp(12.8px, 1.25vw, 48px)' }}>nhập khẩu máy móc, thiết bị</span>
            </div>
          </div>

          {/* 1_4: Thủ tục pháp lý */}
          <div className="bg-[#999999] p-8 flex flex-col justify-center h-[clamp(256px,25vw,960px)]">
            {/* Title row: Thủ tục / pháp lý . — icon on the right */}
            <div className="flex flex-row justify-between items-center gap-4 mb-4">
              <h4 className="leading-tight min-w-0 text-white" style={{ fontSize: 'clamp(25.07px, 2.45vw, 94px)' }}>
                <span className="font-semibold block">Thủ tục</span>
                <span className="font-extralight block flex items-end gap-2">
                  <span>pháp lý</span>
                  <span 
                    className="bg-white flex-shrink-0 translate-y-[0.15em]" 
                    style={{ width: 'clamp(6.4px, 0.625vw, 24px)', height: 'clamp(6.4px, 0.625vw, 24px)' }} 
                  />
                </span>
              </h4>
              <div className="flex-shrink-0 w-[clamp(40px,3.91vw,94px)] h-auto">
                <Image src="/images/sections/icon_legal_procedures.svg" alt="" width={94} height={102} className="w-full h-auto" />
              </div>
            </div>
            <div className="text-black mb-4">
              <span className="font-medium" style={{ fontSize: 'clamp(14.93px, 1.46vw, 56px)' }}>Các doanh nghiệp </span>
              <span className="font-light" style={{ fontSize: 'clamp(9.6px, 0.9375vw, 36px)' }}>được</span>
            </div>
            <div className="text-white font-extrabold leading-tight" style={{ fontSize: 'clamp(22.4px, 2.19vw, 84px)' }}>HỖ TRỢ<br />TOÀN DIỆN</div>
            <div className="text-black flex">
              <span className="font-light inline-block translate-y-[0.55em]" style={{ fontSize: 'clamp(9.6px, 0.9375vw, 36px)' }}>Trong </span>
              <span className="font-medium" style={{ fontSize: 'clamp(18.13px, 1.77vw, 68px)' }}>các thủ tục pháp lý</span>
            </div>
          </div>

          {/* 2_1: Row 2, card 1 - image */}
          <div className="bg-gray-100 overflow-hidden h-[clamp(256px,25vw,960px)] relative">
            <Image src="/images/home/card_2_1.png" alt="" fill className="object-cover" sizes="25vw" />
          </div>

          {/* 2_2: Ưu đãi thuế đất hàng năm */}
          <div className="p-8 flex flex-col justify-center text-white h-[clamp(256px,25vw,960px)] relative overflow-hidden" style={{ backgroundColor: '#7ACCCC' }}>
            <div className="flex flex-row justify-between items-center gap-4 mb-2">
              <h4 className="leading-tight min-w-0" style={{ fontSize: 'clamp(25.6px, 2.5vw, 96px)' }}>
                <span className="font-semibold block">Ưu đãi !</span>
                <span className="font-light block">thuế đất</span>
                <span className="font-light block">hàng năm</span>
              </h4>
              <div className="flex-shrink-0 w-[clamp(78.4px,7.66vw,294px)] h-auto">
                <Image src="/images/sections/icon_land_tax.svg" alt="" width={150} height={150} className="w-full h-auto" />
              </div>
            </div>
            <div className="text-black mb-2" style={{ fontSize: 'clamp(13.33px, 1.30vw, 50px)' }}>
              <span className="block">Miễn tiền thuế đất thô</span>
              <span className="block">nộp cho nhà nước</span>
            </div>
            <div>
              <div className="flex items-start leading-none">
                <span className="text-white font-bold inline-block translate-y-[0.4em] mr-[14px]" style={{ fontSize: 'clamp(18.67px, 1.82vw, 70px)' }}>Miễn</span>
                <span className="text-white font-bold" style={{ fontSize: 'clamp(47.47px, 4.64vw, 178px)' }}>11 Năm </span>
              </div>
              <span className="text-black block text-center mt-1" style={{ fontSize: 'clamp(19.2px, 1.875vw, 72px)' }}>đầu tiên</span>
            </div>
          </div>

          {/* 2_3: Row 2, card 3 - image */}
          <div className="bg-gray-100 overflow-hidden h-[clamp(256px,25vw,960px)] relative">
            <Image src="/images/home/card_2_3.png" alt="" fill className="object-cover" sizes="25vw" />
          </div>

          {/* 2_4: Row 2, card 4 - image */}
          <div className="bg-gray-100 overflow-hidden h-[clamp(256px,25vw,960px)] relative">
            <Image src="/images/home/card_2_4.png" alt="" fill className="object-cover" sizes="25vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
