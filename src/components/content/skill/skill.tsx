import Image from 'next/image';
import React from 'react'

export interface ISkill {
    image: string;
    title: string;
    description: string;
}

const Skill = (props: ISkill) => {
    const { image, description, title } = props;
    return (
        <div className='rounded-[10px] border border-white/30 hover:scale-105 duration-500 cursor-pointer py-4'>
            {/* Icon */}
            <div className='flex items-center px-4 py-4 justify-center w-full'>
                <Image
                    alt='skill'
                    src={image}
                    width={100}
                    height={100}
                    className='rounded-[14px]'
                />
            </div>
            {/* Title */}
            <div className='px-4 text-center text-white text-xl font-semibold'>
                {title}
            </div>
            {/* Description */}
            <div className='px-4 py-4 text-white text-justify'>
                {description}
            </div>
        </div>
    )
}

export default Skill;