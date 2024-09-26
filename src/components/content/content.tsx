'use client'
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import Personal from './personal';
import Skills from './skills';
import Portfolio from './portfolio';
import Resume from './resume';


const Content = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => setCurrentPage(current + 1),
    };

    const handleScroll = (event: WheelEvent) => {
        event.preventDefault(); // Prevent default scrolling
        if (event.deltaY > 0) {
            sliderRef.current?.slickNext(); // Scroll down: move to the next slide
        } else {
            sliderRef.current?.slickPrev(); // Scroll up: move to the previous slide
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className='relative'>
            <Slider ref={sliderRef} {...settings} className='overflow-hidden h-screen'>
                <Personal />
                <Skills />
                <Portfolio />
                <Resume />
            </Slider>
            <div className='absolute bottom-0 flex items-center justify-center w-full py-4'>
                <div className='text-white text-xl font-semibold tracking-[0.2rem]'>{currentPage}/4</div>
            </div>
        </div>
    )
}

export default Content