import React from 'react';

const RoboticsLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-pulse">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 200 200" 
            className="w-32 h-32 text-white"
          >
            {/* Robot body outline */}
            <rect x="50" y="50" width="100" height="100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              className="animate-[pulse_1.5s_infinite]"
            />
            
            {/* Robotic joints */}
            <circle cx="60" cy="70" r="5" fill="currentColor" className="animate-ping" />
            <circle cx="140" cy="70" r="5" fill="currentColor" className="animate-ping delay-300" />
            <circle cx="60" cy="130" r="5" fill="currentColor" className="animate-ping delay-600" />
            <circle cx="140" cy="130" r="5" fill="currentColor" className="animate-ping delay-900" />
          </svg>
        </div>
        <div className="text-white text-lg font-bold animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2">
          Initializing Robot Systems...
        </div>
      </div>
    </div>
  );
};

export default RoboticsLoader;