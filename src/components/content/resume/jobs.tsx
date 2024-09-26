import React from 'react'

export interface IJob {
    company: string;
    position: string;
    duration: string;
    description: string[];
}

const Job = (props: IJob) => {
    const { company, description, duration, position } = props;
    return (
        <div
            className='border-l relative'
        >
            <div className='px-8 text-white flex flex-col gap-2'>
                <p className='text-xl'>{position}</p>
                <p className='uppercase'>{company}</p>
                <div className='bg-[#FF014F]   p-1 max-w-24 flex items-center justify-center rounded-xl text-sm'>
                    {duration}
                </div>
                <ul className='list-disc pl-5'>
                    {description && description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div
                className='absolute z-20 p-1 bg-white rounded-full top-[-10px] left-[-10px]'
            >
                <div
                    className='p-[6px] bg-[#FF014F] rounded-full'
                ></div>
            </div>
        </div>
    )
}

export default Job;