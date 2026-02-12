'use client'

/**
 * Slogan block "THINK / easy / DO / better" – same layout and styling as Hero.
 * Used in HeroSection and VisionMissionSection.
 */
export default function ThinkEasyDoBetter() {
  return (
    <div className="relative">
      {/* THINK */}
      <h2 className="
        font-extrabold leading-none tracking-tight
        text-[clamp(39.12px,10.43vw,80.12px)]
        lg:text-[clamp(34px,3.29vw,126px)]
      ">
        <span className="animate-think-from-center inline-block" style={{ animationDelay: '0.02s' }}>T</span>
        <span className="animate-think-from-center inline-block" style={{ animationDelay: '0.02s' }}>H</span>
        <span className="animate-think-from-center inline-block" style={{ animationDelay: '0.02s' }}>I</span>
        <span className="animate-think-from-center inline-block" style={{ animationDelay: '0.02s' }}>N</span>
        <span className="animate-think-from-center inline-block" style={{ animationDelay: '0.02s' }}>K</span>
      </h2>
      {/* EASY */}
      <h2 className="
        font-bold leading-[1.02] overflow-visible tracking-tight
        text-[clamp(43.98px,11.73vw,90.06px)] -mt-[clamp(7.5px,2vw,15.36px)]
        lg:text-[clamp(38px,3.7vw,142px)] lg:-mt-[clamp(10px,0.94vw,36px)]
      ">
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>e</span>
        <span
          className="animate-think-from-right inline-block relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:w-full after:bg-current after:opacity-[0.5] after:z-[1] after:pointer-events-none after:block
            after:-bottom-[clamp(7.5px,2vw,15.36px)] after:h-[clamp(4.5px,1.2vw,7.68px)]
            lg:after:-bottom-[clamp(6px,0.63vw,24px)] lg:after:h-[clamp(4px,0.39vw,15px)]
          "
          style={{ animationDelay: '0.02s' }}
        >
          a
        </span>
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>s</span>
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>y</span>
      </h2>
      {/* DO */}
      <h2 className="
        font-extrabold leading-none tracking-tight
        text-[clamp(55.56px,14.82vw,113.74px)] -mt-[clamp(10px,0.7547vw+7.17px,12px)] -translate-x-[clamp(79px,21vw,161px)]
        lg:text-[clamp(48px,4.67vw,179px)] lg:-mt-[clamp(11px,1.04vw,40px)] lg:-translate-x-[clamp(69px,6.77vw,260px)]
      ">
        <span className="animate-think-from-center inline-block" style={{ animationDelay: '0.02s' }}>D</span>
        <span className="animate-think-from-center inline-block" style={{ animationDelay: '0.02s' }}>O</span>
      </h2>
      {/* BETTER */}
      <h2 className="
        font-extrabold leading-none tracking-tight
        text-[clamp(40px,10.6vw,82px)] -mt-[clamp(7.5px,2vw,15.36px)]
        lg:text-[clamp(34px,3.35vw,129px)] lg:-mt-[clamp(5px,0.52vw,20px)]
      ">
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>b</span>
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>e</span>
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>t</span>
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>t</span>
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>e</span>
        <span className="animate-think-from-right inline-block" style={{ animationDelay: '0.02s' }}>r</span>
      </h2>
    </div>
  )
}
