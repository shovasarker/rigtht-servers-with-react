import React, { useState } from 'react'
import CustomRow from '../../components/CustomRow'
import CustomSelector from '../../components/CustomSelector'
import FilteringLabel from '../../components/FilteringLabel'
import SectionHeader from '../../components/SectionHeader'
import { CONFIGURATION_SECTION_DATA } from '../../data'

const ConfigurationSection = () => {
  const [tableFilteringData, setTableFilteringData] = useState([])
  const { title, smallDetails, selectorDatas, tableDatas } =
    CONFIGURATION_SECTION_DATA
  const { tableHead, tableBody } = tableDatas
  return (
    <section className='container px-8 lg:px-16 xl:px-32 mb-20'>
      <SectionHeader title={title} smallDetails={smallDetails} isDark />
      {/* <!-- sort selection section start --> */}
      <div className='flex justify-center lg:justify-start items-center flex-wrap gap-y-5 bg-white py-2 px-5 mb-5'>
        {selectorDatas?.map((items, i) => {
          return (
            <CustomSelector
              tableFilteringData={tableFilteringData}
              setTableFilteringData={setTableFilteringData}
              key={i}
              items={items}
            />
          )
        })}
      </div>
      {/* <!-- sort selection section end --> */}
      {/* <!-- sort selction display section start --> */}
      <div className='flex justify-start items-center flex-wrap gap-4'>
        {tableFilteringData?.map((item, i) => {
          return (
            <FilteringLabel
              key={i}
              tableFilteringData={tableFilteringData}
              setTableFilteringData={setTableFilteringData}
              item={item}
            />
          )
        })}
      </div>
      {/* <!-- sort selction display section end --> */}
      {/* <!-- Data table for configuration section start --> */}
      <table className='table-auto my-8 shadow-md w-full'>
        <thead>
          <tr>
            {tableHead?.map((item, i) => {
              return <td key={i}>{item}</td>
            })}
            <td></td>
          </tr>
        </thead>
        <tbody>
          {tableBody?.map((row, i) => {
            return <CustomRow key={i} row={row} />
          })}
        </tbody>
      </table>
      {/* <!-- Data table for configuration section end --> */}
    </section>
  )
}

export default ConfigurationSection
