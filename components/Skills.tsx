import React from 'react'
import SkilsItem from './SkilsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] text-white'>
            <h1 className='heading'>Experinece
                <span className='text-yellow-400'> & Skills</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <SkilsItem title={"Software Engineer"} year={"July, 2023 - Present"} company='MAQ Software' details="Spearheaded the maintenance and enhancement of complex web applications using React.js, TypeScript, C# and SQL, ensuring high performance and scalability."/>
                    <SkillsLanguage skill1='HTML' skill2='CSS' skill3='Javascript' skill4='React JS' skill5='Node JS' skill6='C++'/>
                </div>
                <div>
                    <SkilsItem title={"Associate Software Engineer"} year={"Jan, 2023 - June, 2023"} company='MAQ Software' details="Streamlined front-end functionality by implementing dynamic user interfaces, enhancing usability and responsiveness across multiple platforms using React JS and Typescript."/>
                    <SkillsLanguage skill1='Mongo DB' skill2='Express JS' skill3='Next JS' skill4='Typescript' skill5='SQL' skill6='Data Structure and Algorithm' />
                </div>
            </div>
        </div>
    )
}

export default Skills
