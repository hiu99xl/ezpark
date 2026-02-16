'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { SECTION_PADDING_X, SECTION_CONTENT_WRAPPER_CLASS } from '@/constants/layout'

const IconTransport = () => (
  <svg width="31" height="17" viewBox="0 0 31 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto text-primary">
    <path d="M30.9664 16.3799L19.9264 0.0698242C19.9264 0.0698242 19.8464 0 19.7964 0H10.9564C10.8964 0 10.8464 0.0298242 10.8164 0.0698242L0.0263826 16.3799C-0.00361741 16.4299 -0.0136174 16.4898 0.0263826 16.5498C0.0563826 16.5998 0.106397 16.6299 0.166397 16.6299H30.8264C30.8864 16.6299 30.9364 16.5996 30.9664 16.5396C30.9964 16.4896 30.9964 16.4196 30.9664 16.3696V16.3799ZM11.3364 0.319824H11.9164L1.5464 16.2998H0.966446L11.3364 0.319824ZM12.1165 4.55957L11.4164 6.71973L10.8364 6.52979L11.6065 4.38965L12.1065 4.55957H12.1165ZM11.7265 4.07959L12.4965 1.93994L12.9064 2.07959L12.2064 4.25L11.7164 4.07959H11.7265ZM11.3164 7.02979L10.6165 9.18994L9.95644 8.96973L10.7265 6.82959L11.3164 7.02979ZM10.5164 9.5L9.81642 11.6699L9.06642 11.4097L9.83644 9.26953L10.5064 9.5H10.5164ZM9.72646 11.98L9.02638 14.1396L8.18642 13.8599L8.95644 11.7197L9.71645 11.98H9.72646ZM13.0064 1.76953L12.6065 1.62988L13.0764 0.319824H13.4765L13.0164 1.76953H13.0064ZM8.08644 14.1699L8.92641 14.46L8.33644 16.3096H7.31642L8.08644 14.1699ZM15.0564 0.319824H15.3465L14.6564 16.2998H13.6564L15.0564 0.319824ZM16.3964 16.2998C16.3964 16.1898 16.3865 16.06 16.3765 15.98C16.1265 11.05 15.8464 5.27982 15.6664 0.319824H15.9264C16.3964 5.26982 16.8664 10.9999 17.2564 15.9199C17.2564 16.0099 17.2764 16.1698 17.2864 16.2998H16.3864H16.3964ZM21.1864 11.98L21.9464 11.7197L22.7265 13.8599L21.8864 14.1499L21.1864 11.98ZM21.0864 11.6699L20.3864 9.5L21.0564 9.26953L21.8264 11.4097L21.0764 11.6699H21.0864ZM20.2964 9.19971L19.5965 7.02979L20.1764 6.82959L20.9464 8.96973L20.2864 9.18994L20.2964 9.19971ZM19.4965 6.71973L18.8064 4.5498L19.2964 4.37988L20.0664 6.51953L19.4965 6.70996V6.71973ZM18.7064 4.23975L18.0064 2.06982L18.4064 1.93994L19.1864 4.07959L18.7064 4.23975ZM18.2964 1.63965L17.9064 1.76953L17.4464 0.32959H17.8164L18.2864 1.63965H18.2964ZM21.9765 14.46L22.8264 14.1699L23.5965 16.3096H22.5564L21.9664 14.46H21.9765ZM18.8364 0.319824H19.4264L30.0464 16.2998H29.4664L18.8465 0.319824H18.8364Z" fill="currentColor" />
  </svg>
)
const IconNetwork = () => (
  <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-primary">
    <path d="M25.5303 11.5298C26.2003 11.1398 26.6803 10.52 26.8803 9.77002C27.0803 9.02002 26.9804 8.23982 26.5904 7.56982C25.7904 6.18982 24.0203 5.70977 22.6303 6.50977C22.3803 6.65977 22.1604 6.82979 21.9704 7.02979L16.2703 3.73975C16.3503 3.47975 16.3903 3.1899 16.3903 2.8999C16.3903 1.2999 15.0903 0 13.4903 0C11.8903 0 10.5904 1.2999 10.5904 2.8999C10.5904 3.1899 10.6304 3.46975 10.7104 3.73975L5.01031 7.02979C4.82031 6.82979 4.6004 6.64977 4.3504 6.50977C3.6804 6.11977 2.90032 6.01973 2.15032 6.21973C1.40032 6.41973 0.780312 6.89982 0.390312 7.56982C0.000312239 8.23982 -0.0996048 9.02002 0.100395 9.77002C0.300395 10.52 0.780371 11.1398 1.45037 11.5298C1.70037 11.6798 1.9704 11.7798 2.2304 11.8398V18.4302C1.9604 18.4902 1.70037 18.5997 1.45037 18.7397C0.0703708 19.5397 -0.409688 21.3097 0.390312 22.6997C0.930312 23.6297 1.90032 24.1499 2.90032 24.1499C3.39032 24.1499 3.89039 24.0298 4.34039 23.7598C4.59039 23.6098 4.8103 23.4397 5.0003 23.2397L10.7004 26.5298C10.6204 26.7898 10.5804 27.0801 10.5804 27.3701C10.5804 28.9701 11.8804 30.27 13.4804 30.27C15.0804 30.27 16.3803 28.9701 16.3803 27.3701C16.3803 27.0801 16.3403 26.7998 16.2603 26.5298L21.9604 23.2397C22.1504 23.4397 22.3703 23.6198 22.6203 23.7598C23.0703 24.0198 23.5704 24.1499 24.0604 24.1499C25.0604 24.1499 26.0404 23.6297 26.5704 22.6997C27.3704 21.3197 26.8903 19.5397 25.5103 18.7397C25.2603 18.5997 25.0004 18.4902 24.7304 18.4302V11.8501C25.0004 11.7901 25.2703 11.68 25.5103 11.54L25.5303 11.5298ZM23.3304 18.4497C22.8004 18.5897 22.3304 18.8698 21.9704 19.2598L17.6503 16.77C17.8503 16.26 17.9604 15.7101 17.9604 15.1401C17.9604 14.5701 17.8503 14.0098 17.6503 13.5098L21.9704 11.02C22.3404 11.41 22.8004 11.6901 23.3304 11.8301C23.3604 11.8301 23.3903 11.8401 23.4203 11.8501V18.4399C23.4203 18.4399 23.3604 18.45 23.3304 18.46V18.4497ZM13.4903 18.27C11.7603 18.27 10.3504 16.8599 10.3504 15.1299C10.3504 13.3999 11.7603 11.9897 13.4903 11.9897C15.2203 11.9897 16.6303 13.3999 16.6303 15.1299C16.6303 16.8599 15.2203 18.27 13.4903 18.27ZM5.01031 19.2598C4.61031 18.8398 4.11036 18.5502 3.56036 18.4302V11.8398C4.10036 11.7098 4.61031 11.4298 5.01031 11.0098L9.33038 13.5098C9.13038 14.0198 9.02032 14.5701 9.02032 15.1401C9.02032 15.7101 9.13038 16.27 9.33038 16.77L5.01031 19.2598ZM23.2903 7.66016C23.5403 7.52016 23.8104 7.44971 24.0704 7.44971C24.6104 7.44971 25.1404 7.72998 25.4304 8.22998C25.6404 8.58998 25.7004 9.01992 25.5904 9.41992C25.4804 9.82992 25.2204 10.1601 24.8604 10.3701C24.5004 10.5801 24.0703 10.6398 23.6703 10.5298C23.2603 10.4198 22.9304 10.1598 22.7204 9.7998C22.2904 9.0498 22.5403 8.09016 23.2903 7.66016ZM21.3104 8.18018C21.1504 8.72018 21.1404 9.3001 21.3104 9.8501L16.9903 12.3501C16.3003 11.4901 15.3003 10.89 14.1603 10.71V5.71973C14.7203 5.58973 15.2204 5.28988 15.6104 4.87988L21.3204 8.18018H21.3104ZM13.4903 1.33984C14.3603 1.33984 15.0604 2.04016 15.0604 2.91016C15.0604 3.78016 14.3603 4.47998 13.4903 4.47998C12.6203 4.47998 11.9203 3.78016 11.9203 2.91016C11.9203 2.04016 12.6203 1.33984 13.4903 1.33984ZM11.3803 4.89014C11.7603 5.30014 12.2604 5.58998 12.8304 5.72998V10.7197C11.6904 10.8897 10.6903 11.4899 10.0003 12.3599L5.68035 9.85986C5.85035 9.30986 5.84035 8.72994 5.68035 8.18994L11.3903 4.89014H11.3803ZM1.39031 9.43018C1.28031 9.03018 1.34035 8.59975 1.55035 8.23975C1.76035 7.87975 2.1003 7.61977 2.5003 7.50977C2.6403 7.46977 2.77033 7.45996 2.91033 7.45996C3.18033 7.45996 3.45036 7.52992 3.69036 7.66992C4.44036 8.09992 4.70031 9.06006 4.26031 9.81006C3.83031 10.5601 2.87029 10.8199 2.12029 10.3799C1.76029 10.1699 1.50031 9.83018 1.39031 9.43018ZM4.42034 21.6499C4.31034 22.0599 4.05036 22.3901 3.69036 22.6001C3.44036 22.7401 3.17033 22.8101 2.91033 22.8101C2.37033 22.8101 1.84035 22.5298 1.55035 22.0298C1.12035 21.2798 1.37029 20.3201 2.12029 19.8901C2.87029 19.4601 3.83031 19.71 4.26031 20.46C4.47031 20.82 4.53034 21.2499 4.42034 21.6499ZM5.67034 22.0801C5.83034 21.5401 5.84034 20.9602 5.67034 20.4102L9.99029 17.9102C10.6803 18.7702 11.6804 19.3698 12.8204 19.5498V24.54C12.2604 24.67 11.7603 24.9699 11.3703 25.3799L5.66033 22.0801H5.67034ZM13.4903 28.9302C12.6203 28.9302 11.9203 28.2299 11.9203 27.3599C11.9203 26.4899 12.6203 25.79 13.4903 25.79C14.3603 25.79 15.0604 26.4899 15.0604 27.3599C15.0604 28.2299 14.3603 28.9302 13.4903 28.9302ZM15.6004 25.3701C15.2204 24.9601 14.7203 24.6698 14.1503 24.5298V19.54C15.2903 19.37 16.2904 18.7699 16.9804 17.8999L21.3003 20.3999C21.1403 20.9099 21.1303 21.4597 21.2803 21.9897C21.2803 22.0197 21.3004 22.0501 21.3104 22.0801L15.6004 25.3701ZM25.4404 22.0298C25.0104 22.7798 24.0503 23.0401 23.3003 22.6001C22.9403 22.3901 22.6804 22.0499 22.5704 21.6499C22.4604 21.2499 22.5204 20.82 22.7304 20.46C22.9404 20.1 23.2804 19.84 23.6804 19.73C23.8204 19.69 23.9504 19.6802 24.0904 19.6802C24.3604 19.6802 24.6303 19.7501 24.8703 19.8901C25.6203 20.3201 25.8804 21.2798 25.4404 22.0298Z" fill="currentColor" />
  </svg>
)
const IconPin = () => (
  <svg width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-primary">
    <path d="M10.6599 0C4.76991 0 0 4.76967 0 10.6597C0 16.5497 10.6599 32.21 10.6599 32.21C10.6599 32.21 21.3199 16.5397 21.3199 10.6597C21.3199 4.77967 16.5499 0 10.6599 0ZM10.6599 14.7197C7.48991 14.7197 4.91992 12.15 4.91992 8.97998C4.91992 5.80998 7.48991 3.23975 10.6599 3.23975C13.8299 3.23975 16.4 5.80998 16.4 8.97998C16.4 12.15 13.8299 14.7197 10.6599 14.7197Z" fill="currentColor" />
  </svg>
)

