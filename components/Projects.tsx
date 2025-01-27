import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            Pro<span className='text-yellow-400'>jects</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <a href='https://github.com/MahimaRohit41/BlogApp' target='_blank' data-aos="fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                    <Image src='/image/BlogApp.png' alt='BlogApp' layout='fill' className='object-contain'/> 
                </div>
            </a>
            <a href='https://github.com/MahimaRohit41/Connectify' target='_blank' data-aos="fade-up" data-aos-delay="600">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                    <Image src='/image/ChatApp.png' alt='ChatApp' layout='fill' className='object-contain'/> 
                </div>
            </a>
            <a href='https://github.com/MahimaRohit41/netflix' target='_blank' data-aos="fade-up" data-aos-delay="600">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                    <Image src='/image/Netflix.png' alt='Netflix' layout='fill' className='object-contain'/> 
                </div>
            </a>
            <a href='https://github.com/MahimaRohit41/NewsPanda' target='-blank' data-aos="fade-up">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                    <Image src='/image/NewsApp.png' alt='NewsApp' layout='fill' className='object-contain'/> 
                </div>
            </a>

            <a href='https://github.com/MahimaRohit41/Portfolio' target='_blank' data-aos="fade-up" data-aos-delay="900">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                    <Image src='/image/Portfolio.png' alt='Portfolio' layout='fill' className='object-contain'/> 
                </div>
            </a>
            {/* <div data-aos="fade-up" data-aos-delay="1200">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                    <Image src='/image/BlogApp.png' alt='BlogApp' layout='fill' className='object-contain'/> 
                </div>
            </div> */}
            {/* <div data-aos="fade-up" data-aos-delay="1500"> 
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                    <Image src='/image/ChatApp.png' alt='ChatApp' layout='fill' className='object-contain'/> 
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Projects
