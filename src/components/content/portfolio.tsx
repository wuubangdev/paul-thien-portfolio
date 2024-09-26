import React from 'react';
import Project, { IProject } from './project/project';
import Slider from 'react-slick';

const projects: IProject[] = [
    {
        id: 1,
        title: "3D ANIMATION",
        link: "/project/3D ANIMATION -- Behance.mp4",
    },
    {
        id: 2,
        title: "3D BillBoard",
        link: "/project/3D BillBoard -- Behance.mp4",
    },

    {
        id: 6,
        title: "GAMEBOY ANIMATION",
        link: "/project/GAMEBOY ANIMATION -- Behance.mp4",
    },
    {
        id: 7,
        title: "HOMETOWN -- Behance",
        link: "/project/HOMETOWN -- Behance.mp4",
    },
    {
        id: 12,
        title: "SURVILVAL SCENE ANIMATION",
        link: "/project/SURVILVAL SCENE ANIMATION -- Behance.mp4",
    },
    {
        id: 13,
        title: "Toyota Car - 3D Model",
        link: "/project/Toyota Car - 3D Model - Render -- Behance.mp4",
    },
]
const projects2: IProject[] = [
    {
        id: 1,
        title: "3D ANIMATION",
        link: "/project/3D ANIMATION -- Behance.mp4",
    },
    {
        id: 2,
        title: "3D BillBoard",
        link: "/project/3D BillBoard -- Behance.mp4",
    },

    {
        id: 6,
        title: "GAMEBOY ANIMATION",
        link: "/project/GAMEBOY ANIMATION -- Behance.mp4",
    },
    {
        id: 7,
        title: "HOMETOWN -- Behance",
        link: "/project/HOMETOWN -- Behance.mp4",
    },
    {
        id: 12,
        title: "SURVILVAL SCENE ANIMATION",
        link: "/project/SURVILVAL SCENE ANIMATION -- Behance.mp4",
    },
    {
        id: 13,
        title: "Toyota Car - 3D Model",
        link: "/project/Toyota Car - 3D Model - Render -- Behance.mp4",
    },
    {
        id: 5,
        title: "CGI Bitexco",
        link: "/project/CGI Bitexco -- Behance.mp4",
    },
    {
        id: 8,
        title: "PRODUCT ANIMATION",
        link: "/project/PRODUCT ANIMATION -- Behance.mp4",
    },

    {
        id: 9,
        title: "PRODUCT TEST",
        link: "/project/PRODUCT TEST -- Behance.mp4",
    },
]
const projects3: IProject[] = [
    {
        id: 5,
        title: "CGI Bitexco",
        link: "/project/CGI Bitexco -- Behance.mp4",
    },
    {
        id: 8,
        title: "PRODUCT ANIMATION",
        link: "/project/PRODUCT ANIMATION -- Behance.mp4",
    },

    {
        id: 9,
        title: "PRODUCT TEST",
        link: "/project/PRODUCT TEST -- Behance.mp4",
    },
]

const Portfolio = () => {
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (
        <div className='min-h-screen min-w-full flex justify-center items-center'
            style={{
                background: "radial-gradient(circle at center, #ab668f , #591829)"
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
                            >Portfolio</h1>
                        </div>
                    </div>
                    <div className='col-span-1'></div>
                    {/* List skill */}
                    <div className='col-span-10'>
                        <div className="hidden md:grid md:grid-cols-1 gap-4">
                            <Slider {...settings}>
                                {projects && projects.map((project) => (
                                    <Project
                                        key={project.id}
                                        link={project.link}
                                    />
                                ))}
                            </Slider>
                            <div className='grid grid-cols-3 max-h-[520px]'>
                                {projects3 && projects3.map((project) => (
                                    <Project
                                        key={project.id}
                                        link={project.link}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='md:hidden grid grid-cols-1 gap-4 overflow-y-auto max-h-screen'>
                            {projects2 && projects2.map((project) => (
                                <Project
                                    key={project.id}
                                    link={project.link}
                                />
                            ))}
                            <div className='pt-56'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio