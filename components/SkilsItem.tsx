import React from 'react';

interface props {
    title: string,
    year: string,
    company: string,
    details: string
}

const SkilsItem = ( {title, year, company, details} : props ) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
        {year}
      </span>
      <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white'>
        {title}
      </h1>
      <h2 className='font-semibold mb-[1rem] text-[10px] sm:text-[15px] md:text-[24px] text-white'>
        {company}
      </h2>
      <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
        {details}
      </p>
    </div>
  )
}

export default SkilsItem;
