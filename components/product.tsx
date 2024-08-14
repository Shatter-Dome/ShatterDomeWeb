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
        <div>
            <NavBar />
            <div className="mt-16">
                <div className="flex flex-col min-h-screen">
                    <section className="h-screen px-4 lg:pl-28 flex flex-col justify-center pt-8 lg:pt-28" ref={sectionRef}>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="flex flex-col z-10 lg:pr-8">
                                <span className="font-Calligraffitti text-3xl md:text-5xl intro-animate-text">Unlocking the power of</span>
                                <div className="space-x-2">
                                    <span className="text-5xl md:text-8xl font-bold intro-animate-text">Spacial Computing</span>
                                    <span className="text-3xl md:text-5xl intro-animate-text">with</span>
                                </div>
                                <div className="font-bold text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2">
                                    <span className="block">RPI Lidar</span>
                                </div>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:ml-8">
                                <Image className='intro-animate-image' src="/bot7.png" alt="robot1" width={700} height={700} layout="responsive" />
                            </div>
                        </div>
                        <div className="text-gray-500 pt-4 text-lg md:text-2xl intro-animate-text">
                            <span className="block">Step into the future of technology with advanced SLAM and robotics, a</span>
                            <span className="block">groundbreaking platform that seamlessly integrates Lidar, SLAM algorithms,</span>
                            <span className="block">and ROS2 via our robotics kit. Let&apos;s explore how this technology is</span>
                            <span className="block">revolutionizing our interaction with the world.</span>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
