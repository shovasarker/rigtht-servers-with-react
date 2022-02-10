import React from 'react'
import ConfigurationSection from '../ConfigurationSection'
import FeatureSection from '../FeatureSection'
import OfferSection from '../OfferSection'
import ServerSection from '../ServerSection'

const MainSection = () => {
  return (
    <main>
      <OfferSection />
      <ServerSection />
      <FeatureSection />
      <ConfigurationSection />
    </main>
  )
}

export default MainSection
