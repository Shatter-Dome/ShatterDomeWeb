"use client";

import Image from 'next/image';
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import useASScroll from '../../../hooks/useASScroll';
import useGsapAnimations from '../../../hooks/useGsapAnimations';

export default function Home() {
    const sectionRef = useGsapAnimations();
    useASScroll(); // Initialize ASScroll

    return (
        <div>
            <NavBar />
            <div className="flex flex-col min-h-screen p-4 lg:p-28 mt-8 asscroll" ref={sectionRef}>
                <div className="flex flex-col items-center justify-center bg-gray-200 rounded-3xl overflow-hidden">
                    <div className="relative w-full h-[80vh] lg:h-[150vh]">
                        <Image src="/bot8.png" alt="robot8" fill />
                        <div className="absolute inset-0 p-4 lg:p-8 text-white">
                            <div className="absolute top-4 lg:top-15 left-4 lg:left-10 m-2 lg:m-4 bg-black bg-opacity-50 p-2 lg:p-4 rounded-lg intro-animate-text">
                                <h1 className="text-xs lg:text-base">Advanced object recognition</h1>
                                <h1 className="text-xs lg:text-base">for a deeper understanding</h1>
                                <h1 className="text-xs lg:text-base">of the environment</h1>
                            </div>
                            <div className="absolute top-20 lg:top-30 right-4 lg:right-10 m-2 lg:m-4 bg-black bg-opacity-50 p-2 lg:p-4 rounded-lg intro-animate-text">
                                <h1 className="text-xs lg:text-base">Real-time scene analysis</h1>
                                <h1 className="text-xs lg:text-base">for dynamic Control</h1>
                                <h1 className="text-xs lg:text-base">Systems</h1>
                            </div>
                            <div className="absolute top-40 lg:top-60 left-4 lg:left-10 m-2 lg:m-4 bg-black bg-opacity-50 p-2 lg:p-4 rounded-lg intro-animate-text">
                                <h1 className="text-xs lg:text-base">Simultaneous localization</h1>
                                <h1 className="text-xs lg:text-base">and mapping (SLAM)</h1>
                                <h1 className="text-xs lg:text-base">for precise spatial tracking</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-16 space-y-8 lg:space-y-0 lg:space-x-8 animate-section">
                    <div className="flex flex-1 justify-center items-center p-4 lg:p-8 animate-image">
                        <Image src="/bot9.png" alt="robot9" width="500" height="500" />
                    </div>
                    <div className="flex flex-1 flex-col p-4 lg:p-8 shadow rounded-3xl">
                        <span className="font-semibold text-3xl lg:text-6xl animate-text">Handy Robotic Arm</span>
                        <div className="flex justify-between mt-4 lg:mt-8">
                            <span className="text-lg lg:text-2xl animate-text">Handy 5 Axis Robotic Arm</span>
                            <span className="text-base lg:text-lg animate-text">$1000</span>
                        </div>
                        <div className="flex justify-between mt-4 lg:mt-8">
                            <span className="text-lg lg:text-2xl animate-text">Shipping</span>
                            <span className="text-base lg:text-lg animate-text">$50</span>
                        </div>
                        <div className="flex justify-between mt-4 lg:mt-8">
                            <span className="text-lg lg:text-2xl animate-text">Total</span>
                            <span className="text-base lg:text-lg animate-text">$1050</span>
                        </div>
                        <div className="mt-4 lg:mt-8 animate-text text-xs lg:text-base">
                            *The Shipping will be calculated based on the destination country.
                        </div>
                        <button className="bg-black text-base lg:text-xl text-white py-2 lg:py-4 px-4 lg:px-8 rounded-lg mt-8 lg:mt-16 animate-text">
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
