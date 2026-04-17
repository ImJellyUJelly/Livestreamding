import React from 'react';
import { ActiveBackground } from './ActiveBackground';
import { Zap } from 'lucide-react';

export function JustChatting() {
  return (
    <ActiveBackground>
      <div className="flex-1 w-full h-full p-10 flex flex-col gap-6 relative z-10">
        
        {/* Top Bar */}
        <div className="h-20 w-full flex justify-between items-center px-8 border-b-4 border-[#3b3bff]">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#94fc00] flex items-center justify-center transform -skew-x-12">
               <Zap className="text-[#161460]" fill="currentColor" />
             </div>
             <h2 className="text-[#f2f2f9] text-3xl font-black uppercase tracking-widest italic">Live Talk</h2>
           </div>
           
           <div className="flex gap-8 text-xl font-bold uppercase">
             <div className="flex gap-2">
               <span className="text-[#e0ff05]">Latest Follow:</span>
               <span className="text-[#f2f2f9]">NewUser99</span>
             </div>
             <div className="flex gap-2">
               <span className="text-[#94fc00]">Latest Sub:</span>
               <span className="text-[#f2f2f9]">MegaSupporter</span>
             </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex gap-8">
           {/* Camera Frame (Transparent inside) */}
           <div className="flex-[3] relative h-full flex items-center justify-center pointer-events-none z-20">
             <div className="absolute inset-0 bg-[#3b3bff] translate-x-4 translate-y-4 -z-10" />
             <div className="absolute inset-0 border-8 border-[#f2f2f9] bg-transparent flex items-center justify-center shadow-2xl" />
             
             {/* Decorative Corner Accents */}
             <div className="absolute -top-2 -left-2 w-16 h-16 border-t-8 border-l-8 border-[#e0ff05]" />
             <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-8 border-r-8 border-[#e0ff05]" />
           </div>

           {/* Side Chat / Events */}
           <div className="flex-[1] flex flex-col gap-6">
             <div className="flex-1 border-4 border-[#94fc00] bg-transparent flex flex-col p-6 pointer-events-none z-20">
                <h3 className="text-[#94fc00] text-2xl font-black uppercase tracking-wider mb-6 pointer-events-auto">Stream Chat</h3>
                <div className="flex-1" />
             </div>
             
             <div className="h-48 border-4 border-[#e0ff05] bg-[#e0ff05] p-6 text-[#161460] flex flex-col justify-center">
                <h3 className="text-xl font-black uppercase tracking-wider opacity-80">Up Next</h3>
                <div className="text-3xl font-black mt-2 leading-none uppercase">
                   Q&A Session
                </div>
             </div>
           </div>
        </div>
      </div>
    </ActiveBackground>
  );
}
