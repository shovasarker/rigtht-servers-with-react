import React from 'react'

const TestServerItem = ({ imgUrl, location }) => {
  return (
    <div className='item flex justify-between items-center text-sm py-3'>
      <div className='space-x-3'>
        <img
          className='inline-block w-4 h-4 rounded-full'
          src={imgUrl}
          alt='Location Flag of the Server'
        />
        <span className='text-white font-normal'>{location}</span>
      </div>
      <a
        href='/'
        className='text-btnBlue font-normal hover:text-white transition-colors'
      >
        Test Speed
      </a>
    </div>
  )
}

export default TestServerItem
