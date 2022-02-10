import React, { useState } from 'react'
import { NAV_SUB_LINK } from '../../data'
import LinkDropdown from '../LinkDropdown'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkDropdownData = NAV_SUB_LINK

  const handleMenuBtnClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='relative container px-8 lg:px-16 xl:px-32 flex justify-between items-center py-5'>
      {/* <!-- logo of the site --> */}
      <div className='w-40 lg:w-52 logo-wrapper'>
        <img
          src='./images/logo.png'
          alt='Right Servers Logo'
          className='w-full'
        />
      </div>
      {/* <!-- logo of the site --> */}

      {/* <!-- hamburger menu for mobiles and tablets --> */}
      <div
        id='menu-btn'
        onClick={() => handleMenuBtnClick()}
        className='z-10 hamburger-menu px-2 py-1 lg:hidden bg-white rounded-md shadow-lg focus:shadow-xl cursor-pointer'
      >
        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 19.5C6.82843 19.5 7.5 18.8284 7.5 18C7.5 17.1716 6.82843 16.5 6 16.5C5.17157 16.5 4.5 17.1716 4.5 18C4.5 18.8284 5.17157 19.5 6 19.5Z'
            fill='#3f3f3f'
          />
          <path
            d='M30.09 16.5H11.91C11.1313 16.5 10.5 17.1313 10.5 17.91V18.09C10.5 18.8687 11.1313 19.5 11.91 19.5H30.09C30.8687 19.5 31.5 18.8687 31.5 18.09V17.91C31.5 17.1313 30.8687 16.5 30.09 16.5Z'
            fill='#3f3f3f'
          />
          <path
            d='M30.09 24H5.91C5.13128 24 4.5 24.6313 4.5 25.41V25.59C4.5 26.3687 5.13128 27 5.91 27H30.09C30.8687 27 31.5 26.3687 31.5 25.59V25.41C31.5 24.6313 30.8687 24 30.09 24Z'
            fill='#3f3f3f'
          />
          <path
            d='M30.09 9H5.91C5.13128 9 4.5 9.63128 4.5 10.41V10.59C4.5 11.3687 5.13128 12 5.91 12H30.09C30.8687 12 31.5 11.3687 31.5 10.59V10.41C31.5 9.63128 30.8687 9 30.09 9Z'
            fill='#3f3f3f'
          />
        </svg>
      </div>
      {/* <!-- hamburger menu for mobiles and tablets --> */}

      {/* <!-- collapsible menu inline for large devices and hidden for small devices --> */}
      <div
        id='mobile-menu'
        className={`${
          isMenuOpen ? 'show' : ''
        } mobile-menu absolute flex -top-310p left-0 right-0
                    lg:static bg-btnBlue lg:bg-transparent flex-col items-center lg:flex-row lg:space-x-12 space-y-12
                    lg:space-y-0 py-6 lg:py-0 transition-all duration-500 z-10`}
      >
        <ul className='flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6 lg:space-y-0 text-white text-tiny font-medium'>
          {linkDropdownData.map(({ id, ...otherProps }) => {
            return (
              <LinkDropdown key={id} isMenuOpen={isMenuOpen} {...otherProps} />
            )
          })}
          <li className='hover:text-white/75'>
            <a href='/'>About Us</a>
          </li>
        </ul>

        <button type='button' className='custom-btn custom-btn-primary'>
          Log in
        </button>
      </div>
      {/* <!-- collapsible menu inline for large devices and hidden for small devices --> */}
    </nav>
  )
}

export default Navbar
