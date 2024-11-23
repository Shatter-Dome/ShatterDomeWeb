"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
import Footer from "./Footer";

type GSAPInstance = typeof import("gsap").gsap;
type ScrollTriggerInstance = typeof import("gsap/ScrollTrigger").default;

let gsapLib: GSAPInstance;
let ScrollTrigger: ScrollTriggerInstance;

const Home = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      gsapLib = gsapModule.gsap;
      ScrollTrigger = scrollTriggerModule.default;

      gsapLib.registerPlugin(ScrollTrigger);

      initAnimations();
    };

    const initAnimations = () => {
      if (!gsapLib) return;

      if (heroImageRef.current) {
        gsapLib.fromTo(
          heroImageRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: 0.6 }
        );
      }

      sectionRefs.current.forEach((section) => {
        if (section) {
          gsapLib.fromTo(
            section.querySelectorAll(".animate-text"),
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsapLib.fromTo(
            section.querySelectorAll(".animate-image"),
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    };

    initGSAP();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="mt-16">
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <section ref={addToRefs} className="min-h-screen px-4 lg:px-28 flex flex-col justify-center pt-8 lg:pt-28 space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="flex flex-col z-10 lg:pr-8 space-y-2 lg:space-y-4 w-full lg:w-auto">
                <span className="font-Calligraffitti text-2xl md:text-3xl lg:text-5xl animate-text text-center lg:text-left">
                  Unlocking the power of
                </span>
                <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
                  <span className="text-4xl md:text-5xl lg:text-8xl font-bold animate-text text-center lg:text-left">
                    Spacial Computing
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-5xl animate-text">
                    with
                  </span>
                </div>
                <div className="font-bold text-5xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2 text-center lg:text-left animate-text">
                  <span className="block">RPI Lidar</span>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
                <Image 
                  ref={heroImageRef}
                  className="w-full lg:w-auto h-auto object-contain" 
                  src="/bot7.png" 
                  alt="robot1" 
                  width={800} 
                  height={800} 
                  priority 
                />
              </div>
            </div>
            <div className="text-gray-500 text-center lg:text-left pt-4 text-base md:text-lg lg:text-2xl animate-text space-y-1">
              <p>Step into the future of technology with advanced SLAM and robotics, a</p>
              <p>groundbreaking platform that seamlessly integrates Lidar, SLAM algorithms,</p>
              <p>and ROS2 via our robotics kit. Let&apos;s explore how this technology is</p>
              <p>revolutionizing our interaction with the world.</p>
            </div>
          </section>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col min-h-screen p-4 lg:p-28 mt-8" ref={addToRefs}>
        <div className="flex flex-col items-center justify-center bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative w-full h-[80vh] lg:h-[180vh]">
            <Image 
              src="/bot8.png" 
              alt="robot8" 
              fill 
              style={{ objectFit: 'cover' }}
              className="animate-image"
              priority
            />
            <div className="absolute inset-0 p-4 lg:p-8 text-white">
              <div className="absolute top-4 lg:top-15 left-4 lg:left-10 m-2 lg:m-4 bg-black bg-opacity-50 p-2 lg:p-4 rounded-lg animate-text">
                <h1 className="text-xs lg:text-base">Advanced object recognition</h1>
                <h1 className="text-xs lg:text-base">for a deeper understanding</h1>
                <h1 className="text-xs lg:text-base">of the environment</h1>
              </div>
              <div className="absolute top-20 lg:top-30 right-4 lg:right-10 m-2 lg:m-4 bg-black bg-opacity-50 p-2 lg:p-4 rounded-lg animate-text">
                <h1 className="text-xs lg:text-base">Real-time scene analysis</h1>
                <h1 className="text-xs lg:text-base">for dynamic Control</h1>
                <h1 className="text-xs lg:text-base">Systems</h1>
              </div>
              <div className="absolute top-40 lg:top-60 left-4 lg:left-10 m-2 lg:m-4 bg-black bg-opacity-50 p-2 lg:p-4 rounded-lg animate-text">
                <h1 className="text-xs lg:text-base">Simultaneous localization</h1>
                <h1 className="text-xs lg:text-base">and mapping (SLAM)</h1>
                <h1 className="text-xs lg:text-base">for precise spatial tracking</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row lg:items-center mt-8 lg:mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-1 justify-center items-center p-4 lg:p-8">
            <Image 
              src="/bot9.png" 
              alt="robot9" 
              width={500} 
              height={500}
              className="animate-image"
              priority
            />
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
};

export default Home;