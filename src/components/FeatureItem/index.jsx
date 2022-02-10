import React from 'react'

const FeatureItem = ({ imgUrl, itemTitle, itemDetails }) => {
  return (
    <div className='relative bg-white rounded-md shadow-xl'>
      <img
        src={imgUrl}
        alt=''
        className='absolute -top-15p left-50p -translate-x-50p'
      />
      <div className='p-9 pt-16'>
        <h2 className='text-xl font-bold text-title mb-4'>{itemTitle}</h2>
        <p className='text-base font-normal text-title/70'>{itemDetails}</p>
      </div>
    </div>
  )
}

export default FeatureItem
