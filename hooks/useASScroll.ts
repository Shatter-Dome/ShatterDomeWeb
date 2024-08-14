"use client";
import { useEffect, useRef } from 'react';
import ASScroll from '@ashthornton/asscroll';

const useASScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Check if we're running in a browser environment
    if (typeof window !== 'undefined') {
      // Initialize ASScroll after the component has mounted
      const initASScroll = () => {
        const asscrollElement = scrollContainerRef.current;
        if (asscrollElement) {
          const asscroll = new ASScroll({
            ease: 0.1,
            disableRaf: true,
          });

          // Enable ASScroll
          asscroll.enable();

          // Handle resize events
          const handleResize = () => asscroll.resize();
          window.addEventListener('resize', handleResize);

          // Cleanup function
          return () => {
            asscroll.disable(); // Disable ASScroll if it has a disable method
            window.removeEventListener('resize', handleResize);
          };
        }
      };

      // Initialize ASScroll after a short delay to ensure the DOM is fully loaded
      const timeoutId = setTimeout(initASScroll, 100);

      // Clean up on component unmount
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []); // Empty dependency array ensures this runs only once after the initial render
  return scrollContainerRef;
};

export default useASScroll;
