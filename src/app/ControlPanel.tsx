import React, { useState } from 'react';
import { OverlayPreview } from './components/OverlayPreview';
import { StartingSoon } from './components/StartingSoon';
import { BeRightBack } from './components/BeRightBack';
import { StreamEnding } from './components/StreamEnding';
import { MediaLayout } from './components/MediaLayout';
import { JustChatting } from './components/JustChatting';

import { CleanMediaLayout } from './components/CleanMediaLayout';

type ScreenType = 'starting' | 'brb' | 'ending' | 'media' | 'chat' | 'clean_media';

const SCREENS = [
  { id: 'starting', label: 'Starting Soon', component: StartingSoon, path: '/starting' },
  { id: 'brb', label: 'Be Right Back', component: BeRightBack, path: '/brb' },
  { id: 'ending', label: 'Thank You', component: StreamEnding, path: '/ending' },
  { id: 'media', label: 'Media Layout', component: MediaLayout, path: '/media' },
  { id: 'clean_media', label: 'Partner Media', component: CleanMediaLayout, path: '/clean-media' },
  { id: 'chat', label: 'Talk Layout', component: JustChatting, path: '/chat' },
] as const;

export function ControlPanel() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('starting');

  const ActiveComponent = SCREENS.find(s => s.id === activeScreen)?.component || StartingSoon;
  const activePath = SCREENS.find(s => s.id === activeScreen)?.path;
  const baseUrl = window.location.href.split('#')[0];

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans text-white">
      {/* Control Panel Header */}
      <div className="h-20 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8">
        <div>
          <h1 className="text-xl font-bold tracking-widest text-[#94fc00] uppercase">Stream Overlays</h1>
          <p className="text-sm text-zinc-400">2704x1520 Modular Hash Routes</p>
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
      <div className="p-4 bg-zinc-950 flex flex-col items-center justify-center gap-3 text-sm text-zinc-400 border-t border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="bg-[#3b3bff] text-white px-2 py-0.5 rounded font-bold uppercase text-xs">OBS Tip</div>
          <span>Add a <strong>Browser Source</strong> in OBS. Set Width to <strong>2704</strong>, Height to <strong>1520</strong>.</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 w-full max-w-4xl">
          <div className="bg-zinc-900 p-3 rounded border border-zinc-800 flex flex-col">
            <span className="text-zinc-500 text-xs uppercase mb-1 font-bold">Full Scene URL</span>
            <code className="text-[#94fc00] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#{activePath}</code>
          </div>
          
          <div className="bg-zinc-900 p-3 rounded border border-zinc-800 flex flex-col">
            <span className="text-zinc-500 text-xs uppercase mb-1 font-bold">Isolated Layer URLs for this Scene</span>
            <div className="flex flex-col gap-1 text-xs">
              <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/layer/background</code>
              {activeScreen === 'starting' && (
                <>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/starting/content</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/starting/ribbon</code>
                </>
              )}
              {activeScreen === 'brb' && (
                <>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/brb/content</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/brb/logo</code>
                </>
              )}
              {activeScreen === 'ending' && (
                <>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/ending/content</code>
                </>
              )}
              {activeScreen === 'clean_media' && (
                <>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/layer/background-clean</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/partner-media/videoframe</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/partner-media/banner</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/partner-media/logo</code>
                </>
              )}
              {activeScreen === 'media' && (
                <>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/layer/background-clean</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/media/videoframe</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/media/header</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/media/chat</code>
                </>
              )}
              {activeScreen === 'chat' && (
                <>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/layer/background-clean</code>
                  <code className="text-[#e0ff05] select-all font-mono whitespace-nowrap overflow-x-auto overflow-y-hidden">{baseUrl}#/chat/content</code>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
