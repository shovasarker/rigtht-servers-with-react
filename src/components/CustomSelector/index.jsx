import React, { useEffect, useState } from 'react'

const CustomSelector = ({
  tableFilteringData,
  setTableFilteringData,
  items,
}) => {
  const [selectValue, setSelectValue] = useState(items[0])

  const handleChange = (e) => {
    setSelectValue(e.target.value)
    let i = 0
    let array = tableFilteringData.map((obj) => {
      const keys = Object.keys(obj)
      if (keys[0] === items[0]) {
        i++
        return {
          [items[0]]: e.target.value,
        }
      } else return obj
    })
    if (i === 0) {
      setTableFilteringData([...array, { [items[0]]: e.target.value }])
    } else {
      setTableFilteringData(array)
    }
  }
  useEffect(() => {
    let count = 0
    tableFilteringData.forEach((element) => {
      const [key] = Object.keys(element)
      if (key === items[0]) {
        setSelectValue(element[key])
        count++
        return
      }
    })
    if (count === 0) {
      setSelectValue(items[0])
    }
  }, [tableFilteringData, items])
  return (
    <select
      name={items[0]}
      value={selectValue}
      onChange={handleChange}
      className='selector inline-block bg-white pl-3 py-1 focus:outline-none text-title/70'
    >
      {items?.map((item, i) => {
        return i === 0 ? (
          <option key={i} value={item} disabled>
            {' '}
            {item}
          </option>
        ) : (
          <option key={i} value={item}>
            {item}
          </option>
        )
      })}
    </select>
  )
}

export default CustomSelector
