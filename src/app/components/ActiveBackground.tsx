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
      
      {/* Background radial gradient to create depth / focus effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,20,96,0)_0%,rgba(10,8,45,0.8)_100%)] pointer-events-none z-0" />

      {/* Abstract Concentric Target Rings */}
      <div className="absolute -top-[30%] -right-[10%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full border-[1px] border-[#3b3bff]/20 pointer-events-none z-0 flex items-center justify-center">
        <motion.div 
          className="absolute w-[80%] h-[80%] rounded-full border-[2px] border-[#3b3bff]/10"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute w-[60%] h-[60%] rounded-full border-[4px] border-[#3b3bff]/10 border-dashed" />
        <motion.div 
          className="absolute w-[40%] h-[40%] rounded-full border-[1px] border-[#94fc00]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }}
        />
        <motion.div 
          className="absolute w-[20%] h-[20%] rounded-full bg-[#3b3bff]/5 blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Fast Trajectory Lines (representing arrows in flight) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#e0ff05] to-transparent w-1/3"
            style={{ 
              top: `${15 + (i * 20)}%`, 
              left: '-50%',
              opacity: 0.6 - (i * 0.1)
            }}
            animate={{ 
              x: ['0vw', '150vw'],
            }}
            transition={{ 
              duration: 1.5 + (i * 0.5), 
              repeat: Infinity, 
              delay: i * 1.2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Precision / Focus Crosshairs */}
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
           {/* Larger target reticles */}
           <div className="absolute top-[20%] left-[20%] w-8 h-8 border-t-2 border-l-2 border-[#94fc00]/50" />
           <div className="absolute bottom-[20%] right-[20%] w-8 h-8 border-b-2 border-r-2 border-[#94fc00]/50" />
           <div className="absolute top-[20%] right-[20%] w-8 h-8 border-t-2 border-r-2 border-[#e0ff05]/50" />
           <div className="absolute bottom-[20%] left-[20%] w-8 h-8 border-b-2 border-l-2 border-[#e0ff05]/50" />
        </div>
      )}

      {/* Dynamic angled abstract shapes - Action feel */}
      <div className="absolute inset-0 mix-blend-screen pointer-events-none z-0">
        <motion.div 
          className="absolute -top-[10%] -left-[20%] w-[40%] h-[120%] bg-[#94fc00] opacity-[0.03] origin-center"
          style={{ transform: 'skewX(-25deg)' }}
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-[20%] right-[10%] w-[30%] h-[100%] bg-[#3b3bff] opacity-[0.05] origin-center"
          style={{ transform: 'skewX(-25deg)' }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
