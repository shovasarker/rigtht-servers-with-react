import React from 'react'
import { SERVER_SECTION_DATA } from '../../data'

const ServerSection = () => {
  const { title, descriptionPart1, descriptionPart2 } = SERVER_SECTION_DATA
  return (
    <section className='container px-8 lg:px-16 xl:px-32 mb-4'>
      <div className='flex flex-col-reverse md:flex-row items-center lg:justify-between gap-8'>
        <div className='md:w-1/2 xl:w-2/5'>
          <div className='text-2xl md:text-4xl font-bold text-title mb-6'>
            {title}
          </div>
          <p className='text-base font-normal text-title mb-8'>
            {descriptionPart1}
          </p>
          <p className='text-base font-normal text-title'>{descriptionPart2}</p>
        </div>
        <div className='md:w-1/2 p-4'>
          <img src='./images/servers.png' alt='' className='w-full' />
        </div>
      </div>
    </section>
  )
}

export default ServerSection
