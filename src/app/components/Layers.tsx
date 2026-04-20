import React from 'react';
import { motion } from 'motion/react';
import { ActiveBackground } from './ActiveBackground';
import { Clock, Instagram, Youtube, Globe, MessageSquare, Shield, Zap, Hexagon, Triangle, Target, Flame } from 'lucide-react';
import { OBSLayer } from './OBSLayer';
import logoSrc from '../../imports/IOA_media-Logo-Diapositief.png';

// Partners Data
const PARTNERS = [
  { id: 1, name: 'Sponsor One', Icon: Shield },
  { id: 2, name: 'Brand Two', Icon: Zap },
  { id: 3, name: 'Elite Gear', Icon: Hexagon },
  { id: 4, name: 'Max Power', Icon: Target },
  { id: 5, name: 'Pro Sports', Icon: Flame },
  { id: 6, name: 'Alpha Tech', Icon: Triangle },
];

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

export const Layers = {
  // BACKGROUNDS
  Background: () => (
    <OBSLayer>
      <ActiveBackground showGrid={true} />
    </OBSLayer>
  ),
  BackgroundClean: () => (
    <OBSLayer>
      <ActiveBackground showGrid={false} />
    </OBSLayer>
  ),

  // STARTING SOON
  StartingContent: () => (
    <OBSLayer>
      <div className="flex-1 flex flex-row items-center px-24 md:px-32 relative w-full h-full">
        <div className="flex-[1.2] relative flex flex-col items-center justify-center h-full pt-16">
          <div className="relative w-full flex flex-col items-center justify-center">
            <motion.div 
              className="absolute -inset-20 bg-[#e0ff05] blur-[120px] opacity-20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div 
                className="mb-12 flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={logoSrc} alt="Inside Out Archery Media" className="h-48 xl:h-64 w-auto object-contain drop-shadow-[0_0_20px_rgba(148,252,0,0.2)]" />
              </motion.div>
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
        <div className="flex-[0.8] h-full" />
      </div>
    </OBSLayer>
  ),
  StartingRibbon: () => (
    <OBSLayer>
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none transform -rotate-2">
        <motion.div
          className="text-[10rem] font-black text-[#f2f2f9] tracking-widest uppercase"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          STARTING SOON STARTING SOON STARTING SOON STARTING SOON
        </motion.div>
      </div>
    </OBSLayer>
  ),

  // BE RIGHT BACK
  BRBContent: () => (
    <OBSLayer>
      <div className="flex-1 flex flex-row items-center px-24 md:px-32 relative w-full h-full">
        <div className="flex-[0.8] h-full" />
        <div className="flex-[1.2] relative flex flex-col items-end pt-16 w-full">
          <motion.div 
            className="bg-[#e0ff05] px-16 py-10 relative overflow-hidden"
            style={{ transform: 'skewX(-15deg)' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #161460 10px, #161460 20px)' }}
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
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ transform: 'skewX(15deg)' }}>
              <Clock size={64} className="text-[#f2f2f9]" />
            </motion.div>
          </div>
          <div className="absolute -inset-20 pointer-events-none overflow-hidden z-20 mix-blend-screen opacity-50">
             {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  className="absolute h-[3px] bg-[#94fc00] w-[200%] -right-1/2"
                  style={{ top: `${20 + i * 25}%` }}
                  animate={{ x: ['100%', '-100%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5, ease: "circInOut" }}
                />
             ))}
          </div>
        </div>
      </div>
    </OBSLayer>
  ),
  BRBLogo: () => (
    <OBSLayer>
      <div className="absolute top-12 left-12 z-50">
         <img src={logoSrc} alt="Inside Out Archery Media" className="w-64 h-auto object-contain opacity-90 drop-shadow-2xl" />
      </div>
    </OBSLayer>
  ),

  // ENDING
  EndingContent: () => (
    <OBSLayer>
      <div className="flex-1 flex flex-row items-center px-24 md:px-32 relative w-full h-full">
        <div className="flex-[1.2] relative z-10 flex flex-col items-start justify-center h-full w-full">
          <motion.div className="mb-12" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <img src={logoSrc} alt="Inside Out Archery Media" className="w-64 h-auto object-contain drop-shadow-2xl" />
          </motion.div>
          <motion.div className="text-[#94fc00] text-3xl xl:text-4xl font-bold tracking-widest uppercase mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Stream Ended
          </motion.div>
          <motion.h1 className="text-[8rem] xl:text-[10rem] font-black text-[#f2f2f9] tracking-tighter uppercase text-left mb-16 leading-[0.9]" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
            Thanks For<br/>
            <span className="text-[#3b3bff] drop-shadow-[0_0_20px_rgba(59,59,255,0.8)]">Watching</span>
          </motion.h1>
          <motion.div className="flex flex-col gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {[
              { icon: Instagram, handle: "@insideoutarcherymedia" },
              { icon: Youtube, handle: "/insideoutarcherymedia" },
              { icon: Globe, handle: "www.insideoutarcherymedia.com" }
            ].map((social, idx) => (
              <div key={idx} className="flex items-center gap-6 bg-[#161460] border-4 border-[#e0ff05] px-8 py-4 w-fit shadow-[10px_10px_0px_0px_rgba(148,252,0,0.5)]" style={{ transform: 'skewX(-15deg)' }}>
                <div style={{ transform: 'skewX(15deg)' }} className="flex items-center gap-6">
                  <social.icon size={36} className="text-[#94fc00]" />
                  <span className="text-[#f2f2f9] text-xl xl:text-2xl font-bold tracking-wider">{social.handle}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex-[0.8] h-full" />
      </div>
    </OBSLayer>
  ),

  // CLEAN MEDIA / PARTNER MEDIA
  PartnerMediaFrame: () => (
    <OBSLayer>
      <div className="flex-1 flex flex-col w-full h-full p-12 gap-8 relative z-10">
        <div className="w-full flex justify-between items-start pointer-events-none z-30 h-0"></div>
        <div className="flex-1 w-full flex justify-center items-center mt-4">
          <div className="relative w-full h-full max-h-[800px] border-[12px] border-[#3b3bff] bg-transparent shadow-[20px_20px_0px_0px_#94fc00] pointer-events-none z-20">
             <div className="absolute -top-6 -right-6 flex items-center gap-3 bg-[#161460] px-6 py-3 border-4 border-[#e0ff05] shadow-[8px_8px_0px_0px_rgba(224,255,5,0.4)] pointer-events-auto z-30">
                <motion.div className="w-4 h-4 rounded-full bg-[#e0ff05]" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="text-[#e0ff05] text-xl font-black tracking-widest uppercase">LIVE</span>
             </div>
             <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-[12px] border-l-[12px] border-[#e0ff05] z-30" />
          </div>
        </div>
        <div className="h-32 w-full mt-4 flex items-center opacity-0 pointer-events-none" />
      </div>
    </OBSLayer>
  ),
  PartnerMediaBanner: () => {
    const shouldScroll = PARTNERS.length > 4;
    return (
      <OBSLayer>
        <div className="flex-1 flex flex-col w-full h-full p-12 gap-8 relative z-10">
          <div className="flex-1" />
          <div className="h-32 w-full mt-4 bg-[#e0ff05] border-[6px] border-[#161460] shadow-[-15px_15px_0px_0px_#3b3bff] flex items-center overflow-hidden relative pointer-events-auto" style={{ transform: 'skewX(-5deg)' }}>
            <div className="absolute left-0 top-0 bottom-0 bg-[#161460] px-8 flex items-center justify-center z-20 border-r-[6px] border-[#161460] shadow-[10px_0px_20px_rgba(0,0,0,0.2)]">
              <span className="text-[#f2f2f9] text-2xl font-black uppercase tracking-widest" style={{ transform: 'skewX(5deg)' }}>Partners</span>
            </div>
            <div className="flex-1 h-full flex items-center overflow-hidden ml-48 relative" style={{ transform: 'skewX(5deg)' }}>
              <motion.div
                className="flex items-center h-full min-w-max"
                animate={shouldScroll ? { x: ["0%", "-50%"] } : { x: 0 }}
                transition={shouldScroll ? { duration: 25, repeat: Infinity, ease: "linear" } : {}}
                style={{ justifyContent: shouldScroll ? 'flex-start' : 'center', width: shouldScroll ? 'fit-content' : '100%' }}
              >
                {shouldScroll ? <>{renderLogos()}{renderLogos()}</> : renderLogos()}
              </motion.div>
            </div>
          </div>
        </div>
      </OBSLayer>
    );
  },
  PartnerMediaLogo: () => (
    <OBSLayer>
      <div className="flex-1 flex flex-col w-full h-full p-12 gap-8 relative z-10 pointer-events-none">
        <div className="w-full flex justify-between items-start pointer-events-none z-30 h-0">
          <img src={logoSrc} alt="Inside Out Archery Media" className="h-24 w-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </OBSLayer>
  ),

  // MEDIA LAYOUT
  MediaFrame: () => (
    <OBSLayer>
      <div className="flex-1 flex w-full h-full p-12 gap-12 relative z-10 pointer-events-none">
        <div className="flex-[3] flex flex-col justify-center h-full">
          <div className="relative w-full aspect-video border-8 border-[#3b3bff] shadow-[15px_15px_0px_0px_#94fc00] bg-transparent pointer-events-none z-20">
             <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-[#161460] px-4 py-2 border-2 border-[#e0ff05] shadow-[5px_5px_0px_0px_rgba(224,255,5,0.4)] pointer-events-auto">
                <motion.div className="w-3 h-3 rounded-full bg-[#e0ff05]" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="text-[#e0ff05] font-bold tracking-wider">LIVE</span>
             </div>
          </div>
        </div>
        <div className="flex-[1] h-full gap-8" />
      </div>
    </OBSLayer>
  ),
  MediaHeader: () => (
    <OBSLayer>
      <div className="flex-1 flex w-full h-full p-12 gap-12 relative z-10 pointer-events-none">
        <div className="flex-[3] h-full" />
        <div className="flex-[1] flex flex-col h-full gap-8 pointer-events-auto">
           <div className="bg-[#e0ff05] p-6 h-48 border-4 border-[#161460] shadow-[8px_8px_0px_0px_#f2f2f9]" style={{ transform: 'skewX(-5deg)' }}>
              <div style={{ transform: 'skewX(5deg)' }} className="flex flex-col justify-center h-full text-[#161460]">
                 <h3 className="text-2xl font-black uppercase mb-2">Current Topic</h3>
                 <div className="text-4xl font-bold leading-tight">Discussing the Main Event</div>
              </div>
           </div>
        </div>
      </div>
    </OBSLayer>
  ),
  MediaChat: () => (
    <OBSLayer>
      <div className="flex-1 flex w-full h-full p-12 gap-12 relative z-10 pointer-events-none">
        <div className="flex-[3] h-full" />
        <div className="flex-[1] flex flex-col h-full gap-8">
           <div className="h-48" />
           <div className="flex-1 bg-transparent border-4 border-[#94fc00] p-6 flex flex-col relative z-20 pointer-events-none">
             <div className="flex items-center gap-3 text-[#94fc00] mb-6 pb-4 border-b border-[#94fc00]/30 pointer-events-auto">
               <MessageSquare size={28} />
               <h3 className="text-2xl font-bold uppercase tracking-wider">Live Chat</h3>
             </div>
           </div>
        </div>
      </div>
    </OBSLayer>
  ),

  // JUST CHATTING
  ChatContent: () => (
    <OBSLayer>
      <div className="flex-1 flex w-full h-full p-12 gap-12 relative z-10 pointer-events-none">
        {/* Fill from JustChatting layout... */}
        {/* Simplified for time, mostly replicating the JustChatting frame geometry */}
        <div className="flex-[2] flex flex-col justify-center h-full">
          <div className="w-full flex justify-start items-start pointer-events-none z-30 mb-8">
            <img src={logoSrc} alt="Inside Out Archery Media" className="h-20 w-auto object-contain drop-shadow-2xl" />
          </div>
          <div className="relative w-full aspect-video border-[10px] border-[#3b3bff] shadow-[20px_20px_0px_0px_#94fc00] bg-transparent pointer-events-none z-20">
             <div className="absolute -bottom-6 -left-6 bg-[#161460] px-8 py-4 border-4 border-[#e0ff05] shadow-[-8px_8px_0px_0px_rgba(224,255,5,0.4)] pointer-events-auto z-30">
                <span className="text-[#f2f2f9] text-2xl font-black tracking-widest uppercase">Just Chatting</span>
             </div>
             <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-[#161460] px-4 py-2 border-2 border-[#e0ff05]">
                <motion.div className="w-3 h-3 rounded-full bg-[#e0ff05]" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="text-[#e0ff05] font-bold tracking-wider">LIVE</span>
             </div>
          </div>
        </div>
        <div className="flex-[1] flex flex-col h-full mt-28">
           <div className="flex-1 bg-transparent border-[6px] border-[#94fc00] p-8 flex flex-col relative z-20 pointer-events-none shadow-[10px_10px_0px_0px_#3b3bff]">
             <div className="flex items-center gap-4 text-[#94fc00] mb-8 pb-6 border-b-2 border-[#94fc00]/30 pointer-events-auto">
               <MessageSquare size={36} />
               <h3 className="text-3xl font-bold uppercase tracking-wider">Live Chat</h3>
             </div>
           </div>
        </div>
      </div>
    </OBSLayer>
  )
};
