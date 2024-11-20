import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

const Hero = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf'; // Replace with dynamic URL if needed
        link.download = 'Mahima_Rohit_Resume.pdf'; // Desired file name
        link.click();
      };
    return (
        <div className='h-[88vh] bg-[#100f1d] mt-[10vh]'>
            <Particle />
            <div className='w-[80%] grid mx-auto grid-cols-1 lg:grid-cols-2 h-[100%] gap-[3rem] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] font-bold text-white'>
                        HI, I&apos;M
                        <span className='text-yellow-400'> MAHIMA ROHIT!</span>
                    </h1>
                    <TextEffect />
                    <p className='text-[18px] mt-[1.5rem] text-[#ffffff92]'>
                    Full-Stack Developer Passionate About Building Scalable and User-Centric Web Applications!
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button onClick={downloadResume} className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                        </button>
                    </div>
                </div>
                    <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
                        <Image src="/image/Hero.png" alt="user" layout='fill' className='object-cover rounded-full'/>
                    </div>

            </div>
        </div>
    )
}

export default Hero
