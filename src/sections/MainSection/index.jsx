import React from 'react'
import ConfigurationSection from '../ConfigurationSection'
import FeatureSection from '../FeatureSection'
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
    </main>
  )
}

export default MainSection