export default function InvestmentEnvSection() {
  const t = useTranslations()
  return (
    <section id="section-investment-env" className={`bg-white py-16 md:py-20 ${SECTION_PADDING_X}`}>
      <div className={SECTION_CONTENT_WRAPPER_CLASS}>
        <div className="flex items-center justify-end gap-0 w-full mb-4">
          <svg className="flex-shrink-0 h-8" viewBox="0 0 470 31" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: 'clamp(249.6px, 24.375vw, 936px)' }}>
            <path d="M90.8896 15.75H469.82" stroke="#757575" strokeWidth="3" strokeMiterlimit="10" />
            <path d="M0 15.75H63.67" stroke="#757575" strokeWidth="3" strokeMiterlimit="10" />
            <path d="M106.5 1.5H78.7705V29.23H106.5V1.5Z" stroke="#F25303" strokeWidth="3" strokeMiterlimit="10" />
          </svg>
          <h2 className="text-gray-700 flex-shrink-0 text-right" style={{ marginLeft: 'clamp(16px, 1.5625vw, 60px)' }}>
            <span className="font-normal" style={{ fontSize: 'clamp(32px, 3.125vw, 120px)' }}>Môi trường</span>{' '}
            <span className="font-extrabold" style={{ fontSize: 'clamp(43.73px, 4.27vw, 164px)' }}>Đầu Tư</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-[clamp(378.67px,36.98vw,1420px)] max-w-full aspect-square flex items-center justify-center">
              <Image
                src="/images/sections/env_chart.svg"
                width={715}
                height={715}
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-0 w-full flex flex-col" style={{ ['--icon-col-width' as string]: 'calc(clamp(106.67px, 10.42vw, 400px) + 40px)' }}>
            <div className="relative">
            <div className="flex items-stretch w-full">
              <div className="flex-1 min-w-0 flex flex-col w-full overflow-hidden">
                <div className="flex border-b-2 border-black border-solid pb-1 w-full" style={{ alignItems: 'stretch' }}>
                  <p className="flex-1 font-light min-w-0 pl-4" style={{ fontSize: 'clamp(10.13px, 0.99vw, 38px)', color: '#070707' }}>FDI gần</p>
                  <div className="shrink-0" style={{ width: 'var(--icon-col-width)' }} />
                </div>
                <div className="flex w-full" style={{ alignItems: 'stretch' }}>
                  <div className="flex-1 font-extrabold text-primary min-w-0 pl-4 pt-[10px]" style={{ fontSize: 'clamp(38.4px, 3.75vw, 144px)', lineHeight: 1 }}>50 tỷ <span className="text-base font-normal text-gray-500" style={{ lineHeight: 1 }}>USD</span></div>
                  <div className="pl-0 flex items-center justify-center shrink-0" style={{ width: 'var(--icon-col-width)' }}>
                    <span className="font-light block text-gray-800" style={{ WebkitTextStroke: '2px currentColor', paintOrder: 'stroke fill', lineHeight: 0.8, fontSize: 'clamp(48px, 5vw, 180px)' }}>$</span>
                  </div>
                </div>
                <div className="flex border-b-2 border-black border-solid pb-1 w-full" style={{ alignItems: 'stretch' }}>
                  <p className="flex-1 font-light min-w-0 pl-4" style={{ fontSize: 'clamp(10.13px, 0.99vw, 38px)', color: '#070707' }}>Diện tích</p>
                  <div className="shrink-0" style={{ width: 'var(--icon-col-width)' }} />
                </div>
                <div className="flex w-full" style={{ alignItems: 'stretch' }}>
                  <div className="flex-1 font-extrabold text-primary min-w-0 pl-4 pt-[10px]" style={{ fontSize: 'clamp(38.4px, 3.75vw, 144px)', lineHeight: 1 }}>4.718,6 <span className="text-base font-normal text-gray-500" style={{ lineHeight: 1 }}>Km²</span></div>
                  <div className="pl-0 flex items-center justify-center shrink-0" style={{ width: 'var(--icon-col-width)' }}>
                    <Image src="/images/sections/icon_area.svg" alt="" width={116} height={116} className="max-w-full max-h-full w-auto h-auto object-contain" />
                  </div>
                </div>
                <div className="flex border-b-2 border-black border-solid pb-1 w-full" style={{ alignItems: 'stretch' }}>
                  <p className="flex-1 font-light min-w-0 pl-4" style={{ fontSize: 'clamp(10.13px, 0.99vw, 38px)', color: '#070707' }}>Nguồn nhân lực hơn</p>
                  <div className="shrink-0" style={{ width: 'var(--icon-col-width)' }} />
              </div>
                <div className="flex w-full" style={{ alignItems: 'stretch' }}>
                  <div className="flex-1 font-extrabold text-primary min-w-0 pl-4 pt-[10px]" style={{ fontSize: 'clamp(38.4px, 3.75vw, 144px)', lineHeight: 1 }}>2 triệu <span className="text-base font-normal text-gray-500" style={{ lineHeight: 1 }}>lao động</span></div>
                  <div className="pl-0 flex items-center justify-center shrink-0" style={{ width: 'var(--icon-col-width)' }}>
                    <Image src="/images/sections/icon_people.svg" alt="" width={132} height={102} className="max-w-full max-h-full w-auto h-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-8 shrink-0" aria-hidden />
            <div className="absolute top-0 bottom-0 w-[1.5px] bg-primary pointer-events-none" style={{ left: 'calc(100% - var(--icon-col-width))' }} aria-hidden />
            <div className="absolute top-0 h-[1.5px] bg-primary pointer-events-none" style={{ left: 'calc(100% - var(--icon-col-width))', width: 'clamp(18.13px, 1.77vw, 68px)' }} aria-hidden />
            <div className="absolute top-0 rounded-full bg-primary pointer-events-none -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(100% - var(--icon-col-width) + clamp(18.13px, 1.77vw, 68px) + 12px)', width: 'clamp(18.13px, 1.77vw, 68px)', height: 'clamp(18.13px, 1.77vw, 68px)' }} aria-hidden />
            </div>

            <div
              className="grid w-full border-[1.5px] border-primary border-solid pb-4"
              style={{ gridTemplateColumns: '1fr var(--icon-col-width)' }}
            >
              <div className="flex items-center py-2 pt-4 pl-4">
                <span className="text-primary">Hạ tầng giao thông</span>
              </div>
              <div className="flex items-center justify-center py-2 pt-4 relative">
                <span className="absolute left-0 -translate-x-[calc(50%-2px)]">
                  <IconTransport />
                </span>
              </div>
              <div className="col-span-2 border-t-[1.5px] border-primary border-solid" />
              <div className="flex items-center pt-3 py-2 pl-4">
                <span className="text-primary">Mạng lưới KCN</span>
              </div>
              <div className="flex items-center justify-center pt-3 py-2 relative">
                <span className="absolute left-0 -translate-x-[calc(50%-2px)]">
                  <IconNetwork />
                </span>
              </div>
              <div className="col-span-2 border-t-[1.5px] border-primary border-solid" />
              <div className="flex items-center pt-3 py-2 pl-4">
                <span className="text-primary">Vị trí chiến lược</span>
              </div>
              <div className="flex items-center justify-center pt-3 py-2 relative">
                <span className="absolute left-0 -translate-x-[calc(50%-2px)]">
                  <IconPin />
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/news"
                className="bg-primary text-white rounded-bl-[4rem] rounded-tr-[4rem] hover:bg-primary/90 transition flex items-center
                  py-[clamp(5.17px,1.38vw,10.58px)] pl-[clamp(22.21px,5.92vw,45.48px)] pr-[clamp(16.12px,4.3vw,33.01px)] text-[clamp(10.5px,2.8vw,21.5px)] gap-[clamp(12.08px,3.22vw,24.73px)]
                  lg:py-[clamp(5px,0.47vw,18px)] lg:pl-[clamp(21px,2.03vw,79px)] lg:pr-[clamp(15px,1.48vw,57px)] lg:text-[clamp(8px,0.76vw,29px)] lg:gap-[clamp(11px,1.10vw,42px)]
                "
              >
                {t('news.article.readMore')}
                <div className=" flex items-center justify-center rounded-full bg-white w-[clamp(18px,4.8vw,36.86px)] h-[clamp(18px,4.8vw,36.86px)] lg:w-[clamp(13px,1.30vw,50px)] lg:h-[clamp(13px,1.30vw,50px)]">
                  <span className="text-[clamp(15px,4vw,30.72px)] lg:text-[clamp(13px,1.25vw,48px)] text-primary leading-none mb-[clamp(4.5px,1.2vw,9.22px)] lg:mb-[clamp(5px,0.52vw,20px)]">&rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
