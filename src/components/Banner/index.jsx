import React from 'react'

import bannerImg from '../../images/banner.png'
const Banner = () => {
  return (
    <section className='container px-8 lg:px-16 xl:px-32 mt-12 lg:mt-12'>
      <div className='flex flex-col lg:flex-row lg:justify-start items-center gap-12 lg:gap-24 xl:gap-24'>
        <div className='space-y-7 md:text-center lg:text-left lg:w-1/2'>
          <h1 className='text-4xl md:text-5xl md:leading-tight lg:text-5xl xl:text-6xl xl:leading-tight font-bold text-white'>
            Bare Metal Server
          </h1>
          <p className='text-base font-normal text-white'>
            Our general purpose range offers a balance of performance with
            CPU,RAM and disks.
          </p>
          <div className='flex justify-start md:justify-center lg:justify-start items-center gap-4'>
            <button className='custom-btn custom-btn-large custom-btn-primary'>
              Get Started
            </button>
            <button className='custom-btn custom-btn-large custom-btn-outline'>
              More Details
            </button>
          </div>
        </div>
        <div className='w-4/6 md:w-1/2 lg:w-2/5 lg:p-6'>
          <img src={bannerImg} alt='' className='w-full' />
        </div>
      </div>
    </section>
  )
}

export default Banner
