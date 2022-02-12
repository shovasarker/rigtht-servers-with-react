import React, { useEffect, useState } from 'react'
import Accordion from '../../components/Accordion'
import FaqSectionSideMenu from '../../components/FaqSectionSideMenu'
import { FAQ_SECTION_DATA } from '../../data'

const FaqSection = () => {
  const { title, sideMenuTitle, sideMenu, faqData } = FAQ_SECTION_DATA
  const [selectedItem, setSelectedItem] = useState(0)
  const [selectedFaqData, setSelectedFaqData] = useState(faqData[selectedItem])
  const [accordionId, setAccordionId] = useState(0)

  useEffect(() => {
    setSelectedFaqData(faqData[selectedItem])
    setAccordionId(0)
  }, [selectedItem, faqData])

  return (
    <section className='container px-8 lg:px-16 xl:px-32 mb-20'>
      <h1 className='text-2xl md:text-4xl font-bold text-title mb-12 text-center'>
        {title}
      </h1>
      <div className='flex flex-col lg:flex-row items-start gap-6'>
        <FaqSectionSideMenu
          sideMenuTitle={sideMenuTitle}
          sideMenu={sideMenu}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        {/* <!-- Accordion start --> */}
        <div className='flex-1 space-y-2'>
          {selectedFaqData?.map(({ id, ...otherProps }) => {
            return id === accordionId ? (
              <Accordion
                key={id}
                id={id}
                isOpen
                accordionId={accordionId}
                setAccordionId={setAccordionId}
                {...otherProps}
              />
            ) : (
              <Accordion
                key={id}
                id={id}
                accordionId={accordionId}
                setAccordionId={setAccordionId}
                {...otherProps}
              />
            )
          })}
        </div>
        {/* <!-- Accordion end --> */}
      </div>
    </section>
  )
}

export default FaqSection
