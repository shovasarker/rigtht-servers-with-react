import React from 'react'

const DistributionSection = () => {
  return (
    <section className='container px-8 lg:px-16 xl:px-32 mb-20'>
      <h1 className='text-2xl md:text-4xl font-bold text-title mb-5 text-center'>
        Available Distribution
      </h1>
      <p className='text-base text-title font-normal leading-loose text-center mb-16'>
        Our High Performance Bare Metal server offer you high
        <br />
        reliability and stability
      </p>
      <div className='flex flex-col md:flex-row justify-start items-start gap-6'>
        <aside className='space-y-4 md:flex-shrink-0'>
          <div className=' p-8 bg-white rounded-sm shadow-sm font-bold text-lg text-title'>
            Operating Systems
          </div>
          <div className='active p-8 bg-white rounded-sm shadow-sm font-bold text-lg text-title'>
            1-Click App
          </div>
        </aside>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-x-10 lg:gap-x-12 2xl:gap-x-20 gap-y-6 bg-white py-10 px-14 text-sm text-title shadow-lg'>
          {/* <!-- row - 1 --> */}
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/cloudron1.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Cloudron</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/plexer1.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Plexer</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/strapi1.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Starpi</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-5 md:px-3 lg:px-8 xl:px-10'>
              <img className='w-full' src='./images/wordpress1.png' alt='' />
            </div>
            <span className='inline-block'>Wordpress</span>
          </div>

          {/* <!-- row - 1 --> */}
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/cloudron2.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Cloudron</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/plexer2.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Plexer</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/starpi2.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Starpi</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img className='w-full' src='./images/wordpress2.png' alt='' />
            </div>
            <span className='inline-block'>Wordpress</span>
          </div>

          {/* <!-- row - 3 --> */}
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/cloudron3.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Cloudron</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/plexer3.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Plexer</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img
                className='w-full aspect-square'
                src='./images/starpi3.png'
                alt=''
              />
            </div>
            <span className='inline-block'>Starpi</span>
          </div>
          <div className='space-y-4 text-center'>
            <div className='px-2 lg:px-7'>
              <img className='w-full' src='./images/wordpress3.png' alt='' />
            </div>
            <span className='inline-block'>Wordpress</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DistributionSection
