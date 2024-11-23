"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import Footer from "./Footer";

type GSAPInstance = typeof import("gsap").gsap;
type ScrollTriggerInstance = typeof import("gsap/ScrollTrigger").default;

let gsapLib: GSAPInstance;
let ScrollTrigger: ScrollTriggerInstance;

const HowItWorks = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const botImageRef = useRef<HTMLImageElement>(null);

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

      if (botImageRef.current) {
        gsapLib.fromTo(
          botImageRef.current,
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
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-6 lg:pt-8">
        <div className="flex flex-col min-h-screen">
  {/* Hero Section */}
  <section ref={addToRefs} className="min-h-screen px-6 lg:px-32 flex flex-col justify-center py-16 lg:py-24">
    <div className="mx-auto w-full max-w-7xl mt-20 lg:mt-0 lg:flex lg:items-center lg:justify-between lg:gap-12">
      {/* Text and Image Content on Mobile */}
      <div className="space-y-6 lg:w-1/2">
        <div className="space-y-2">
          <span className="text-black font-bold text-4xl lg:text-8xl animate-text">The Center</span>
          <div className="font-bold text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-text">
            <span className="block">of Gravity</span>
          </div>
        </div>
    
        {/* Mobile Image Position: between the text blocks */}
        <div className="lg:hidden mt-6">
          <Image
            ref={botImageRef}
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
            src="/bot11.png"
            alt="robot11"
            width={800}
            height={800}
            priority
          />
        </div>
    
        <div className="text-gray-600 space-y-2 text-lg lg:text-xl animate-text">
          <span className="block">Discover Passion for Robotics, Coding and</span>
          <span className="block">Learn STEM principles through Alpha Robot Dog</span>
        </div>
      </div>
    
      {/* Desktop Image: placed on the right side */}
      <div className="mt-12 lg:mt-0 lg:w-1/2 lg:block hidden">
        <Image
          ref={botImageRef}
          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
          src="/bot11.png"
          alt="robot11"
          width={800}
          height={800}
          priority
        />
      </div>
    </div>
  </section>


          {/* Forward Kinematics Section */}
          <section ref={addToRefs} className="min-h-screen px-6 lg:px-32 flex flex-col justify-center py-16 lg:py-24 bg-white">
            <div className="mx-auto w-full max-w-7xl lg:flex lg:items-center lg:justify-between lg:flex-row-reverse lg:gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-black font-bold text-3xl lg:text-6xl animate-text">Forward Kinematics</h2>
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed animate-text">
                  Forward kinematics focuses on the computation of a robot&apos;s end-effector position and orientation from its joint parameters.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-1/2">
                <Image
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105 animate-image"
                  src="/bot12.png"
                  alt="forward-kinematics"
                  width={700}
                  height={700}
                  priority
                />
              </div>
            </div>
          </section>

          {/* Inverse Kinematics Section */}
          <section ref={addToRefs} className="min-h-screen px-6 lg:px-32 flex flex-col justify-center py-16 lg:py-24 bg-gray-50">
            <div className="mx-auto w-full max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-black font-bold text-3xl lg:text-6xl animate-text">Inverse Kinematics</h2>
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed animate-text">
                  Inverse kinematics involves determining the required joint parameters to achieve a desired end-effector position and orientation.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-1/2">
                <Image
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105 animate-image"
                  src="/bot13.png"
                  alt="inverse-kinematics"
                  width={700}
                  height={700}
                  priority
                />
              </div>
            </div>
          </section>

           {/* IK Formulas Section */}
           <section ref={addToRefs} className="min-h-screen px-6 lg:px-32 py-16 lg:py-24 bg-white">
            <div className="mx-auto w-full max-w-4xl">
              <div className="text-center space-y-6 mb-12">
                <h2 className="font-bold text-3xl lg:text-5xl animate-text">Learn Inverse Kinematics Systems</h2>
                <p className="text-gray-600 text-lg lg:text-xl animate-text">
                  The inverse kinematics of the robot is calculated by solving the relation between the angles and the positions using mathamathical forumale
                </p>
              </div>
              
              <div className="w-full">
                <Image
                  className="w-full h-auto object-contain animate-image mb-8"
                  src="/bot14.png"
                  alt="inverse-kinematics-formulas"
                  width={1656}
                  height={828}
                  priority
                />
                
                <div className="space-y-6 animate-text">
                  <h3 className="font-bold text-xl mb-4">The inverse kinematics of the robot can be calculated using these formulas</h3>
                  <p className="text-gray-600 text-lg mt-6">
                    The <code className="bg-gray-100 px-2 py-1 rounded">X</code>, 
                    <code className="bg-gray-100 px-2 py-1 rounded mx-1">Y</code>, and 
                    <code className="bg-gray-100 px-2 py-1 rounded mx-1">Z</code> represent the point of the foot in a 3D space, with these we can compute the desired foot position of the robot.
                  </p>
                  <div className="grid gap-4 text-lg bg-gray-50 p-6 rounded-lg font-mono">
                    <p className="transition-colors duration-200 hover:bg-gray-100 p-2 rounded">
                      D = √(Z² + Y²) - 1600  (1)
                    </p>
                    <p className="transition-colors duration-200 hover:bg-gray-100 p-2 rounded">
                      G = √(D² + X²) (2)
                    </p>
                  </div>
                  <p className="text-gray-600 text-lg mt-6"> The
                  <code className="bg-gray-100 px-2 py-1 rounded mx-1">D</code> in Equation (1) represents the distance between the shoulder joint and the ground
                  , and  <code className="bg-gray-100 px-2 py-1 rounded mx-1">G</code>
                  in Equation (2) represents the distance between the shoulder joint and the foot
                  </p>
                  <div className="grid gap-4 text-lg bg-gray-50 p-6 rounded-lg font-mono">
                    <p className="transition-colors duration-200 hover:bg-gray-100 p-2 rounded">
                      ω = tan⁻¹(Z/Y) + tan⁻¹(D/40) (3)
                    </p>
                    <p className="transition-colors duration-200 hover:bg-gray-100 p-2 rounded">
                      ϕ = cos⁻¹((G² - 28800) / -28800) (4)
                    </p>
                    <p className="transition-colors duration-200 hover:bg-gray-100 p-2 rounded">
                      θ = tan⁻¹(X/D) + sin⁻¹(120 ⋅ sin(ϕ) / G) (5)
                    </p>
                  </div>
                  <p className="text-gray-600 text-lg mt-6">
                    Here, <code className="bg-gray-100 px-2 py-1 rounded">ω</code>, 
                    <code className="bg-gray-100 px-2 py-1 rounded mx-1">ϕ</code>, and 
                    <code className="bg-gray-100 px-2 py-1 rounded mx-1">θ</code> represent the angle of each leg constraint within its degree of freedom, 
                    <code className="bg-gray-100 px-2 py-1 rounded">ω</code> in Equation (3) represents the shoulder angle,
                    <code className="bg-gray-100 px-2 py-1 rounded">ϕ</code> in Equation (4) represents the elbow angle and
                    <code className="bg-gray-100 px-2 py-1 rounded">θ</code> in Equation (5) represents the angle of the robot’s arm.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section ref={addToRefs} className="min-h-screen px-6 lg:px-32 flex flex-col justify-center py-16 lg:py-24">
           <div className="mx-auto w-full max-w-7xl mt-20 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-12">
             {/* Image Container - Now First */}
             <div className="lg:w-1/2 order-2 lg:order-1">
               <Image
                 ref={botImageRef}
                 className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                 src="/bot15.png"
                 alt="robot15"
                 width={800}
                 height={800}
                 priority
               />
             </div>

             {/* Text Container - Now Second */}
             <div className="space-y-6 order-1 lg:order-2 mt-12 lg:mt-0">
               <div className="space-y-2">
                 <span className="text-black font-bold text-4xl lg:text-8xl animate-text">The Center</span>
                 <div className="font-bold text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-text">
                   <span className="block">of Mass</span>
                 </div>
               </div>
               <div className="text-gray-600 space-y-2 text-lg lg:text-xl animate-text">
                 <span className="block">Explore Various Walking Gaits, Biomimicry and physics behind.</span>
               </div>
             </div>
           </div>
          </section>



{/* Gait Formulas Section */}
<section ref={addToRefs} className="min-h-screen px-6 lg:px-32 py-16 lg:py-24 bg-white">
  <div className="mx-auto w-full max-w-4xl">
    <div className="text-center space-y-6 mb-12">
      <h2 className="font-bold text-3xl lg:text-5xl animate-text">Motion Gaits of the Quadruped</h2>
      <p className="text-gray-600 text-lg lg:text-xl animate-text">
        A motion gait refers to a series of repetitive leg movements. The gaits most commonly observed include walking, trotting, and galloping.
      </p>
    </div>
    
    <div className="w-full">
      <Image
        className="w-full h-auto object-contain animate-image mb-8"
        src="/bot16.png"
        alt="Gait"
        width={1024}
        height={610}
        priority
      />
      
      <div className="space-y-6 animate-text">
        <h3 className="font-bold text-xl mb-4">Gait Generation based of the Inverse Kinematics model</h3>
        <p>
          Gaits are categorized based on the duration a foot remains in contact with the ground, known as the Duty Factor. Symmetrical gaits, such as walking and trotting, maintain consistent intervals between footfalls of a leg pair, whereas asymmetrical gaits, like galloping and bounding, have inconsistent intervals. Walking gaits typically exhibit a duty factor of 50% or higher, while running gaits have a duty factor below 50%.
        </p>
        <p>
          The stability of static gaits, such as walking, is maintained by ensuring that the robot’s Center of Gravity (CoG) remains within the support polygon formed by its legs. When one leg is in the swing phase, the remaining three legs form a triangular support base, within which the CoG must remain to prevent instability. This principle is further illustrated in Figure 6, showing the shift of CoG during movement.
        </p>
        <p>
          To calculate the CoG, the weight contributions of the supporting legs are considered, excluding the leg in the swing phase. The CoG can be expressed mathematically using the following equations:
        </p>
        <p className="font-mono bg-gray-100 p-4 rounded-lg">
          W = Σ (Weight of all legs) <br />
          COG = (Σ(Weight × Position of each supporting leg)) / W
        </p>
        <p>
          Additionally, the stability margin theory is applied to measure how stable the robot is during gait transitions. The stability margin is determined by the CoG&apos;s distance to the edges of the support triangle. A larger margin indicates better stability, while a margin of zero represents a critical stable state.
        </p>
        <p>
          In motion, the CoG dynamically shifts to accommodate the swing phase of individual legs, ensuring that the robot remains stable even on uneven terrain. Figures provide visual representations of the CoG and its adjustments during gait transitions.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Outro Section */}
<section ref={addToRefs} className="min-h-screen px-6 lg:px-32 flex flex-col justify-center py-16 lg:py-24">
  <div className="mx-auto w-full max-w-7xl mt-20 lg:mt-0 lg:flex lg:items-center lg:justify-between lg:gap-12">
    {/* Text and Image Content on Mobile */}
    <div className="space-y-6 lg:w-1/2">
      <div className="space-y-2">
        <h2 className="text-black font-bold text-4xl lg:text-8xl animate-text">
          What&apos;s
        </h2>
        <div className="font-bold text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-text">
          <span className="block">Next?</span>
        </div>
      </div>

      {/* Mobile Image Position: between the text blocks */}
      <div className="lg:hidden mt-6">
        <Image
          ref={botImageRef}
          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
          src="/bot10.png"
          alt="robot10"
          width={800}
          height={800}
          priority
        />
      </div>

      <div className="text-gray-600 space-y-2 text-lg lg:text-xl animate-text">
        <span className="block">Our mission is to simplify robotics, foster creativity, and build a thriving community of passionate individuals pushing the boundaries of innovation.</span>
        <span className="block">Join our community to explore new ideas, collaborate with like-minded enthusiasts, and shape the future of robotics together.</span>
      </div>
      <a
        href="https://chat.whatsapp.com/Jt5ZnoCQoaOFl3XuyCqhNN"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 lg:mt-8 animate-text"
      >
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 lg:py-4 lg:px-8 rounded-lg shadow-lg text-base lg:text-xl hover:shadow-xl transition-transform transform hover:scale-105">
          Join Our Community
        </button>
      </a>
    </div>

    {/* Desktop Image: placed on the right side */}
    <div className="mt-12 lg:mt-0 lg:w-1/2 lg:block hidden">
      <Image
        ref={botImageRef}
        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
        src="/bot10.png"
        alt="robot10"
        width={800}
        height={800}
        priority
      />
    </div>
  </div>
</section>





        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;