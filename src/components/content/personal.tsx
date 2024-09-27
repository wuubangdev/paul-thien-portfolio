import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Personal = () => {
    return (
        <div className='min-h-screen min-w-full flex justify-center items-center'
            style={{
                background: "radial-gradient(circle at center, #404040 , #0D0D0D)"
            }}
        >
            <div className="container p-4">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* Text information */}
                    <div className='font-semibold text-center flex items-center flex-col justify-center gap-4 text-white'>
                        <div className='flex md:gap-3 gap-1 items-end hover:scale-110 duration-300 cursor-pointer'>
                            <h1 className='text-4xl md:text-6xl  tracking-wider '>Hello</h1>
                            <Image
                                src="/hand.png"
                                alt="hand"
                                width={80}
                                height={60}
                                className='h-14 md:h-20'
                            />
                        </div>
                        <h1 className='text-4xl md:text-6xl  hover:scale-110 duration-300 cursor-pointer'>I am Paul</h1>
                        <h3 className='text-2xl md:text-4xl  decoration-solid decoration-orange-1 underline hover:scale-110 duration-300 cursor-pointer'>
                            <TypeAnimation
                                sequence={[
                                    "3D Generalist",
                                    2000,
                                    "Houdini FX Artist",
                                    2000,

                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h3>
                        <div className='text-white flex items-center gap-4 cursor-pointer py-4'>
                            <a href="mailto:thienbao.trang97@gmail.com">
                                <Image
                                    alt='mail-icon'
                                    src={'/mail.png'}
                                    width={38}
                                    height={38}
                                    className="size-10 hover:opacity-80 hover:scale-110 duration-300"
                                />
                            </a>
                            <a href="https://www.facebook.com/paulthien021122" target='_blank'>
                                <Image
                                    alt='facebook-icon'
                                    src={'/facebook.png'}
                                    width={36}
                                    height={36}
                                    className="size-10 hover:opacity-80 hover:scale-110 duration-300"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/luc-thien-bao-2343ba1b2/" target='_blank'>
                                <Image
                                    alt='linkedin-icon'
                                    src={'/linkedin.png'}
                                    width={36}
                                    height={36}
                                    className="size-10 hover:opacity-80 hover:scale-110 duration-300"
                                />
                            </a>
                            <a href="tel:+84 835 666 975">
                                <Image
                                    alt='phone-icon'
                                    src={'/phone.png'}
                                    width={36}
                                    height={36}
                                    className="size-10 hover:opacity-80 hover:scale-110 duration-300"
                                />
                            </a>
                        </div>
                    </div>
                    {/* Avatar */}
                    <div className='w-full md:h-fit md:mt-0 mt-10 h-[400px] relative'>
                        <Image
                            src="/avatar_rm.png"
                            alt="avatar"
                            className='z-30 object-cover'
                            fill
                        />
                        <div
                            className='w-full h-[600px]'
                        >
                            <Image
                                alt='back-g'
                                src={'/cloud.png'}
                                fill
                            />
                        </div>
                        <div
                            className='h-2 w-72 bg-gradient-to-b from-gray-950/50 to-gray-950 absolute bottom-0 z-30 left-1/2 translate-x-[-45%]'
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal