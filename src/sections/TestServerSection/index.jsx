import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import TestServerItem from '../../components/TestServerItem'
import { TEST_SERVER_SECTION_DATA } from '../../data'

const TestServerSection = () => {
  const { title, smallDetails, servers } = TEST_SERVER_SECTION_DATA
  return (
    <section className='server-testing-section bg-gradient-to-r from-gStart to-gEnd py-40 mb-10'>
      <div className='container px-8 lg:px-16 xl:px-32 text-center'>
        <SectionHeader title={title} smallDetails={smallDetails} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-5'>
          {servers?.map(({ id, ...otherProps }) => {
            return <TestServerItem key={id} {...otherProps} />
          })}
        </div>
      </div>
    </section>
  )
}

export default TestServerSection
