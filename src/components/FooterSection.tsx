'use client'

import VisionMissionSection from './VisionMissionSection'
import Footer from './Footer'

/**
 * Home page footer: Vision/Mission block + shared Footer (form overlaps vision).
 */
export default function FooterSection() {
  return (
    <>
      <VisionMissionSection/>
      <Footer hasVisionAbove />
    </>
  )
}
