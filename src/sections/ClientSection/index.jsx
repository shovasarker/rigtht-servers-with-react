import React from 'react'
import { CLIENT_SECTION_DATA } from '../../data'

const ClientSection = () => {
  const { numberOfClients, imageUrls } = CLIENT_SECTION_DATA
  return (
    <section className='bg-white'>
      <div className='container py-16 px-8 lg:px-16 xl:px-32'>
        <h1 className='text-center text-3xl leading-loose md:text-4xl  font-bold text-title mb-16'>
          Trusted by over{' '}
          <span className='text-btnBlue'>{numberOfClients}</span> companies
        </h1>
        <div className='flex justify-evenly items-center flex-wrap gap-10'>
          {imageUrls.length > 0 ? (
            imageUrls?.map((url, i) => {
              return <img key={i} src={url} alt='Client Logo' />
            })
          ) : (
            <div>No urls available</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ClientSection
