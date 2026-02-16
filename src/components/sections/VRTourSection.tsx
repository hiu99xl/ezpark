'use client'

import Image from 'next/image'
import { SECTION_PADDING_X, SECTION_CONTENT_WRAPPER_CLASS } from '@/constants/layout'

export default function VRTourSection() {
  return (
    <section id="section-master-plan" className={`w-full py-9 ${SECTION_PADDING_X}`}>
      <div className={SECTION_CONTENT_WRAPPER_CLASS}>
        <div className="flex justify-end mb-8" aria-hidden>
          <Image
            src="/images/home/line_vr.svg"
            alt=""
            width={950}
            height={110}
            className="w-[clamp(506.67px,49.48vw,1900px)] h-auto object-contain object-right"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[745px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group cursor-pointer">
          <Image
            src="/images/home/vr_images.png"
            alt="VR Tour"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1440px"
          />
        </div>
      </div>
    </section>
  )
}
