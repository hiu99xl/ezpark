'use client'

const ANIMATION_DELAY = '0.02s'

type AnimationType = 'center' | 'right'

/** Single letter with optional underline (e.g. "a" in "easy") */
function AnimatedLetter({
  char,
  animation,
  underline = false,
}: {
  char: string
  animation: AnimationType
  underline?: boolean
}) {
  const animationClass =
    animation === 'center' ? 'animate-think-from-center' : 'animate-think-from-right'
  const underlineClass = underline
    ? `relative after:content-[''] after:absolute after:left-0 after:right-0 after:w-full after:bg-current after:opacity-[0.5] after:z-[1] after:pointer-events-none after:block after:-bottom-[clamp(7.5px,2vw,15.36px)] after:h-[clamp(4.5px,1.2vw,7.68px)] lg:after:-bottom-[clamp(6px,0.63vw,24px)] lg:after:h-[clamp(4px,0.39vw,15px)]`
    : ''

  return (
    <span
      className={`${animationClass} inline-block ${underlineClass}`}
      style={{ animationDelay: ANIMATION_DELAY }}
    >
      {char}
    </span>
  )
}

/** Word rendered as animated letters */
function AnimatedWord({
  text,
  animation,
  underlinedIndex,
}: {
  text: string
  animation: AnimationType
  underlinedIndex?: number
}) {
  return (
    <>
      {text.split('').map((char, i) => (
        <AnimatedLetter
          key={`${text}-${i}-${char}`}
          char={char}
          animation={animation}
          underline={i === underlinedIndex}
        />
      ))}
    </>
  )
}

/** Line config: text, animation, and h2 className */
const SLOGAN_LINES = [
  {
    text: 'THINK',
    animation: 'center' as const,
    className:
      'font-extrabold leading-none tracking-tight text-[clamp(39.12px,10.43vw,80.12px)] lg:text-[clamp(34px,3.29vw,126px)]',
  },
  {
    text: 'easy',
    animation: 'right' as const,
    underlinedIndex: 1,
    className:
      'font-bold leading-[1.02] overflow-visible tracking-tight text-[clamp(43.98px,11.73vw,90.06px)] -mt-[clamp(7.5px,2vw,15.36px)] lg:text-[clamp(38px,3.7vw,142px)] lg:-mt-[clamp(10px,0.94vw,36px)]',
  },
  {
    text: 'DO',
    animation: 'center' as const,
    className:
      'font-extrabold leading-none tracking-tight text-[clamp(55.56px,14.82vw,113.74px)] -mt-[clamp(10px,0.7547vw+7.17px,12px)] -translate-x-[clamp(79px,21vw,161px)] lg:text-[clamp(48px,4.67vw,179px)] lg:-mt-[clamp(11px,1.04vw,40px)] lg:-translate-x-[clamp(69px,6.77vw,260px)]',
  },
  {
    text: 'better',
    animation: 'right' as const,
    className:
      'font-extrabold leading-none tracking-tight text-[clamp(40px,10.6vw,82px)] -mt-[clamp(7.5px,2vw,15.36px)] lg:text-[clamp(34px,3.35vw,129px)] lg:-mt-[clamp(5px,0.52vw,20px)]',
  },
] as const

/**
 * Slogan block "THINK / easy / DO / better" – same layout and styling as Hero.
 * Used in HeroSection and VisionMissionSection.
 */
export default function ThinkEasyDoBetter() {
  return (
    <div className="relative">
      {SLOGAN_LINES.map((line) => (
        <h2 key={line.text} className={line.className}>
          <AnimatedWord
            text={line.text}
            animation={line.animation}
            underlinedIndex={'underlinedIndex' in line ? line.underlinedIndex : undefined}
          />
        </h2>
      ))}
    </div>
  )
}
