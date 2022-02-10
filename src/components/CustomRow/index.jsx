import React from 'react'

const CustomRow = ({ row }) => {
  return (
    <tr>
      {row?.map((data, i) => {
        return <td key={i}>{data}</td>
      })}
      <td>
        <button className='bg-btnBlue text-white text-sm font-semibold px-3 py-2.5 rounded-sm border border-btnBlue hover:bg-white hover:text-btnBlue transition-colors'>
          Configure
        </button>
      </td>
    </tr>
  )
}

export default CustomRow
