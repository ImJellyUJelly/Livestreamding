import React from 'react';
import { motion } from 'motion/react';
import { ActiveBackground } from './ActiveBackground';
import { MessageSquare } from 'lucide-react';

export function MediaLayout() {
  return (
    <ActiveBackground showGrid={false}>
      <div className="flex-1 flex w-full h-full p-12 gap-12 relative z-10">
        
        {/* Left Side - Video / Slideshow Window Hole (16:9) */}
        <div className="flex-[3] flex flex-col justify-center h-full">
          {/* Main Media Frame (Transparent inside for OBS source to show underneath) */}
          <div className="relative w-full aspect-video border-8 border-[#3b3bff] shadow-[15px_15px_0px_0px_#94fc00] bg-transparent pointer-events-none z-20">
             
             {/* Live indicator top right */}
             <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-[#161460] px-4 py-2 border-2 border-[#e0ff05] shadow-[5px_5px_0px_0px_rgba(224,255,5,0.4)] pointer-events-auto">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-[#e0ff05]"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[#e0ff05] font-bold tracking-wider">LIVE</span>
             </div>
          </div>
        </div>

        {/* Right Side - Chat / Information */}
        <div className="flex-[1] flex flex-col h-full gap-8">
           {/* Top Info Box */}
           <div className="bg-[#e0ff05] p-6 h-48 border-4 border-[#161460] shadow-[8px_8px_0px_0px_#f2f2f9]" style={{ transform: 'skewX(-5deg)' }}>
              <div style={{ transform: 'skewX(5deg)' }} className="flex flex-col justify-center h-full text-[#161460]">
                 <h3 className="text-2xl font-black uppercase mb-2">Current Topic</h3>
                 <div className="text-4xl font-bold leading-tight">
                    
                 </div>
              </div>
           </div>

           {/* Chat Box Frame */}
           <div className="flex-1 bg-transparent border-4 border-[#94fc00] p-6 flex flex-col relative z-20 pointer-events-none">
             <div className="flex items-center gap-3 text-[#94fc00] mb-6 pb-4 border-b border-[#94fc00]/30 pointer-events-auto">
               <MessageSquare size={28} />
               <h3 className="text-2xl font-bold uppercase tracking-wider">Live Chat</h3>
             </div>
             
             <div className="flex-1" />
           </div>
        </div>
        
      </div>
    </ActiveBackground>
  );
}
