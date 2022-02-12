import React from 'react'

const FaqSectionSideMenu = ({
  sideMenuTitle,
  sideMenu,
  selectedItem,
  setSelectedItem,
}) => {
  const handleChange = (e) => {
    setSelectedItem(e.target.value)
  }
  return (
    <div>
      <aside className='lg:w-[250px] xl:w-[290px] bg-white p-9 rounded-sm shadow-lg hidden lg:block'>
        <h3 className='text-xl font-bold text-title'>{sideMenuTitle}</h3>
        <ul className='text-base text-title font-bold mt-8'>
          {sideMenu?.map((item, i) => {
            return (
              <li
                className={`faq-list-item ${selectedItem === i && 'selected'}`}
                key={i}
                onClick={() => setSelectedItem(i)}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </aside>

      {/* <!-- slector for mobile --> */}
      <select
        name='faq-select'
        className='lg:hidden px-4 py-2 text-btnBlue bg-white rounded-sm shadow-md font-bold text-base'
        value={selectedItem}
        onChange={handleChange}
      >
        <option value='' disabled>
          {sideMenuTitle}
        </option>
        {sideMenu?.map((item, i) => {
          return (
            <option className='text-title/80' key={i} value={i}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FaqSectionSideMenu
