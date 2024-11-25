"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RoboticsLoader from './RoboticsLoader';

// Import types for GSAP
type GSAPInstance = typeof import('gsap').gsap;
type ScrollTriggerInstance = typeof import('gsap/ScrollTrigger').default;

let gsapLib: GSAPInstance;
let ScrollTrigger: ScrollTriggerInstance;

const AboutUsPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const botImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      // Dynamic imports with proper typing
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      gsapLib = gsapModule.gsap;
      ScrollTrigger = scrollTriggerModule.default;
      
      // Register ScrollTrigger plugin
      gsapLib.registerPlugin(ScrollTrigger);

      // Initialize animations after GSAP is loaded
      initAnimations();
    };

    const initAnimations = () => {
      if (!gsapLib) return;

      // Animate bot image with same style as text
      if (botImageRef.current) {
        gsapLib.fromTo(
          botImageRef.current,
          { 
            opacity: 0, 
            y: 50 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            delay: 0.6 // Slight delay after text animations
          }
        );
      }

      sectionRefs.current.forEach((section) => {
        if (section) {
          // Animate text elements
          gsapLib.fromTo(
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
          gsapLib.fromTo(
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
    };

    initGSAP();

    // Cleanup function
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
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
          <section ref={addToRefs} className="min-h-screen px-4 lg:px-28 flex flex-col justify-center">
            <div className="mt-20 lg:mt-0 lg:flex lg:items-center lg:justify-between">
              <div>
                <span className="text-black font-bold text-4xl lg:text-8xl animate-text">WHO</span>
                <div className="font-bold text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-purple-600 animate-text">
                  <span className="block">WE ARE ?</span>
                </div>
                <div className="text-black pt-4 text-base lg:text-lg animate-text">
                  <span className="block">A team of passionate robotics enthusiasts</span>
                  <span className="block">pushing the boundaries of innovation</span>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/2">
                <Image 
                  ref={botImageRef}
                  className='w-full lg:w-auto h-auto object-contain' 
                  src="/bot10.png" 
                  alt="robot10" 
                  width={800} 
                  height={800} 
                  priority 
                />
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section ref={addToRefs} className="min-h-screen p-4 lg:p-28 flex flex-col justify-center bg-black">
            <h1 className="text-2xl lg:text-5xl font-semibold text-left mb-6 lg:mb-12 text-white animate-text">Our Vision</h1>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg lg:text-2xl text-white animate-text">
                  We&apos;re a group of undergraduate students who came together with a shared vision to revolutionize robotics education. Our journey began with a simple idea: make advanced robotics accessible to everyone.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                  <div className="flex flex-col items-start p-6 bg-white/5 rounded-lg animate-text">
                    <span className="text-white font-bold text-lg mb-2">Innovation</span>
                    <span className="text-white/80 text-base">Pushing boundaries in robotics technology</span>
                  </div>
                  <div className="flex flex-col items-start p-6 bg-white/5 rounded-lg animate-text">
                    <span className="text-white font-bold text-lg mb-2">Collaboration</span>
                    <span className="text-white/80 text-base">Working together to achieve excellence</span>
                  </div>
                  <div className="flex flex-col items-start p-6 bg-white/5 rounded-lg animate-text">
                    <span className="text-white font-bold text-lg mb-2">Excellence</span>
                    <span className="text-white/80 text-base">Committed to quality and innovation</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 animate-image">
                <Image
                  src="/grp.png"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="rounded-xl hover:scale-110 duration-300 delay-150"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section ref={addToRefs} className="min-h-screen px-4 lg:px-28 flex flex-col justify-center pt-16">
            <h1 className="text-2xl lg:text-5xl font-semibold text-left mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-text">
              OUR JOURNEY
            </h1>
            <div className="flex flex-col">
              <span className="text-xl lg:text-3xl text-black animate-text">From a university project to a revolutionary</span>
              <span className="text-xl lg:text-3xl text-black animate-text">robotics platform, our story is one of</span>
              <span className="text-xl lg:text-3xl text-black animate-text">passion and persistence.</span>
            </div>
            <hr className="border-t-2 border-gray-500 my-6 animate-text" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="bg-black p-8 rounded-xl animate-text">
                <h3 className="text-white text-2xl font-bold mb-4">Expertise</h3>
                <p className="text-white text-lg">
                  Our team specializes in SLAM algorithms, ROS2 integration, and spatial computing, bringing together diverse skills to create innovative solutions.
                </p>
              </div>
              <div className="bg-black p-8 rounded-xl animate-text">
                <h3 className="text-white text-2xl font-bold mb-4">Mission</h3>
                <p className="text-white text-lg">
                   We&apos;re dedicated to making advanced robotics education accessible to students and researchers worldwide through our comprehensive platform.
                </p>
              </div>
            </div>
          </section>

          {/* Quadruped Robot Section */}
          <section ref={addToRefs} className="min-h-screen flex flex-col justify-center px-4 lg:px-28 bg-gray-100">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="flex-1 space-y-6 lg:pr-12">
                <h2 className="text-4xl lg:text-6xl font-bold animate-text bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-purple-600">
                  Quadruped Robot
                </h2>
                <div className="space-y-4 text-lg lg:text-xl text-gray-700 animate-text">
                  <p>
                    This Project was based on the open sourced robot dog design from Deok-yeon, we worked on this for our college project and now working on it to turn into a product.
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href="https://www.instructables.com/Quadruped-Robot-Alpha-ESP32-Based-Spot-Micro-Robot/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform animate-text"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 animate-image">
                <Image
                  src="/quadruped-robot.png"
                  alt="Quadruped Robot"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform"
                  priority
                />
              </div>
            </div>
          </section>

            <section ref={addToRefs} className="min-h-screen flex flex-col justify-center px-4 lg:px-28 bg-gray-100">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="flex-1 animate-image">
                <Image
                  src="/rpi.png"
                  alt="Quadruped Robot"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <div className="flex-1 space-y-6 lg:pr-12">
                <h2 className="text-4xl lg:text-6xl font-bold animate-text bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-purple-600">
                  Edge AI ROS
                </h2>
                <div className="space-y-4 text-lg lg:text-xl text-gray-700 animate-text">
                  <p>
                    We have also worked on this project for various International competition&apos;s, developed and tested on vairous platform to bring the best to the market. We choose RPI 5 with the Latest ROS2 for developement.
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href="https://circuitdigest.com/microcontroller-projects/edge-ai-on-quadruped-robot-dog-using-maixduino-kit" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform animate-text"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <section ref={addToRefs} className="min-h-screen flex flex-col justify-center px-4 lg:px-0">
            <h1 className="text-3xl lg:text-6xl font-bold text-center mb-6 lg:mb-12 animate-text">Join Our Journey</h1>
            <div className="flex flex-col items-center text-center">
              <p className="text-lg lg:text-3xl text-black animate-text px-4 lg:px-0">
                Be part of the next generation of robotics<br />
                innovation and education
              </p>
              <a
                href="https://chat.whatsapp.com/GSlGw30PvHE6HTda2g8771"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 lg:mt-8 animate-text"
              >
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 lg:py-4 px-4 lg:px-8 rounded text-base lg:text-xl">
                  Join Our Team
                </button>
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;