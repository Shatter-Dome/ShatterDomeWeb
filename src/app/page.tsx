"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RoboticsLoader from "../../components/RoboticsLoader"
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ClientOnlyComponent1 = dynamic(() => import('../../components/ThreeScene'), {
  ssr: false,
  loading: () => <RoboticsLoader/>,
});

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Animate sections on scroll
    sectionRefs.current.forEach((section) => {
      if (section) {
        // Animate text elements
        gsap.fromTo(
          section.querySelectorAll('.animate-text'),
          { 
            opacity: 0, 
            y: 50 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Animate image elements
        gsap.fromTo(
          section.querySelectorAll('.animate-image'),
          { 
            opacity: 0, 
            scale: 0.9 
          },
          { 
            opacity: 1, 
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="pt-4">
        <div className="flex flex-col min-h-screen asscroll">
          {/* Hero Section */}
          <section ref={addToRefs} className="min-h-screen px-4 lg:pl-28 flex flex-col justify-center intro-animate">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="mt-20 lg:mt-0">
                <span className="text-black font-bold text-4xl lg:text-8xl intro-animate-text animate-text">ALPHA</span>
                <div className="font-bold text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2 intro-animate-text animate-text">
                  <span className="block">QUADRUPED</span>
                  <span className="block">ROBOT</span>
                </div>
                <div className="text-black pt-4 text-base lg:text-lg intro-animate-text animate-text">
                  <span className="block">Comprehensive STEM Kit for Mastering ROS</span>
                  <span className="block">and Reinforcement Learning</span>
                </div>
                <div className="pt-6 lg:pt-8 intro-animate-text animate-text">
  <a
    href="https://forms.gle/NxmcyekWypdxc5zR8"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-black text-white py-2 px-4 lg:py-4 lg:px-8 text-sm lg:text-base">
      Preorder Now
    </button>
  </a>
</div>

              </div>
              <div className="mt-8 lg:mt-0 intro-animate-image animate-image">
                <Image src="/bot1.png" alt="robot1" width={800} height={800} className="w-full h-auto" priority />
              </div>
            </div>
          </section>

          {/* Gateway Section */}
          <section ref={addToRefs} className="min-h-screen p-4 lg:p-28 flex flex-col justify-center bg-black animate-section">
            <h1 className="text-2xl lg:text-5xl font-semibold text-left mb-6 lg:mb-12 text-white animate-text">Your Gateway to Robotics</h1>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="mb-6 lg:mb-0 lg:pr-8 text-white animate-text">
                <p className="text-lg lg:text-2xl">
                  Unlock the potential of ROS2 and reinforcement learning with our robotics kit. Designed for undergraduates and researchers, it provides a practical approach to learning and applying robotics concepts.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center pt-8 lg:pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-8 lg:mb-0">
                <div className="flex flex-col items-start animate-text">
                  <span className="text-white font-bold text-2xl mb-1">10K+ </span>
                  <span className="text-white text-base lg:text-lg mb-1">students and researchers</span>
                  <span className="text-white font-bold text-lg">Empowered</span>
                </div>

                <div className="flex flex-col items-start animate-text">
                  <span className="text-white font-bold text-2xl mb-1">20+ </span>
                  <span className="text-white text-base lg:text-lg mb-1">Academic and</span>
                  <span className="text-white font-bold text-lg">Industry Partnerships</span>
                </div>

                <div className="flex flex-col items-start animate-text">
                  <span className="text-white font-bold text-2xl mb-1">4.9</span>
                  <span className="text-white text-base lg:text-lg mb-1">Average</span>
                  <span className="text-white font-bold text-lg">Product Rating</span>
                </div>
              </div>

              <div className="lg:w-2/5 mt-6 lg:mt-0 animate-image">
                <Image src="/bot2.png" alt="robot2" width={1000} height={1000} className="w-full h-auto" priority />
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section ref={addToRefs} className="min-h-screen px-4 lg:px-28 flex flex-col justify-start pt-16 lg:pt-24 animate-section">
            <h1 className="text-2xl lg:text-5xl font-semibold text-left mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 animate-text">
              ROBOTICS CAPABILITIES
            </h1>
            <div className="flex flex-col">
              <span className="text-xl lg:text-3xl text-black animate-text">The 12 Degrees of Freedom allows Precision control and</span>
              <span className="text-xl lg:text-3xl text-black animate-text">Inverse kinematics. This creates several advantages over</span>
              <span className="text-xl lg:text-3xl text-black animate-text">other Kits.</span>
            </div>
            <hr className="border-t-2 border-gray-500 my-6 animate-text" />
            <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 mt-4">
              <div className="flex-1 animate-image">
                <Image 
                  height={500} 
                  width={500} 
                  src="/bot3.png" 
                  alt="robot3" 
                  className="w-full h-auto object-cover rounded-xl lg:rounded-l-3xl" 
                  priority 
                />
              </div>
              <div className="flex-1 bg-black rounded-xl lg:rounded-r-3xl mt-6 lg:mt-0 animate-image">
                <Image 
                  height={500} 
                  width={500} 
                  src="/bot4.png" 
                  alt="robot4" 
                  className="w-full h-auto object-cover rounded-xl lg:rounded-r-3xl" 
                  priority 
                />
              </div>
            </div>
          </section>

          {/* Version Section */}
          <section ref={addToRefs} className="mt-12 lg:mt-16 mx-4 lg:mx-28 animate-section">
            <div className="relative w-full bg-black rounded-3xl animate-image" style={{ height: '100vh' }}>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image 
                  src="/bot5.png" 
                  alt="robot5" 
                  height={1000} 
                  width={1000} 
                  className="w-full h-full object-contain" 
                  priority 
                />
              </div>
              <div className="absolute flex flex-col bottom-8 lg:bottom-20 left-6 lg:left-16 text-white text-lg lg:text-3xl font-bold animate-text">
                <span className="block">Alpha Basic</span>
                <span className="block">version</span>
              </div>
            </div>
          </section>

          <hr className="border-t-2 border-gray-500 my-12 lg:my-16 mx-4 lg:mx-24 animate-section" />

          {/* Vision Section */}
          <section ref={addToRefs} className="min-h-screen flex flex-col px-4 lg:px-32 pt-6 animate-section">
            <h1 className="text-3xl lg:text-6xl font-bold text-left mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 animate-text">
              Vision with Depth
            </h1>
            <div className="flex flex-col justify-center">
              <span className="text-xl lg:text-3xl text-black animate-text">Real-Time Vision Processing with Intel Realsense</span>
              <span className="text-xl lg:text-3xl text-black animate-text">and Depth Cameras, Capable of Real-Time</span>
              <span className="text-xl lg:text-3xl text-black animate-text">Mapping, Obstacle Detection, and Avoidance.</span>
            </div>
            <hr className="border-t-2 border-gray-500 my-6 lg:my-8 animate-text" />
            <div className="w-full h-[60vh] lg:h-screen animate-image">
              <ClientOnlyComponent1 />
            </div>
          </section>

          {/* CTA Section */}
          <section ref={addToRefs} className="min-h-screen flex flex-col justify-center px-4 lg:px-0 animate-section">
            <h1 className="text-3xl lg:text-6xl font-bold text-center mb-6 lg:mb-12 animate-text">Join the Future of Robotics</h1>
            <div className="flex flex-col items-center text-center">
            <p className="text-lg lg:text-3xl text-black animate-text px-4 lg:px-0">
              Pre-order your Alpha Quadruped Robot today and<br />
              be part of the next generation of robotics<br />
              enthusiasts and professionals.
            </p>

              <div className="pt-6 lg:pt-8 intro-animate-text animate-text">
  <a
    href="https://forms.gle/NxmcyekWypdxc5zR8"
    target="_blank"
    rel="noopener noreferrer"
  >
              <button className="mt-6 lg:mt-8 bg-gradient-to-r from-gradient-1 to-gradient-2 text-white py-2 lg:py-4 px-4 lg:px-8 rounded text-base lg:text-xl animate-text">
                Join Waiting List!
              </button>
  </a>
</div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}