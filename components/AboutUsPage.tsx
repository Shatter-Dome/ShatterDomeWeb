"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
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
<section ref={addToRefs} className="min-h-screen px-4 lg:px-28 flex flex-col justify-center">
  <div className="mt-20 lg:mt-0 lg:flex lg:items-center lg:justify-between">
    <div>
      <span className="text-black font-bold text-4xl lg:text-8xl animate-text">WHO</span>
      <div className="font-bold text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gradient-1 to-gradient-2 animate-text">
        <span className="block">WE</span>
        <span className="block">ARE</span>
      </div>
      <div className="text-black pt-4 text-base lg:text-lg animate-text">
        <span className="block">A team of passionate robotics enthusiasts</span>
        <span className="block">pushing the boundaries of innovation</span>
      </div>
    </div>
    <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/2">
      <Image 
        className='intro-animate-image w-full lg:w-auto h-auto object-contain' 
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
                  We are a group of undergraduate students who came together with a shared vision to revolutionize robotics education. Our journey began with a simple idea: make advanced robotics accessible to everyone.
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
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section ref={addToRefs} className="min-h-screen px-4 lg:px-28 flex flex-col justify-center pt-16">
            <h1 className="text-2xl lg:text-5xl font-semibold text-left mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 animate-text">
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
                  We're dedicated to making advanced robotics education accessible to students and researchers worldwide through our comprehensive platform.
                </p>
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
                href="https://forms.gle/NxmcyekWypdxc5zR8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 lg:mt-8 animate-text"
              >
                <button className="bg-gradient-to-r from-gradient-1 to-gradient-2 text-white py-2 lg:py-4 px-4 lg:px-8 rounded text-base lg:text-xl">
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