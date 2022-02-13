import React, { useEffect, useState } from 'react'
import DistributionSectionSideMenu from '../../components/DistributionSectionSideMenu'
import ImageItem from '../../components/ImageItem'
import SectionHeader from '../../components/SectionHeader'
import { DISTRIBUTION_SECTION_DATA } from '../../data'

const DistributionSection = () => {
  const { title, smallDetails, sideMenu, mainData } = DISTRIBUTION_SECTION_DATA
  const [menuItemSelected, setMenuItemSelected] = useState(0)
  const [sectionsMainData, setSectionsMainData] = useState(
    mainData[menuItemSelected]
  )
  useEffect(() => {
    setSectionsMainData(mainData[menuItemSelected])
  }, [menuItemSelected, mainData])
  return (
    <section className='container px-8 lg:px-16 xl:px-32 mb-20'>
      <SectionHeader title={title} smallDetails={smallDetails} isDark />
      <div className='flex flex-col md:flex-row justify-start items-start gap-6'>
        <DistributionSectionSideMenu
          menuItemSelected={menuItemSelected}
          setMenuItemSelected={setMenuItemSelected}
          sideMenu={sideMenu}
        />
        {sectionsMainData.length > 0 ? (
          <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-x-10 lg:gap-x-12 2xl:gap-x-20 gap-y-6 bg-white py-10 px-14 text-sm text-title shadow-lg'>
            {sectionsMainData?.map(({ id, ...otherProps }) => {
              return <ImageItem key={id} {...otherProps} />
            })}
          </div>
        ) : (
          <div className='w-full text-center p-6 bg-white rounded-sm shadow-xl'>
            No Data Available
          </div>
        )}
      </div>
    </section>
  )
}

export default DistributionSection
