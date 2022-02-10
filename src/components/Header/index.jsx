import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
const Header = () => {
  return (
    <header className='header pb-64 lg:pb-96'>
      <Navbar />
      <Banner />
    </header>
  )
}

export default Header
