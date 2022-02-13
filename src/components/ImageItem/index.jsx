import React, { useLayoutEffect, useRef } from 'react'

const ImageItem = ({ imgUrl, text }) => {
  const imgRef = useRef()
  const imgContainer = useRef()
  useLayoutEffect(() => {
    const aspectRatio = imgRef.current.offsetHeight / imgRef.current.offsetWidth
    if (aspectRatio > 1.2) {
      imgContainer.current.classList.add('!px-3')
      imgContainer.current.classList.add('!lg:px-9')
    }
  }, [])
  return (
    <div className='space-y-4 text-center flex flex-col justify-between items-center'>
      <div ref={imgContainer} className='px-2 lg:px-5 xl:px-7'>
        <a href='/'>
          <img
            ref={imgRef}
            className='w-full'
            src={imgUrl}
            alt={`logo of ${text}`}
          />
        </a>
      </div>
      <span className='inline-block'>{text}</span>
    </div>
  )
}

export default ImageItem
