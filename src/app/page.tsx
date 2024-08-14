"use client";

import React from 'react';
import Image from 'next/image';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import dynamic from 'next/dynamic';

const ClientOnlyComponent1 = dynamic(() => import('../../components/ThreeScene'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {

  return (
    <div>
      <NavBar />
      <div className="pt-4">
        <div className="flex flex-col min-h-screen asscroll">
          <section className="h-screen px-4 lg:pl-28 flex flex-col justify-center intro-animate">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div>
                <span className="text-black font-bold text-4xl lg:text-8xl intro-animate-text">ALPHA</span>
                <div className="font-bold text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2 intro-animate-text">
                  <span className="block">QUADRUPED</span>
                  <span className="block">ROBOT</span>
                </div>
                <div className="text-black pt-4 text-lg intro-animate-text">
                  <span className="block">Comprehensive STEM Kit for Mastering ROS</span>
                  <span className="block"> and Reinforcement Learning</span>
                </div>
                <div className="pt-8 intro-animate-text">
                  <button className="bg-black text-white py-2 px-4 lg:py-4 lg:px-8">
                    Preorder Now
                  </button>
                </div>
              </div>
              <div className="intro-animate-image">
                <Image src="/bot1.png" alt="robot1" width={800} height={800} className="w-full lg:w-auto" />
              </div>
            </div>
          </section>

          {/* Other Sections */}
          <section className="h-screen p-4 lg:p-28 flex flex-col justify-center bg-black animate-section">
            <h1 className="text-2xl lg:text-5xl font-semibold text-left mb-8 lg:mb-12 text-white animate-text">Your Gateway to Robotics</h1>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="mb-8 lg:mb-0 lg:pr-8 text-white animate-text">
                <p className="text-xl lg:text-2xl mt-4">
                  Unlock the potential of ROS2 and reinforcement learning with our robotics kit. Designed for undergraduates and researchers, it provides a practical approach to learning and applying robotics concepts.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center pt-16">
              <div className="flex-1 lg:w-1/5 flex flex-col items-start mb-4 lg:mb-0 animate-text">
                <span className="text-white font-bold text-2xl lg:text-2xl mb-1">10K+ </span>
                <span className="text-white text-lg lg:text-lg mb-1">students and researchers</span>
                <span className="text-white font-bold text-xl lg:text-xl">Empowered</span>
              </div>

              <div className="hidden lg:block lg:w-px lg:bg-white lg:h-1/2 lg:mx-4"></div>

              <div className="flex-1 lg:w-1/5 flex flex-col items-start mb-4 lg:mb-0 animate-text">
                <span className="text-white font-bold text-2xl lg:text-2xl mb-1">20+ </span>
                <span className="text-white text-lg lg:text-lg mb-1">Academic and</span>
                <span className="text-white font-bold text-xl lg:text-xl"> Industry Partnerships</span>
              </div>

              <div className="hidden lg:block lg:w-px lg:bg-white lg:h-1/2 lg:mx-4"></div>

              <div className="flex-1 lg:w-1/5 flex flex-col items-start mb-4 lg:mb-0 animate-text">
                <span className="text-white font-bold text-2xl lg:text-2xl mb-1">4.9</span>
                <span className="text-white text-lg lg:text-lg mb-1">Average</span>
                <span className="text-white font-bold text-xl lg:text-xl"> Product Rating</span>
              </div>

              <div className="flex-1 lg:w-2/5 flex flex-col justify-center lg:justify-start animate-image">
                <Image src="/bot2.png" alt="robot2" width={1000} height={1000} className="w-full lg:w-auto" />
              </div>
            </div>
          </section>

          <section className="h-screen px-4 lg:px-28 flex flex-col justify-center pt-48 animate-section">
            <h1 className="text-3xl lg:text-5xl font-semibold text-left mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 animate-text">ROBOTICS CAPABILITIES</h1>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl text-black animate-text">The 12 Degrees of Freedom allows Precision control and</span>
              <span className="text-2xl lg:text-3xl text-black animate-text">Inverse kinematics. This creates several advantages over</span>
              <span className="text-2xl lg:text-3xl text-black animate-text">other Kits.</span>
            </div>
            <hr className="border-t-2 border-gray-500 my-8 lg:my-6 animate-text" />
            <div className="flex flex-col lg:flex-row justify-center gap-8 mt-4">
              <div className="flex-1 max-w-full lg:max-w-lg rounded-lg animate-image">
                <Image height={500} width={500} src="/bot3.png" alt="robot3" className="w-full h-auto object-cover rounded-l-3xl" />
              </div>
              <div className="flex-1 max-w-full lg:max-w-lg bg-black rounded-r-3xl animate-image">
                <Image height={500} width={500} src="/bot4.png" alt="robot4" className="w-full h-auto object-cover rounded-r-3xl" />
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center mt-52 mx-4 lg:mx-28 animate-section">
            <div className="relative flex justify-center items-center w-full bg-black h-screen rounded-3xl animate-image">
              <Image src="/bot5.png" alt="robot5" height={500} width={500} className="w-auto h-auto object-cover" />
              <div className="absolute flex flex-col bottom-20 left-16 text-white text-xl lg:text-3xl font-bold animate-text">
                <span className="block">Alpha Basic</span>
                <span className="block">version</span>
              </div>
            </div>
          </section>

          <hr className="border-t-2 border-gray-500 lg:my-16 mx-4 lg:mx-24 animate-section" />

          <section className="h-screen flex flex-col px-4 lg:px-32 pt-6 animate-section">
            <h1 className="text-4xl lg:text-6xl font-bold text-left mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 animate-text">
              Vision with Depth
            </h1>
            <div className="flex flex-col justify-center">
              <span className="text-2xl lg:text-3xl text-black animate-text">Real-Time Vision Processing with Intel Realsense</span>
              <span className="text-2xl lg:text-3xl text-black animate-text">and Depth Cameras, Capable of Real-Time</span>
              <span className="text-2xl lg:text-3xl text-black animate-text">Mapping, Obstacle Detection, and Avoidance.</span>
            </div>
            <hr className="border-t-2 border-gray-500 my-8 lg:my-6 animate-text" />
            <div className="w-full h-screen animate-image">
              <ClientOnlyComponent1 />
            </div>
          </section>

          <section className="h-screen flex flex-col justify-center animate-section">
            <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6 lg:mb-12 animate-text">Join the Future of Robotics</h1>
            <div className="flex flex-col items-center text-center text-xl lg:text-3xl text-black">
              <p className="animate-text">Pre-order your Alpha Quadruped Robot today and be part of the next generation of robotics enthusiasts and professionals.</p>
              <button className="mt-8 bg-gradient-to-r from-gradient-1 to-gradient-2 text-white py-2 lg:py-4 px-4 lg:px-8 rounded animate-text">Preorder Now</button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
