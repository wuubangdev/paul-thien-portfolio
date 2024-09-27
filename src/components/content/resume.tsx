import React from 'react';
import Job, { IJob } from './resume/jobs';

const jobs: IJob[] = [
    {
        company: "Avalon Solution Company",
        position: "Java Developer",
        duration: "2020 - 2022",
        description: [
            "Participated in the development and maintenance of web applications and back-end systems using Java and frameworks such as Spring Boot and Hibernate.",
            "Designed and built RESTful APIs for microservices, optimized performance, and ensured the scalability of systems.",
            "Managed and worked with relational databases like MySQL and PostgreSQL, using JPA for database interactions.",
        ],
    },
    {
        company: "Harbour Comapny",
        position: "3D Archviz Artist",
        duration: "2023-2024",
        description: [
            "Developed and produced high-quality architectural 3D renderings for interior and exterior projects using software like 3ds Max, V-Ray, and Corona Renderer.",
            "Created detailed 3D models from CAD drawings and architectural sketches, ensuring accuracy and meeting client specifications.",
            "Collaborated with architects, designers, and clients to understand the visualization requirements, materials, lighting, and overall design of the project.",
            "Optimized models and renderings to ensure high-quality visuals while maintaining workflow efficiency.",
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