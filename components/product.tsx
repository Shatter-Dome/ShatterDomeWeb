"use client";

import Image from 'next/image';
import NavBar from './NavBar';
import Footer from "./Footer";
import useASScroll from '../hooks/useASScroll';
import useGsapAnimations from '../hooks/useGsapAnimations';

export default function Home() {
    useASScroll(); // Initialize ASScroll
    const sectionRef = useGsapAnimations(); // Use GSAP animations

    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <div className="mt-16">
                <div className="flex flex-col min-h-screen">
                    <section 
                        className="
                            min-h-screen 
                            px-4 
                            lg:px-28 
                            flex 
                            flex-col 
                            justify-center 
                            pt-8 
                            lg:pt-28 
                            space-y-6 
                            lg:space-y-0
                        " 
                        ref={sectionRef}
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                            <div className="flex flex-col z-10 lg:pr-8 space-y-2 lg:space-y-4 w-full lg:w-auto">
                                <span className="font-Calligraffitti text-2xl md:text-3xl lg:text-5xl intro-animate-text text-center lg:text-left">
                                    Unlocking the power of
                                </span>
                                <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
                                    <span className="text-4xl md:text-5xl lg:text-8xl font-bold intro-animate-text text-center lg:text-left">
                                        Spacial Computing
                                    </span>
                                    <span className="text-2xl md:text-3xl lg:text-5xl intro-animate-text">
                                        with
                                    </span>
                                </div>
                                <div className="font-bold text-5xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2 text-center lg:text-left">
                                    <span className="block">RPI Lidar</span>
                                </div>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
                                <Image 
                                    className='intro-animate-image w-full lg:w-auto h-auto object-contain' 
                                    src="/bot7.png" 
                                    alt="robot1" 
                                    width={800} 
                                    height={800} 
                                    priority 
                                />
                            </div>
                        </div>
                        <div className="text-gray-500 text-center lg:text-left pt-4 text-base md:text-lg lg:text-2xl intro-animate-text space-y-1">
                            <p>Step into the future of technology with advanced SLAM and robotics, a</p>
                            <p>groundbreaking platform that seamlessly integrates Lidar, SLAM algorithms,</p>
                            <p>and ROS2 via our robotics kit. Let&apos;s explore how this technology is</p>
                            <p>revolutionizing our interaction with the world.</p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}