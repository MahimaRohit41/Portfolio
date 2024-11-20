import React from 'react';

interface props {
    skill1: string,
    skill2: string,
    skill3: string,
    skill4: string,
    skill5: string
    skill6: string
}

const SkillsLanguage = ({ skill1, skill2, skill3, skill4, skill5, skill6}: props) => {
  return (
    <div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
            {skill1}
        </h1>
        {/* <span className={`w-[90%] bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span> */}
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
            {skill2}
        </h1>
        {/* <span className={`w-[90%] bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span> */}
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
            {skill3}
        </h1>
        {/* <span className={`w-[90%] bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span> */}
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
            {skill4}
        </h1>
        {/* <span className={`w-[90%] bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span> */}
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
            {skill5}
        </h1>
        {/* <span className={`w-[90%] bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span> */}
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
            {skill6}
        </h1>
        {/* <span className={`w-[90%] bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span> */}
      </div>
    </div>
  )
}

export default SkillsLanguage
