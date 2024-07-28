// hooks/useASScroll.ts
import { useEffect } from 'react';
import ASScroll from '@ashthornton/asscroll';

const useASScroll = () => {
  useEffect(() => {
    const initASScroll = () => {
      if (typeof window !== 'undefined') {
        const asscrollElement = document.querySelector('.asscroll');
        if (asscrollElement) {
          const asscroll = new ASScroll({
            ease: 0.1,
            disableRaf: true,
          });
          asscroll.enable();
          window.addEventListener('resize', () => asscroll.resize());
        }
      }
    };

    // Try initializing ASScroll after a short delay to ensure the DOM is fully loaded
    const timeoutId = setTimeout(initASScroll, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
};

export default useASScroll;
