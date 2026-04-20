import React from 'react';

export function OBSLayer({ children, background = "transparent" }: { children: React.ReactNode, background?: string }) {
  return (
    <div 
      className="relative overflow-hidden flex flex-col"
      style={{
        width: '2704px',
        height: '1520px',
        background: background,
        // Optional scale handling if viewed outside OBS, but typically OBS provides exactly this window size
      }}
    >
      {/* We use a zoom or scale to upsize the 1920x1080 design to 2704x1520 (scale factor ~1.408) */}
      <div 
        className="w-[1920px] h-[1080px] origin-top-left flex flex-col"
        style={{ transform: `scale(${2704 / 1920})` }}
      >
        {children}
      </div>
    </div>
  );
}
