"use client";

import Image from 'next/image';
import NavBar from './NavBar';
import Footer from "./Footer";
import useGsapAnimations from '../hooks/useGsapAnimations';

export default function Home() {
    const sectionRef = useGsapAnimations(); // GSAP animations hook

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            {/* Main content wrapper */}
            <div className="flex-grow">
                <div className="flex flex-col">
                    {/* Added padding-top to ensure content is not blocked by the header */}
                    <section 
                        className="min-h-screen px-4 lg:px-28 flex flex-col justify-center items-center lg:items-start pt-24 lg:pt-28 overflow-hidden" 
                        ref={sectionRef}
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
                            {/* Text Section */}
                            <div className="flex flex-col z-10 lg:pr-8 lg:max-w-[50%]">
                                <p className="font-Calligraffitti text-3xl md:text-5xl intro-animate-text text-center lg:text-left">
                                    Unlocking the power of
                                </p>
                                <div className="space-x-2 text-center lg:text-left">
                                    <p className="text-5xl md:text-8xl font-bold intro-animate-text">
                                        Spacial Computing
                                    </p>
                                    <p className="text-3xl md:text-5xl intro-animate-text">
                                        with
                                    </p>
                                </div>
                                <p className="font-bold text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2 text-center lg:text-left">
                                    RPI Lidar
                                </p>
                            </div>

                            {/* Image Section - Move Image to the Right */}
                            <div className="mt-8 lg:mt-0 w-full lg:w-auto flex justify-center items-center lg:justify-end lg:items-center">
                                <Image 
                                    className="intro-animate-image" 
                                    src="/bot7.png" 
                                    alt="robot1" 
                                    width={700} 
                                    height={700} 
                                    layout="responsive" 
                                    objectFit="contain"
                                    priority={true}
                                />
                            </div>
                        </div>

                        {/* Justified Alignment for Text Section */}
                        <div className="text-gray-500 pt-16 text-lg md:text-2xl intro-animate-text text-justify max-w-[80%] lg:max-w-[60%]">
                            <p>
                                Step into the future of technology with advanced SLAM and robotics, a groundbreaking platform that seamlessly integrates Lidar, SLAM algorithms, and ROS2 via our robotics kit.
                            </p>
                            <p>
                                Let&apos;s explore how this technology is revolutionizing our interaction with the world.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Extra space before the footer */}
            <div className="pb-40"></div>

            {/* Footer stays at the bottom */}
            <Footer />
        </div>
    );
}
