import { DevicePhoneMobileIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
      <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
      <div className='flex items-center space-x-6'>
          <a href='https://www.linkedin.com/in/mahima-rohit-4938761b3/' target='_blank' className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <LinkIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </a>
          <div>
            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
              Let&apos;s Connect
              <a href='https://www.linkedin.com/in/mahima-rohit-4938761b3/' target='_blank' className='block text-[17px] w-[90%] text-white opacity-60'>
              linkedin.com/in/mahima-rohit-4938761b3/              </a>
            </h1>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </div>
          <div>
            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
              Phone
              <p className='text-[17px] w-[90%] text-white opacity-60'>
                +918320036254
              </p>
            </h1>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <a href="mailto:mahimarohit41@gmail.com" className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </a>
          <div>
            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
              Send Email
              <p className='text-[17px] w-[90%] text-white opacity-60'>
                mahimarohit41@gmail.com
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
