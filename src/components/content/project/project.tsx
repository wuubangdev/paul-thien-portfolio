import React from 'react'

export interface IProject {
    id?: number;
    title?: string;
    link: string;
}

const Project = (props: IProject) => {
    const { link } = props;
    return (
        <div className='rounded-[10px] border border-white/50 hover:-translate-y-[5px] duration-300 cursor-pointer overflow-hidden mx-2' aria-hidden>
            {/* Video */}
            <div className='flex items-center justify-center'>
                <video
                    width="100%"
                    autoPlay
                    muted
                    loop
                    style={{
                        borderRadius: "10px",
                        border: 'none',
                        overflow: 'hidden'
                    }}
                >
                    <source src={link} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}



export default Project