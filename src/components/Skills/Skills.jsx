import React from 'react'
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 p-6'>

            <div className="md:w-1/2 p-4 text-center md:text-left">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-800 transition-all duration-300 ease-in-out transform hover:text-yellow-500">
                    My Skills
                </h1>
                <h2 className="text-xl text-gray-600 mb-6">
                    Here are the technologies and tools I specialize in.
                </h2>
            </div>

            <SkillCard />

        </div>
    )
}

export default Skills;
