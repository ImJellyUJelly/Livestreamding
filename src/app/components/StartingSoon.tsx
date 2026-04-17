import React from 'react';
import { motion } from 'motion/react';
import { ActiveBackground } from './ActiveBackground';
import logoSrc from '../../imports/IOA_media-Logo-Diapositief.png';

export function StartingSoon() {
  return (
    <ActiveBackground>
      <div className="flex-1 flex flex-row items-center px-24 md:px-32 relative w-full h-full">
        {/* Left Side Content - Centered */}
        <div className="flex-[1.2] relative flex flex-col items-center justify-center h-full pt-16">
          {/* Central glowing container */}
          <div className="relative w-full flex flex-col items-center justify-center">
            {/* Animated glow rings */}
            <motion.div 
              className="absolute -inset-20 bg-[#e0ff05] blur-[120px] opacity-20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Pulsing icon */}
              <motion.div 
                className="mb-12 flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={logoSrc} alt="Inside Out Archery Media" className="h-48 xl:h-64 w-auto object-contain drop-shadow-[0_0_20px_rgba(148,252,0,0.2)]" />
              </motion.div>
              
              {/* Title Text - Increased Size */}
              <motion.h1 
                className="text-[8rem] xl:text-[10rem] leading-none font-black text-[#f2f2f9] tracking-tighter uppercase mb-6 drop-shadow-2xl"
                style={{ transform: 'skewX(-10deg)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Stream<br/>
                <span className="text-[#94fc00]">Starting</span>
              </motion.h1>
              
              {/* Subtitle / Loader */}
              <div className="flex items-center gap-8 mt-10" style={{ transform: 'skewX(-10deg)' }}>
                <div className="text-[#e0ff05] text-4xl xl:text-5xl font-bold tracking-widest uppercase">
                  Get Ready
                </div>
                <div className="flex gap-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-5 h-16 bg-[#3b3bff]"
                      animate={{ scaleY: [1, 2.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Empty space for OBS Video Source (No placeholder box) */}
        <div className="flex-[0.8] h-full" />

        {/* Decorative sliding text ribbon */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none transform -rotate-2">
          <motion.div
            className="text-[10rem] font-black text-[#f2f2f9] tracking-widest uppercase"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            STARTING SOON STARTING SOON STARTING SOON STARTING SOON
          </motion.div>
        </div>
      </div>
    </ActiveBackground>
  );
}
