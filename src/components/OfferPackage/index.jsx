import React from 'react'

const OfferPackage = ({
  isPopular,
  packageTitle,
  prevPrice,
  currPrice,
  discountAmount,
  offerIncludes,
}) => {
  return (
    <div
      className={`${
        isPopular ? 'popular' : ''
      } bg-white rounded-md shadow-xl z-30`}
    >
      <div className='p-8 space-y-6'>
        <div className='flex flex-col items-center space-y-4'>
          <h2 className='text-lg font-bold text-title text-center'>
            {packageTitle}
          </h2>
          <div className='flex items-center'>
            <span className='prev-price relative inline-block text-lg font-medium leading-none text-title/75 mr-2 tracking-wide'>
              ${prevPrice}
            </span>
            <p className='text-lg font-normal leading-none text-title/75 tracking-wide'>
              <span className='curr-price relative pl-2 text-5xl font-bold text-title leading-none'>
                {currPrice}
              </span>
              /mo
            </p>
          </div>
          <p className='text-sm text-paste font-medium px-4 py-1.5 bg-paste/20 rounded-full'>
            Save {discountAmount}
          </p>
        </div>
        <ul className='text-left text-sm font-normal text-title space-y-4'>
          {offerIncludes?.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
        <button className='w-full text-base text-white font-bold py-2 5 rounded-sm bg-btnBlue border border-btnBlue hover:text-btnBlue hover:bg-white transition-colors'>
          Buy Now
        </button>
      </div>

      <div className='bookmark hidden absolute triangle -top-2p'></div>
      <div className='bookmark hidden absolute -top-2p right-8'>
        <img src='./images/bookmark-bg.png' alt='' />
        <span className='absolute rotate-90 inline-block top-25p -right-20p text-white text-sm'>
          Popular
        </span>
      </div>
    </div>
  )
}

export default OfferPackage
