import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Education = () => {
  return (
    <div className='bg-[#121212] pt-[8rem] md:pt[10rem] pb-[5rem]'>
      <p className='heading'>
        Educ
        <span className='text-yellow-400'>ation</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div data-aos='fade-in'>
            <div className='bg-red-700 min-h-[400px] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    B Tech 
                </h1>
                <p className='text-15px text-[#d3d2d2]'>
                Information and Communication Technology
                </p>
                <p className='text-yellow-400'>CGPA: 7.32</p>
                <p>Dhirubhai Ambani Institue of Information and Communication Technology, Gandhinahar</p>
            </div>
        </div>
        <div data-aos='zoom-in' data-aos-delay="300">
            <div className='bg-orange-700 min-h-[400px] hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                   12th
                </h1>
                <p className='text-15px text-[#d3d2d2]'>
                Science
                </p>
                <p className='text-yellow-400'>Percentage: 93.33%</p>
                <p>Sarswati School, Borsad</p>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
            <div className='bg-blue-700 min-h-[400px] hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    10Th
                </h1>
                {/* <p className='text-15px text-[#d3d2d2]'>
                Information and Communication Technology
                </p> */}
                <p className='text-yellow-400'>Percentage: 87%</p>
                <p>Sardar Patel Vinay Mandir, Borsad</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education
