'use client'

import Image from 'next/image'
import ThinkEasyDoBetter from '@/components/ThinkEasyDoBetter'

export type VisionMissionSectionProps = {
  children?: React.ReactNode
  centerChildren?: boolean
  centerBottomBlock?: boolean
}

export default function VisionMissionSection({ children, centerChildren = true, centerBottomBlock = false }: VisionMissionSectionProps) {

  return (
    <section className="relative w-full aspect-[500/666] lg:aspect-1920/1242 -mb-[clamp(21.7px,5.79vw,44.42px)] lg:-mb-[clamp(30px,2.94vw,113px)]">
      <div className="absolute inset-0">
        <Image
          src="/images/home/vision_bg.png"
          alt="Background"
          fill
          className="object-cover lg:block hidden"
          sizes="100vw"
        />
        <Image
          src="/images/home/vision_bg_mb.svg"
          alt="Background Mobile"
          fill
          className="object-cover lg:hidden block"
        />
      </div>

      <div className="relative z-20 h-full flex items-center justify-center px-4">
        {children != null ? (
          centerChildren ? (
            <div className="absolute inset-0 flex items-center justify-center">
              {children}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {children}
            </div>
          )
        ) : (
          <div className="text-white flex flex-col items-center justify-center">
            <ThinkEasyDoBetter />
          </div>
        )}
      </div>

      <div
        className={`z-20 lg:absolute lg:bottom-[clamp(53px,5.18vw,199px)] flex items-end lg:gap-[clamp(273px,26.67vw,1024px)]
          ${centerBottomBlock ? 'justify-center lg:left-1/2 lg:-translate-x-1/2 lg:right-auto' : 'justify-end lg:right-[clamp(60px,5.89vw,226px)]'}`}
      >
          <Image
            src="/images/home/vision_next_action.svg"
            className="h-auto 
              w-[clamp(97.5px,26vw,199.68px)] absolute bottom-[clamp(195.75px,52.2vw,401.98px)] left-[clamp(73.4px,19.57vw,150.32px)] 
              lg:w-[clamp(99px,9.69vw,372px)] lg:static 
            "
            alt="Next Action"
            width={140}
            height={100}
          />
        <div
          className="flex items-end 
            absolute bottom-[clamp(35.95px,9.59vw,73.63px)] right-[clamp(13.93px,3.72vw,28.54px)] gap-[clamp(6px,1.6vw,12.29px)]
            lg:static lg:gap-[clamp(24px,2.36vw,91px)]
          "
        >
          <Image
            src="/images/home/vision_icon.svg"
            className="h-auto w-[clamp(15px,4vw,30.72px)] lg:w-[clamp(25px,2.42vw,93px)]"
            alt="Vision Icon"
            width={34}
            height={34}
          />
          <Image
            src="/images/home/vision_click.svg"
            className="h-auto w-[clamp(17.26px,4.6vw,35.35px)] lg:w-[clamp(29px,2.81vw,108px)]"
            alt="Click"
            width={40}
            height={40}
          />
          <Image
            src="/images/home/vision_dot.svg"
            className="h-auto w-[clamp(45px,12vw,92.16px)] lg:w-[clamp(68px,6.61vw,255px)]"
            alt="Dot"
            width={94}
            height={94}
          />
        </div>
      </div>
    </section>
  )
}
