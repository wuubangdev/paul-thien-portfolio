import React from 'react'
import Skill, { ISkill } from './skill/skill'

const skills: ISkill[] = [
    {
        image: '/Houdini3D_icon.png',
        title: 'Houdini',
        description: 'Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse the constructions'
    },
    {
        image: '/blender-icon.png',
        title: 'Blender',
        description: 'Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse the constructions'
    },
    {
        image: '/icons8-unreal-engine-500.png',
        title: 'Unreal Engine',
        description: 'Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse the constructions'
    },
]

const Skills = () => {
    return (
        <div className='min-h-screen min-w-full flex justify-center items-center'
            style={{
                background: "radial-gradient(circle at center, #5ec2cf , #0a51c2)"
            }}
        >
            {/* Text information */}
            <div className="container py-16 duration-300">
                <div className='grid md:grid-cols-12 grid-cols-1 '>
                    {/* Brand */}
                    <div className='col-span-1 flex items-center justify-center md:mb-0 mb-4 p-2'>
                        <div className='md:rotate-90 '>
                            <h1
                                className='text-4xl font-extrabold text-white tracking-[0.3rem] md:rotate-180 text-nowrap md:hover:scale-110 duration-500 cursor-pointer'
                                style={{ textShadow: "6px 6px 0px rgba(0,0,0,0.2)" }}
                            >My Skill</h1>
                        </div>
                    </div>
                    <div className='col-span-1'></div>
                    {/* List skill */}
                    <div className='col-span-10'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {skills && skills.map((skill, index) => (
                                <Skill
                                    key={`skill-${index}`}
                                    image={skill.image}
                                    title={skill.title}
                                    description={skill.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills