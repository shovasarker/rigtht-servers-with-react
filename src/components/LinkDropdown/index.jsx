import React, { useEffect, useState } from 'react'

const LinkDropdown = ({ isMenuOpen, subLinkName, subLinkDropdown }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  useEffect(() => {
    setIsDropdownOpen(false)
  }, [isMenuOpen])

  return (
    <li
      className='link relative cursor-pointer'
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <span>
        {subLinkName}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
          className={`${
            isDropdownOpen ? 'rotate-180' : ''
          } arrow ml-2 transition-transform duration-200 w-3 inline-block`}
        >
          <path
            d='M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z'
            fill='white'
          />
        </svg>
      </span>
      <ul
        className={`${
          isDropdownOpen ? '' : 'hidden'
        } dropdown lg:absolute w-full rounded-sm bg-menuBlue/20 mt-3 transition-all duration-300 z-10`}
      >
        {subLinkDropdown.map(([name, url]) => {
          return (
            <li className='px-4 py-2 hover:bg-menuBlue/80' key={name}>
              <a href={url}>{name}</a>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default LinkDropdown
