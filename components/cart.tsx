"use client";

import Image from 'next/image';
import NavBar from "./NavBar";
import Footer from "./Footer";
import useASScroll from '../hooks/useASScroll';
import useGsapAnimations from '../hooks/useGsapAnimations';

export default function Home() {
    const sectionRef = useGsapAnimations();
    useASScroll(); // Initialize ASScroll

    return (
        <div>
            <NavBar />
            <div className="flex flex-col min-h-screen p-4 lg:p-28 mt-8 asscroll" ref={sectionRef}>
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

                        <a
                        href="https://forms.gle/NxmcyekWypdxc5zR8"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <button className="bg-black text-base lg:text-xl text-white py-2 lg:py-4 px-4 lg:px-8 rounded-lg mt-8 lg:mt-16 animate-text">
                            Purchase Now
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
