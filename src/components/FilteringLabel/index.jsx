import React from 'react'

const FilteringLabel = ({
  tableFilteringData,
  setTableFilteringData,
  item,
}) => {
  const [key] = Object.keys(item)
  const handleChange = () => {
    setTableFilteringData(
      tableFilteringData.filter((obj) => {
        const keys = Object.keys(obj)
        return keys[0] !== key
      })
    )
  }
  return (
    <div className='flex items-center text-title/70 text-sm bg-btnBlue/10 px-3 py-1 rounded-full'>
      {key} - <span className='text text-btnBlue font-bold'>{item[key]}</span>
      <button
        className='close-btn bg-none border-0 text-title/50 ml-2 p-0 opacity-70 hover:opacity-100 transition-opacity'
        onClick={handleChange}
      >
        <svg
          className='w-4 h-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
        >
          {/*<!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
          <path
            d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z'
            fill='rgb(122, 122, 122)'
          />
        </svg>
      </button>
    </div>
  )
}

export default FilteringLabel
