import React from 'react';
import { motion } from 'motion/react';
import { ActiveBackground } from './ActiveBackground';
import { Instagram, Youtube, Globe } from 'lucide-react';
import logoSrc from '../../imports/IOA_media-Logo-Diapositief.png';

export function StreamEnding() {
  return (
    <ActiveBackground>
      <div className="flex-1 flex flex-row items-center px-24 md:px-32 relative w-full h-full">
        
        {/* Logo Placement */}
        <div className="absolute top-12 left-12 z-50">
           <img src={logoSrc} alt="Inside Out Archery Media" className="w-64 h-auto object-contain opacity-90 drop-shadow-2xl" />
        </div>

        {/* Left Side Content */}
        <div className="flex-[1.2] relative z-10 flex flex-col items-start w-full pt-20">
          <motion.div 
            className="text-[#94fc00] text-3xl xl:text-4xl font-bold tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Stream Ended
          </motion.div>
          
          <motion.h1 
            className="text-[8rem] xl:text-[10rem] font-black text-[#f2f2f9] tracking-tighter uppercase text-left mb-20 leading-[0.9]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Thanks For<br/>
            <span className="text-[#3b3bff] drop-shadow-[0_0_20px_rgba(59,59,255,0.8)]">Watching</span>
          </motion.h1>
          
          {/* Social Links Row */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Instagram, handle: "@insideoutarcherymedia" },
              { icon: Youtube, handle: "/insideoutarcherymedia" },
              { icon: Globe, handle: "www.insideoutarcherymedia.com" }
            ].map((social, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-6 bg-[#161460] border-4 border-[#e0ff05] px-10 py-5 w-fit shadow-[10px_10px_0px_0px_rgba(148,252,0,0.5)]"
                style={{ transform: 'skewX(-15deg)' }}
              >
                <div style={{ transform: 'skewX(15deg)' }} className="flex items-center gap-6">
                  <social.icon size={40} className="text-[#94fc00]" />
                  <span className="text-[#f2f2f9] text-2xl xl:text-3xl font-bold tracking-wider">{social.handle}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side Empty space for OBS Video Source (No placeholder box) */}
        <div className="flex-[0.8] h-full" />

      </div>
    </ActiveBackground>
  );
}
