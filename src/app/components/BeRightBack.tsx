import React from 'react';
import { motion } from 'motion/react';
import { ActiveBackground } from './ActiveBackground';
import { Clock } from 'lucide-react';
import logoSrc from '../../imports/IOA_media-Logo-Diapositief.png';

export function BeRightBack() {
  return (
    <ActiveBackground>
      <div className="flex-1 flex flex-row items-center px-24 md:px-32 relative w-full h-full">
        
        {/* Logo Placement */}
        <div className="absolute top-12 left-12 z-50">
           <img src={logoSrc} alt="Inside Out Archery Media" className="w-64 h-auto object-contain opacity-90 drop-shadow-2xl" />
        </div>

        {/* Left Side Empty space for OBS Video Source (No placeholder box) */}
        <div className="flex-[0.8] h-full" />

        {/* Right Side Content */}
        <div className="flex-[1.2] relative flex flex-col items-end pt-16">
          {/* Main BRB Banner */}
          <motion.div 
            className="bg-[#e0ff05] px-16 py-10 relative overflow-hidden"
            style={{ transform: 'skewX(-15deg)' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {/* Inner sliding pattern */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #161460 10px, #161460 20px)'
              }}
              animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <h1 className="text-[6rem] xl:text-[8rem] font-black text-[#161460] tracking-tighter uppercase relative z-10 leading-none" style={{ transform: 'skewX(15deg)' }}>
              Be Right Back
            </h1>
          </motion.div>
          
          <div className="mt-16 flex items-center gap-8 bg-[#3b3bff] px-12 py-6 shadow-[-15px_15px_0px_0px_#94fc00]" style={{ transform: 'skewX(-15deg)' }}>
            <h2 className="text-4xl xl:text-5xl font-bold text-[#f2f2f9] tracking-wider uppercase" style={{ transform: 'skewX(15deg)' }}>
              Taking a short break
            </h2>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transform: 'skewX(15deg)' }}
            >
              <Clock size={64} className="text-[#f2f2f9]" />
            </motion.div>
          </div>

          {/* Glitchy lines */}
          <div className="absolute -inset-20 pointer-events-none overflow-hidden z-20 mix-blend-screen opacity-50">
             {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  className="absolute h-[3px] bg-[#94fc00] w-[200%] -right-1/2"
                  style={{ top: `${20 + i * 25}%` }}
                  animate={{ 
                    x: ['100%', '-100%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2 + i, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "circInOut"
                  }}
                />
             ))}
          </div>
        </div>
        
      </div>
    </ActiveBackground>
  );
}
