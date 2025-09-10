"use client"; // Butuh untuk onClick event
import { Song } from '@/types/songs';

interface Props {
  song: Song;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  formatTime: (seconds: number) => string;
}

export default function ProgressBar({ song, currentTime, duration, onSeek, formatTime }: Props) {
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = Math.floor(pos * duration);
    onSeek(seekTime);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1" >
        {/* Title dan artist pindah ke sini jika mau, atau tetap di SongInfo */}
        {song.title}

      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        {/* Artist */}
        {song.artist}
      </p>
      <div 
        className="mt-6 space-y-2 cursor-pointer"
        onClick={handleSeek}
      >
        <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-pink-600 dark:bg-pink-500"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}