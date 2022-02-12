import React from 'react'

const SectionHeader = ({ title, smallDetails, isDark }) => {
  return (
    <div className={`${isDark ? 'text-title' : 'text-white'} text-center`}>
      <h1 className={`text-2xl md:text-4xl font-bold mb-5`}>{title}</h1>
      {smallDetails ? (
        <div className='text-base font-normal leading-loose mb-16'>
          {smallDetails.split('<br>').map((item, i) => {
            return <p key={i}>{item}</p>
          })}
        </div>
      ) : null}
    </div>
  )
}

export default SectionHeader
