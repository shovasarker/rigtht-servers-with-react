import React from 'react'
import FeatureItem from '../../components/FeatureItem'
import { PRODUCT_FEATURE_DATA } from '../../data'

const FeatureSection = () => {
  const { title, smallDetails, items } = PRODUCT_FEATURE_DATA
  return (
    <section className='feature-section bg-gradient-to-r from-gStart to-gEnd py-40 mb-10'>
      <div className='container px-8 lg:px-16 xl:px-32 text-center'>
        <h1 className='text-2xl md:text-4xl font-bold text-white mb-5'>
          {title}
        </h1>
        <div className='text-base text-white font-normal leading-loose mb-16'>
          {smallDetails.split('<br>').map((item, i) => {
            return <p key={i}>{item}</p>
          })}
        </div>

        {/* <!-- feature cards grid system --> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-8 md:gap-y-12'>
          {items?.map(({ id, ...otherProps }) => {
            return <FeatureItem key={id} {...otherProps} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
