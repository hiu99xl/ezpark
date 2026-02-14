'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { toast } from 'sonner'
import { getLanguageIdFromLocale } from '@/lib/contact'

export type FooterProps = {
  hasVisionAbove?: boolean
}

const SITE_ID = 1

export default function Footer({ hasVisionAbove = false }: FooterProps) {
  const t = useTranslations()
  const locale = useLocale()
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY + window.innerHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      setShowBackToTop(scrollPercentage > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section
        id="section-footer"
        className="
          relative z-40 bg-[#1E1E1E] 
          px-[clamp(15.51px,4.14vw,31.78px)] lg:px-[clamp(61px,5.97vw,229px)]
          min-h-[clamp(225.75px,60.2vw,462.34px)] lg:min-h-[clamp(159px,15.57vw,599px)]
          lg:pt-[clamp(23px,2.27vw,87px)]
        "
      >
        <div
          className="
            absolute z-60 rounded-xl text-white flex flex-col
            aspect-319/320 -top-[clamp(161.2px,42.99vw,330.13px)] w-[clamp(239.25px,63.8vw,489.98px)] pt-[clamp(32.34px,8.62vw,66.23px)] pb-[clamp(11.17px,2.98vw,22.88px)] px-[clamp(28.13px,7.5vw,57.61px)] gap-[clamp(9px,2.4vw,18.43px)]
            lg:aspect-559/561 lg:-top-[clamp(169px,16.46vw,632px)] lg:w-[clamp(299px,29.11vw,1118px)] lg:pt-[clamp(40px,3.94vw,151px)] lg:pb-[clamp(14px,1.39vw,53px)] lg:px-[clamp(35px,3.43vw,132px)] lg:gap-[clamp(11px,1.10vw,42px)]
          "
          style={{
            backgroundImage: `url('/images/home/footer_form_bg.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="font-bold text-[clamp(15px,4vw,30.72px)] lg:text-[clamp(17px,1.71vw,66px)]">
            {t('footer.form.title')} <br />
            {t('footer.form.title2')} <br />
            {t('footer.form.title3')}
          </h3>
          <form
            className="flex flex-col gap-[clamp(8.62px,2.3vw,17.65px)] lg:gap-[clamp(11px,1.05vw,40px)]"
            onSubmit={async (e) => {
              e.preventDefault()
              setStatus('loading')
              try {
                const res = await fetch('/api/contact-submissions', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    site: SITE_ID,
                    language: getLanguageIdFromLocale(locale),
                  }),
                })
                const data = await res.json().catch(() => ({}))
                if (!res.ok) {
                  setStatus('error')
                  toast.error((data?.error as string) || t('footer.form.errorGeneric'))
                  return
                }
                setStatus('success')
                setName('')
                setEmail('')
                setPhone('')
                toast.success(t('footer.form.success'))
              } catch {
                setStatus('error')
                toast.error(t('footer.form.errorGeneric'))
              }
            }}
          >
            <input
              type="text"
              placeholder={t('footer.form.name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={status === 'loading'}
              className="
                w-full bg-white/90 text-black rounded-[clamp(6px,1.6vw,12.29px)] px-[clamp(5.91px,1.58vw,12.09px)] focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-70
                h-[clamp(22.5px,6vw,46.08px)] lg:h-[clamp(28px,2.76vw,106px)] lg:px-[clamp(7px,0.68vw,26px)] lg:rounded-[clamp(9px,0.85vw,33px)]
              "
              suppressHydrationWarning
            />
            <input
              type="text"
              placeholder={t('footer.form.phone')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={status === 'loading'}
              className="
                w-full bg-white/90 text-black rounded-[clamp(6px,1.6vw,12.29px)] px-[clamp(5.91px,1.58vw,12.09px)] focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-70
                h-[clamp(22.5px,6vw,46.08px)] lg:h-[clamp(28px,2.76vw,106px)] lg:px-[clamp(7px,0.68vw,26px)] lg:rounded-[clamp(9px,0.85vw,33px)]
              "
              suppressHydrationWarning
            />
            <input
              type="email"
              placeholder={t('footer.form.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="
                w-full bg-white/90 text-black rounded-[clamp(6px,1.6vw,12.29px)] px-[clamp(5.91px,1.58vw,12.09px)] focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-70
                h-[clamp(22.5px,6vw,46.08px)] lg:h-[clamp(28px,2.76vw,106px)] lg:px-[clamp(7px,0.68vw,26px)] lg:rounded-[clamp(9px,0.85vw,33px)]
              "
              suppressHydrationWarning
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="
                  cursor-pointerbg-transparent border border-[#FFC67B] text-white  font-light hover:border-[#FFC67B]/80 transition flex items-center disabled:opacity-70 disabled:cursor-not-allowed
                  rounded-bl-[clamp(24px,6.4vw,49.15px)] rounded-tr-[clamp(24px,6.4vw,49.15px)] pt-[clamp(5.17px,1.38vw,10.58px)] pb-[clamp(5.91px,1.58vw,12.09px)] px-[clamp(18px,4.8vw,36.86px)] gap-[clamp(9px,2.4vw,18.43px)] text-[clamp(9px,2.4vw,18.43px)]
                  lg:rounded-bl-[clamp(17px,1.69vw,65px)] lg:rounded-tr-[clamp(17px,1.69vw,65px)] lg:pt-[clamp(6px,0.56vw,22px)] lg:pb-[clamp(7px,0.67vw,26px)] lg:px-[clamp(17px,1.69vw,65px)] lg:gap-[clamp(12px,1.12vw,43px)] lg:text-[clamp(9px,0.87vw,33px)]
                "
                suppressHydrationWarning
              >
                {status === 'loading' ? t('footer.form.sending') : t('footer.form.submit')}{' '}
                <div className="w-[clamp(13.5px,3.6vw,27.65px)] lg:w-[clamp(16px,1.56vw,60px)] h-[clamp(13.5px,3.6vw,27.65px)] lg:h-[clamp(16px,1.56vw,60px)] bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary text-[clamp(10.5px,2.8vw,21.5px)] mb-[clamp(3px,0.8vw,6.14px)] lg:text-[clamp(13px,1.25vw,48px)] lg:mb-[clamp(5px,0.52vw,20px)]">&rarr;</span>
                </div>
              </button>
            </div>
          </form>
        </div>

        <div
          className="grid 
            grid-cols-4 pb-[clamp(31.37px,8.36vw,64.25px)] pr-[clamp(12px,3.2vw,24.58px)]
            lg:grid-cols-12 lg:pb-[clamp(22px,2.10vw,81px)] lg:pr-0 lg:pl-[clamp(363px,35.40vw,1360px)]
          "
        >
          <div
            className="
              text-white text-left flex flex-col
              col-span-3 pt-[clamp(97.09px,25.89vw,198.84px)] gap-[clamp(10.5px,2.8vw,21.5px)]
              lg:col-span-10 lg:pt-0 lg:gap-[clamp(15px,1.50vw,58px)]
            "
          >
            <div>
              <p
                className="font-bold 
                  text-[clamp(10.5px,2.8vw,21.5px)] mb-[clamp(5.91px,1.58vw,12.09px)]
                  lg:text-[clamp(11px,1.05vw,40px)] lg:mb-[clamp(8px,0.75vw,29px)]
                "
              >{t('footer.company.name')}</p>
              <p className="text-[clamp(9.06px,2.42vw,18.55px)] lg:text-[clamp(9px,0.85vw,33px)] font-[200] mb-[clamp(4.75px,1.27vw,9.72px)] lg:mb-[clamp(6px,0.55vw,21px)]">{t('footer.company.developedBy')}</p>
              <p className="text-[clamp(9.06px,2.42vw,18.55px)] lg:text-[clamp(9px,0.85vw,33px)] font-[200]">{t('footer.company.headquarters')}</p>
            </div>
            <div>
              <p
                className="font-bold 
                  text-[clamp(10.5px,2.8vw,21.5px)] mb-[clamp(5.91px,1.58vw,12.09px)]
                  lg:text-[clamp(11px,1.05vw,40px)] lg:mb-[clamp(8px,0.75vw,29px)]
                "
              >{t('footer.company.contactAddress')}</p>
              <p className="text-[clamp(9.06px,2.42vw,18.55px)] lg:text-[clamp(9px,0.85vw,33px)] font-[200] mb-[clamp(4.75px,1.27vw,9.72px)] lg:mb-[clamp(6px,0.55vw,21px)]">{t('footer.company.businessOffice')}</p>
              <p className="text-[clamp(9.06px,2.42vw,18.55px)] lg:text-[clamp(9px,0.85vw,33px)] font-[200]">{t('footer.company.businessAddress')}</p>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 text-white flex flex-col items-end justify-end gap-[clamp(16.32px,4.35vw,33.43px)]">
            <button
              onClick={scrollToTop}
              className="z-50 transition-all duration-300 hover:scale-110 cursor-pointer lg:absolute lg:bottom-[clamp(13px,1.28vw,49px)] lg:right-[clamp(18px,1.72vw,66px)]"
              aria-label="Back to top"
              suppressHydrationWarning
            >
              <Image
                src="/images/home/footer_back_to_top.svg"
                alt="Back to top"
                width={31}
                height={31}
                className="w-[clamp(36.75px,9.8vw,75.26px)] lg:w-[clamp(22px,2.19vw,84px)] h-auto"
              />
            </button>
            <div className="flex items-center">
              <a
                  href="https://www.linkedin.com/company/108749043"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="hover:opacity-80 transition-opacity translate-x-[20%]"
                  aria-label="Facebook"
                >
                <Image
                  src="/images/home/footer_follow_us.png"
                  alt="LinkedIn"
                  width={92}
                  height={55}
                  className="w-[clamp(69px,18.4vw,141.31px)] lg:w-[clamp(49px,4.79vw,184px)] h-auto"
                />
              </a>
            </div>
            <div className="flex items-center gap-2">
                <Image
                  src="/images/home/footer_mail.svg"
                  alt="Email"
                  width={24}
                  height={24}
                  className="w-[clamp(23.25px,6.2vw,47.62px)] lg:w-[clamp(18px,1.72vw,66px)] h-auto"
                />
            </div>
            <div className="relative flex items-center justify-center w-[clamp(36px,9.6vw,73.73px)] h-[clamp(36px,9.6vw,73.73px)] translate-x-[20%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute rounded-full border border-orange-400 animate-ping w-[clamp(22.5px,6vw,46.08px)] lg:w-[clamp(20px,1.92vw,74px)] h-[clamp(22.5px,6vw,46.08px)] lg:h-[clamp(20px,1.92vw,74px)] opacity-60" />
                <div className="absolute rounded-full border border-orange-400 animate-ping w-[clamp(27px,7.2vw,55.3px)] lg:w-[clamp(24px,2.31vw,90px)] h-[clamp(27px,7.2vw,55.3px)] lg:h-[clamp(24px,2.31vw,90px)] opacity-50 [animation-delay:0.3s]" />
                <div className="absolute rounded-full border border-orange-400 animate-ping w-[clamp(31.5px,8.4vw,64.51px)] lg:w-[clamp(28px,2.69vw,105px)] h-[clamp(31.5px,8.4vw,64.51px)] lg:h-[clamp(28px,2.69vw,105px)] opacity-40 [animation-delay:0.6s]" />
                <div className="absolute rounded-full border border-orange-400 animate-ping w-[clamp(36px,9.6vw,73.73px)] lg:w-[clamp(32px,3.09vw,122px)] h-[clamp(36px,9.6vw,73.73px)] lg:h-[clamp(32px,3.09vw,122px)] opacity-30 [animation-delay:0.9s]" />
              </div>
              <div
                className="absolute bg-orange-500 rounded-full flex items-center justify-center z-0
                  w-[clamp(24px,6.4vw,49.15px)] h-[clamp(24px,6.4vw,49.15px)] 
                  lg:w-[clamp(28px,2.71vw,104px)] lg:h-[clamp(28px,2.71vw,104px)]
                "
              />
              <a
                href="tel:+84899386386"
                className="relative z-10 flex items-center justify-center"
              >
                <Image
                  src="/images/home/footer_phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="w-[clamp(15.65px,4.17vw,32.05px)] lg:w-[clamp(13px,1.25vw,48px)] h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between lg:justify-start text-white/60 text-[clamp(6px,1.6vw,12.29px)] lg:text-[clamp(7px,0.67vw,26px)] font-[200] pb-[clamp(10.5px,2.8vw,21.5px)] lg:pb-[clamp(10px,1.01vw,39px)] text-nowrap">
          <p className="lg:mr-[clamp(61px,5.94vw,228px)]">{t('footer.copyright')}</p>
          <a href="https://www.gsholding.com.vn" target="_blank" rel="noopener noreferrer nofollow" className="lg:mr-[clamp(495px,48.33vw,1856px)]">{t('footer.website')}</a>
          <p>{t('footer.designedBy')}</p>
        </div>
      </section>
    </>
  )
}
