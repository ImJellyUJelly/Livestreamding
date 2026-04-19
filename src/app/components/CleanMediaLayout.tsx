import React from 'react';
import { motion } from 'motion/react';
import { ActiveBackground } from './ActiveBackground';
import { Shield, Zap, Hexagon, Triangle, Target, Flame } from 'lucide-react';
import logoSrc from '../../imports/IOA_media-Logo-Diapositief.png';

// You can add or remove partners here! 
// If there are more than 4, the banner will automatically scroll.
const PARTNERS = [
  { id: 1, name: 'Sponsor One', Icon: Shield },
  { id: 2, name: 'Brand Two', Icon: Zap },
  { id: 3, name: 'Elite Gear', Icon: Hexagon },
  { id: 4, name: 'Max Power', Icon: Target },
  { id: 5, name: 'Pro Sports', Icon: Flame },
  { id: 6, name: 'Alpha Tech', Icon: Triangle },
];

export function CleanMediaLayout() {
  const shouldScroll = PARTNERS.length > 4;

  // We duplicate the list to create a seamless looping marquee if scrolling is enabled
  const renderLogos = () => (
    <div className="flex items-center gap-24 px-12 shrink-0">
      {PARTNERS.map((partner, index) => (
        <div key={`${partner.id}-${index}`} className="flex items-center gap-4 text-[#161460]">
          <div className="w-16 h-16 bg-[#161460] rounded-full flex items-center justify-center transform -skew-x-12 border-4 border-[#161460]">
            <partner.Icon size={32} className="text-[#94fc00]" style={{ transform: 'skewX(12deg)' }} />
          </div>
          <span className="text-3xl font-black tracking-widest uppercase italic">{partner.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <ActiveBackground showGrid={false}>
      <div className="flex-1 flex flex-col w-full h-full p-12 gap-8 relative z-10">
        
        {/* Main Header / Logo Space (Optional extra touch) */}
        <div className="w-full flex justify-between items-start pointer-events-none z-30 h-0">
          <img src={logoSrc} alt="Inside Out Archery Media" className="h-24 w-auto object-contain drop-shadow-2xl" />
        </div>

        {/* Huge Central Media Frame (Transparent inside for OBS source) */}
        <div className="flex-1 w-full flex justify-center items-center mt-4">
          <div className="relative w-full h-full max-h-[800px] border-[12px] border-[#3b3bff] bg-transparent shadow-[20px_20px_0px_0px_#94fc00] pointer-events-none z-20">
             
             {/* Live indicator top right */}
             <div className="absolute -top-6 -right-6 flex items-center gap-3 bg-[#161460] px-6 py-3 border-4 border-[#e0ff05] shadow-[8px_8px_0px_0px_rgba(224,255,5,0.4)] pointer-events-auto z-30">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-[#e0ff05]"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[#e0ff05] text-xl font-black tracking-widest uppercase">LIVE</span>
             </div>
             
             {/* Decorative Corner Accents */}
             <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-[12px] border-l-[12px] border-[#e0ff05] z-30" />
          </div>
        </div>

        {/* Partners Banner at the Bottom */}
        <div className="h-32 w-full mt-4 bg-[#e0ff05] border-[6px] border-[#161460] shadow-[-15px_15px_0px_0px_#3b3bff] flex items-center overflow-hidden relative" style={{ transform: 'skewX(-5deg)' }}>
          {/* Label indicating this is a partner area */}
          <div className="absolute left-0 top-0 bottom-0 bg-[#161460] px-8 flex items-center justify-center z-20 border-r-[6px] border-[#161460] shadow-[10px_0px_20px_rgba(0,0,0,0.2)]">
            <span className="text-[#f2f2f9] text-2xl font-black uppercase tracking-widest" style={{ transform: 'skewX(5deg)' }}>
              Partners
            </span>
          </div>
          
          {/* Marquee Wrapper */}
          <div className="flex-1 h-full flex items-center overflow-hidden ml-48 relative" style={{ transform: 'skewX(5deg)' }}>
            <motion.div
              className="flex items-center h-full min-w-max"
              animate={shouldScroll ? { x: ["0%", "-50%"] } : { x: 0 }}
              transition={shouldScroll ? { duration: 25, repeat: Infinity, ease: "linear" } : {}}
              style={{
                justifyContent: shouldScroll ? 'flex-start' : 'center',
                width: shouldScroll ? 'fit-content' : '100%',
              }}
            >
              {shouldScroll ? (
                <>
                  {renderLogos()}
                  {renderLogos()}
                </>
              ) : (
                renderLogos()
              )}
            </motion.div>
          </div>
        </div>
        
      </div>
    </ActiveBackground>
  );
}
