import React from 'react'

const DistributionSectionSideMenu = ({
  menuItemSelected,
  setMenuItemSelected,
  sideMenu,
}) => {
  return (
    <aside className='space-y-5 md:flex-shrink-0'>
      {sideMenu?.map((item, i) => {
        return (
          <div
            key={i}
            className={`${
              menuItemSelected === i ? 'active' : ''
            } p-8 bg-white rounded-sm shadow-lg font-bold text-lg text-title border-l-4 border-l-transparent cursor-pointer`}
            onClick={() => setMenuItemSelected(i)}
          >
            {item}
          </div>
        )
      })}
    </aside>
  )
}

export default DistributionSectionSideMenu
