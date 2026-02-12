import type { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import {
  VRTourSection,
  OverviewCardsSection,
  AdvantagesSection,
  InvestorProcessSection,
  InvestmentEnvSection,
} from '@/components/sections'
import NewsSection from '@/components/NewsSection'
import FooterSection from '@/components/FooterSection'
import { fetchHomePageData } from '@/lib/api/pages'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const pageData = await fetchHomePageData(locale)
  if (pageData?.title) {
    return { title: pageData.title }
  }
  return {}
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const pageData = await fetchHomePageData(locale)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <HeroSection pageData={pageData} />
      <VRTourSection />
      <OverviewCardsSection />
      <AdvantagesSection />
      <InvestorProcessSection />
      <InvestmentEnvSection />
      <NewsSection />
      <FooterSection />
    </main>
  )
}
