import React from 'react'

const Accordion = ({
  id,
  isOpen,
  accordionId,
  setAccordionId,
  question,
  answer,
}) => {
  const handleClick = () => {
    accordionId === id ? setAccordionId(0) : setAccordionId(id)
  }
  return (
    <div
      className={`${
        isOpen ? 'open' : ''
      } accordion text-title bg-white rounded-sm shadow-lg borde px-5`}
    >
      <button
        data-accordion-btn
        className=' accordion-btn py-5 font-bold text-lg rounded-sm cursor-pointer'
        onClick={() => handleClick()}
      >
        {question}
      </button>
      <div
        data-accordion-body
        className='accordion-body font-normal text-base h-0 overflow-hidden'
      >
        {answer}
      </div>
    </div>
  )
}

export default Accordion
