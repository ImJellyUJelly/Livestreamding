import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ActiveBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  showGrid?: boolean;
}

export function ActiveBackground({ className, children, showGrid = true }: ActiveBackgroundProps) {
  return (
    <div className={cn("relative w-full h-full bg-[#161460] overflow-hidden flex flex-col", className)}>
      {/* Dynamic angled abstract shapes */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
        {/* Large skewed background blocks */}
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[150%] bg-[#3b3bff] opacity-40 origin-center"
          style={{ transform: 'skewX(-20deg)' }}
          animate={{ x: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-[10%] -left-[20%] w-[40%] h-[120%] bg-[#94fc00] opacity-20 origin-center"
          style={{ transform: 'skewX(-20deg)' }}
          animate={{ x: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Repeating Chevron Patterns */}
      <div className="absolute top-0 right-0 p-8 flex gap-4 opacity-30 pointer-events-none">
         {[1, 2, 3].map((i) => (
           <motion.div
             key={i}
             className="w-16 h-32 border-r-8 border-b-8 border-[#e0ff05]"
             style={{ transform: 'skewX(-20deg)' }}
             animate={{ opacity: [0.2, 0.8, 0.2] }}
             transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
           />
         ))}
      </div>

      {/* Grid Pattern overlay */}
      {showGrid && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#f2f2f9 1px, transparent 1px), linear-gradient(90deg, #f2f2f9 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      )}

      {/* Slanted lines accent at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 flex pointer-events-none">
        <motion.div 
          className="h-full bg-[#94fc00]" 
          initial={{ width: "30%" }}
          animate={{ width: "40%" }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="h-full w-8 bg-[#f2f2f9] -skew-x-12 mx-2" />
        <div className="h-full w-4 bg-[#f2f2f9] -skew-x-12 mr-2" />
        <motion.div 
          className="h-full bg-[#3b3bff] flex-1"
        />
        <div className="h-full w-32 bg-[#e0ff05] -skew-x-12 ml-4" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
