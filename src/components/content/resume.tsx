import React from 'react';
import Job, { IJob } from './resume/jobs';

const jobs: IJob[] = [
    {
        company: "Avalon Solution Company",
        position: "UX/UI Designer",
        duration: "2019-2020",
        description: [
            "Design UI template website and edit UI request from overseas customer.",
            "Design logo, banners and some print publications.",
        ],
    },
    {
        company: "FPT Education Company",
        position: "Graphic Designer",
        duration: "2020-2023",
        description: [
            "Design school publications, participate school project and event.",
            "Design program, events, music shows, Q&A shows for famous actors in the country.",
            "Design short videos used to run ads, honor award, program, sports festivals.",
        ],
    },
    {
        company: "Thingtodo",
        position: "3D Modeler & Product Animation",
        duration: "2023-now",
        description: [
            "Make realistic 3D publications, used to run ads for the company's campaign.",
            "Create TVCs, video promoting new products, promotions in attractive 3D.",
            "Making video furniture with Unreal Engine 5.",
        ],
    },
    {
        company: "Keyframe",
        position: "Blender teacher",
        duration: "2024-now",
        description: [
            "Discover jobs, people, learning content and conversations about these skills",
            "Commercial Product Teacher at Keyframe Multimedia School.",
        ],
    },

]


const Resume = () => {
    return (
        <div className='min-h-screen min-w-full flex justify-center items-center'
            style={{
                background: "radial-gradient(circle, rgba(6,165,223,1) 0%, rgba(31,70,127,1) 100%)"
            }}
        >
            {/* Text information */}
            <div className="container py-20 duration-300">
                <div className='grid md:grid-cols-12 grid-cols-1 '>
                    {/* Brand */}
                    <div className='col-span-1 flex items-center justify-center md:mb-0 mb-4 p-2 md:max-h-screen'>
                        <div className='md:rotate-90 '>
                            <h1
                                className='text-4xl font-extrabold text-white tracking-[0.3rem] md:rotate-180 text-nowrap md:hover:scale-110 duration-300 cursor-pointer'
                                style={{ textShadow: "6px 6px 0px rgba(0,0,0,0.2)" }}
                            >Resume</h1>
                        </div>
                    </div>
                    <div className='col-span-1'></div>
                    {/* List skill */}
                    <div className='col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {jobs && jobs.map((job, index) => (
                            <Job
                                key={index}
                                company={job.company}
                                position={job.position}
                                description={job.description}
                                duration={job.duration}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;