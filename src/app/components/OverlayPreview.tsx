import React, { useEffect, useRef, useState } from 'react';
import { cn } from './ActiveBackground';

interface OverlayPreviewProps {
  children: React.ReactNode;
}

export function OverlayPreview({ children }: OverlayPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Calculate scale so the 1920x1080 canvas fits exactly in the wrapper
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        // The target aspect is 1920x1080
        const scaleX = clientWidth / 1920;
        const scaleY = clientHeight / 1080;
        // Take the smaller scale to fit the whole canvas within the container
        setScale(Math.min(scaleX, scaleY));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex-1 w-full h-full flex items-center justify-center p-8 bg-zinc-900 overflow-hidden"
    >
      <div 
        className="relative shadow-2xl ring-4 ring-zinc-800 bg-[#161460]"
        style={{ 
          width: 1920, 
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0
        }}
      >
        {children}
      </div>
    </div>
  );
}
