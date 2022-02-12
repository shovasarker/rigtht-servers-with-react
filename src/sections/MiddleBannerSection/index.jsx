import React from 'react'
import { MIDDLE_BANNER_SECTION_DATA } from '../../data'

const MiddleBannerSection = () => {
  const { imgUrl, prevPrice, currPrice, title, detailsPart1, detailsPart2 } =
    MIDDLE_BANNER_SECTION_DATA
  return (
    <section className='container px-8 lg:px-20 xl:px-40 mb-20  '>
      <div className='h-max bg-gradient-to-r from-gStart to-gEnd py-12 md:py-6 px-4 md:px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4'>
        <div>
          <img className='w-full flex-shrink-0' src={imgUrl} alt='' />
        </div>
        <div className='flex flex-col justify-between items-center gap-7'>
          <div className='flex items-center flex-shrink-0'>
            <span className='prev-price-middle relative inline-block text-lg font-medium leading-none text-white/75 mr-2 md:mr-1 lg:mr-2.5 tracking-wide'>
              ${prevPrice}
            </span>
            <p className='text-base font-normal leading-none text-white/75 tracking-wide'>
              <span className='curr-price-middle relative pl-2 md:pl-2.5 text-5xl leading-none md:text-3xl md:leading-none lg:text-5xl lg:leading-none font-bold text-white'>
                {currPrice}
              </span>
              /mo
            </p>
          </div>
          <button
            type='button'
            className='text-sm text-white font-medium px-5 py-1.5 bg-paste border border-paste rounded-full hover:bg-white hover:text-paste transition-colors'
          >
            Buy Now
          </button>
        </div>
        <div className='w-64 h-px md:w-px md:h-28 bg-white/80'></div>
        <div className='text-white text-center md:text-left'>
          <h3 className='text-2xl font-bold mb-5'>{title}</h3>
          <p className='text-sm text-white/80 mb-3'>{detailsPart1}</p>
          <p className='text-sm text-white/80'>{detailsPart2}</p>
        </div>
      </div>
    </section>
  )
}

export default MiddleBannerSection
