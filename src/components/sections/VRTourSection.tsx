'use client'

import Image from 'next/image'

export default function VRTourSection() {
  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
          <Image
            src="/images/sections/vr_tour.png"
            alt="VR Tour"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1440px"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-full w-20 h-20 flex items-center justify-center">
              <div className="text-white text-center">
                <span className="block text-xs font-bold">360</span>
                <span className="block text-xs">VR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
