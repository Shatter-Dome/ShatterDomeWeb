"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Intro animation on load
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.intro-animate-text'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 1.5, ease: 'power3.out' }
      );

      gsap.fromTo(
        sectionRef.current.querySelectorAll('.intro-animate-image'),
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, stagger: 0.3, duration: 1.5, ease: 'power3.out' }
      );

      // Scroll animations for other sections
      const sections = sectionRef.current.querySelectorAll('.animate-section');
      sections.forEach(section => {
        const animateText = gsap.fromTo(
          section.querySelectorAll('.animate-text'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.3, duration: 1.5, ease: 'power3.out', paused: true }
        );

        const animateImage = gsap.fromTo(
          section.querySelectorAll('.animate-image'),
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, stagger: 0.3, duration: 1.5, ease: 'power3.out', paused: true }
        );

        ScrollTrigger.create({
          trigger: section,
          start: 'top 75%', // Adjust as needed
          onEnter: () => {
            animateText.play();
            animateImage.play();
          },
        });
      });

      // Cleanup
      return () => {
        gsap.globalTimeline.clear();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return sectionRef;
};

export default useGsapAnimations;
