import React from 'react'
import { OFFER_PACKAGE_DATA } from '../../data'
import OfferPackage from '../../components/OfferPackage'

const OfferSection = () => {
  const offerPackageData = OFFER_PACKAGE_DATA
  return (
    <section className='container px-8 lg:px-16 xl:px-32 mb-16 -mt-40 lg:-mt-64 text-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mb-10'>
        {offerPackageData?.map(({ id, ...otherProps }) => {
          return <OfferPackage key={id} {...otherProps} />
        })}
      </div>
      <a
        href='/'
        className='inline-block text-btnBlue font-bold text-sm underline underline-offset-2 hover:text-btnBlue/80 transition-colors'
      >
        View Detail Pricing
      </a>
    </section>
  )
}

export default OfferSection
