import React, { useState, useEffect } from 'react';
import { 
  Headphones, 
  Play, 
  Square, 
  Volume2, 
  VolumeX, 
  Sparkles,
  ChevronDown,
  X
} from 'lucide-react';
import { 
  focusAudioEngine, 
  FOCUS_SOUNDTRACKS, 
  type FocusSoundtrackId 
} from '../../lib/focusAudioEngine';

export interface FocusAudioPlayerWidgetProps {
  compact?: boolean;
  className?: string;
}

export const FocusAudioPlayerWidget: React.FC<FocusAudioPlayerWidgetProps> = ({
  compact = false,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<FocusSoundtrackId>('alpha_waves');
  const [volume, setVolume] = useState(0.6);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = focusAudioEngine.subscribe((playing, trackId, vol) => {
      setIsPlaying(playing);
      if (trackId) setCurrentTrack(trackId);
      setVolume(vol);
    });
    return () => unsubscribe();
  }, []);

  const activeSoundtrack = FOCUS_SOUNDTRACKS.find(t => t.id === currentTrack) || FOCUS_SOUNDTRACKS[0];

  const handleTogglePlay = () => {
    focusAudioEngine.toggleTrack(currentTrack);
  };

  const handleSelectTrack = (trackId: FocusSoundtrackId) => {
    setCurrentTrack(trackId);
    focusAudioEngine.play(trackId);
    setIsDropdownOpen(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    focusAudioEngine.setVolume(v);
  };

  if (compact) {
    return (
      <div className={`relative inline-flex items-center gap-1.5 ${className}`}>
        <button
          onClick={handleTogglePlay}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer border shadow-sm ${
            isPlaying 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-indigo-500/20 animate-pulse' 
              : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-700/80 hover:border-slate-600'
          }`}
          title={isPlaying ? `En lecture : ${activeSoundtrack.name}` : 'Activer les musiques d\'ambiance'}
        >
          <Headphones className={`w-3.5 h-3.5 ${isPlaying ? 'text-indigo-200' : 'text-slate-400'}`} />
          <span className="hidden sm:inline">{activeSoundtrack.icon} {activeSoundtrack.name}</span>
          <span className="sm:hidden">{activeSoundtrack.icon}</span>
        </button>

        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          title="Changer d'ambiance"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-slate-900 border border-slate-700 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                Ambiances Révision Konan Plus
              </span>
              <button 
                onClick={() => setIsDropdownOpen(false)}
                className="text-slate-400 hover:text-white p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="space-y-1 py-1">
              {FOCUS_SOUNDTRACKS.map(t => (
                <button
                  key={t.id}
                  onClick={() => handleSelectTrack(t.id)}
                  className={`w-full flex items-start gap-2.5 p-2 rounded-xl text-left transition-colors cursor-pointer text-xs ${
                    currentTrack === t.id && isPlaying
                      ? 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/40'
                      : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="text-base shrink-0">{t.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-white leading-tight">{t.name}</p>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">{t.tagline}</p>
                  </div>
                  {currentTrack === t.id && isPlaying && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mt-1" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full Widget view for Dashboard / Cockpit
  return (
    <div className={`p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-xl space-y-3.5 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-xl border shrink-0 ${
            isPlaying 
              ? 'bg-indigo-600/30 border-indigo-400 text-indigo-300 shadow-md shadow-indigo-500/20 animate-pulse' 
              : 'bg-slate-800/80 border-slate-700 text-slate-400'
          }`}>
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                Konan Plus Audio
              </span>
              {isPlaying && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live
                </span>
              )}
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <span>{activeSoundtrack.icon}</span>
              <span>{activeSoundtrack.name}</span>
            </h4>
          </div>
        </div>

        <button
          onClick={handleTogglePlay}
          className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
            isPlaying 
              ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40' 
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-3 h-3 fill-current" />
              <span>Arrêter</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>Lancer</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-slate-300 italic leading-relaxed">
        {activeSoundtrack.frequencyDesc}
      </p>

      {/* Soundscape Pills */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {FOCUS_SOUNDTRACKS.map(t => (
          <button
            key={t.id}
            onClick={() => handleSelectTrack(t.id)}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-medium transition-all cursor-pointer border flex items-center gap-1 ${
              currentTrack === t.id
                ? 'bg-indigo-500/25 border-indigo-400/80 text-white shadow-xs'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
            }`}
          >
            <span>{t.icon}</span>
            <span>{t.name}</span>
          </button>
        ))}
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2 pt-1 border-t border-slate-800/80 text-slate-400">
        <button 
          onClick={() => {
            const nv = volume > 0 ? 0 : 0.6;
            setVolume(nv);
            focusAudioEngine.setVolume(nv);
          }}
          className="text-slate-400 hover:text-white"
        >
          {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
        <input 
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          aria-label="Volume audio"
        />
        <span className="text-[10px] font-mono text-slate-400 w-8 text-right">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  );
};
