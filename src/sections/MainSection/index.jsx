import React from 'react'
import ConfigurationSection from '../ConfigurationSection'
import FaqSection from '../FaqSection'
import FeatureSection from '../FeatureSection'
import MiddleBannerSection from '../MiddleBannerSection'
import OfferSection from '../OfferSection'
import ServerSection from '../ServerSection'
import TestServerSection from '../TestServerSection'

const MainSection = () => {
  return (
    <main>
      <OfferSection />
      <ServerSection />
      <FeatureSection />
      <ConfigurationSection />
      <TestServerSection />
      <MiddleBannerSection />
      <FaqSection />
    </main>
  )
}

export default MainSection
