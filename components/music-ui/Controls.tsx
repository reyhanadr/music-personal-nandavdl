"use client";
import { Play, Pause, StepBack, StepForward} from 'lucide-react';

interface Props {
    isPlaying: boolean;
    togglePlay: () => void;
    currentTime: number;
    duration: number;
    onSeek: (time: number) => void;
  }
  
  export default function Controls({ isPlaying, togglePlay, currentTime, duration, onSeek }: Props) {
    const skipBackward = () => onSeek(Math.max(0, currentTime - 10));
    const skipForward = () => onSeek(Math.min(duration, currentTime + 10));
  
    return (
      <div className="flex items-center justify-center space-x-6 ">
        <button 
          className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
          onClick={skipBackward}
        >
          <StepBack className="w-6 h-6" />
        </button>
        
        <button 
          className="w-14 h-14 rounded-full bg-pink-600 dark:bg-pink-500 text-white flex items-center justify-center hover:bg-pink-700 dark:hover:bg-pink-600 transition-colors"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        
        <button 
          className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
          onClick={skipForward}
        >
          <StepForward  className="w-6 h-6" />
        </button>
      </div>
    );
  }