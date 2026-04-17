import React, { useState } from 'react';
import { OverlayPreview } from './components/OverlayPreview';
import { StartingSoon } from './components/StartingSoon';
import { BeRightBack } from './components/BeRightBack';
import { StreamEnding } from './components/StreamEnding';
import { MediaLayout } from './components/MediaLayout';
import { JustChatting } from './components/JustChatting';

type ScreenType = 'starting' | 'brb' | 'ending' | 'media' | 'chat';

const SCREENS = [
  { id: 'starting', label: 'Starting Soon', component: StartingSoon, path: '/starting' },
  { id: 'brb', label: 'Be Right Back', component: BeRightBack, path: '/brb' },
  { id: 'ending', label: 'Thank You', component: StreamEnding, path: '/ending' },
  { id: 'media', label: 'Media Layout', component: MediaLayout, path: '/media' },
  { id: 'chat', label: 'Talk Layout', component: JustChatting, path: '/chat' },
] as const;

export function ControlPanel() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('starting');

  const ActiveComponent = SCREENS.find(s => s.id === activeScreen)?.component || StartingSoon;
  const activePath = SCREENS.find(s => s.id === activeScreen)?.path;

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans text-white">
      {/* Control Panel Header */}
      <div className="h-20 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8">
        <div>
          <h1 className="text-xl font-bold tracking-widest text-[#94fc00] uppercase">Stream Overlays</h1>
          <p className="text-sm text-zinc-400">1920x1080 Active Abstract Style</p>
        </div>
        
        <div className="flex gap-4">
          {SCREENS.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(screen.id as ScreenType)}
              className={`px-4 py-2 rounded font-bold text-sm uppercase tracking-wider transition-colors ${
                activeScreen === screen.id 
                  ? 'bg-[#3b3bff] text-white shadow-[0_0_15px_rgba(59,59,255,0.5)]' 
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview Container */}
      <div className="flex-1 flex overflow-hidden">
        <OverlayPreview>
          <ActiveComponent />
        </OverlayPreview>
      </div>
      
      {/* OBS Usage Instructions */}
      <div className="p-4 bg-zinc-950 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-400 border-t border-zinc-800">
        <div className="bg-[#3b3bff] text-white px-2 py-0.5 rounded font-bold uppercase text-xs">OBS Tip</div>
        <span>Add a <strong>Browser Source</strong> in OBS. Set URL to:</span>
        <code className="bg-zinc-800 px-3 py-1 rounded text-[#94fc00] select-all font-mono">
          {`http://localhost:5173${activePath}`}
        </code>
        <span>and set Width to <strong>1920</strong>, Height to <strong>1080</strong>.</span>
      </div>
    </div>
  );
}
