import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react';
import Image from 'next/image';

const About = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf'; // Replace with dynamic URL if needed
        link.download = 'Mahima_Rohit_Resume.pdf'; // Desired file name
        link.click();
      };
    return (
        <div className='bg-[#121121] z-[10000] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className='text-[20px] uppercase font-bold text-[#55e6a5] mb-[1rem]'>
                        ABOUT ME
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold  text-white'>
                        Code <span className='text-yellow-400'>Crafter</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'>

                        </span>
                        <p className='text-[19px] text-slate-300 w-[80%]'>
                        I am a skilled full-stack developer with a strong foundation in building dynamic, responsive web applications. With hands-on experience in the MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on crafting scalable solutions tailored to user needs. Currently working as a Software Engineer at MAQ Software, I specialize in leveraging technologies like React JS, TypeScript and C# to deliver high-quality products.
                        </p>
                    </div>
                    <button onClick={downloadResume} className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                    </button>
                </div>
                <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                    <Image src='/image/About.png' alt='about' layout="fill" objectFit="contain" className="relative z-[11] w-[100%] h-[100%] object-contain"/>
                    <div className='abosulte w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]'></div>
                </div>

            </div>
        </div>
    )
}

export default About
